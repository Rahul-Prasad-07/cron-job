const express = require('express');
const cron = require('node-cron');

const app = express();
const PORT = process.env.PORT || 3000;

// Define a heavy task
const heavyTask = () => {
    console.log('Starting heavy task...');
    // Simulate heavy task with a delay
    const end = Date.now() + 5000; // 5 seconds delay
    while (Date.now() < end) {
        // This simulates a blocking operation
    }
    console.log('Heavy task completed');
};

// Schedule the heavy task to run every minute
cron.schedule('* * * * *', () => {
    console.log('Running cron job');
    heavyTask();
});

app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
