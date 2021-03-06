# nextjs-starter - A Next.js boilerplate with minimal dependencies for quick application prototyping

Don't waste your time configuring and managing your project. Get started straight away!

## Getting started

Follow the steps to get started:

- Clone the repository:

```bash
  git clone https://github.com/WebDeg-Brian/nextjs-starter.git <name of your project>
```

- Move inside the project folder

```bash
  cd <name of your project>
```

- Install the dependencies:

```bash
  npm install
```

- Remove `.git` folder
- Tweak `package.json` to your likings
- Run the dev server and start developing straight away!
- (Optional) Initialise a new `.git` folder (Make sure you have your repo created):

```bash
  git init
  git add .
  git commit -m "First commit"
  git remote add origin <your remote repo URL>
  git push -u origin master
```

## Available commands:

- `npm run dev`: Start the dev server
- `npm run build`: Build the codebase for production
- `npm start`: Start the application in production mode
- `npm run test`: Run all the tests
- `npm run test:watch`: Run all the tests in watch mode
- `npm run snapshot:update`: Update snapshots

## Dependencies

| Dependency                               |                                              Function                                               |                                                                                          Repo |
| ---------------------------------------- | :-------------------------------------------------------------------------------------------------: | --------------------------------------------------------------------------------------------: |
| next                                     |         Core dependency of the boilerplate. Helps with routing, server-side rendering, etc.         |                                               [zeit/next.js](https://github.com/zeit/next.js) |
| react-dom and react                      |    Core dependencies of the boilerplate. Without these, you wouldn't be writing in React code :)    |                                           [facebook/react](https://github.com/facebook/react) |
| @material-ui/core and @material-ui/icons |                          A library that implements Google Material Desgin                           |                                 [mui.org/material-ui](https://github.com/mui-org/material-ui) |
| axios                                    |                            A library that performs HTTP requests and XHR                            |                                                 [axios/axios](https://github.com/axios/axios) |
| express                                  |                                      Web framework for Node.js                                      |                                     [expressjs/express](https://github.com/expressjs/express) |
| jss and react-jss                        |               A library that allows us to write CSS-in-JS. Needed for material-ui SSR               |                                                 [cssinjs/jss](https://github.com/cssinjs/jss) |
| nprogress                                |                         A library that implements Youtube slim loading bar                          |                                    [rstacruz/nprogrss](https://github.com/rstacruz/nprogress) |
| prop-types                               |                                      React props type checking                                      |                                 [facebook/prop-types](https://github.com/facebook/prop-types) |
| react-device-detect                      |          Used to gather useful information from the client side and set it as global state          |               [duskload/react-device-detect](https://github.com/duskload/react-device-detect) |
| react-redux and redux                    |                                 A global state container for React                                  |                                             [reduxjs/redux](https://github.com/reduxjs/redux) |
| react-spring                             |                   A library that allows us to create realistic spring animations                    |                     [react-spring/react-spring](https://github.com/react-spring/react-spring) |
| styled-components                        | A library that allows us to write CSS-in-JS. This is more comfortable to use than JSS in my opinion | [styled-components/styled-components](https://github.com/styled-components/styled-components) |
| styled-jsx                               |                            A library that allows us to write CSS-in-JS.                             |                                         [zeit/styled-jsx](https://github.com/zeit/styled-jsx) |
| uuid                                     |                 A library for generating unique ids. Helpful for React `key` props                  |                                   [kelektiv/node-uuid](https://github.com/kelektiv/node-uuid) |
| validator                                |                                  A library for validating strings                                   |                                       [chriso/validator](https://github.com/chriso/validator) |
| jest                                     |                                      React testing environment                                      |                                             [facebook/jest](https://github.com/facebook/jest) |
| enzyme                                   |                                       React testing utilities                                       |                                             [airbnb/enzyme](https://github.com/airbnb/enzyme) |
| eslint                                   |                                Used for linting and reporting errors                                |                                             [eslint/eslint](https://github.com/eslint/eslint) |
| prettier                                 |               Used to "prettify" your code and it provides a consistent coding style                |                                     [prettier/prettier](https://github.com/prettier/prettier) |
| redux-mock-store                         |                A library for mocking redux store, allowing us to test redux actions                 |             [dmitry-zaets/redux-mock-store](https://github.com/dmitry-zaets/redux-mock-store) |
