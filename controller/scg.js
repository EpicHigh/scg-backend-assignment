/**
 * Calculate the specific sequence by using the particular formula
 * @param arr {(number|string)[]} - a sequence
 * @return {number[]}
 */
function sequenceEquation(arr) {
  return arr.map((value, index) =>
    typeof value === "string" ? (index) ** 2 + (index) + 3 : value
  );
}

module.exports = { sequenceEquation };
