export const caesarCipher = (input, shift) => {
  let inputArray = input.split('').map((e) => e.charCodeAt(0));
  if (shift < 0) shift = (Math.abs(shift) % 26) * -1;
  else shift = Math.abs(shift) % 26;
  for (let i = 0; i < inputArray.length; i++) {
    let num = inputArray[i];
    if ((num >= 65 && num <= 90) || (num >= 97 && num <= 122)) {
      if (isUppercase(num)) {
        if (num + shift < 65) num = 90 - (65 - (num + shift + 1));
        else if (num + shift > 90) num = 65 + (num + shift - 91);
        else num = num + shift;
      } else {
        if (num + shift < 97) num = 122 - (97 - (num + shift + 1));
        else if (num + shift > 122) num = 97 + (num + shift - 123);
        else num = num + shift;
      }
    }
    inputArray[i] = num;
  }
  return inputArray.map((e) => String.fromCharCode(e)).join('');
};

const isUppercase = (num) =>
  String.fromCharCode(num) === String.fromCharCode(num).toUpperCase();
