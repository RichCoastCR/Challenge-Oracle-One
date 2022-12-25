var msj = document.querySelector("#textarea"); /*agarra el texto del textarea y lo envia a la funcion encriptar*/
var btnEncriptar = document.querySelector("#encriptar"); /*btn encriptar*/
var btnDesencriptar = document.querySelector("#desencriptar"); /*btn desencriptar*/
var btnCopiar = document.querySelector("#copiar"); /*btn encriptar*/
var msjFinal = document.querySelector("#resultado"); /*text area de resultado*/


/*Funcion encriptar*/
function msjEncriptar(txt) {
    switch (txt) {
      case 'a':
        return 'ia';
      case 'e':
        return 'enter';
      case 'i':
        return 'imes';
      case 'o':
        return 'ober';
      case 'u':
        return 'ufat';
      default:
        return txt;
    }
  }
  

function encriptar(txt) {
    var msjEncriptado = txt.replace(/a|e|i|o|u/g, msjEncriptar); /*reemplaza las letras introducidas por la funcion msjEncriptar*/
    let noEncontrado = document.getElementById('ocultar');
    let mensajeFinal = document.getElementById('resultado');
    let copiar = document.getElementById('copiar');
    let enter = document.getElementById('encriptar');
    noEncontrado.style.display = "none";
    mensajeFinal.style.display = 'flex';
    copiar.style.display = 'block';
    return msjEncriptado;
}

/*funcion desencriptar*/
function msjDesencriptar(txt) {
    switch (txt) {
      case 'ia':
        return 'a';
      case 'enter':
        return 'e';
      case 'imes':
        return 'i';
      case 'ober':
        return 'o';
      case 'ufat':
        return 'u';
      default:
        return txt;
    }
  }
  
  function desencriptar(txt) {
    let msjDesencriptado = txt.replace(/ia|enter|imes|ober|ufat/g, msjDesencriptar);
    if (txt === msjEncriptar) return msjFinal
    else return msjDesencriptado;
  }

btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var txt = msj.value;
    var msjSeguro = encriptar(txt);
    msjFinal.value = msjSeguro;
    console.log(msjSeguro);
});

btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var txt = msj.value;
    var msjSeguro = desencriptar(txt);
    msjFinal.value = msjSeguro;
    console.log(msjSeguro);
});

btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    msjFinal.select();
    navigator.clipboard.writeText(msjFinal.value);
});

function toggleElementVisibility(elementId, shouldShow) {
  const element = document.getElementById(elementId);
  if (shouldShow) {
    element.style.display = 'block';
  } else {
    element.style.display = 'none';
  }
}
function toggleElementVisibility(elementId, shouldShow) {
    const element = document.getElementById(elementId);
    if (shouldShow) {
      element.style.display = 'block';
    } else {
      element.style.display = 'none';
    }
  }
  
  btnEncriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var txt = msj.value;
    var msjSeguro = encriptar(txt);
    msjFinal.value = msjSeguro;
    console.log(msjSeguro);
    toggleElementVisibility('ocultar', false);
    toggleElementVisibility('resultado', true);
    toggleElementVisibility('copiar', true);
  });
  
  btnDesencriptar.addEventListener("click", function (event) {
    event.preventDefault();
    var txt = msj.value;
    var msjSeguro = desencriptar(txt);
    msjFinal.value = msjSeguro;
    console.log(msjSeguro);
    toggleElementVisibility('ocultar', false);
    toggleElementVisibility('resultado', true);
    toggleElementVisibility('copiar', true);
  });
  
  btnCopiar.addEventListener("click", function (event) {
    event.preventDefault();
    msjFinal.select();
    navigator.clipboard.writeText(msjFinal.value);
  });
  