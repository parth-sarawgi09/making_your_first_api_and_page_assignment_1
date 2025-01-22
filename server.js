const express = require('express');
const app = express();
const PORT = 8000;

app.use(express.json());
// Function to get a cheerful message based on the day
function getDayMessage() {
    const days = [
        "Sunday: A day to relax and recharge!",
        "Monday: Start the week strong!",
        "Tuesday: Keep the momentum going!",
        "Wednesday: Midweek vibes are the best!",
        "Thursday: Almost there!",
        "Friday: Time to wrap up and celebrate!",
        "Saturday: Enjoy your weekend!"
    ];
    const today = new Date().getDay(); // 0 = Sunday, ..., 6 = Saturday
    return days[today];
}

// Define the GET /assistant/greet endpoint
app.get('/assistant/greet', (req, res) => {
    const name = req.query.name || "Guest";
    const greeting = `Hello, ${name}! Hope you're having a fantastic day!`;
    const dayMessage = getDayMessage();

    res.send({
        greeting,
        dayMessage
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
}); 