### Desciption

This API is primarily used to look through the logs of a popular MMORPG called Elder Scrolls Online.
While very much a work in progress, the idea is to be able to lookup direct info, from the log files.
Due to the vast amount of data loading and parsing could take some time, so please be patient.

At this moment we can handle only 1 log file at a time. As such, all the data is considered as related to that log.

At this moment, direct access is still allowed, meaning it is possible to add/remove/edit data directly using queries.
In the future, it is planned that data etry will be allowed only via actual ESO log uploads.

TO DO: - connect visualisation of data retrieval to the main page. - add a visual query to the main page (even listener from form that has a fetch??) - allow uploads from files; - create a relationship between a posted log and players being added removed/ - add a SKILLS table - link skills to players

### Installing Dependencies and Startup

1. Make sure you have a database called "eso logs" available
   //Add exlanation about the config setup

To install dependencies:

```bash
    yarn
```

To run migrations and set up the database run:

```bash
    yarn migrate
```

If there were some problems and you need to reset the DB (roll back migrations), use

```bash
    yarn rollback
```

To Seed the DB with some initial data , make sure that there is a log file inside the `src_file` folder.
Please note the size of the file is limited to no more than 10 MB at this point.
To seed the db, run:

```bash
    yarn seed
```

### Basic USE

- To start the app run:

```bash
    yarn start
```

- Navigate to `localhost:3000` in your browser
