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
    host, // database host
    port, // database port
    database, // database name
    username, // database user username
    password, // database user password
    dialect // database sequelize dialect
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
  key, // the unique key in config we have on initialize
  cb // function callback will be call after connected successful
)

close(
  // no arguments
)
```
