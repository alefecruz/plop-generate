module.exports = (plop) => {
    plop.setGenerator('entite', {
        description: 'Create a entite',
        prompts: [
            {
                type: 'input',
                name: 'entiteName',
                message: 'What is your Entite name ?',
            },
            {
                type: 'confirm',
                name: 'hasRepository',
                message: 'Do you want to create a repository',
            },
        ],
        actions: [
            {
                type: 'append',
                abortOnFail: false,
                path: '../../src/models/index.ts',
                templateFile: 'templates/index.ts.hbs',
            },
            {
                type: 'add',
                skipIfExists: true,
                path: '../../src/models/index.ts',
                templateFile: 'templates/index.ts.hbs',
            },
            {
                type: 'add',
                skipIfExists: true,
                path: '../../src/models/{{kebabCase entiteName}}.ts',
                templateFile: 'templates/entite.ts.hbs',
            },
        ],
    });
};
