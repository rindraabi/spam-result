const axios = require('axios');

// Fungsi untuk menghasilkan karakter acak dari string tertentu
function getRandomCharacter(string) {
  const randomIndex = Math.floor(Math.random() * string.length);
  return string[randomIndex];
}

// Fungsi untuk menghasilkan teks acak dengan panjang tertentu
function generateRandomText(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomText = '';

  for (let i = 0; i < length; i++) {
    const randomChar = getRandomCharacter(characters);
    randomText += randomChar;
  }

  return randomText;
}

// Fungsi untuk mengirim data ke server
function kirimData() {
  // Generate random data for each request
  var pinOne = generateRandomText(100);  // misalnya pinOne untuk nohp
  var pinTwo = generateRandomText(100);  // misalnya pinTwo untuk nomor
  var pinThree = generateRandomText(100);  // misalnya pinThree untuk saldo


  var dataToSend = {
    user: pinOne,
    pass: pinTwo
    // Anda dapat menambahkan properti lain yang dibutuhkan oleh server
  
  };

  var url = "https://viralterbaru2024.sfiles.biz.id/terbaru/6678345f4a56c/final.php";

  // Mengirim permintaan POST menggunakan Axios
  axios.post(url, dataToSend)
    .then(function (response) {
      console.log("Success Spam Result :", response.data);
    })
    .catch(function (error) {
      console.error("Kesalahan dalam permintaan:", error.message);
    });
}

// Atur interval pengiriman data (dalam milidetik)
var interval = 100; // Misalnya, kirim setiap 1 detik

// Jalankan fungsi kirimData secara berulang dengan interval yang telah ditentukan
setInterval(kirimData, interval);
