;(function(){

    const formulario = document.querySelector('.formNovoCartao');

    formulario.addEventListener('submit', function(event){
        event.preventDefault();

        const textarea = document.querySelector('.formNovoCartao-conteudo')

        if (textarea.value.trim()){
            console.log(textarea.value);
        } else {

            const mensagem = document.createElement('p');
            mensagem.textContent = 'Digite alguma coisa!'
            mensagem.classList.add('formNovoCartao-msg')

            // this.insertBefore(mensagem, textarea);

            textarea.insertAdjacentElement('afterend', mensagem)
            mensagem.addEventListener('animationend', function(event){
                event.target.remove()
            })
        }



    })
})()