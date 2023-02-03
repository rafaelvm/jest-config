module.exports = plop => {
  plop.setGenerator('Global component', {
    description: 'Generate a global component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?',
      },
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}.component.tsx',
        templateFile: './templates/components/components.tsx.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}.types.ts',
        templateFile: './templates/components/types.ts.hbs',
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}.spec.tsx',
        templateFile: './templates/components/spec.tsx.hbs',
      },
    ],
  })
}
