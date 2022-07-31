const axios = require("axios");

const sendHttpRequest = async (url) => {
    try {
        const startTime = new Date();
        const resp = await axios.get(url);
        const endTime = new Date();
        const duration = endTime - startTime;
        return {resp, duration};
    } catch(err) {
        console.log(err);
        throw(err);
    }
}

module.exports = sendHttpRequest;