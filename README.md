# npxample
An example npx package



## Making your own npx package with npxample

(with vscode)
```bash
  git clone https://github.com/xamyl/npxample.git
  cd npxample
```
edit package.json to your liking

example: 
```bash
  {
  "name": "my-cool-npx-project",
  "version": "1.0.0",
  "description": "description",
  "main": "index.js",
  "scripts": {},
  "bin": {
    "example": "./index.js"
  },
  "dependencies": {
    "fs-extra": "^10.1.0",
    "inquirer": "^8.2.6"
  },
  "author": "Your Name",
  "license": "ISC"
}

```
If name specified in the `bin` section is not taken, once published, the command will be

`npx example` (replace example with whatever you put in the bin section)

## See it in action

```bash
  npx npxample
```
    