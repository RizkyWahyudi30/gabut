// selang seling biasa
let panjangAngka = 15;
let hasil = [];

for (let i = 1; i <= panjangAngka; i++) {
  if (i % 2 == 0) {
    hasil.push(i); // ganjil
  } else {
    hasil.push(i);
  }
}
console.log("Pola ganjil genap selang seling:", hasil.join(", "));
