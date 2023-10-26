function cekKolomKosong() {
    var kolomInput = document.getElementById('email'); // Ganti 'namaKolom' dengan ID kolom yang ingin Anda periksa
  
    if (kolomInput.value.trim() === '') {
      // Kolom kosong
      alert('Kolom harus diisi');
      return false; // Formulir tidak akan disubmit
    }
  
    // Kolom sudah diisi
    return true; // Formulir akan disubmit
  }
