# Serverless capstone project for Udacity's cloud-developer

The project is about a TODO application using __serverless__ components from AWS. It is made for helping a respective user to manage her/his todos.

## Functionality of the application

This application allows to create/remove/update/fetch TODO items. Each TODO item can optionally have an attachment image. Each user only has access to TODO items that he/she has created.

> **_NOTE:_** The full specification on method level may be accessed by typing the following command:

```
npm test
```

## TODO items

The application stores TODO items, and each TODO item contains the following fields:

* `todoId` - a unique id for an item
* `createdAt`- date and time when an item was created
* `name` - name of a TODO item (e.g. "Get some milk!")
* `dueDate` - date and time by which an item should be completed
* `done` - true if an item was completed, false otherwise
* `attachmentUrl` (optional) - a URL pointing to an image attached to a TODO item

## How to run the application

### Backend

To deploy an application run the following commands:

```
cd backend
npm install
sls deploy -v
```

### Frontend

To deploy the frontend run the following commands:

```
cd client
npm install
npm run start
```

This should start a development server with the React application that will interact with the serverless TODO application.

# Postman collection

An alternative way to test your API, you can use the Postman collection that contains sample requests. You can find a Postman collection in this project. To import this collection, do the following.
