// Write a function that will check if two given characters are the same case.

// If either of the characters is not a letter, return -1
// If both characters are the same case, return 1
// If both characters are letters, but not the same case, return 0
// Examples
// 'a' and 'g' returns 1

// 'A' and 'C' returns 1

// 'b' and 'G' returns 0

// 'B' and 'g' returns 0

// '0' and '?' returns -1

function sameCase(a, b) {
  const alphabeticRegex = /^[A-Za-z]+$/;

  // Test if the string matches the alphabetic regex
  if (!alphabeticRegex.test(a)) {
    return -1;
  }

  if (!alphabeticRegex.test(b)) {
    return -1;
  }

  let lowerCase = a.toLowerCase() + b.toLowerCase();
  let upperCase = a.toUpperCase() + b.toUpperCase();

  if (lowerCase === a + b) {
    return 1;
  }
  if (upperCase === a + b) {
    return 1;
  }

  return 0;
}
//////////////////////

// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

function past(h, m, s) {
  //#Happy Coding! ^_^
  const hMilliseconds = h * 60 * 60000;
  const mMilliseconds = m * 60000;
  const sMilliseconds = s * 1000;

  return hMilliseconds + mMilliseconds + sMilliseconds;
}
// /////////////////

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; and month 11 (November), is part of the fourth quarter.

// Constraint:

// 1 <= month <= 12

const quarterOf = (month) => {
  // Your code here
  if (month < 4) {
    return 1;
  }
  if (month > 3 && month < 7) {
    return 2;
  }

  if (month > 6 && month < 10) {
    return 3;
  }

  return 4;
};

//   //////////////////

// Bob needs a fast way to calculate the volume of a cuboid with three values: the length, width and height of the cuboid. Write a function to help Bob with this calculation.

class Kata {
  static getVolumeOfCuboid(length, width, height) {
    // your code here
    return length * width * height;
  }
}

//   //////////////////

// you are given two interior angles (in degrees) of a triangle.

// Write a function to return the 3rd.

// Note: only positive integers will be tested.

function otherAngle(a, b) {
  return 180 - (a + b);
}

//   //////////////////

// Write a function named setAlarm/set_alarm/set-alarm/setalarm (depending on language) which receives two parameters. The first parameter, employed, is true whenever you are employed and the second parameter, vacation is true whenever you are on vacation.

// The function should return true if you are employed and not on vacation (because these are the circumstances under which you need to set an alarm). It should return false otherwise. Examples:

// employed | vacation
// true     | true     => false
// true     | false    => true
// false    | true     => false
// false    | false    => false

function setAlarm(employed, vacation) {
  if (employed && !vacation) {
    return true;
  }
  return false;
}
