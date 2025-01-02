function calcularDiferencaData(dataInicial) {
    const hoje = new Date();
    const dataInicio = new Date(dataInicial);
  
    // Calcular a diferença em milissegundos
    const diferencaTempo = hoje - dataInicio;
  
    // Converter a diferença para dias
    const umDia = 24 * 60 * 60 * 1000; // Milissegundos em um dia
    const diasTotais = Math.floor(diferencaTempo / umDia);
  
    // Calcular a diferença em anos, meses e dias
    let anos = hoje.getFullYear() - dataInicio.getFullYear();
    let meses = hoje.getMonth() - dataInicio.getMonth();
    let dias = hoje.getDate() - dataInicio.getDate();
  
    if (dias < 0) {
      meses -= 1;
      dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate(); // Dias no mês anterior
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

// Exemplo de uso
const data = "2023-12-19";
const diferenca = calcularDiferencaData(data);

const divNamoro = document.querySelector('.tempo-namoro')

if(diferenca.anos == 1){
  divNamoro.innerHTML += `${diferenca.anos} ano, `
} else {
  divNamoro.innerHTML += `${diferenca.anos} anos, `
}

if(diferenca.meses == 1){
  divNamoro.innerHTML += `${diferenca.meses} mês, `
} else {
  divNamoro.innerHTML += `${diferenca.meses} meses, `
}

if(diferenca.dias == 1){
  divNamoro.innerHTML += `e ${diferenca.dias} diajuntinhos.`
} else {
  divNamoro.innerHTML += `e ${diferenca.dias} dias juntinhos.`
}