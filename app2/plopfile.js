const requireField = (fieldName) => (value) => {
  if (String(value).length === 0) {
    return `${fieldName} is required`;
  }
  return true;
};

module.exports = (plop) => {
  plop.setGenerator('page', {
    description: 'Create a page',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your page name?',
        validate: requireField('name')
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/index.tsx',
        templateFile: 'plop-templates/Page.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/components/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/Component.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/tests/{{pascalCase name}}Page.test.js',
        templateFile: 'plop-templates/Page.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/tests/{{pascalCase name}}.test.js',
        templateFile: 'plop-templates/Component.test.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/api/{{kebabCase name}}.ts',
        templateFile: 'plop-templates/api.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/services/{{camelCase name}}.service.ts',
        templateFile: 'plop-templates/service.js.hbs',
      },
      {
        type: 'add',
        path: 'src/pages/{{kebabCase name}}/hooks/use{{pascalCase name}}.ts',
        templateFile: 'plop-templates/hook.js.hbs',
      },
      {
        type: 'add',
        path: 'public/locales/en/{{kebabCase name}}.json',
        templateFile: 'plop-templates/i18n.js.hbs',
      },
      {
        type: 'add',
        path: 'public/locales/id/{{kebabCase name}}.json',
        templateFile: 'plop-templates/i18n.js.hbs',
      },
      {
        type: 'append',
        path: 'src/routes/index.tsx',
        pattern: '/* PLOP_INJECT_IMPORT */',
        template: 'import {{pascalCase name}}Page from \'../pages/{{kebabCase name}}\';',
      },
      {
        type: 'append',
        path: 'src/routes/index.tsx',
        pattern: '{/* PLOP_INJECT_ROUTE */}',
        template: '\t\t\t<Route exact path="/{{kebabCase name}}" component={ {{pascalCase name}}Page } />',
      }
    ],
  });
};
