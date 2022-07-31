const express = require("express");
const cors = require("cors");
const { getGoogleStatus, getAmazonStatus, getAllStatus } = require("./controller/status");

const app = express();

const PORT = 5000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:4200'
}));

app.use("/api/v1/google-status", getGoogleStatus);

app.use("/api/v1/amazon-status", getAmazonStatus);

app.use("/api/v1/all-status", getAllStatus);

app.use("/api/v1/healthcheck", (req, res) => {
    res.status(200).json({
        success: true,
        data: {
            message: `Server is healthy and running on port :: ${PORT}`
        }
    })
})

app.listen(PORT, console.log(`Server is running on port :: ${PORT}`))