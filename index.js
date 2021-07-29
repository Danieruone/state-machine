const xml2js = require("xml2js");
const xml = require("./assets/automata.js");
const fs = require("fs");

xml2js.parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }
  const json = JSON.stringify(result, null, 4);
  fs.writeFile("./assets/automata.json", json, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log("file created");
  });
});
