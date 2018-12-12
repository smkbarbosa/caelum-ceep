;(function(){

    const cartoes = document.querySelectorAll('.cartao');
    
    for (let cartao of cartoes) {
        cartao.addEventListener('focusin', function(){
            this.classList.add('cartao--focado')
        })

        cartao.addEventListener('focusout', function(){
            this.classList.remove('cartao--focado')
        })

        cartao.addEventListener('change', function(event){
                        
            const mudaCor = event.target.classList.contains('opcoesDoCartao-radioTipo')
            
            console.log(event);

            if(mudaCor){
               this.style.backgroundColor = event.target.value
            }
        })

        cartao.addEventListener('keyup', function(event){
            if (event.target.classList.contains("opcoesDoCartao-opcao")
            && (event.key === 'Enter' || event.key === ' ' || event.key === 'NumpadEnter' )){
                event.target.click()
            }
            
        })

        cartao.addEventListener('click', function(event){

            if (event.target.classList.contains('opcoesDoCartao-remove')){
                cartao.classList.add('cartao--some');

                cartao.addEventListener('transitionend', function(){
                    this.remove();
                })
            }
        })

        

    }
 
})()