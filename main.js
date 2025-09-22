document.addEventListener("DOMContentLoaded", function () {
  const num1Input = document.getElementById("num1");
  const num2Input = document.getElementById("num2");
  const resultElement = document.getElementById("result");
  const errorMessage = document.getElementById("error-message");

  // Tombol operasi
  const addButton = document.getElementById("add-btn");
  const subtractButton = document.getElementById("subtract-btn");
  const multiplyButton = document.getElementById("multiply-btn");
  const divideButton = document.getElementById("divide-btn");

  // Fungsi untuk menampilkan hasil
  function showResult(result) {
    resultElement.textContent = result;
    resultElement.classList.remove("result-error");
    errorMessage.style.display = "none";
  }

  // Fungsi untuk menampilkan error di kolom hasil
  function showResultError(message) {
    resultElement.textContent = message;
    resultElement.classList.add("result-error");
    errorMessage.style.display = "none";
  }

  // Fungsi untuk menampilkan error di area pesan error
  function showGeneralError(message) {
    errorMessage.textContent = message;
    errorMessage.style.display = "block";
    resultElement.classList.remove("result-error");
  }

  // Fungsi untuk menangani perubahan pada input
  function handleInputChange() {
    const num1 = num1Input.value;
    const num2 = num2Input.value;

    // Jika kedua input kosong, set hasil ke 0
    if (num1 === "" && num2 === "") {
      showResult(0);
    }
  }

  // Fungsi untuk validasi input
  function validateInput(value) {
    // Cek jika input kosong
    if (value === "") {
      return { valid: true, value: 0 };
    }

    // Hapus spasi di awal dan akhir
    const trimmedValue = value.trim();

    // Cek jika input kosong setelah trim
    if (trimmedValue === "") {
      return { valid: true, value: 0 };
    }

    // Regular expression untuk memeriksa format angka desimal yang valid
    // Menerima: angka positif/negatif, dengan atau tanpa desimal
    // Tidak menerima: notasi ilmiah (e, E), karakter non-angka lainnya
    const decimalRegex = /^-?\d*\.?\d+$/;

    // Cek jika input cocok dengan format desimal yang valid
    if (!decimalRegex.test(trimmedValue)) {
      return {
        valid: false,
        error: "Input tidak valid. Harap masukkan angka yang benar",
      };
    }

    // Konversi ke number
    const numValue = Number(trimmedValue);

    // Cek jika konversi berhasil dan hasilnya finite
    if (isNaN(numValue) || !isFinite(numValue)) {
      return {
        valid: false,
        error: "Input tidak valid. Harap masukkan angka yang benar",
      };
    }

    return { valid: true, value: numValue };
  }

  // Tambahkan event listener untuk perubahan pada input
  num1Input.addEventListener("input", handleInputChange);
  num2Input.addEventListener("input", handleInputChange);

  // Fungsi penjumlahan
  addButton.addEventListener("click", function () {
    // Validasi input pertama
    const validation1 = validateInput(num1Input.value);
    if (!validation1.valid) {
      showResultError(validation1.error);
      return;
    }

    // Validasi input kedua
    const validation2 = validateInput(num2Input.value);
    if (!validation2.valid) {
      showResultError(validation2.error);
      return;
    }

    // Cek apakah kedua input kosong
    if (num1Input.value.trim() === "" && num2Input.value.trim() === "") {
      showResultError("Input tidak valid. Harap masukkan angka yang benar");
      return;
    }

    const num1 = validation1.value;
    const num2 = validation2.value;
    showResult(num1 + num2);
  });

  // Fungsi pengurangan
  subtractButton.addEventListener("click", function () {
    // Validasi input pertama
    const validation1 = validateInput(num1Input.value);
    if (!validation1.valid) {
      showResultError(validation1.error);
      return;
    }

    // Validasi input kedua
    const validation2 = validateInput(num2Input.value);
    if (!validation2.valid) {
      showResultError(validation2.error);
      return;
    }

    // Cek apakah kedua input kosong
    if (num1Input.value.trim() === "" && num2Input.value.trim() === "") {
      showResultError("Input tidak valid. Harap masukkan angka yang benar");
      return;
    }

    const num1 = validation1.value;
    const num2 = validation2.value;
    showResult(num1 - num2);
  });

  // Fungsi perkalian
  multiplyButton.addEventListener("click", function () {
    // Validasi input pertama
    const validation1 = validateInput(num1Input.value);
    if (!validation1.valid) {
      showResultError(validation1.error);
      return;
    }

    // Validasi input kedua
    const validation2 = validateInput(num2Input.value);
    if (!validation2.valid) {
      showResultError(validation2.error);
      return;
    }

    // Cek apakah kedua input kosong
    if (num1Input.value.trim() === "" && num2Input.value.trim() === "") {
      showResultError("Input tidak valid. Harap masukkan angka yang benar");
      return;
    }

    const num1 = validation1.value;
    const num2 = validation2.value;
    showResult(num1 * num2);
  });

  // Fungsi pembagian
  divideButton.addEventListener("click", function () {
    // Validasi input pertama
    const validation1 = validateInput(num1Input.value);
    if (!validation1.valid) {
      showResultError(validation1.error);
      return;
    }

    // Validasi input kedua
    const validation2 = validateInput(num2Input.value);
    if (!validation2.valid) {
      showResultError(validation2.error);
      return;
    }

    // Cek apakah kedua input kosong
    if (num1Input.value.trim() === "" && num2Input.value.trim() === "") {
      showResultError("Input tidak valid. Harap masukkan angka yang benar");
      return;
    }

    const num1 = validation1.value;
    const num2 = validation2.value;

    if (num2 === 0) {
      showResultError("Tidak dapat membagi dengan nol!");
    } else {
      showResult(num1 / num2);
    }
  });
});
