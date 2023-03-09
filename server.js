const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send(`
        <h2>99 little bugs in the code</h2>
        <a href="/98">Take one down, patch it around</a>
    `);
});

app.get('/:numOfBugs', (req, res) => {
    const numOfBugs = parseInt(req.params.numOfBugs);
    if (isNaN(numOfBugs) || numOfBugs < 0) {
        res.send(`
            <h2>Invalid input!</h2>
            <a href="/">Start over</a>
        `);
    } else if (numOfBugs === 0) {
        res.send(`
            <h2>There are no more bugs!</h2>
            <a href="/">Start over</a>
        `);
    } else {
        let newNumOfBugs = numOfBugs - 1;
        if (Math.random() < 0.1) { // 10% chance of increasing the number of bugs
            newNumOfBugs += Math.floor(Math.random() * 10) + 1; // add a random number between 1 and 10
        }
        res.send(`
            <h2>${numOfBugs} little bugs in the code</h2>
            <a href="/${newNumOfBugs}">Take one down, patch it around</a>
        `);
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});
