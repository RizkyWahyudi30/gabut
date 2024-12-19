// perpangkatan
function soalPerpangkatan() {
  console.log("soal Perpangkatan : ");

  // soal 1
  let soalPangkat1 = Math.pow(4, 5); // 4^5
  console.log("1. Berapakah hasil dari 4^5? ");
  console.log("Jawaban: " + soalPangkat1);

  // soal 2
  let soalPangkat2 = Math.pow(3, 6);
  console.log("2. Berapakah hasil dari 3^6");
  console.log("Jawaban: " + soalPangkat2);

  // soal 3
  let soalPangkat3 = Math.pow(9, 8);
  console.log("3. Berapakah hasil dari 9^8?");
  console.log("Jawaban: " + soalPangkat3);
}

// logaritma
function soalLogaritma() {
  console.log("Soal Logatima : ");

  // soal 1
  let soalLog1 = Math.log2(7); // 3(7)
  console.log("1. Berapakah hasil dari log3(7)? ");
  console.log("Jawaban: " + soalLog1);

  // soal 2
  let soalLog2 = Math.log10(6);
  console.log("2. Berapakah hasil dari log10(7)?");
  console.log("Jawaban: " + soalLog2);

  // soal 3
  let soalLog3 = Math.log(7) / Math.log(3); // log3(7)
  console.log("3. Berapakah hasil dari log3(7)?");
  console.log("Jawaban: " + soalLog3);
}

soalPerpangkatan();
soalLogaritma();
