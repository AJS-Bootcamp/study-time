import React from "react";

const phrases = [
  "Team AJS is determined to enhance your study skills and optimize your learning experience!",
  "You can do it!",
  "Believe in yourself!",
  "Stay focused!",
  "Keep pushing!",
  "Success is within reach!",
  "You are capable of great things!",
];

function Motivation() {
  const randomIndex = Math.floor(Math.random() * phrases.length);
  const phrase = phrases[randomIndex];
  console.log(phrase);

  return <p>{phrase}</p>;
}

export default Motivation;
