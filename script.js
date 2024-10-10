<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Castify - Email Confirmation</title>
    <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap" rel="stylesheet">
    <style>
        /* General Reset */
        body, h1, p, button, input {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        /* Basic Styling */
        body {
            font-family: 'Open Sans', sans-serif;
            background-color: #e0e1dd; /* Light background color */
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh; /* Full height to center content */
            text-align: center;
        }

        .confirmation-container {
            background-color: #1b263b; /* Dark background for the container */
            border-radius: 15px; /* Rounded corners */
            padding: 40px 30px; /* Padding around the content */
            box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3); /* Shadow for depth */
            max-width: 400px; /* Max width for the container */
            width: 100%; /* Full width */
        }

        .confirmation-container h1 {
            color: #e0e1dd; /* Light color for header text */
            margin-bottom: 10px; /* Space below the header */
            font-size: 24px; /* Font size for the header */
        }

        .confirmation-container p {
            color: #778da9; /* Medium color for paragraph text */
            margin-bottom: 20px; /* Space below paragraphs */
            font-size: 16px; /* Font size for paragraphs */
        }

        #confirmationCode {
            padding: 12px; /* Padding for input */
            width: 100%; /* Full width for input */
            margin-bottom: 20px; /* Space below input */
            border: 1px solid #415a77; /* Border color */
            border-radius: 8px; /* Rounded corners */
            background-color: #778da9; /* Input background color */
            color: #e0e1dd; /* Text color in input */
        }

        #confirmBtn {
            background-color: #415a77; /* Button background color */
            color: #e0e1dd; /* Button text color */
            border: none; /* Remove border */
            padding: 12px 24px; /* Padding for button */
            border-radius: 8px; /* Rounded corners for button */
            cursor: pointer; /* Pointer cursor on hover */
            font-weight: 600; /* Bold text */
            font-size: 16px; /* Font size for button text */
            transition: background-color 0.3s; /* Smooth background color transition */
        }

        #confirmBtn:hover {
            background-color: #0d1b2a; /* Darker background on hover */
        }

        .message {
            margin-top: 15px; /* Space above message */
            color: #e0e1dd; /* Text color for messages */
        }

        .welcome-link {
            margin-top: 20px; /* Space above welcome link */
            color: #e0e1dd; /* Text color for welcome link */
        }
    </style>
</head>
<body>
    <div class="confirmation-container">
        <h1>Email Confirmation</h1>
        <p>Thank you for registering! A confirmation email has been sent to your email address.</p>
        <p id="simulation"></p>
        <p>Please enter the confirmation code from your email to verify your account:</p>
        <input type="text" id="confirmationCode" placeholder="Enter confirmation code" required>
        <button id="confirmBtn">Confirm Email</button>

        <div id="message" class="message"></div>

        <div class="welcome-link" style="display: none;">
            <p>Confirmation successful! <a href="menu.html">Go to Menu Welcome</a></p>
        </div>
    </div>

    <script>
        // Function to generate a random 6-digit confirmation code
        function generateRandomCode() {
            return Math.floor(100000 + Math.random() * 900000).toString(); // Generates a 6-digit code
        }

        // Function to simulate sending the email (for testing purposes)
        function sendConfirmationEmail(code) {
            // Normally, this would be handled server-side and the code would be sent to the user's email.
            // Here, we just simulate the process by displaying it in the browser.
            return new Promise((resolve) => {
                setTimeout(() => {
                    resolve(`Confirmation email sent successfully with code: ${code}`);
                }, 1000); // Simulates an asynchronous email sending operation
            });
        }

        // Generate a random code on page load
        let actualConfirmationCode = generateRandomCode();

        // Simulate sending the confirmation code via email
        sendConfirmationEmail(actualConfirmationCode).then((message) => {
            // Display the simulated message on the page for testing purposes
            document.getElementById('simulation').innerText = message;
        });

        // Listen for the button click event
        document.getElementById('confirmBtn').addEventListener('click', function() {
            const enteredCode = document.getElementById('confirmationCode').value;

            // Check if the entered code matches the actual code
            if (enteredCode === actualConfirmationCode) {
                document.getElementById('message').innerText = 'Email confirmed successfully!';
                document.getElementById('message').style.color = 'green';
                document.querySelector('.welcome-link').style.display = 'block'; // Show welcome link
            } else {
                document.getElementById('message').innerText = 'Invalid confirmation code. Please try again.';
                document.getElementById('message').style.color = 'red';
            }
        });
    </script>
</body>
</html>