# Cognifyz Internship Task 2 — Form Validation

A Node.js web application that implements client-side and server-side form validation using JavaScript, Node.js, Express.js, and EJS.

This project was developed as part of the Cognifyz Technologies Full Stack Development Internship — Task 2.

## 🚀 Live Demo

🌐 **Live Website:** https://cognifyz-task-2-8g3g.onrender.com

💻 **GitHub Repository:** https://github.com/shaikshaziya-collab/cognifyz-task-2

## Project Overview

This project focuses on developing an improved feedback form with a clean, elegant, and responsive user interface.

Users can enter the required information through the feedback form and submit their response. The application processes the submitted information using a Node.js and Express.js backend and provides a confirmation response after successful submission.

The project was developed to practice frontend design, form handling, backend routing, and deployment of a Node.js web application.

## Features

- Responsive user feedback form
- Clean and modern user interface
- User-friendly form layout
- Form input handling
- Feedback submission
- Server-side request handling
- Confirmation response after submission
- Responsive design for different screen sizes
- Deployed and accessible online using Render

## Technologies Used

- Node.js
- Express.js
- EJS
- HTML5
- CSS3
- JavaScript
- Git & GitHub
- Render

## Project Structure


cognifyz-task-2/
├── views/
│   └── index.ejs
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
├── package.json
├── package-lock.json
├── server.js
└── README.md

| Path                   | Purpose                                              |
| ---------------------- | ---------------------------------------------------- |
| `server.js`            | Express application and server-side request handling |
| `views/index.ejs`      | Main feedback form page                              |
| `public/css/style.css` | Website styling and responsive design                |
| `public/js/script.js`  | Client-side interactions and functionality           |
| `package.json`         | Project configuration and dependencies               |
| `package-lock.json`    | Locked dependency versions                           |
| `README.md`            | Project documentation                                |

## Installation Steps

1. Install [Node.js](https://nodejs.org/) 18 or later.
2. Clone or download this repository.
3. Open a terminal in the project folder.
4. Run the following command to install the required dependencies:

    npm install

## How to Run Locally

Start the application using:

    npm start

Then open the following URL in your browser:

    http://localhost:3000

The feedback form should now be running locally.

## How to Test the Feedback Form

### In the Browser

1. Start the application using `npm start`.
2. Open `http://localhost:3000` in your browser.
3. Enter the required information in the feedback form.
4. Try submitting the form with empty or invalid information to check the validation messages.
5. Enter valid information and submit the form.
6. Verify that the form is submitted successfully.
7. Check that the confirmation response is displayed correctly.

### Validation Checks

- Submit the form without entering the required information.
- Enter an invalid email address.
- Enter incomplete or invalid information.
- Submit the form with valid information.
- Verify that appropriate validation messages are displayed for invalid input.
- Verify that valid submissions are processed successfully.

### Responsive Design Check

The website can be tested on different screen sizes using browser developer tools.

1. Open the application in your browser.
2. Press `F12` or `Ctrl + Shift + I`.
3. Enable device emulation.
4. Test the website on mobile, tablet, and desktop screen sizes.
5. Verify that the form, buttons, and content remain properly aligned.

## Deployment

The application is deployed using **Render** and connected to the GitHub repository.

🌐 **Live Website:** https://cognifyz-task-2-8g3g.onrender.com

The application is configured to start using `npm start`.

## What I Learned

Through this task, I learned and practiced:

- Creating responsive web forms
- Implementing client-side validation
- Implementing server-side validation
- Handling form submissions
- Working with Node.js and Express.js
- Using EJS templates
- Improving user interface design
- Testing responsive layouts
- Using Git and GitHub for version control
- Deploying a Node.js application using Render
