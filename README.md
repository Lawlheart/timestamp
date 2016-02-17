# Timestamp Microservice
##### by Kenneth Black

API endpoint that checks for a valid date input and returns the date in both unix format and as a readable string

##### I learned

 - How to make CORS-enabled API endpoints. 

##### Skills used 

 - JavaScript
 - nodejs
 - express


##### User Stories

 - I can pass a string as a parameter, and it will check to see whether that string contains either a unix timestamp or a natural language date (example: January 1, 2016).
 - If it does, it returns both the Unix timestamp and the natural language form of that date.
 - If it does not contain a date or Unix timestamp, it returns null for those properties.