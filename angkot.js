var jumlahAngkot = 30;
var noAngkot = 1;
var angkotBeroperasi = 15;

// while
while (noAngkot <= angkotBeroperasi) {
  console.log("Angkot no " + noAngkot + " beroperasi dengan baik");
  noAngkot++;
}

// for
for (noAngkot = angkotBeroperasi + 1; noAngkot <= jumlahAngkot; noAngkot++) {
  console.log("Angkot no " + noAngkot + " tidak sedang beroperasi");
}
