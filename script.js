document.getElementById("btn1").addEventListener("click", function () {
    toggleInfo("info1", "btn1");
});

document.getElementById("btn2").addEventListener("click", function () {
    toggleInfo("info2", "btn2");
});

document.getElementById("btn3").addEventListener("click", function () {
    toggleInfo("info3", "btn3");
});

function toggleInfo(id, buttonId) {
    var infoElement = document.getElementById(id);
    var buttonElement = document.getElementById(buttonId);

    if (infoElement.style.display === "none") {
        infoElement.style.display = "block";
        buttonElement.textContent = "Less Info";
    } else {
        infoElement.style.display = "none";
        buttonElement.textContent = "More Info";
    }
}

function cekKolomKosong() {
    var kolomInput = document.getElementById('email');

    if (kolomInput.value.trim() === '') {
        kolomInput.style.border = "1px solid red";
        alert('Kolom harus diisi');
        return false; // Formulir tidak akan disubmit
    } else {
        alert('Form Submitted')
        return true;
    }
}