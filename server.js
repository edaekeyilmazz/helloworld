import express from 'express';

const app = express();

const PORT = process.env.port || 4500;

app.listen(PORT, () => {
    console.log(`App is listening at port ${PORT}`);
})

app.get('/', (req, res) => {
    res.send("<h2 style='color:red; font-size:3rem;'>Welcome to Home Page in Cyclic App!</h2>")
});