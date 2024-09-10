
const uname = document.getElementById('name');
const phone = document.getElementById('phone');
const email = document.getElementById('email');
const imgqr = document.getElementById('imgQr');
const generate = document.getElementById('generate');


function generateQr() {

    const name = uname.value;
    const phoneNumber = phone.value;
    const emailAddress = email.value;
    const data = `Name: ${name}      Phone: ${phoneNumber}      Email: ${emailAddress}`;

    
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(data)}`;

    imgqr.src = qrUrl;
}
generate.addEventListener('click', (event) => {
    generateQr();
});
