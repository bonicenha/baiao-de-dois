const hoje = new Date(new Date().toISOString().split("T")[0]);

function calcularDiferencaData(dataInicial) {

    const dataInicio = new Date(dataInicial);
  
    const diferencaTempo = hoje - dataInicio;
  
    const umDia = 24 * 60 * 60 * 1000; 
    const diasTotais = Math.floor(diferencaTempo / umDia);
  
    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();
  
    if (dias < 0) {
      meses -= 1;
      dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
    }
  
    if (meses < 0) {
      anos -= 1;
      meses += 12;
    }
  
    return {
      anos,
      meses,
      dias,
      diasTotais,
    };
  }

const data = "2023-12-19";
const diferenca = calcularDiferencaData(data);

const divNamoro = document.querySelector('.tempo-namoro')

if(diferenca.anos == 1){
  divNamoro.innerHTML += `${diferenca.anos} ano`
} else {
  divNamoro.innerHTML += `${diferenca.anos} anos`
}


if(diferenca.meses == 0){
  // nada
} else if(diferenca.meses == 1){
  divNamoro.innerHTML += `, ${diferenca.meses} mês`
} else {
  divNamoro.innerHTML += `, ${diferenca.meses} meses`
}

if(diferenca.dias == 0){
 // nada
}
else if(diferenca.dias == 1){
  divNamoro.innerHTML += ` e ${diferenca.dias} dia`
} else {
  divNamoro.innerHTML += ` e ${diferenca.dias} dia`
}

divNamoro.innerHTML += ' juntinhos.'

const diasTotaisdiv = document.querySelector('.dias-totais').innerHTML = diferenca.diasTotais


// carroussel
let interval

function startSliderInterval() {
  clearInterval(interval);
  interval = setInterval(nextSlider, 6000);
}

const slider = document.querySelectorAll('.slider')
const btnPrev = document.getElementById('prev')
const btnNext = document.getElementById('next')

let currentSlide = 0

function hideSlider() {
  slider.forEach(item => item.classList.remove('on'))
}

function showSlider(){
  slider[currentSlide].classList.add('on')
}

function nextSlider() {
  hideSlider()
  if(currentSlide === slider.length -1) {
    currentSlide = 0
  } else {
    currentSlide++
  }
  showSlider()
  startSliderInterval();
}

function prevSlider() {
  hideSlider()
  if(currentSlide === 0) {
    currentSlide = slider.length -1
  } else {
    currentSlide--
  }
  showSlider()
  startSliderInterval()
}

startSliderInterval()


btnNext.addEventListener('click', nextSlider)
btnPrev.addEventListener('click', prevSlider)

//aniversario
let diaHoje = hoje.getDate() +1;
let mesHoje = hoje.getMonth() +1;
const ElementoAniversario = document.getElementById("aniversario-namoro")
const ElementConfete = document.getElementById("confetes")

if(mesHoje === 12 && diaHoje === 19){
  ElementoAniversario.innerHTML = `&#129395; Hoje é nosso <span class="roxo">aniversário</span> de namoro, parabéns pra gente &#129395;`
  ElementConfete.style.display = "block"
} else if(diaHoje === 19){
  ElementoAniversario.innerHTML = `&#129395; Hoje é nosso <span class="roxo">mêsversário</span> uhuul &#129395;`
  ElementConfete.style.display = "block"
}