var textInput = document.querySelector("#texto_input")
var textOutput = document.querySelector("#texto_output")

function criptografar() {
      var texto = textInput.value;
      var resultadoCripto = texto.replace (/e/g, "enter").replace(/i/g, "imes").replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat")

      document.getElementById("texto_output").innerHTML = '<textarea readonly class="result" id="texto_output">' + resultadoCripto + '</textarea>' + '<button class="input_botao2" id="copiar" onclick="copiar()" >Copiar</button>'
}


function descriptografar() {
  var texto = textInput.value;

  var resultadoDescripto = texto.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u")

  document.getElementById("texto_output").innerHTML = '<textarea readonly class="result" id="texto_output">' + resultadoDescripto + '</textarea>' + '<button class="input_botao2" id="copiar" onclick="copiar()" >Copiar</button>'
}

//Copar o texto criptografado
function copiar(){
  var textoCopiar = document.querySelector('.result');
  
  textoCopiar.select();
  document.execCommand('copy');
  alert("Seu texto foi copiado!")
}

//Mudar o texto do botão de iniciar
  function mudarTexto() {
    var elemento = document.querySelector('.entrar');
    elemento.innerHTML = "Partiu!";
  }
  
function voltarTexto() {
    var elemento = document.querySelector('.entrar');
    elemento.innerHTML = "Partiu?";
  }