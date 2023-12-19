def correctCalibration(lines):
    result = 0
    for line in lines:
        digits = []
        for charIndex, char in enumerate(line):
            if char.isnumeric():
                digits.append(char)
            else:
                for numIndex, num in enumerate(
                    [
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
                    ]
                ):
                    if line[charIndex:].startswith(num):
                        digits.append(str(numIndex))
                        break
        first = digits[0]
        last = digits[-1]
        result += int(first + last)
    return result


with open("./input.txt", "r") as file:
    entry = file.read().strip().split("\n")
    print(correctCalibration(entry))
