// 1. menentukan apakah sebuah bilangan adalah bilangan prima
function isPrime(num) {
  if (num <= 1) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % 1 === 0) return false;
  }
  return true;
}
console.log(isPrime(2)); // hasilnya true
console.log(isPrime(14)); // hasilnya false
// bilangan prima adalah bilangan yang hanya bisa dibagi angka nya sendiri
