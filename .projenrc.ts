import { github, javascript, typescript, vscode } from "projen";
const project = new typescript.TypeScriptAppProject({
  defaultReleaseBranch: "main",
  name: "tsapp",
  packageManager: javascript.NodePackageManager.NPM,
  prettier: true,
  projenrcTs: true,
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
  githubOptions: {
    projenCredentials: github.GithubCredentials.fromApp({}),
  },
});

const code = new vscode.VsCode(project);
code.settings.addSettings({
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.formatOnSave": true,
});

new vscode.DevContainer(project, {
  dockerImage: {
    image: "mcr.microsoft.com/devcontainers/typescript-node:16",
  },
  vscodeExtensions: [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "mutantdino.resourcemonitor",
  ],
  ports: ["6000:6000", "3000:3000"],
});

project.synth();
