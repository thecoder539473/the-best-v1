const express = require("express");
const fetch = require("node-fetch");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve public folder
app.use(express.static(path.join(__dirname, "public")));

// Homepage route (fixes "Not Found")
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Proxy route
app.get("/proxy", async (req, res) => {
  let url = req.query.url;
  if (!url) return res.send("Missing URL");

  try {
    const response = await fetch(url);

    res.setHeader("Content-Type", "text/html; charset=utf-8");

    let body = await response.text();

    body = body.replace(
      /<head>/i,
      `<head><base href="${url}">`
    );

    res.send(body);
  } catch (err) {
    res.send("Error: " + err.message);
  }
});

app.listen(PORT, () => {
  console.log("Running on port " + PORT);
});
