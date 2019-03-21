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

## API Documentation

**Get Locations by name**

GET `/api/location/:alias`

<details>
<summary><b>Response</b></summary>
<br>

```
{
    "_id" : ObjectId("5c115137a14517d4129ac364"),
    "id" : "9",
    "alias" : "delmar-gardens-of-gwinnett",
    "name" : "Delmar Gardens of Gwinnett",
    "image_url" : "f",
    "is_closed" : false,
    "url" : "https://www.yelp.com/biz/little-cuba-atlanta?adjust_creative=CLgHiB5viuC18AJ1iDIfZA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CLgHiB5viuC18AJ1iDIfZA",
    "review_count" : 99,
    "categories" : [ 
        {
            "alias" : "nursing",
            "title" : "Nursing"
        }, 
        {
            "alias" : "facilities",
            "title" : "Facilities"
        }
    ],
    "rating" : 3.5,
    "coordinates" : {
        "latitude" : 33.93757,
        "longitude" : -84.10032
    },
    "transactions" : "",
    "price" : "$",
    "location" : {
        "address1" : "3100 Club Drive",
        "address2" : "",
        "address3" : "",
        "city" : "Lawrenceville",
        "zip_code" : "30044",
        "country" : "US",
        "state" : "GA",
        "display_address" : [ 
            "3100 Club Drive", 
            "Lawrenceville, GA 30044"
        ]
    },
    "phone" : "+17709233100",
    "__v" : 0
}
```
</details>

**Search Locations by category or location**

POST `/api/search/:searchTerm/:locationTerm`

<details>
<summary><b>Response</b></summary>
<br>

```
{
    "_id" : ObjectId("5c115137a14517d4129ac364"),
    "id" : "9",
    "alias" : "delmar-gardens-of-gwinnett",
    "name" : "Delmar Gardens of Gwinnett",
    "image_url" : "f",
    "is_closed" : false,
    "url" : "https://www.yelp.com/biz/little-cuba-atlanta?adjust_creative=CLgHiB5viuC18AJ1iDIfZA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=CLgHiB5viuC18AJ1iDIfZA",
    "review_count" : 99,
    "categories" : [ 
        {
            "alias" : "nursing",
            "title" : "Nursing"
        }, 
        {
            "alias" : "facilities",
            "title" : "Facilities"
        }
    ],
    "rating" : 3.5,
    "coordinates" : {
        "latitude" : 33.93757,
        "longitude" : -84.10032
    },
    "transactions" : "",
    "price" : "$",
    "location" : {
        "address1" : "3100 Club Drive",
        "address2" : "",
        "address3" : "",
        "city" : "Lawrenceville",
        "zip_code" : "30044",
        "country" : "US",
        "state" : "GA",
        "display_address" : [ 
            "3100 Club Drive", 
            "Lawrenceville, GA 30044"
        ]
    },
    "phone" : "+17709233100",
    "__v" : 0
}
```
</details>

## Contributing

We are currently accepting contributions to this project. Feel free to open any custom issues or bugs.

## Authors

* **Justin Kook** (https://github.com/justinkook)
  
## License

This project is licensed under the MIT License

## Acknowledgments

  * Dr. David Burke
  * Melanie Harris
