function alphabetPosition(character) {
  let multiplier = 0;
  let result = '';
  if (character === character.toUpperCase()) {
    multiplier += 26;
  }
  let code = character.toUpperCase().charCodeAt(0);
  if (code > 64 && code < 91) result += code - 64;
  return parseInt(result) + multiplier;
}
module.exports = { alphabetPosition };
