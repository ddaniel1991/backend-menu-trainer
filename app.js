const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();
const {errorHandler} = require('./middleware/errorMiddleware')
const port = process.env.PORT;
const app = express();



app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/dishes", require('./routes/dishRoutes'))



app.use(errorHandler);




app.listen(port, () => console.log(`Server started on port ${port}`));