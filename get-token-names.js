const fs = require("fs");

function main() {
  const files = fs.readdirSync("./ERTs");
  const tokenNames = files.map(f => f.split(".json")[0]);
  fs.writeFileSync('./tokens.txt', tokenNames.join("\n"));
};

main();