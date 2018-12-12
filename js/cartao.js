;(function () {

    'use strict'

    let numeroCartao = 1;

    const criaCartaoInsereMural = function (dadosCartao) {
        const cartao = document.createElement('article');
        const mural = document.querySelector('.mural');

        cartao.id = 'cartao_' + numeroCartao;
        cartao.classList.add('cartao');
        cartao.tabIndex = 0;

        if(dadosCartao.cor){
            cartao.style.backgroundColor = dadosCartao.cor;
        }

        if(dadosCartao.classe){
            cartao.classList.add(dadosCartao.classe);
        }

        cartao.innerHTML = `
                    <div class="opcoesDoCartao">
                <button class="opcoesDoCartao-remove opcoesDoCartao-opcao">
                    <svg>
                        <use xlink:href="#iconeRemover"></use>
                    </svg>
                </button>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#EBEF40" id="corPadrão-cartao${numeroCartao}"
                       class="opcoesDoCartao-radioTipo corCartao" checked>
                <label for="corPadrão-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #EBEF40;"
                       tabindex="0">
                    Padrão
                </label>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#F05450" id="corImportante-cartao${numeroCartao}"
                       class="opcoesDoCartao-radioTipo corCartao">
                <label for="corImportante-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #F05450;"
                       tabindex="0">
                    Importante
                </label>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#92C4EC" id="corTarefa-cartao${numeroCartao}"
                       class="opcoesDoCartao-radioTipo corCartao">
                <label for="corTarefa-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #92C4EC;"
                       tabindex="0">
                    Tarefa
                </label>
    
                <input type="radio" name="corDoCartao${numeroCartao}" value="#76EF40" id="corInspiração-cartao${numeroCartao}"
                       class="opcoesDoCartao-radioTipo corCartao">
                <label for="corInspiração-cartao${numeroCartao}" class="opcoesDoCartao-tipo opcoesDoCartao-opcao" style="color: #76EF40;"
                       tabindex="0">
                    Inspiração
                </label>
            </div>
            <p class="cartao-conteudo" contenteditable tabindex="0">${dadosCartao.conteudo}</p>
            `;
        cartao.addEventListener('focusin', function () {
            this.classList.add('cartao--focado')
        });
        cartao.addEventListener('focusout', function () {
            if (this.classList.contains('cartao--focado')) {
                this.classList.remove('cartao--focado')
            }
        });
        cartao.addEventListener('change', function (event) {
            const mudarCor = event.target.classList.contains('corCartao');
            if (mudarCor) {
                this.style.backgroundColor = event.target.value;
            }
        });

        cartao.addEventListener('click', function (event) {
            const remover = event.target.classList.contains('opcoesDoCartao-remove');

            if (remover) {
                this.classList.add('cartao--some');

                this.addEventListener('transitionend', function () {
                    this.remove();
                });
            }
        });


        cartao.addEventListener('keyup', function (event) {
            const mudarCor = event.target.classList.contains('opcoesDoCartao-tipo');
            if (mudarCor) {
                switch (event.code) {
                    case 'Enter':
                    case 'NumpadEnter':
                    case 'Space':
                        //this.style.backgroundColor = event.target.style.color;
                        event.target.click();
                        break;
                }
            }
            const remover = event.target.classList.contains('opcoesDoCartao-remove');
            if (remover) {
                switch (event.code) {
                    case 'Enter':
                    case 'NumpadEnter':
                    case 'Space':
                        //this.style.backgroundColor = event.target.style.color;
                        const element = this;
                        element.classList.add('cartao--some');
                        element.addEventListener('transitioned', function () {
                            element.remove();
                        });
                        break;
                }

            }
        });
        mural.insertAdjacentElement('afterbegin', cartao);

        numeroCartao++;
    }

    window.criaCartaoInsereMural = criaCartaoInsereMural;

})();

/*
* ;(function(){
* 'use strict'
*
* let numeroCartao = 1;
*
* const criarCartaoInsereMural = function (dadosCartao) {
* }
*  //Protegendo uma funcionalidade global de ser sobreescrita
* Object.defineProperties(window, {
*   criarCartaoInsereMural: {
*       value: criarCartaoInsereMural,
*       writable: false
*       }
*   }
*  });
*
*  })()
* */
