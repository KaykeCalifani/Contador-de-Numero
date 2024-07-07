function clicar(){
    //Pegando os dados do HTML
    let inicial = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let res = document.getElementById('res')
    //Verificador de preenchimento
    if (inicial.value === '' || fim.value === '' || passo.value === '' || Number(passo.value) === 0) {
        alert('Preencha todos os campos e certifique-se de que o passo não é zero!');
        return; //Serve pra interromper a execução
    }
    //Convertendo os dado pra número 
    let i = Number(inicial.value)
    let f = Number(fim.value)
    let p = Number(passo.value)
    res.innerHTML = `` //Serve pra limpar a linha
    if(i > f){//Contagem regressiva
        for(i = i; i >= f; i -= p){
            res.innerHTML += `&#x1F449; ${i} `
            console.log(i)
        }
    }else{//Contagem crescente
        for(i = i; i <= f; i += p){
            res.innerHTML += `&#x1F449; ${i} `
        } 
    }
}