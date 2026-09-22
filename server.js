const express = require("express");

const app = express();
const PORT = 3000;

// EJS setup
app.set("view engine", "ejs");

// Read form data
app.use(express.urlencoded({ extended: true }));

// Temporary storage
let submissions = [];

// Home page
app.get("/", (req, res) => {
    res.render("index", {
        error: null,
        success: null
    });
});

// Form submission
app.post("/submit", (req, res) => {

    const {
        name,
        email,
        phone,
        experience,
        rating,
        message
    } = req.body;

    // Server-side validation
    if (!name || !email || !phone || !experience || !rating || !message) {
        return res.render("index", {
            error: "Please complete all required fields.",
            success: null
        });
    }

    // Email validation
    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
        return res.render("index", {
            error: "Please enter a valid email address.",
            success: null
        });
    }

    // Phone validation
    const phonePattern = /^[0-9]{10}$/;

    if (!phonePattern.test(phone)) {
        return res.render("index", {
            error: "Please enter a valid 10-digit phone number.",
            success: null
        });
    }

    // Rating validation
    const ratingNumber = Number(rating);

    if (ratingNumber < 1 || ratingNumber > 5) {
        return res.render("index", {
            error: "Please select a valid rating.",
            success: null
        });
    }

    // Store submission temporarily
    submissions.push({
        name,
        email,
        phone,
        experience,
        rating: ratingNumber,
        message
    });

    console.log("New submission:", {
        name,
        email,
        phone,
        experience,
        rating: ratingNumber,
        message
    });

    // Success message
    res.render("index", {
        error: null,
        success: `Thank you, ${name}! Your experience has been submitted successfully.`
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});