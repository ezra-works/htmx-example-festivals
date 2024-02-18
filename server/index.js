const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();
const port = 3000;

app.use(cors(), express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/search", (req, res) => {
  // console.log("req", req);
  // const searchTerm = req.params.search;
  // const searchTerm = req.query.search;
  const searchTerm = req.body.search;

  const searchTermLower = searchTerm.toLowerCase();
  console.log("searchTerm", searchTerm);

  axios
    .get(
      "https://my-json-server.typicode.com/ezra-works/htmx-example-festivals/results"
    )
    .then(
      (response) => {
        // console.log(response.data);
        if (!searchTerm) res.send(response.data);
        else {
          const searched = response.data.filter(
            (item) =>
              item.alt_description.toLowerCase().includes(searchTermLower) ||
              item.description.toLowerCase().includes(searchTermLower) ||
              item.author.toLowerCase().includes(searchTermLower)
          );
          // console.log("searched", searched);
          res.send(searched);
        }
      },
      (error) => {
        console.log(error);
        res.send([]);
      }
    );
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
