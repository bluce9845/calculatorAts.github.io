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

  // Fungsi untuk menampilkan error pembagian dengan nol
  function showError() {
    errorMessage.style.display = "block";
  }

  // Fungsi untuk menampilkan error input tidak valid
  function showInputError() {
    resultElement.textContent =
      "Input tidak valid. Harap masukkan angka yang benar";
    resultElement.classList.add("result-error");
    errorMessage.style.display = "none";
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

  // Tambahkan event listener untuk perubahan pada input
  num1Input.addEventListener("input", handleInputChange);
  num2Input.addEventListener("input", handleInputChange);

  // Fungsi penjumlahan
  addButton.addEventListener("click", function () {
    // Cek apakah kedua input kosong
    if (num1Input.value === "" && num2Input.value === "") {
      showInputError();
      return;
    }

    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    showResult(num1 + num2);
  });

  // Fungsi pengurangan
  subtractButton.addEventListener("click", function () {
    // Cek apakah kedua input kosong
    if (num1Input.value === "" && num2Input.value === "") {
      showInputError();
      return;
    }

    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    showResult(num1 - num2);
  });

  // Fungsi perkalian
  multiplyButton.addEventListener("click", function () {
    // Cek apakah kedua input kosong
    if (num1Input.value === "" && num2Input.value === "") {
      showInputError();
      return;
    }

    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;
    showResult(num1 * num2);
  });

  // Fungsi pembagian
  divideButton.addEventListener("click", function () {
    // Cek apakah kedua input kosong
    if (num1Input.value === "" && num2Input.value === "") {
      showInputError();
      return;
    }

    const num1 = parseFloat(num1Input.value) || 0;
    const num2 = parseFloat(num2Input.value) || 0;

    if (num2 === 0) {
      showError();
    } else {
      showResult(num1 / num2);
    }
  });
});
