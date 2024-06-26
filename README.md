# ice Queb (Office Hour Queuing App)

Developers: [Haijie Qin](https://github.com/ygbull), [George Zhang](https://github.com/GeorgeZhang744), [Yongye Tan](https://github.com/algebra2boy), [Jianxin Lin](https://github.com/Kolyn090)

## LINK TO FEATURES VIDEO 
Please access via umass email address

https://umass-my.sharepoint.com/:v:/g/personal/jianxinlin_umass_edu/EVM9eorCwU9JoPvWG8n014MBT5NeUJT7ckBUpOGaxeryew

## CONTRIBUTION FILE

You can find CONTRIBUTION.md in this repo.

## General Introduction

Our project, named *ice Queb*, is a cross-platform mobile office hour queuing app (Web, iOS, and, Android). It provides students with real-time updates on the status of office hours (allow students to see how many people are queuing for an office hour section). Additionally, it enables students to remotely join queues for specific office hour sections.

Within the app, students can add office hour sections for the courses in which they are enrolled. The home page features a calendar displaying these enrolled office hour sections. By selecting a specific section, students can view the current queue status of the section and join the queue with a simple click on a button. These office hour sections are uploaded by instructors via our teacher-end website, *ice-faculty.*

### How does it work

ice Queb has two apps: student mobile app and faculty web app. Users will be interacting only one app corresponding to their roles. A basic workload of using ice Queb can be described as following:

1. Faculty registers an account on Faculty web app.
2. Faculty uploads and edits office hour slot(s).
3. Student registers an account on Student mobile app.
4. Student searches the office hour that Faculty uploaded.
5. Student registers the office hour.
6. Students join the office hour queuing through the calendar view.
7. Student waits until his turn.
8. After student finishes the office hour section, he leaves the queue.

# Repositories

This project contains 4 folders from three GitHub repositories.

Original repositories:
- [Ice-Quef](https://github.com/algebra2boy/Ice-Quef)
- [Ice-Faculty](https://github.com/algebra2boy/Ice-Faculty)
- [Ice-Queb](https://github.com/algebra2boy/Ice-Queb)

Submission repositority:
- [ice-Queb](https://github.com/Kolyn090/ice-Queb)
	- This is the repo that has the submission readme
	- [How to check test results on Github Actions](#how-to-check-test-results-on-github-actions)

## [Ice-Quef](Ice-Quef)

### Introduction

This is the front-end interface of the project designed specifically for students. The interface provides easy access for students to manage their office hour attendance effectively.

*Things to be aware*: Our backbone framework React Native Expo has just updated its SDK to version 51 four days ago as of this moment. The version we were using was 50 that has been discarded by Expo go. We had to upgrade our SDK to match the client app’s version. We do not know what effects will it bring but please do understand that we cannot control force majeure.

### Features included

- Search for office hour sections and add the office hour sections of the courses that the students enrolled
- Drop an office hour section if it was added mistakenly or is no longer needed (e.g., end of the semester)
- Check the real-time updating queuing status of an office hour section
- Join a queue of an office hour section that the students are interested in attending
- Leave a queue from an office hour section after the problem is solved
- Customization: Persistent theme change (only mobile)
- Change password

## [Ice-Faculty](Ice-Faculty)

### Introduction

This is the front-end interface of the project designed specifically for teachers. It is a website that provides easy access for teachers to manage the office hour sections that they uploaded to the database.

### Features included

- Display all of the office hour sections uploaded by a faculty (a faculty won’t be able to see/edit any office hour sections that were uploaded by another faculty)
- Upload office hour sections so that the students are able to add these office hour sections from *ice-quef*
- Modify the details of existing office hours associated with a faculty member if are updates or if any information was entered incorrectly
- Delete an office hour section if it is no longer needed (e.g., end of the semester)

## [Ice-Queb](Ice-Queb)

### Introduction

This is the back-end server of the project that handles request from both the student-end interface and teacher-end interface.

[API Documentation](#api-documentation)

[Check Test Cases Result](#how-to-check-test-results-on-github-actions)

# Installation Instructions

## Ice-Quef folder (Student mobile app front end)

Test account (use this to log in if you don't want to sign up a new account)
```
Email: officehour@umass.edu
Password: Password1
```

### Option 1: Using React Native Expo

For mobile user: Check out the “React Native Expo” tutorial in the Configuration section.

For web user: After you got the QR code provided by Expo, press the ‘w’ key on your keyboard. You will be asked to download a package. After downloading the package, your web browser will be opened and you will see the app rendered on the web page. 

### Option 2: Using Web app

Go to this website: [icequef.vercel.app](https://icequef.vercel.app/)

You can use this link on mobile devices as well.

### Option 3: Using Command-line (Web version)

This is the same as option 1.

For Mac user:

```bash
chmod +x ./run.sh
npm i
./run.sh https://api.icequeb.site
```

For Windows user:

```bash
npm i
./run.ps1 https://api.icequeb.site
```

After the QR code is generated, press 'w' key on your terminal and the page will be rendered on your brower.

## Ice-Faculty folder (Faculty web app front end)

Test account (use this to log in if you don't want to sign up a new account)
```
Email: teacher@umass.edu
Password: Password1
```

### Option 1: Using Web

Go to this website: [ice-faculty.vercel.app](http://ice-faculty.vercel.app) 

You can use this link on mobile devices as well.

### Option 2: Using Command-line

```bash
npm i
npm run build
npm run dev
```

Copy-paste the remote link to your browser. We recommend Google Chrome for the best outcome.

## Ice-Quef-test folder (Tests for Ice-Quef)

### Option 1: Using Command-line


```bash
npm i --force
npm i react-test-renderer
npm run test
```

Due to unknown reason, we had to explicitly install react-test-renderer.
Notice that there might be a facebook watchman wanting to access your documents, you need to approve it. Besides that, it might also want to access your Photo/Contacts/etc, please decline the rest of them. This is a known issue in facebook watchman, see this issue for more detail: https://github.com/facebook/watchman/issues/658.

## Ice-Queb folder 

### Option 1: [Check Test Cases Result](#how-to-check-test-results-on-github-actions)

Notice that the tests in Ice-Queb only function expectly using this approach. This is because this GitHub repository contains all required env variables. If you downloaded a zip folder, these variables will not be included and as in result over half of the test cases will fail.

### Option 2: Using Web

Go to this base URL: [https://api.icequeb.site](https://api.icequeb.site) 

Check out the [API documentation](#api-documentation) to learn how to send a request to this API server deployed on EC2.


# Configurations

## React Native Expo

*For Ice-Quef folder only.*
We are using React Native Expo framework to develop & deploy our app! You should install mobile app “Expo go” directly from Apple Store or Google Play Store before doing next steps. Check out https://expo.dev/tools for more detail

### Step 1

Open folder [Ice-Quef](Ice-Quef) in an IDE or terminal.

Run the following command:

```bash
npm install --force
```

We use `—force`flag because there are dependency conflicts in the testing branch. For other branches, there is no need to use `—force` flag.

### Step 2

For Unix Base Users (Linux and Mac), run the app by using the following command:

```bash
./run.sh https://api.icequeb.site
```

For Windows Users, run the app by using the following command:

```powershell
./run.ps1 https://api.icequeb.site
```

Expo will generate a QR code. It is highly recommended to use the QR code approach because it is easier and has no overhead. Next, if you are using an iOS device, use your camera to scan the QR code. You will be redirected to "Expo go" and your project will be opened on your phone. If you are using an Android device, open “Expo go” and choose the scan option to scan the QR code.

## Docker
### Build and push the images

### Use script

The backend server is deployed based on the Docker image created locally. By simply run

```bash
cd /Ice-Queb
./deploy.sh <Your Docker Username> # you may need to enter your docker account password
```

The docker image will push to `<Your Docker Username>ice-queb:latest` online

### Manually

```bash
cd /Ice-Queb
docker build -t ice-queb:latest .
docker run -d -p 443:<Port in the .ENV file> ice-queb:latest
docker tag ice-queb:latest <Your Docker Username>/ice-queb:latest
docker login
docker push <Your Docker Username>/ice-queb:latest
```

The docker image will push to `<Your Docker Username>ice-queb:latest` online

### Run Docker Image on Remote Server

1. First login to the server using OpenSSH client
2. In the server, run

```bash
sudo docker pull <Your Docker Username>/ice-queb:latest
```

Check if image is pulled successfully by run

```bash
sudo docker images
```

1. If you can see the image, you can start run the Docker image by

```bash
sudo docker run -d -p 443:<Port in the .ENV file> ice-queb:latest
```

1. Give it a few seconds and check if there’s any error in the Docker container

```bash
sudo docker ps # find the Ice-Queb  container ID
sudo docker logs <Container ID>
```

If it shows the port number and no error in the log, the backend server is up on default https port `443`

# Datasets

To our knowledge, no datasets were required nor utilized in our project.









# API Documentation

# Authentication (REST)

## POST /api/auth/login ✅ ✔️

### Login a user and verify the user’s identify

**Request**

```tsx
POST /api/auth/login
```

**Request Body**

- `email` (required, string, `"example@gmail.com"`) - The unique identifier of the user
    - Must be a valid email that follows the correct postfix for example `@gmail.com`
- `password` (required, string, `12345678`) - The unique password of the user
    - Must be at least 8 characters
- `isTeacher` (required, boolean, `true/false`) - Identify is the user is signing in as student or teacher

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/auth/login", {
	method: "POST",
	headers: {
    		"Content-Type": "application/json",
    	},
    	body: JSON.stringify({
		"email": "yongye@umass.edu",
		"password": "123456789",
		"isTeacher": false
	})
});
```

**Response**

- HTTP status:
    - `200` if login is successful (ok)
    - `400` if email or password does not exist or email is not valid (bad request)
    - `400` if user is not found in the database (bad request)
    - `401` if user’s password is not incorrect (unauthorized)
    - `429` if user sends 20 request within 5 minutes (too many request)

**Successful Response Body**

```json
{
    "email": "yongye@umass.edu",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
    "status": "success",
    "isTeacher": false
}
```

- `email` (string) - The unique identifier of the user
- `token` (string) - a json web token used to maintain user’s state between multiple requests
- `status` (string) - indicated the request is successful if `success` is shown
- `isTeacher` (boolean) - indicated whether the user is teacher or not

## POST /api/auth/signup ✅ ✔️

### Signs up a user and stores it in the database

**Request**

```tsx
POST /api/auth/signup
```

**Request Body**

- `email` (required, string, `"example@gmail.com"`) - The unique identifier of the user
    - Must be a valid email that follows the correct postfix for example `@gmail.com`
- `password` (required, string, `12345678`) - The unique password of the user
    - Must be at least 8 characters
- `isTeacher` (required, boolean, `true/false`) - Identify is the user is signing in as student or teacher

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/auth/signup", {
    	method: "POST",
    	headers: {
        	"Content-Type": "application/json",
    	},
    	body: JSON.stringify({
		"email": "yongye@umass.edu",
		"password": "123456789",
		"isTeacher": false
	})
});
```

**Response**

- HTTP status:
    - `201` if sign up is successful (created)
    - `400` if email or password does not exist or email is not valid (bad request)
    - `403` if user account exists in the database (forbidden)
    - `429` if user sends 20 request within 5 minutes (too many request)

**Successful Response Body**

```json
{
	"email": "yongye@umass.edu",
    	"token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
	"status": "success",
	"isTeacher": false
}
```

**Response Body**

- `email` (string) - The unique identifier of the user
- `token` (string) - a json web token string used to maintain user’s state between multiple requests
- `status` (string) - indicated the request is successful if `success` is shown
- `isTeacher` (boolean) - indicated whether the user is teacher or not

## POST /api/auth/reset

### Reset a user’s password and update it in the database

**Request**

```tsx
POST /api/auth/reset
```

**Request Body**

- `email` (required, string, `"example@gmail.com"`) - The unique identifier of the user
    - Must be a valid email that follows the correct postfix for example `@gmail.com`
- `oldPassword` (required, string, `oldPassword123`) - The unique original password of the user
    - Must be at least 8 characters
- `newPassword` (required, string, `newPassword123`) - The unique new password of the user
    - Must be at least 8 characters

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/auth/reset", {
	method: "POST",
	headers: {
        	"Content-Type": "application/json",
    	},
    	body: JSON.stringify({
        	"email": "yongye@umass.edu",
        	"oldPassword": "123456789",
        	"newPassword": "987654321"
	})
});
```

# Office Hour (REST)

## GET /api/officeHour/list ✅ ✔️

### Get student’s office hour list that student previously added

**Request**

```tsx
GET /api/officeHour/list?email=<studentEmail>&isTeacher=true
```

**Request Query String**

- email (required, string, `yongye@umass.edu`) - the student email
- isTeacher (optional, boolean, `true`) - only required when is sent from a teacher account

**Example Request in Javascript using fetch**

```jsx
const response = await fetch("https://api.icequeb.site/api/officeHour/list?email=yongye@umass.edu");
const data = await response.json();
```

**Response**

- HTTP status:
    - `200` if getting OH is successful (ok)
    - `400` if email is not valid
    - `404` if student office hour document is not found with that email
    - `404` if student’s office hour array ids is not found

**Successful Response Body**

```json
{
	"email":"yongye@umass.edu",
	"officeHours": [
	{
            "id":"4eb54185-6ef2-47fc-a34a-6b85136c64a0",
            "facultyName":"John Doe",
            "courseDepartment":"Computer Science",
            "courseNumber":"220",
            "startDate":"2024-03-19",
            "endDate":"2024-03-19",
            "day":0,
            "startTime":"10:10",
            "endTime":"10:30"
	},
        {
            "id":"5d29e833-d90f-42ee-80fb-0ef79f494729",
            "facultyName":"Jake",
            "courseDepartment":"Computer Science",
            "courseNumber":"187",
            "startDate":"2024-03-19",
            "endDate":"2024-03-19",
            "day":0,
            "startTime":"10:20",
            "endTime":"10:30"
        }
	],
	"status":"success"
}
```

**Response Body**

- `email` (string) - the email of the student from the request query string
- `officeHours` (an array object) - contains information about office hours such as facultyName, courseDepartment, and so on
- `status` (string) - indicated the request is successful if `success` is shown

## GET /api/officeHour/search ✅ ✔️

### search office hour based on searching criteria

**Request**

```tsx
GET /api/officeHour/search?facultyName=John&courseName=CS
```

**Request Query String**

- `facultyName` (required, string, `John`) - the name of faculty
    - could be first name, last name, or full name
- `courseName` (required, string, `CS`)
    - courseName consists of two part, course department + course number
    - But you can either put department or number, or both
- `searchLimit` (optional, number, `10`)
    - The number of randomized office hour you want from the database
    - default is 10
    - ***searchLimit only works when facultyName is “” and courseName is “” (please check Example 2)***
    - Example 1 would not be affected by searchLimit

**Example Request in Javascript using fetch**

```javascript
// Example1: 
// facultyName is John
// courseName is CS
const response = await fetch("https://api.icequeb.site/api/officeHour/search?facultyName=John&courseName=CS");
const data = await response.json();

// Example2: 
// fetch all office hour with searchLimit 8
const response = await fetch("https://api.icequeb.site/api/officeHour/search?facultyName=""&courseName=""&searchLimit=8");
const data = await response.json();
```

**Response**

- HTTP status:
    - `200` - indicated search is completed (ok)

**Successful Response Body**

```json
{
    "searchResult": [
        {
            "id": "3",
            "facultyName": "John Doe",
            "day": 1,
            "startDate": "2024-02-03",
            "endDate": "2024-05-08",
            "startTime": "02:30",
            "endTime": "03:30",
            "courseDepartment": "CS",
            "courseNumber": "100"
        }
    ],
    "status": "success"
}
```

- `searchResult` (an array of objects) - an array of office hour information
- `status` (string) - indicated the request is successful if `success` is shown

## POST /api/officeHour/add/:officeHourID ✅ ✔️

### Add a office hour to his/her calendar on a student’s behalf

**Request**

```tsx
POST /api/officeHour/add/:officeHourID
```

**Request Parameter**

- officeHourID (required, string, `4eb54185-6ef2-47fc-a34a-6b85136c64a0`) - the unique id that identifies the OH

<aside>
💡 JSON web token must be included in this HTTP request to identify user’s identity. The token must be retrieved from the /api/auth/login or /api/auth/signup endpoint.

</aside>

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/officeHour/add/4eb54185-6ef2-47fc-a34a-6b85136c64a0", {
	method: "POST",
	Authorization: 'Bearer ' + token 
});
```

**Response**

- HTTP status:
    - `201` if adding OH is successful (created)
    - `400` if the id is not 36 characters long (bad request)
    - `400` if office hour id does not exist in the office hour database
    - `400` if office hour id is duplicated

**Successful Response Body**

```jsx
{
   "message": `The officeHourID ${officeHourId} has been added to ${email}'s student office hour document successfully.`,
   "status": 'success',
}
```

- `message` (string) - a message about the action of adding an office hour
- `status` (string) - indicated the request is successful if `success` is shown

## DELETE /api/officeHour/remove/:officeHourID ✅ ✔️

### Delete a office hour from his/her calendar on a student’s behalf

**Request**

```tsx
DELETE /api/officeHour/remove/:officeHourID
```

**Request Body**

- officeHourID (required, string, `4eb54185-6ef2-47fc-a34a-6b85136c64a0`) - the unique id that identifies the OH

<aside>
💡 JSON web token must be included in this HTTP request to identify user’s identity. The token must be retrieved from the /api/auth/login or /api/auth/signup endpoint.

</aside>

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/officeHour/remove/4eb54185-6ef2-47fc-a34a-6b85136c64a0", {
	method: "DELETE",
	Authorization: 'Bearer ' + token 
});
```

**Response**

- HTTP status:
    - `200` if deletion is successfully (ok)
    - `400` if the id is not 36 characters long (bad request)
    - `400` if office hour id does not exist in the office hour database

**Successful Response Body**

```json
{
  "status": "success"
}
```

**Response Body**

- `status` (string) - indicated the request is successful if `success` is shown

## POST /api/officeHour/upload ✅✔️

### Upload a office hour on a professor or TA’s behalf

**Request**

```tsx
POST /api/officeHour/upload
```

**Request Body**

- `facultyEmail` (required, string, `"johndoe@umass.edu"`) - The email of faculty
- `facultyName` (required, string, `"John Doe"`) - The full name of faculty
- `startDate` (required, string, `"2022-01-01"`) - The start date of office hour in the format of
    - The format must be `yyyy-mm-dd`
- `endDate` (required, string, `"2022-05-05"`) - The start date of office hour
    - The format must be `yyyy-mm-dd`
- `day` (required, integer, 1) - Sunday is 0, Monday is 1, and so on, Saturday is 6
    - day must be between 0 - 6
- `startTime` (required, string, `"11:30"`) - The start time of office hour
    - The format must be `hour:minute`
- `endTime` (required, string, `"12:30"`) - The start time of office hour (hour:minute)
- `courseDepartment` (required, string, `"Computer Science"`) - The department of class
    - Include the full name of the course department instead of the abbreviated name
    - Here is a list of options: [Department option](https://www.notion.so/Department-option-fe17847911124d46944c23e79c78ae6d?pvs=21)
- `courseNumber` (required, string, `"198C"` or `"220"`)

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/officeHour/upload", {
	method: "POST",
	headers: {
		"Content-Type": "application/json",
  	},
  	body: JSON.stringify({
		"facultyName": "John Doe",
		"facultyEmail": "JohnDoe@umass.edu",
		"startDate": "2022-01-01",
		"endDate": "2022-05-05",
		"day": 1,
		"startTime": "11:30",
		"endTime": "12:30",
		"courseDepartment": "Nutrition",
		"courseNumber": "210",
	})
});
```

**Response**

- HTTP status:
    - `200` if uploading OH is successful (ok)
    - `400` if user request is not valid (bad request)
    - `400` if there is a duplicated office hour in the database (bad request)
    - `429` if user sends 150 request within 10 minutes (too many request)

**Successful Response Body**

```json
{
	"officeHourToUpload": {
		"id": "4eb54185-6ef2-47fc-a34a-6b85136c64a0",
		"facultyName": "John Doe",
		"facultyEmail": "johndoe@umass.edu",
		"startDate": "2022-01-01",
		"endDate": "2022-05-05",
		"day": 1,
		"startTime": "11:30",
		"endTime": "12:30",
		"courseDepartment": "Nutrition",
		"courseNumber": "210",
  	},
  "status": "success"
}
```

- `officeHourToUpload` (object) - contains the request body and the uuid of the office hour
- `status` (string) - indicated the request is successful if `success` is shown

## PUT /api/officeHour/edit✅✔️

### Edit a office hour on a professor or TA’s behalf

**Request**

```tsx
PUT /api/officeHour/edit
```

**Request Body**

- `facultyEmail` (required, string, `"johndoe@umass.edu"`) - The email of faculty
- `facultyName` (required, string, `"John Doe"`) - The full name of faculty
- `startDate` (required, string, `"2022-01-01"`) - The start date of office hour in the format of
    - The format must be `yyyy-mm-dd`
- `endDate` (required, string, `"2022-05-05"`) - The start date of office hour
    - The format must be `yyyy-mm-dd`
- `day` (required, integer, 1) - Sunday is 0, Monday is 1, and so on, Saturday is 6
    - day must be between 0 - 6
- `startTime` (required, string, `"11:30"`) - The start time of office hour
    - The format must be `hour:minute`
- `endTime` (required, string, `"12:30"`) - The start time of office hour (hour:minute)
- `courseDepartment` (required, string, `"Computer Science"`) - The department of class
    - Include the full name of the course department instead of the abbreviated name
    - Here is a list of options: [Department option](https://www.notion.so/Department-option-fe17847911124d46944c23e79c78ae6d?pvs=21)
- `courseNumber` (required, string, `"198C"` or `"220"`)

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/officeHour/edit", {
	method: "PUT",
	headers: {
		"Content-Type": "application/json",
	},
  	body: JSON.stringify({
		"facultyName": "John Doe",
		"facultyEmail": "JohnDoe@umass.edu",
		"startDate": "2022-01-01",
		"endDate": "2022-05-05",
		"day": 1,
		"startTime": "11:30",
		"endTime": "12:30",
		"courseDepartment": "Nutrition",
		"courseNumber": "210",
	})
});
```

**Response**

- HTTP status:
    - `200` if uploading OH is successful (ok)
    - `400` if user request is not valid (bad request)
    - `400` if there is a duplicated office hour in the database (bad request)
    - `429` if user sends 150 request within 10 minutes (too many request)

**Successful Response Body**

```json
{
	"officeHourToUpload": {
		"id": "4eb54185-6ef2-47fc-a34a-6b85136c64a0",
		"facultyName": "John Doe",
		"facultyEmail": "johndoe@umass.edu",
		"startDate": "2022-01-01",
		"endDate": "2022-05-05",
		"day": 1,
		"startTime": "11:30",
		"endTime": "12:30",
		"courseDepartment": "Nutrition",
		"courseNumber": "210",
	},
	"status": "success"
}
```

- `officeHourToUpload` (object) - contains the request body and the uuid of the office hour
- `status` (string) - indicated the request is successful if `success` is shown

## DELETE /api/officeHour/edit✅✔️

### Delete a office hour on a professor or TA’s behalf

**Request**

```tsx
DELETE /api/officeHour/edit
```

**Request Body**

- `facultyEmail` (required, string, `"johndoe@umass.edu"`) - The email of faculty
- `startDate` (required, string, `"2022-01-01"`) - The start date of office hour in the format of
    - The format must be `yyyy-mm-dd`
- `endDate` (required, string, `"2022-05-05"`) - The start date of office hour
    - The format must be `yyyy-mm-dd`
- `courseDepartment` (required, string, `"Computer Science"`) - The department of class
    - Include the full name of the course department instead of the abbreviated name
    - Here is a list of options: [Department option](https://www.notion.so/Department-option-fe17847911124d46944c23e79c78ae6d?pvs=21)
- `courseNumber` (required, string, `"198C"` or `"220"`)

**Example Request in Javascript using fetch**

```javascript
const response = await fetch("https://api.icequeb.site/api/officeHour/delete", {
	method: "DELETE",
	headers: {
		"Content-Type": "application/json",
  	},
  	body: JSON.stringify({
		"facultyEmail": "JohnDoe@umass.edu",
		"startDate": "2022-01-01",
		"endDate": "2022-05-05",
		"courseDepartment": "Nutrition",
		"courseNumber": "210",
	})
});
```

- `officeHourDocuments` (an array of objects) - an array of office hour that were deleted
- `status` (string) - indicated the request is successful if `success` is shown
- HTTP status:
    - `200` if uploading OH is successful (ok)
    - `400` if user request is not valid (bad request)
    - `400` if there is a duplicated office hour in the database (bad request)
    - `429` if user sends 150 request within 10 minutes (too many request)
    

**Successful Response Body**

```json
{
	"officeHourDocuments": [
		{
	            "id": "4eb54185-6ef2-47fc-a34a-6b85136c64a0",
	            "facultyName": "John Doe",
	            "facultyEmail": "johndoe@umass.edu",
	            "startDate": "2022-01-01",
	            "endDate": "2022-05-05",
	            "day": 1,
	            "startTime": "11:30",
	            "endTime": "12:30",
	            "courseDepartment": "Nutrition",
	            "courseNumber": "210",
		}
	],
  	"status": "success"
}
```

# Queue (WebSocket)
## Events

### `connection`

**Description**: Triggered when a client connects to the WebSocket server.

### `check existence`

**Description**: Checks if a student is already present in the queue, typically used for reconnecting to the queue if the connection is lost.

**Data Required**:

`studentEmail` (string): Email address of the student.

`officeHourID` (string): Identifier for the specific office hour session.

**Response**: `check existence response`

### `join queue`

**Description**: Allows a student to join a queue for an office hour session.

**Data Required**:

`studentEmail` (string): Email address of the student.

`officeHourID` (string): Identifier for the specific office hour session.

**Response**: `join queue response`

### `leave queue`

**Description**: Allows a student to leave the queue.

**Data Required**:

`studentEmail` (string): Email address of the student.

`officeHourID` (string): Identifier for the specific office hour session.

**Response**: `leave queue response`

### `update queue positions`

**Description**: Notifies all clients about updated positions in the queue, triggered after any operation that alters the queue order.

**Data**:

`position` (integer): The new position of the student in the queue.

## Response

### `check existence response`

Sent in response to a `check existence`.

**Data**:

`status` (string): Indicates the result of the check (`success` or `failure`).

`data` (object): Contains the queue status of the student.

`isInQueue` (boolean): Whether the student is currently in the queue.

`position` (integer): Current position of the student in the queue.

`error` (string): Error message if applicable.

### `join queue response`

Sent in response to a `join queue`.

**Data**:

`status` (string): Result of the join operation (`success` or `failure`).

`data` (integer): The new position of the student in the queue, if successful.

`error` (string): Error message if the join operation fails.

### `leave queue response`

Sent in response to a `leave queue`.

**Data**:

`status` (string): Result of the leave operation (`success` or `failure`).

`data` (integer): The remaining number of students in the queue after leaving.

`error` (string): Error message if the leave operation fails.
# How to check test results on Github Actions

1. Click on `Actions` located on the nav bar of this GitHub repository page, in between `Pull Requests` and `Projects`
2. Click on the latests workflow run 
3. Navigate to `Jobs` section on the left side bar, and click on `jest`
4. For back end testing, there will be a list of procedure ran for testing displayed on the right, click `Run Jest` to see the result of 69 tests passing
5. For front end testing, you will see some errors printed in the console. For the first warning “An update to ForwardRef inside a test was not wrapped in act(…)”, the `act` function should be excluded despite of the warning, as indicated by the react native testing library engineers in [https://github.com/callstack/react-native-testing-library/issues/1302](https://github.com/callstack/react-native-testing-library/issues/1302) Also, the error “requested resource was not found” is expected because the test indeed does not fetch office hours from the serve in the test, and the designed error should be thrown. After the two console errors, **you should be able to see all test cases passed**. In the end, the “Jest has detected the following 1 open handle potentially keeping Jest from exiting” Warning is caused by abandoning ngrok server which we were using for testing our product. The system attempts to connect to the serve but does not get any response back. The testing branch is using a slightly older version, and the connection to ngrok was not completely removed.


![Test Result Page](Ice-Queb/src/assets/test_cases_result.png)

# Art Assets Credits

Calendar icon: [iconfinder.com](http://iconfinder.com) small-n-flat pack

Cog icon: [iconfinder.com](http://iconfinder.com) small-n-flat pack

People icon: [iconfinder.com](http://iconfinder.com) small-n-flat pack

ice Queb icon (old): Jianxin Lin

ice Queb icon (umass): Jianxin Lin & UMass

ice Queb icon: Jianxin Lin
