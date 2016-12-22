# API specs
Simple REST API to handle dojo app functionalities.  
Made in Go, it currently persists data into files instead of real DBs.

## Routes
| Method | Route | Description
|-------:|:-----:|:-----------
| POST | `/api/v1/clock/hit` | Register in/out work times .
| POST | `/api/v1/user/new`  | Register new user in DB.
