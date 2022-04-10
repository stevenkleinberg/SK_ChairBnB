# Chair BnB

ChairBnB is a chair based AirBnB clone built by Steven Kleinberg.

If you have nowhere to sit or too many places to sit ChairBnB is the place for you!


# Features
**Chairs**
 - Upload your own chairs
 - Edit your own chairs
 - Delete your own chairs
 - View available chairs from all over the world

**Bookings**
 - Book days to sit down in the many Chairs hosted on chairBnB
 - View your bookings to help plan and coordinate your sitting
 - Cancel your Bookings at no charge.

## Index

 [API Documentation](https://github.com/stevenkleinberg/SK_ChairBnB/wiki/API-Routes) 
 [DataBase Schema](https://dbdiagram.io/d/62260a9561d06e6eadb7b5e7)
 [Frontend Routes](https://github.com/stevenkleinberg/SK_ChairBnB/wiki/Frontend-Routes)
 [ChairBnB live link](https://decembercohort-chairbnb.herokuapp.com/)


## Getting Started

 1. Clone this repo.
	 

    `git clone git@github.com:stevenkleinberg/SK_ChairBnB.git`
    

 2. Install Dependencies from the root directory
	  
	   `  npm install`

 3. Create a POSTGRESQL user with CREATEDB and PASSWORD in PSQL.
	 
	  `CREATE USER <name> WITH CREAYEDB PASSWORD <'password'> ;`

 4. Create a .env file in the backend directory based on the .env.example included
 5. Enter your Username and Password into the .env file along with a name for the database, a secure JWT_SECRET and the PORT number (5000 is recommended).
 6. Add the following to your package,json file in the frontend directory, replacing the 5000 to match the PORT number from your .env
	 
	  `"proxy": "http://localhost:5000"`
    

 7. Create, Migrate, and Seed Database.
	  
	  `npx dotenv sequelize db:create`
	  `npx dotenv sequelize db:migrate`
	 `npx dotenv sequelize db:seed:all` 
	 

 8. inside of the backend and front end Start Services
	 `npm start`
9. Log in With demo user and begin enjoying ChairBnB

# soloProjectReact
 Project Name: ChairBnB
   Clone: Airbnb
   Feature List: https://github.com/stevenkleinberg/SK_ChairBnB/wiki
   DB Schema Diagram: https://dbdiagram.io/d/62260a9561d06e6eadb7b5e7
   Github:  https://github.com/stevenkleinberg/SK_ChairBnB
   Scorecard: https://docs.google.com/spreadsheets/d/1dnsXN5gOsX2DnQj1UBkK7UjM2RDGPbbPO_CrWjtc5t8/edit#gid=1712141062
   Live Link: https://decembercohort-chairbnb.herokuapp.com/
