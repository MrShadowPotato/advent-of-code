#!/bin/bash

helpFunction() {
  echo ""
  echo "Usage: $0 -y year"
  echo -e "\t-y Corresponds to year."
  echo -e "\tExample: $0 -y 2024"
  exit 1 # Exit script after printing help
}

createDirDayFromYear() {
  year=$1
  day=$2

  dir_path="./${year}/day-${day}"

  echo "Creating directory --- day $day from year $year"

  mkdir -p "$dir_path"
}

fetchHtmlDayFromYear() {
  year=$1
  day=$2

  # Generate URL
  url="https://adventofcode.com/${year}/day/${day}"

  # Output file name

  output_file="./${year}/day-${day}/aoc.html"

  echo "Downloading html --- day $day from year $year"

  # Download the page using curl
  curl -o "$output_file" "$url"

  # Check if download was successful
  if [[ $? -eq 0 ]]; then
    echo "Saved: $output_file"
  else
    echo "Failed to download: $url"
  fi
}

while getopts "y:" flag; do
  case "${flag}" in
  y) year=${OPTARG} ;;
  ?) helpFunction ;;
  esac
done

if [ -z "$year" ]; then
  helpFunction
fi

start_day=1

if [ "$year" -ge 2025 ]; then
  end_day=12
else
  end_day=25
fi

for day in $(seq $start_day $end_day); do

  createDirDayFromYear "$year" "$day"
  fetchHtmlDayFromYear "$year" "$day"
done
