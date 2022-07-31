const axios = require("axios");
const http = require("http");
const sendHttpRequest = require("../util/requestUtil");

const getGoogleStatus = async (req, res) => {
    try {
        const {resp, duration} = await sendHttpRequest("https://www.google.com");
        res.status(200).json({
            success: true,
            data: [{
                url: resp.config.url,
                statusCode: resp.status,
                duration: `${duration}ms`,
                date: Date.now()
            }]
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            data: {
                message: err.message
            }
        })
    }
};

const getAmazonStatus = async (req, res) => {
    try {
        const {resp, duration} = await sendHttpRequest("https://www.amazon.com");
        res.status(200).json({
            success: true,
            data: [{
                url: resp.config.url,
                statusCode: resp.status,
                duration: `${duration}ms`,
                date: Date.now()
            }]
        })
    } catch(err) {
        res.status(500).json({
            success: false,
            data: {
                message: err.message
            }
        })
    }
    
};

const getAllStatus = async (req, res) => {
    try {
        const {resp: googleResp, duration: googleDuration} = await sendHttpRequest("https://www.google.com");
        const {resp: amazonResp, duration: amazonDuration} = await sendHttpRequest("https://www.amazon.com");
        res.status(200).json({
            success: true,
            data: [
                {
                    url: googleResp.config.url,
                    statusCode: googleResp.status,
                    duration: `${googleDuration}ms`,
                    date: Date.now()
                }, {
                    url: amazonResp.config.url,
                    statusCode: amazonResp.status,
                    duration: `${amazonDuration}ms`,
                    date: Date.now()
                }     
            ]
        })
    } catch(err) {
        console.log(err);
        res.status(500).json({
            success: false,
            data: {
                message: err.message
            }
        })
    }
}

module.exports = { getGoogleStatus, getAmazonStatus, getAllStatus }