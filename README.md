# sack-app
1. clone the repository to local machine
2. open from vscode
3. start docker desktop app 
4. open new terminal
5. run the command: docker compose up -d

------
make sure app should be up and running in docker
--------
**************************************************************
For testing the endpoints-open Postman

import below curl commands so you can test (If you dont know how to import curl command to Postman, google and see how to do it.)
===========================================
Principal/User registration-signup
----------------------------------
curl --location 'http://localhost:3000/api/auth/register' \
--header 'Content-Type: application/json' \
--data-raw '{
  "firstname": "Alex",
  "lastname": "Denver",
  "email": "alex.de@example.com",
  "password": "securepassword123"
}'
---
Principal/User Login
--------------------
curl --location 'http://localhost:3000/api/auth/login' \
--header 'Content-Type: application/json' \
--data-raw '{
  "email": "alex.de@example.com",
  "password": "securepassword123"
}'

Student creation
-----------------
curl --location 'http://localhost:3000/api/students/create-student' \
--header 'Content-Type: application/json' \
--data '{
  "firstname": "Rodney",
  "lastname": "Peter",
  "date_of_birth": "2005-06-15",
  "admission_number": "A123456"
}'

-------------------------------
Note:
- After Login, backend should send a jwt token to front end and for all other subsequence requests(Ex: Student creation), front end should send that jwt token and backend should protect its endpoints with Authguard and validate jwt token. That part is not hyet implemented in this code. Will do in future



