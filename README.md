
# Project Title

Developed a log ingestor system that can efficiently handle vast volumes of log data, and offer a simple interface for querying this data using full-text search or specific field filters.

Both the systems (the log ingestor and the query interface) using Node , express 
for database Mongodb is used and frontend using React js 



##  Reference

![image](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/ecafb877-cdb6-47b7-b7e5-3b4a2040c850)

### Project interface
 

Enter the log: 
![a1](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/8b55f534-09de-4fce-ba9c-72ed68bf271c)
After a successful Log entry : An alert pop up
![a2](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/023d0b52-06a9-49c8-90b3-14bfe47741e8)
ALL Logs Data:
![a3](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/de1c60c9-f22f-4beb-9a4f-85ff905bfd0c)

Searching for a log which exist:
searching for level= 10
![image](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/e800a0ba-95c8-4244-8abe-eeb00dca52ad)

Searching for a log which does not exist:
![image](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/7543f2d0-8d33-4c92-96d1-f4c95f92c63c)




## Project structure
Description of Directory Structure


- **Api:** Houses reusable React components for the project.
    - controller
    - modules
    - node_module
    - routes
    - utils
    - .env
    - etl.mjs
    - index.json
    - package.json 
    - package-lock.json
    - yarn.lock
- **cline:** Stores images and styles used in the project.
    ![FLow Chart](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/a897581a-ad63-475b-9173-e45cfc0bcf92)
    ![Flow Chart 2](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/0ed389ba-ce4f-44ae-ba21-ac0f7e751cd2)


        -
- **README.md:** Project's main documentation file.
## Run Locally



Go to the project directory

```bash
  cd my-project
  cd api
```

Install dependencies for  the back-end

```bash
- yarn add express mongoose mysql2 cors nodemon
- yarn start

```
Go to client-side
```bash
  cd client
```
- Install dependencies for Front-end
```bash
    npm react-table
    npm start  
```
- Note - first start back-end then front end and node version greater or equal than v20.9.0
### Extract, Transform, Load ( Additional Feature )
With ETL shifting  data MongoDB to MySQL 

MongoDb cloud Atlas
![image](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/a8b85e1e-dc58-433a-8e53-0cb72a8e1b47)

project directory:
```bash
  cd api
  node --experimental-modules etl.mjs
```
Structured Data in mysql :
![image](https://github.com/dyte-submissions/november-2023-hiring-ShiveshSinghRao/assets/94308757/6bfc425a-7e49-400a-8182-d857c867652a)





#### To get all logs

```http
  http://localhost:3000/api/
```


#### Post request to create log 

```http
  http://localhost:3000/api/create
```
Body for Post request 

```json
{
    "level": "error",
    "message": "Failed to connect to DB",
    "resourceId": "server-1234",
    "timestamp": "2023-09-15T08:00:00Z",
    "traceId": "abc-xyz-123",
    "spanId": "span-456",
    "commit": "5e5342f",
    "metadata": {
        "parentResourceId": "server-0987"
    }
}
