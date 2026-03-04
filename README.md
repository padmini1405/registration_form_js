# Project Overview

This project is a simple registration form built using HTML, CSS, and JavaScript. It performs real-time validation to ensure that user inputs meet specific 
requirements before allowing form submission.
The form includes the following fields:
- Name
- Email
- Password

# Features

- Real-time input validation
- Name field validation (cannot be empty)
- Email format validation
- Password minimum length validation (6 characters)
- Dynamic error messages
- Success alert on valid form submission

# Technologies Used

- HTML5
- CSS3
- JavaScript

  # Validation Rules
 
- Name Field
     - Must not be empty.
     - Displays an error message if left blank.
Email Field
     - Must follow a valid email format (e.g., example@email.com).
     - Displays an error message if the format is incorrect.
Password Field
     - Must contain at least 6 characters.
     - Displays an error message if the password is too short.
 
# Project Structure

registration-form/
│
├── index.html
├── script.js
└── README.md

# How It Works
- The form listens to input and blur events.
- Each field is validated in real-time.
- Error messages are displayed dynamically below each field.
- When submit button is clicked:
   - Name is not empty
   - Email format is valid
   - Password has at least 6 characters
- On successful submission, a confirmation alert is displayed.

# How to view
You can access my website by visiting this [link]. Feel free to explore the content and get in touch.

Developed by Padmini K
