function findLongestCommonSubstring(string1, string2) {
  // Create a matrix to store the longest common substring lengths.
  const matrix = Array(string1.length + 1).fill(Array(string2.length + 1).fill(0));

  // Iterate over the two strings and fill in the matrix.
  for (let i = 0; i < string1.length + 1; i++) {
    for (let j = 0; j < string2.length + 1; j++) {
      if (i === 0 || j === 0) {
        matrix[i][j] = 0;
      } else if (string1[i - 1] === string2[j - 1]) {
        matrix[i][j] = matrix[i - 1][j - 1] + 1;
      } else {
        matrix[i][j] = Math.max(matrix[i][j - 1], matrix[i - 1][j]);
      }
    }
  }

  // Find the longest common substring length in the matrix.
  let longestCommonSubstringLength = 0;
  for (let i = 0; i < string1.length + 1; i++) {
    for (let j = 0; j < string2.length + 1; j++) {
      longestCommonSubstringLength = Math.max(longestCommonSubstringLength, matrix[i][j]);
    }
  }

  // Get the longest common substring from the matrix.
  let longestCommonSubstring = "";
  let i = string1.length;
  let j = string2.length;
  while (i > 0 && j > 0) {
    if (matrix[i][j] === matrix[i - 1][j - 1] + 1) {
      longestCommonSubstring += string1[i - 1];
      i--;
      j--;
    } else if (matrix[i][j] === matrix[i][j - 1]) {
      j--;
    } else {
      i--;
    }
  }

  // Return the longest common substring.
  return longestCommonSubstring.split("").reverse().join("");
}

// Example usage:

const string1 = "ABCDGH";
const string2 = "AEDFHR";

const longestCommonSubstring = findLongestCommonSubstring(string1, string2);

console.log(longestCommonSubstring); // ADH
