const express = require("express");
const app = express();
const movieRouter = require("./routes/MovieRouter");
const userRouter = require("./routes/UserRouter");

app.use(express.json());

app.use("/api/v1/movies", movieRouter);
app.use("/api/v1/users", userRouter);

app.listen(8080, () => {
    console.log("Server is running");
});
