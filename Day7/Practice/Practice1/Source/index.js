const express = require("express");

const app = express();
app.disable('x-powered-by');

const middleware = (req, res, next) => {
  console.log("Time:", Date());
  next();
};

app.use("/user/:id", (req, res, next) => {
  console.log("Request Type:", req.method);
  next();
});

app
  .get("/user/:id", middleware, (req, res, next) => {
    res.send(`User: ${req.params.id}`);
  })


app.use(
  "/user/:id",
  (req, res, next) => {
    console.log("Request URL:", req.originalUrl);
    next();
  },
  (req, res, next) => {
    console.log("Request Type:", req.method);
    next();
  }
);
app.get(
  "/user/:id",
  (req, res, next) => {
    console.log("ID:", req.params.id);
    next();
  },
  (req, res, next) => {
    res.send("User Info");
  }
);

app.get("/user/:id", (req, res, next) => {
  res.send(req.params.id);
});

app.listen(3000,()=>{
   console.log("It's alive on port 3000"); 
})