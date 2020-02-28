
const logger = (...something) => {
    console.log("thx", ...something, "\n");
}

module.exports.logpls = logger;