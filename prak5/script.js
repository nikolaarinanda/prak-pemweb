// Variabel untuk menyimpan angka dan operasi
let number = "";
// Variabel untuk menampung tampilan operasi yang sedang dilakukan
let displayOperate = "";
// Variabel untuk menampung nilai dan operator dalam operasi
let arrayOper = [];

// Fungsi untuk menambahkan angka ke input
function add(num) {
  displayOperate += num;
  // menampilkan operasi yang sedang dilakukan ke halaman web berdasarkan id tag
  document.getElementById("nilai-hasil").textContent = displayOperate;
  number += num;
}

// Fungsi untuk menambahkan operator pembagian
function bagi() {
  displayOperate += " / ";
  document.getElementById("nilai-hasil").textContent = displayOperate;
  arrayOper.push(parseFloat(number));
  arrayOper.push("/");
  number = "";
}

// Fungsi untuk menambahkan operator perkalian
function kali() {
  displayOperate += " x ";
  document.getElementById("nilai-hasil").textContent = displayOperate;
  arrayOper.push(parseFloat(number));
  arrayOper.push("*");
  number = "";
}

// Fungsi untuk menambahkan operator pengurangan
function kurang() {
  displayOperate += " - ";
  document.getElementById("nilai-hasil").textContent = displayOperate;
  arrayOper.push(parseFloat(number));
  arrayOper.push("-");
  number = "";
}

// Fungsi untuk menambahkan operator penambahan
function tambah() {
  displayOperate += " + ";
  document.getElementById("nilai-hasil").textContent = displayOperate;
  arrayOper.push(parseFloat(number));
  arrayOper.push("+");
  number = "";
}

// Fungsi untuk mengevaluasi ekspresi dan menampilkan hasil
function hasil() {
  if (number !== "") {
    arrayOper.push(parseFloat(number));
  }

  // Memproses operasi perkalian dan pembagian terlebih dahulu
  for (let i = 1; i < arrayOper.length; i += 2) {
    if (arrayOper[i] === "*" || arrayOper[i] === "/") {
      const operator = arrayOper[i];
      const prevNumber = arrayOper[i - 1];
      const nextNumber = arrayOper[i + 1];

      let result;
      if (operator === "*") {
        result = prevNumber * nextNumber;
      } else if (operator === "/") {
        if (nextNumber !== 0) {
          result = prevNumber / nextNumber;
        } else {
          document.getElementById("nilai-hasil").textContent =
            "Error: Pembagian oleh nol";
          return;
        }
      }

      // Mengganti elemen-elemen yang terlibat dalam operasi perkalian/pembagian dengan hasilnya
      arrayOper.splice(i - 1, 3, result);
      i -= 2; // Menggeser pointer kembali
    }
  }

  // Kemudian, memproses operasi penambahan dan pengurangan
  let result = arrayOper[0];
  for (let i = 1; i < arrayOper.length; i += 2) {
    const operator = arrayOper[i];
    const nextNumber = arrayOper[i + 1];

    if (operator === "+") {
      result += nextNumber;
    } else if (operator === "-") {
      result -= nextNumber;
    }
  }

  // menampilkan hasil operasi
  document.getElementById("nilai-hasil").textContent = result;
}

// Fungsi untuk mereset kalkulator
// function clearCalculator() {
//   number = "";
//   displayOperate = "";
//   arrayOper = [];
//   document.getElementById("nilai-hasil").textContent = "";
// }
