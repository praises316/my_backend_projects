// const express = require ("express");
// const app = express();
// const port = 3000;

// express here is a middleware
// app.use(express.json()); 
// app.use((req,res,next) => {
// console.log(`${req.method} ${req.url}  - ${new Date()}`); 
// next();
// });

// app.use((req,res,next) => {
//     console.log("Hello I am onboard!");
// next();
// });

// route parametres
// app.get ("/user/:id",(req,res) => {
//     const id = req.params.id;
//     console.log(id);
//     res.send(id);
// });

// // this a request handler

// app.post ("/echo", (req,res) => {
//     console.log(req.body)
//     res.json({echoed: req.body});
// });

// app.get ("/",(req,res) => {
// res.send("Hello from express!");
// });

// app.get ("/search",(req,res) => {
//     const query = req.query.query;
//     console.log(query);
//     res.send(query);
// });
// app.listen(port, () => {
//     console.log(`Example app listening on port ${port}`);
// });