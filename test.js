
const greet = require("./app")

if (greet() !== "Hello CI/CD") {
    console.error("Test failed")
    process.exit(1)
}

console.log("Test passed")