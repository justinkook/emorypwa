# Emory Rehabilitation
This is a mobile progressive web app for Emory Rehabilitation Outpatient services that allows users to search for Emory postacute care services by specialty type, location, and languages.

 **Future Implementations:**

* Login feature with personalized landing page
  - Shows user's doctor, insurance, and upcoming appointments.
* Filter by insurance and user's current insurance provider.
* Each location shows hours and affiliated doctor phone and email.
* Appointment reservation system
* Chat system using sockets / Pusher API
* Swap Mongo database to Firestore for real time accepted insurances.

## Getting Started

To get started with this project you will need to clone into the repository on your machine. 

```
git clone https://github.com/justinkook/emorypwa.git
```

Once you have cloned the repository you will need to run `yarn install` to install all of the needed packages to run the app. After you have installed the needed packages you can start a local server by running `yarn start` in your terminal. Now you are ready run our app locally. 

### Prerequisites

You will need the following installed on your machine to be able to develop locally on our app:

* Node.js
* mongodb
* Robo 3T recommended

Our project uses dotenv node package.

You need to create an .env file with GEOCODE_KEY={YOUR-API-KEY} as an environmental variable for the results to render.

## Deployment

We have our app set to run on port 3000 for the front end client and port 5000 for REST API server.
If you prefer to use a different port feel free to change the port after cloning into the repository.

## Contributing

We are currently accepting contributions to this project. Feel free to open any custom issues or bugs.

## Authors

* **Justin Kook** (https://github.com/justinkook)
  
## License

This project is licensed under the MIT License

## Acknowledgments

  * Dr. David Burke
  * Melanie Harris
