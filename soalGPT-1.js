// menghitung luas lingkaran
function luasLingkaran(r) {
  const pi = Math.PI; // konstanta phi
  return pi * r * r; // rumus luas lingkaran
}
console.log(luasLingkaran(98));

// lebih luas
function soalLuasLingkaran(r) {
  const phi = Math.PI;
  const luas = phi * r * r;
  const keliling = 2 * phi * r;
  const diamater = 2 * r;

  return { luas, keliling, diamater };
}

const hasil = soalLuasLingkaran(13);
console.log(
  `Luas: ${hasil.luas}, Keliling: ${hasil.keliling}, Diameter: ${hasil.diamater}`
);

// menghitung juring lingkaran

// 0 sebagai sudut pusat lingkaran  (dalam derajat)
// r sebagai jari jari lingkaran
// phi sebagai konstanta pi

function hitungJuring(r, sudut) {
  const pi = Math.PI;
  return (sudut / 360) * pi * r * r;
}
console.log("Luas juring adalah ", hitungJuring(9, 45));

// memghitung panjang busur lingkaran
function panjangBusur(r, sudut) {
  const pi = Math.PI;
  return (sudut / 360) * pi * r;
}

console.log("Panjang busur adalah ", panjangBusur(17, 180));

// menghitung luas tembereng lingkaran

//
function luasTembereng(r, sudut) {
  const pi = Math.PI;
  const radian = ((sudut / 360) * pi) / 180;

  const luasJuring = (sudut / 360) * pi * r * r;
  const luasSegitiga = 0.5 * r * r * Math.sin(radian);

  return luasJuring - luasSegitiga; // RUMUS LUAS TEMBERENG
}
console.log("Luas tembereng adalah ", luasTembereng(9, 10));

// menggunakann 22/7

// dengan menggunakan 22/7 kita tidak perlu menggunakan Math.PI tapi langsung eksplisit menulis 22/7
function hitungJuring(r, sudut) {
  const pi = 22 / 7;
  return (sudut / 360) * pi * r * r;
}
console.log("Luas juring menggunakan 22/7 adalah ", hitungJuring(5, 36));

function panjangBusur(r, sudut) {
  const pi = 22 / 7;
  return (sudut / 360) * pi * r;
}
console.log("Panjang busur menggunakan 22/7 adalah ", panjangBusur(8, 12));

function luasTembereng(r, sudut) {
  const pi = 22 / 7;
  const radian = sudut / pi / 180;

  const luasJuring = (sudut / 360) * pi * r * r;
  const luasSegitiga = 0.5 * r * r * Math.sin(radian);

  return luasJuring - luasSegitiga;
}
console.log("Luas tembereng menggunaka 22/7 adlalah ", luasTembereng(8, 15));
