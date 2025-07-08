document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const kelas = document.getElementById('kelas').value;
    const alasan = document.getElementById('alasan').value;

    // Kirim data ke Google Sheets
    fetch('https://script.google.com/macros/s/https://docs.google.com/spreadsheets/d/1Bt1q0OGfGVoHuOOQflfQLwX0U7uykNzgAfEiFVJDc3k/edit?usp=sharing/exec', {
        method: 'POST',
        body: JSON.stringify({ nama, email, telepon, kelas, alasan }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        // Redirect ke grup WhatsApp
        window.location.href = "https://chat.whatsapp.com/DJ8BIXKM3rKq5ZPq4m4PN"; 
    })
    .catch(error => console.error('Error:', error));
});
