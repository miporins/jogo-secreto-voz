function verificaSeOChutePossuiUmValorValido(chute) {

  console.log(chute)
  const numero = +chute
  
  if (chuteForInvalido(numero)) {
    elementoChute.innerHTML += `<div>Valor inválido: diga um número entre ${menorValor} e ${maiorValor}</div>`
    return
  }

  if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
    elementoChute.innerHTML += `
    <div>Valor inválido: Fale um número entre ${menorValor} e ${maiorValor}</div>
    `
    return
}

  if (numero === numeroSecreto) {
    document.body.innerHTML = `
    <h2>Você acertou!</h2>
    <h3>O número secreto era ${numeroSecreto}</h3>

    <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
    `
  } else if (numero > numeroSecreto) {
    elementoChute.innerHTML += `
    <div>O número secreto é menor <i class="fa-solid fa-circle-down" style="color: #f21c1c;"></i></div>
    `
  } else {
    elementoChute.innerHTML += `
    <div>O número secreto é maior  <i class="fa-solid fa-circle-up" style="color: #36c819;"></i>
    `
  }
}

function chuteForInvalido(numero) {
  return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
  return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
  if(e.target.id == 'jogar-novamente') {
    window.location.reload()
  }
})