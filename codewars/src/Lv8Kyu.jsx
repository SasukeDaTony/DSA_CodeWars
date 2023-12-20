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
