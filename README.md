# Tech n Things Blog

### Enjoy this fully packed tech blog featuring:
![bryptjs](https://img.shields.io/badge/bcryptjs-2.4.3-brightgreen)![badge](https://img.shields.io/badge/handlebars-5.3.4-green)![badge](https://img.shields.io/badge/connect_session_sequelize-7.1.2-yellowgreen)![badge](https://img.shields.io/badge/dotenv-10.0.0-yellow)![badge](https://img.shields.io/badge/express-4.17.1-orange)![badge](https://img.shields.io/badge/express_handlebars-5.3.4-red)![badge](https://img.shields.io/badge/express_session-1.17.2-lightgrey)![badge](https://img.shields.io/badge/find_config-1.0.0-blue)![badge](https://img.shields.io/badge/mysql2-2.3.0-purple)![badge](https://img.shields.io/badge/mysql2-10.2.2-green)![badge](https://img.shields.io/badge/sequelize-6.6.5-yellowgreen)

LIVE

## Table of Contents
  - [Description](#description)
  - [Licenses](#licenses)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Questions](#questions)
  - [Psuedocoding](#psuedocoding)

## Description

**FILL DESCRIPTION IN HERE**
 

## Licenses  
MIT

## Installation
```
npm i
```

To run the app:
```
 node server.js
```

## Usage
Please explore the app. Let me know what you think and feel free to contribute, make suggestions, submit a pull request. I'm here to collaborate! Hit me up!

## Questions
I look forward to hearing from you! Please do not hesitate contact me with any questions. You can contact me directly either using [my email](mailto:nothingbutgoodthoughts@comcast.net) or on github: [mathcodes](https://github.com/aod1411).

## Psuedocoding
<details open><summary>Setup</summary>

<br>
<details><summary>App Setup</summary>

<br>

- [x] Create a GitHub repo called `coder` and clone it to your computer.

- [x] Make a package.json file by running `npm init` from the command line.

- [x] Install the Express npm package: `npm install express`.

- [x] Create a server.js file.

- [x] Install the Handlebars npm package: `npm install express-handlebars`.

- [x] Install MySQL npm package: `npm install mysql`.

- [x] Require the following npm packages inside of the server.js file:
   * express
</details>
<details><summary>DB Setup</summary>

<br>
- [x] Inside your `coder` directory, create a folder named `db`.

- [ ] In the `db` folder, create a file named `schema.sql`. Write SQL queries this file that do the following:

   - [x] Create the `coders_db`.
   - [x] Switch to or use the `coders_db`.
   - [x] Create a `coders` table with these fields:
     - [x] **id**: an auto incrementing int that serves as the primary key.
     - [x] **coder_name**: a string.
     - [x] **devoured**: a boolean.



- [x] Still in the `db` folder, create a `seeds.sql` file. In this file, write insert queries to populate the `coders` table with at least three entries.

- [x] Run the `schema.sql` and `seeds.sql` files into the mysql server from the command line

- [x] Now you're going to run these SQL files.

- [x] Make sure you're in the `db` folder of your app.

- [x] Start MySQL command line tool and login: `mysql -u root -p`.

   - [x] With the `mysql>` command line tool running, enter the command `source schema.sql`. This will run your schema file and all of the queries in it -- in other words, you'll be creating your database.

   - [x] Now insert the entries you defined in `seeds.sql` by running the file: `source seeds.sql`.

   - [x] Close out of the MySQL command line tool: `exit`.
</details>

<details><summary>Config Setup</summary>

<br>

- [x] Inside your `coder` directory, create a folder named `config`.

- [x] Create a `connection.js` file inside `config` directory.

   - [x] Inside the `connection.js` file, setup the code to connect Node to MySQL.

   - [x] Export the connection.

- [x] Create an `orm.js` file inside `config` directory.

   - [x] Import (require) `connection.js` into `orm.js`

   - [x] In the `orm.js` file, create the methods that will execute the necessary MySQL commands in the controllers. These are the methods you will need to use in order to retrieve and store data in your database.

     - [x] `selectAll()` - used "all" as here
     - [x] `insertOne()` - used "create" as here
     - [x] `updateOne()` - used "add" as here

   - [x] Export the ORM object in `module.exports`.
</details>

<details><summary>Model setup</summary>

<br>

- [x] Inside your `coder` directory, create a folder named `models`.

- [x] In `models`, make a `coder.js` file.

    - [x] Inside `coder.js`, import `orm.js` into `coder.js`

    - [x] Also inside `coder.js`, create the code that will call the ORM functions using coder specific input for the ORM.

    - [x] Export at the end of the `coder.js` file.
</details>

<details><summary>Controller setup</summary>

<br>

- [x] Inside your `coder` directory, create a folder named `controllers`.

- [x] In `controllers`, create the `coders_controller.js` file.

- [x] Inside the `coders_controller.js` file, import the following:

   - [x] Express
   - [x] `coder.js`

- [x] Create the `router` for the app, and export the `router` at the end of your file.
</details>

<details><summary>View setup</summary>

<br>

- [x] Inside your `coder` directory, create a folder named `views`.

   - [x] Create the `index.handlebars` file inside `views` directory.

   - [x] Create the `layouts` directory inside `views` directory.

     - [x] Create the `main.handlebars` file inside `layouts` directory.

     - [x] Setup the `main.handlebars` file so it's able to be used by Handlebars.

     - [x] Setup the `index.handlebars` to have the template that Handlebars can render onto.

     - [x] Create a button in `index.handlebars` that will submit the user input into the database.
</details>
<br>
</details>
<img src ="https://avatars0.githubusercontent.com/u/17928947?v=4" alt="Github profile image" width="80px" height="80px" />

__Jon Christie__ 
