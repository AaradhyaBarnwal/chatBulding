const express = require('express');
const app = express();

app.use(express.static('public'));

app.listen(3000, () => {
    console.log("Yo, I'm alive at http://localhost:3000")
})

