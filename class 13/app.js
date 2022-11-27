const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.get("/api/sample", (request, response) => {
  response.send("sample api hit");
});

app.get("/api/getname", (request, response) => {
  response.send("JAFFAR AMAN");
});

app.post("/api/userinfo", (request, response) => {
  console.log("request", request.body);

  response.json(request.body);
});

// app.get("/api/user/:id", (request, response) => {
//   console.log("request", request.body);

//   response.json(request.body);
// });
// app.post("/api/user", (request, response) => {
//   console.log("request", request.body);

//   response.json(request.body);
// });
// app.put("/api/user", (request, response) => {
//   console.log("request", request.body);

//   response.json(request.body);
// });
// app.delete("/api/user", (request, response) => {
//   console.log("request", request.body);

//   response.json(request.body);
// });

app.listen(PORT, () => console.log(`server running on localhost:${PORT}`));
