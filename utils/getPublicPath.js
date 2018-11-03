const path = require("path");

module.exports = after => process.env.DOMAIN + path.join("public", after);
