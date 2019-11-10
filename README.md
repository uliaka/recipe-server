# Express Example

This repository demonstrates the usage of Sequelize within an [Express](https://expressjs.com) application.
The implemented logic is a simple task tracking tool.

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Starting App

**Without Migrations**

```
npm install
npm start
```

**With Migrations**

```
npm install
node_modules/.bin/sequelize db:migrate
npm start
```
.
Once thats done, your database configuration is ready!
