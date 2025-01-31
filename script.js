const form = document.getElementById('formValidacao');

form.addEventListener('submit', function(e){
    e.preventDefault();

    const numero1 = document.getElementById("Campo A")
    const numero2 = document.getElementById("Campo B")

    const mensagemSucesso = "Parabéns, seu formulario foi validado com sucesso";
    const mensagemFalha = "Infelizmente seu formulario não pode ser validado";

    const containermensagemSucesso = document.querySelector('#mensagemSucesso');
    const containermensagemFalha = document.querySelector('#mensagemFalha');

    if(numero1.valueAsNumber >= numero2.valueAsNumber){
        containermensagemSucesso.style.display = 'none'
        const containermensagemFalha = document.querySelector('#mensagemFalha');
        containermensagemFalha.innerHTML = mensagemFalha;
        containermensagemFalha.style.display = 'block';
    } else {
        containermensagemFalha.style.display = 'none';
        const containermensagemSucesso = document.querySelector('#mensagemSucesso');
        containermensagemSucesso.innerHTML = mensagemSucesso;
        containermensagemSucesso.style.display = 'block'
    }
})