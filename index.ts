import express from "express"

const app = express()

app.get("/", (req, res) => {
  res.send("<p>Moin meister</p>")
})

app.listen(5000, () => {
  console.log("listening on port 5000");

})
