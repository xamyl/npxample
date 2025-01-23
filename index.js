#!/usr/bin/env node

const fs = require('fs-extra');
const inquirer = require('inquirer');
const path = require('path');

const createApp = async (appName) => {
  const targetDir = path.join(process.cwd(), appName);

  if (fs.existsSync(targetDir)) {
    console.log(`Directory ${appName} already exists.`);
    return;
  }

  fs.mkdirSync(targetDir);

  const packageJson = {
    name: appName,
    version: '1.0.0',
    description: '',
    main: 'index.js',
    scripts: {
      start: 'node index.js'
    },
    dependencies: {}
  };

  fs.writeFileSync(path.join(targetDir, 'package.json'), JSON.stringify(packageJson, null, 2));

  const indexJs = `console.log('Welcome to ${appName}!');`;
  fs.writeFileSync(path.join(targetDir, 'index.js'), indexJs);

  console.log(`Project ${appName} has been created.`);
};

const run = async () => {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'appName',
      message: 'Enter your app name:',
      default: 'my-app'
    }
  ]);

  const { appName } = answers;

  createApp(appName);
};

run();
