<?php
// Nama: Nikola Arinanda       NIM: 121140202        Kelas: RB

class Orang { //deklarasi class dan variabel
  public $nama;
  public $nim;
  public $tglLhr;
  public $call;

  public function __construct($nama, $nim, $tglLhr, $call) { //inisiasi objek sehingga bisa dipanggil
    $this->nama = $nama;
    $this->nim = $nim;
    $this->tglLhr = $tglLhr;
    $this->call = $call;
  }

  public function tampil() { //fungsi yang akan terpanggil otomatis
    echo "Nama: " . $this->nama . "<br>";
    echo "NIM: " . $this->nim . "<br>";
    echo "Tanggal Lahir: " . $this->tglLhr . "<br>";
    echo "Status: " . $this->call . "<br>";
    echo "<br>";
  }
}

$Orang1 = new Orang("Nikola Arinanda", "121140202", "28 Agustus 2002", "Mahasiswa");
$Orang1->tampil();

$Orang2 = new Orang("Jarod", "130114002", "1987" , "Karyawan");
$Orang2->tampil();

?>