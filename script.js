document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    // Ambil data dari form
    const nama = document.getElementById('nama').value;
    const email = document.getElementById('email').value;
    const telepon = document.getElementById('telepon').value;
    const kelas = document.getElementById('kelas').value;
    const alasan = document.getElementById('alasan').value;

        // Redirect ke grup WhatsApp
        window.location.href = "https://chat.whatsapp.com/DJ8BIXKM3rKq5ZPq4m4PN"; 
    })
    
});
