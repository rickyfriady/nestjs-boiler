import type { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerTheme, SwaggerThemeName } from 'swagger-themes';

export function setupSwagger(app: INestApplication): void {
  const theme = new SwaggerTheme();
  const config = new DocumentBuilder()
    .setTitle('Nest Js Boliler Documentation')
    .setDescription('API Documentation / Contract')
    .setVersion('1.0')
    .build();

  const apiContract = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('docs', app, apiContract, {
    swaggerOptions: {
      filter: true,
      persistAuthorization: true,
      plugins: [AdvancedFilterPlugin],
    },
    customCss: theme.getBuffer('flattop' as SwaggerThemeName),
    customSiteTitle: 'Nest JS Boiler API Documentation',
  });
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AdvancedFilterPlugin = function (system: any) {
  return {
    fn: {
      opsFilter: function (taggedOps, phrase) {
        phrase = phrase.toLowerCase();
        const filteredActions = taggedOps.map((tagObj) => {
          tagObj._root.entries[1][1] = tagObj._root.entries[1][1].filter(
            (operationObj) => {
              const op = JSON.parse(JSON.stringify(operationObj));
              let summary = '';
              let description = '';
              if (typeof op.operation.summary !== 'undefined') {
                summary = JSON.stringify(op.operation.summary).toLowerCase();
              }
              if (typeof op.operation.description !== 'undefined') {
                description = JSON.stringify(
                  op.operation.description,
                ).toLowerCase();
              }
              if (
                op.path.toLowerCase().indexOf(phrase) === -1 &&
                summary.indexOf(phrase) === -1 &&
                description.indexOf(phrase) === -1
              ) {
                return false;
              } else {
                return true;
              }
            },
          );
          return tagObj;
        });
        return filteredActions.filter((tagObj) => {
          return tagObj._root.entries[1][1].size > 0;
        });
      },
    },
  };
};
