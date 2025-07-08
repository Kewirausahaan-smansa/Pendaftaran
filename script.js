document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const checkbox = document.getElementById('terms');
    if (!checkbox.checked) {
        alert('Harap setujui syarat dan ketentuan terlebih dahulu');
        return;
    }

    // Validate fields
    const nama = document.getElementById('nama').value.trim();
    const email = document.getElementById('email').value.trim();
    const telepon = document.getElementById('telepon').value.trim();
    const kelas = document.getElementById('kelas').value.trim();
    const alasan = document.getElementById('alasan').value.trim();

    if (!nama || !email || !telepon || !kelas || !alasan) {
        alert('Harap isi semua bidang yang wajib diisi');
        return;
    }

    // Kirim data ke Google Sheets
    fetch('https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec', {
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
