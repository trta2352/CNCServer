# CNCServer - Backend for the CNC app (Chuck Norris application)

Server is part of a coding challenge and represent the backend of an React Native application used for sending jokes. 


Server side of the application. Developed using technologies: 
- Node.js, 
- Express.js.

### Access 

Server is live and running on Heroku. It can be accessed on https://chuck-noriss-challenge.herokuapp.com/api . 
Two possible request can be send to the router: /jokes

1. GET: Gets one random joke: 
2. POST: Send 1 random Chuck Norris joke to the send emails. 
  The body of the request must contain an array of emails in the following format: 
  ```
  [
    {
        id: 1, 
        email: testEmail@gmail.com
    },
    {
        id: 2, 
        email: testEmail2@gmail.com
    },
  ]
  ```
### Authorization

Because this is a simple application, few steps have been made to secure the server. Although the user must provide an authorizatin key in the header of the request. 
In this case the key is:  
```Authorization: apjKjF8QG43MI8xPr66YVeBmLyKLmN ``` If a key is not provided the server return 401 code. 
