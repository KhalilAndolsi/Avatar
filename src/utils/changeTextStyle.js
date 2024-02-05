export const changeTextStyle = (text) => {
  let result = '';
  for (let i = 0; i < text.length; i++) {
    if ("A" <= text[i] && text[i] <= "Z") {
      result += " " + text[i].toLowerCase();
    } else {
      result += text[i];
    }
  }
  return result
}