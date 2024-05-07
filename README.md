# ice Queb (Office Hour Queuing App)

Developers: Haijie Qin, George Zhang, Yongye Tan, Jianxin Lin

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

This project has 3 GitHub repositories.

## Ice-Quef

### Introduction

This is the front-end interface of the project designed specifically for students. The interface provides easy access for students to manage their office hour attendance effectively.

### Features included

- Search for office hour sections and add the office hour sections of the courses that the students enrolled
- Drop an office hour section if it was added mistakenly or is no longer needed (e.g., end of the semester)
- Check the real-time updating queuing status of an office hour section
- Join a queue of an office hour section that the students are interested in attending
- Leave a queue from an office hour section after the problem is solved

## Ice-Faculty

### Introduction

This is the front-end interface of the project designed specifically for teachers. It is a website that provides easy access for teachers to manage the office hour sections that they uploaded to the database.

### Features included

- Display all of the office hour sections uploaded by a faculty (a faculty won’t be able to see/edit any office hour sections that were uploaded by another faculty)
- Upload office hour sections so that the students are able to add these office hour sections from *ice-quef*
- Modify the details of existing office hours associated with a faculty member if are updates or if any information was entered incorrectly
- Delete an office hour section if it is no longer needed (e.g., end of the semester)

## Ice-Queb

### Introduction

This is the back-end server of the project that handles request from both the student-end interface and teacher-end interface.

# Installation Instructions

## iceQuef repository (Student mobile app front end)

### Option 1: Using React Native Expo

For mobile user: Check out the “React Native Expo” tutorial in the Configuration section.

For web user: After you got the QR code provided by Expo, press the ‘w’ key on your keyboard. You will be asked to download a package. After downloading the package, your web browser will be opened and you will see the app rendered on the web page. 

### Option 2: Using Web app

Go to this website: [icequef.vercel.app](https://icequef.vercel.app/)

You can use this link on mobile devices as well.

## iceFaculty repository (Faculty web app front end)

### Option 1: Using Web

Go to this website: [ice-faculty.vercel.app](http://ice-faculty.vercel.app) 

You can use this link on mobile devices as well.

# Configurations

## React Native Expo

We are using React Native Expo framework to develop & deploy our app! You should install mobile app “Expo go” directly from Apple Store or Google Play Store before doing next steps.

### Step 1

Open folder “Ice-Quef” in an IDE or terminal. 

Run the following command:

```jsx
npm install --force
```

We use `—force`flag because there are dependency conflicts in the testing branch. For other branches, there is no need to use `—force` flag.

### Step 2

For Mac User, run the app by using the following command:

```
./run.sh https://api.icequeb.site
```

For Windows User, run the app by using the following command:

```java
./run.ps1 https://api.icequeb.site
```

Expo will generate a QR code. It is highly recommended to use the QR code approach because it is easier and has no overhead. Next, if you are using an iOS device, use your camera to scan the QR code. You will be redirected to "Expo go" and your project will be opened on your phone. If you are using an Android device, open “Expo go” and choose the scan option to scan the QR code.

## Docker

## Ice-Queb

# Datasets

To our knowledge, no datasets were required nor utilized in our project.
