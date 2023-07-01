
const btns = document.querySelectorAll('.theme ul button');
const body = document.querySelector('body');

// verificar o tema escolhido
if(localStorage.getItem('theme')=='light'){
    body.classList.add('light');
}

btns.forEach((btn) =>{
    btn.addEventListener('click',function(){
        
        if(btn.value =='light'){
            body.classList.add('light');
            localStorage.setItem('theme','light');
        }
        else{
            body.classList.remove('light');
            localStorage.setItem('theme','dark');
        }
    })
})



const btnCalcular = document.querySelector('#btn-calcular');
const btnRefazer = document.querySelector('#btn-refazer');
const contentform = document.querySelector('#content-form');
const contentResult = document.querySelector('#content-result');


const peso = document.querySelector('#peso');
const altura = document.querySelector('#altura');
const nome = document.querySelector('#nome');

btnCalcular.addEventListener('click', function () {

    if (altura.value != '' && peso.value != '' && nome.value!='') {
        contentform.style.display = 'none';
        contentResult.style.display = 'block';

        let imc = peso.value /(altura.value*altura.value);
       
        let resultImc =document.querySelector('#resutl-imc');
       resultImc.innerHTML = imc.toFixed(2);

       let resultClassific = document.querySelector("#result-class");

       let resultnome = document.querySelector("#result-nome");
       resultnome.innerHTML = nome.value;
        
       if(imc <=18.5){
        resultImc.style.color = 'red';
        resultClassific.innerHTML = 'Magreza';
       }
       else if(imc <=24.9){
        resultImc.style.color ='#05FF00';
        resultClassific.innerHTML = 'normal'
       }
       else if( imc <=29.9){
         resultImc.style.color = '#FFE500';
         resultClassific.innerHTML='sobrepeso'
       }
       else if( imc <= 39.9){
        resultImc.style.color ='#FF0000';
        resultClassific .innerHTML = 'obesidade';
       }
       else{
         resultImc.style.color ='#830000';
         resultClassific.innerHTML = 'obesidade grave'
       }
    }
    else {
        alert('preencha todos os campos!');
    }
});

btnRefazer.addEventListener('click', function () {
    contentform.style.display = 'block';
    contentResult.style.display = 'none';

    peso.value =''
    altura.value =''
    nome.value=''
});

//----------------footer------------
// selecionando os elementos
const btnlgpd = document.querySelector('#btn-lgpd');
const footer = document.querySelector('.footer');
// eventos js
if (localStorage.getItem('fechoulgpd') == 'sim') {
    footer.style.display = 'none';
}

btnlgpd.addEventListener('click', function () {

    footer.style.display = 'none';
    //valor removido quando a aba e fechada
    // sessionStorage.setItem('fechoulgpd','sim');

    // mantem quando fecha navergador
    localStorage.setItem('fechoulgpd', 'sim');
})