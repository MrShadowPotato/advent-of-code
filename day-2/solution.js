import fs from "fs";
const lines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");
const loaded = {
  red: 12,
  green: 13,
  blue: 14,
};

function partOne() {
  let result = 0;
  for (const line of lines) {
    const [game, grabs] = line.split(":");
    let id = parseInt(game.trim().split(" ")[1], 10);
    console.log("Game with game ", id, " has the following grabs: \n", grabs);
    for (const set of grabs.split(";")) {
      console.log("set is: ", set);
      for (const cube of set.trim().split(",")) {
        console.log("cube is:  ", cube.trim().split(" "));
        const [num, color] = cube.trim().split(" ");
        if (loaded[color] < parseInt(num, 10)) {
          id = 0;
          break;
        }
      }
    }
    result += id;
  }
  return result;
}

console.log("First part: ", partOne());

// console.log("Second part: ", partTwo());
