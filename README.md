<h1 align="center">Nodejs Config Sequelize</h1>

Nodejs config api is package to make easier configuration nodejs configuration intergration with sequelize.

## Getting started

Lets install nodco-sequelize with npm

```bash
npm install --save @musasutisna/nodco-sequelize
```

## How to initialize

```js
const nodcoSequelizeConfig = require('@musasutisna/nodco-sequelize');

nodcoSequelizeConfig(
  {
    host, // string, database host
    port, // number, database port
    database, // string, database name
    username, // string, database user username
    password, // string, database user password
    dialect, // string, database sequelize dialect
    dialectModule, // mixed, database dialect module
    dialectOptions // mixed, database dialect options
  }
)
```

| Method | Type | Description |
|:--|:--|:--|
| client | object | List of sequelize client have been connected. |
| connect | async | Open connection to sequelize. |
| close | async | Close all connection have been made. |

<br/>

```js
connect(
  key, // string, the unique key in config we have on initialize
  cb // function, function callback will be call after connected successful
)

close(
  // no arguments
)
```
