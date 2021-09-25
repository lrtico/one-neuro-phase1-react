This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

The app runs in a browser with the purpose of collecting user-inputted information and sending a JSON object with the collected data to a PDF generator.

The app uses Redux Form to create form components for the user to interact with on the frontendand and Redux to manage the state of the components.

## Steps to build a new version

- Change the paths to the generator on WizardForm50Page.js (for dev these paths are set to localhost)
- Open a terminal and enter `npm run build`
- Copy the contents of the build folder to the cloud hosting server's build folder

## Updating to New Create-React-App Releases

Create React App is divided into two packages:

- `create-react-app` is a global command-line utility that you use to create new projects.
- `react-scripts` is a development dependency in the generated projects (including this one).

You almost never need to update `create-react-app` itself: it delegates all the setup to `react-scripts`.

When you run `create-react-app`, it always creates the project with the latest version of `react-scripts` so you’ll get all the new features and improvements in newly created apps automatically.

To update an existing project to a new version of `react-scripts`, [open the changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md), find the version you’re currently on (check `package.json` in this folder if you’re not sure), and apply the migration instructions for the newer versions.

In most cases bumping the `react-scripts` version in `package.json` and running `npm install` in this folder should be enough, but it’s good to consult the [changelog](https://github.com/facebookincubator/create-react-app/blob/master/CHANGELOG.md) for potential breaking changes.

We commit to keeping the breaking changes minimal so you can upgrade `react-scripts` painlessly.
