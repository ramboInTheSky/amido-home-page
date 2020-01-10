/* eslint-disable import/no-extraneous-dependencies */
import path from "path";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";

const https = require("https");
const fs = require("fs");

const app = express();
const helmet = require("helmet"); 

const port = 8080;
const logger = morgan("dev");
const isDeveloping =
  process.env.NODE_ENV && process.env.NODE_ENV === "development";

const parseResponse = (req, res) => {
  if (!isDeveloping) {
    res.sendFile(path.resolve(__dirname, "build/index.html"));
    return;
  }

  res.setHeader("Content-Type", "text/html; charset=UTF-8");
  fs.createReadStream(path.resolve(__dirname, "build/index.html")).pipe(res);
};


app.use(
  helmet({
    frameguard: false
  })
);
app.disable("x-powered-by");
app.use(helmet.xssFilter());
app.use(helmet.noSniff());

app.use(logger);
app.use(cookieParser());

app.use(bodyParser.json());
app.use((error, req, res, next) => {
  if (error.message === "Unexpected token -") {
    res.status(400).send({ error: "Bad Request" });
  } else {
    next();
  }
});

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

app.get("/user", (req, res) => res.send(req.user));
app.get("/", parseResponse);

if (isDeveloping) {
  const options = {
    key: fs.readFileSync("./keys/server.key"),
    cert: fs.readFileSync("./keys/server.cert")
  };
  app.use(express.static("./build"));
  https.createServer(options, app).listen(3000);
} else {
  app.use(express.static(path.resolve(__dirname, "./build")));
}

app.get("/healthcheck", (req, res) => res.sendStatus(200));
app.get("/resetpassworderror", parseResponse);
app.get("*", parseResponse);

app.listen(port);
