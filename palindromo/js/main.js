function checkPalindromo (str) {
  return str == str.split('').reverse().join('');
}

var check = checkPalindromo ("anna");

console.log(check);
