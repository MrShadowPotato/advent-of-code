import fs from "fs";
const lines = fs.readFileSync("./input.txt", "utf8").trim().split("\n");

function partOne() {
  const values = lines.map((line) =>
    line
      .split("")
      .map((num) => parseInt(num, 10))
      .filter((a) => a)
      .join(""),
  );
  let result = 0;
  for (let value of values) {
    const first = value[0];
    const last = value[value.length - 1];
    const num = parseInt(first + last, 10);
    result = result + num;
  }
  return result;
}

function partTwo() {
  let result = 0;
  for (let line of lines) {
    let digits = [];
    for (const [charIndex, char] of line.split("").entries()) {
      // console.log(charIndex, char);
      if (!isNaN(parseInt(char, 10))) {
        digits.push(char);
      } else {
        for (const [numIndex, num] of [
          "zero",
          "one",
          "two",
          "three",
          "four",
          "five",
          "six",
          "seven",
          "eight",
          "nine",
        ].entries()) {
          if (line.slice(charIndex).startsWith(num)) {
            digits.push(numIndex.toString(10));
          }
        }
      }
    }
    const first = digits[0];
    const last = digits[digits.length - 1];
    const num = parseInt(first + last, 10);
    result = result + num;
  }
  return result;
}

console.log("First part: ", partOne());

console.log("Second part: ", partTwo());
