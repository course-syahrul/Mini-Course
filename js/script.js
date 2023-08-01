var bannerIndex = 1;

function nextbanner(n) {
    showbanner(bannerIndex += n);
}

function showbanner(n) {
    var i;
    var banner = document.getElementsByClassName("banner");

    if (n > banner.length) {
        bannerIndex = 1;
    }
    if (n < 1) {
        bannerIndex = banner.length;
    }
    for (i = 0; i < banner.length; i++) {
        banner[i].style.display = "none";
    }

    banner[bannerIndex - 1].style.display = "block";
}

function nextBannerAuto() {
    nextbanner(1);
}

setInterval(nextBannerAuto, 3000);

function validateForm() {
    const arrLabel = Array.from(document.querySelectorAll('.label-error'));
    var name = document.getElementById("input-name");
    var email = document.getElementById("input-email");
    var destination = document.getElementById("input-destination");

    var textName = name.value;
    var textEmail = email.value;
    var textDest = destination.value;

    const arrInput = [textName,textEmail,textDest];

    if(textName.trim() === '') {
        setFormError(name,arrLabel,0,true,'Silahkan isi nama anda');
    }

    if(textEmail.trim() === '') {
        setFormError(email,arrLabel,1,true,'Silahkan isi email anda');
    }

    if(textDest.trim()==='') {
        setFormError(destination,arrLabel,2,true,'Silahkan pilih tujuan anda');
    } else {
        setFormError(destination,arrLabel,2,false,'');
    }

    if(!isNameValid(textName)) {
        setFormError(inputName,arrLabel,0,true,'Nama minimal 10 karakter dan hanya menggunakan huruf saja');
        return false;
    }

    if(!isEmailValid(textEmail)) {
        setFormError(inputEmail,arrLabel,1,true,'Masukkan email anda dengan benar');
        return false;
    }

    for (let i = 0; i < arrInput.length; i++) {
        if (arrInput[i].trim() === '') {
            return false;
        } 
    }

    alertSuccess(textName,textEmail,textDest);
}

function scrollToSectionHome() {
    var section = document.getElementById('section-home');
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionPackage() {
    var section = document.getElementById('section-ourpackage');
    section.scrollIntoView({ behavior: "smooth" });
}

function scrollToSectionCallus() {
    var section = document.getElementById('section-callus');
    section.scrollIntoView({ behavior: "smooth" });
}


function alertSuccess(name,email,dest) {
    var modal = document.getElementById('alert-success');
    var dataName = document.getElementById('data-name');
    var dataEmail = document.getElementById('data-email');
    var dataDest = document.getElementById('data-destination');

    modal.style.display = 'block';
    dataName.textContent = name;
    dataEmail.textContent = email;
    dataDest.textContent = dest;
}

function closeAlertSuccess() {
    var modal = document.getElementById('alert-success');
    modal.style.display = 'none';
    
    document.getElementById("form-callus").reset();
}

function isNameValid(nameValue) {
    const isNameValid = /^[a-zA-Z\s]+$/;
    return isNameValid.test(nameValue);
}

function isEmailValid(emailValue) {
    const isEmailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return isEmailValid.test(emailValue);
}

document.addEventListener('DOMContentLoaded', function() {
    const arrLabel = Array.from(document.querySelectorAll('.label-error'));
    const inputName = document.getElementById('input-name');
    const inputEmail = document.getElementById('input-email');
  
    inputName.addEventListener('input', function() {
        const nameValue = inputName.value.trim();
      if (nameValue.length < 10 || !isNameValid(nameValue)) {
        setFormError(inputName,arrLabel,0,true,'Nama minimal 10 karakter dan hanya menggunakan huruf saja');
      } else {
        setFormError(inputName,arrLabel,0,false,'');
      }
    });
  
    inputEmail.addEventListener('input', function() {
        const emailValue = inputEmail.value.trim();
      if (!isEmailValid(emailValue)) {
        setFormError(inputEmail,arrLabel,1,true,'Masukkan email anda dengan benar');
      } else {
        setFormError(inputEmail,arrLabel,1,false,'');
      }
    });
});

function setFormError(input,arrLabel,index,condition,msg) {
    if(condition) {
        input.style.borderColor = 'rgb(161, 22, 22)';
        input.style.outline = '1px solid rgb(161, 22, 22)';
        arrLabel[index].textContent = msg;
        arrLabel[index].style.display = 'block';
    } else {
        input.style.borderColor = '#29323D';
        input.style.outline = '1px solid #29323D';
        arrLabel[index].style.display = 'none';
    }
}