// persegi
function bentukPersegi(sisi) {
  let hasil = "";
  for (let i = 0; i < sisi; i++) {
    hasil += "* ".repeat(sisi) + "\n";
  }
  console.log(hasil);
}

bentukPersegi(7);

// persegi panjang
function persegiPanjang(panjang, lebar) {
  let hasil = "";
  for (let i = 0; i < panjang; i++) {
    hasil += "* ".repeat(panjang) + "\n";
  }
  console.log(hasil);
}
persegiPanjang(10, 5);

// linglkaran
function buatLingkaran(radius) {
  let hasil = "";

  for (let y = -radius; y <= radius; y++) {
    for (let x = -radius; x <= radius; x++) {
      if (Math.sqrt(x * x + y * y) <= radius) {
        hasil += "*";
      } else {
        hasil += " ";
      }
    }
    hasil += "\n";
  }
  console.log(hasil);
}

buatLingkaran(5); // Radius lingkaran = 5
