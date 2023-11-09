// const path = require("path");
// const os = require("os");
const fs = require("fs").promises;
// const EventEmitter = require("events");
const http = require("http");

// console.log(path.parse(__filename));

// console.log(`Total memory: ${os.totalmem()}`);

// (async () => {
//   try {
//     const data = await fs.readFile("index.html", { encoding: "utf8" });
//     console.log(data);
//   } catch (error) {
//     console.error(error);
//   }
// })();

// const emitter = new EventEmitter();
// emitter.on("messageLogged", (message) => {
//   console.log(message);
// });
// emitter.emit("messageLogged", "Listener called");

const server = http.createServer(async (req, res) => {
  switch (req.url) {
    case "/":
      res.end(await fs.readFile("index.html"));
    case "/about":
      res.end(await fs.readFile("about.html"));
    case "/contact-me":
      res.end(await fs.readFile("contact-me.html"));
    default:
      res.end(await fs.readFile("404.html"));
  }
});

server.listen(3000, () => {
  console.log("Listening on localhost:3000/");
});
