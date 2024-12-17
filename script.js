


const opcoes = [...document.getElementsByClassName('opcoes')]
const boxTarefaAndamento = document.getElementById('item-01')
const boxTarefaConcluido = document.getElementById('item-02')



opcoes[0].style.borderBottom = '5px solid rgb(10, 46, 78)';
opcoes[0].style.backgroundColor = 'rgb(76, 130, 178)'

opcoes.map((el) => {

    el.addEventListener('click', (evento) => {

        moverTarefas(evento.target);

    })
})

function moverTarefas(opcao){

    
        for (o of opcoes) {
            o.style.borderBottom = 'none'
            o.style.backgroundColor = 'rgb(78, 146, 205)'
        }

        opcao.style.borderBottom = '5px solid rgb(10, 46, 78)';
        opcao.style.backgroundColor = 'rgb(76, 130, 178)'

        // opcao.nextSibling.
        let t = opcao.innerHTML.substring(0, 1)

        if (t == 'E') {
            boxTarefaAndamento.style.marginLeft = '0%'
        }

        if (t == 'C') {
            boxTarefaAndamento.style.marginLeft = '-50%'
        }


}

const btnAdiconar = document.getElementById('btn-adicionar')
const boxAdiconar = document.getElementById('box-adicionar')
let contBoxAdicionar = 0;

btnAdiconar.addEventListener('click', () => {moverBox()})

function moverBox(){

    if (contBoxAdicionar == 0) {

        boxAdiconar.style.top= '-30%'
        contBoxAdicionar++

    } else {
    
        boxAdiconar.style.top = '0%'
        contBoxAdicionar--

    }
    
}


const imgOpcoes = [...document.querySelectorAll('.opcoes > img')]

imgOpcoes.map((el) =>{
    el.addEventListener('click', (evento) =>{
        evento.stopPropagation()
    })
})

let pBoxInfo = null;

const btnConfirmar = document.getElementById('btn-confirmar')

btnConfirmar.addEventListener('click', () =>{

    const novaTarefa = document.getElementById('input-tarefa')

    if(novaTarefa.value != ''){

        // alert(novaTarefa)

        const boxTarefa = document.createElement('div')
        boxTarefa.setAttribute('class', 'tarefa')
        
        const text = document.createElement('h3')
        text.innerHTML = novaTarefa.value

        let btns = document.createElement('button')
        btns.setAttribute('class', 'btn-delete')
        btns.addEventListener('click', (evento) => {
        
            const b = evento.target.parentNode.parentNode;
            boxTarefaAndamento.removeChild(b)
    
        })

        let imgs =document.createElement('img')
        imgs.setAttribute('src', 'img/bloquear.png')

        boxTarefa.appendChild(text)
        btns.appendChild(imgs)
        boxTarefa.appendChild(btns)

        btns = document.createElement('button')
        btns.setAttribute('class', 'btn-concluir')
        btns.addEventListener('click', (evento) =>{

            const b = evento.target.parentNode.parentNode;
            boxTarefaConcluido.appendChild(b)
            // const not = document.createElement('span')
            // not.setAttribute('class', 'not')
            // opcoes[1].innerHTML = 'Concluídas'
            // opcoes[1].appendChild(not)
            const tarefasConcluidas = document.querySelectorAll('#item-02 button')
            for(t of tarefasConcluidas){
                b.removeChild(t)
            }

            moverTarefas(opcoes[1])


            if(boxTarefaAndamento.children.length == 0){

                const boxInfo = document.createElement('div')
                boxInfo.setAttribute('id', 'box-info')

                const imgInfo = document.createElement('img')
                imgInfo.setAttribute('src', 'img/erro.png')

                const tesxtInfo = document.createElement('h4')
                tesxtInfo.innerHTML = 'Você não tem tarefas em andamento...'

                boxInfo.appendChild(imgInfo)
                boxInfo.appendChild(tesxtInfo)

                pBoxInfo = boxInfo

                boxTarefaAndamento.style.justifyContent = 'center'
                boxTarefaAndamento.appendChild(boxInfo)

            }
            
        })

        imgs =document.createElement('img')
        imgs.setAttribute('src', 'img/correto.png')

        btns.appendChild(imgs)
        boxTarefa.appendChild(btns)       

        btns.appendChild(imgs)
        boxTarefa.appendChild(btns)

        moverTarefas(opcoes[0])

        if(boxTarefaAndamento.firstElementChild  == pBoxInfo && boxTarefaAndamento.firstElementChild != null){
            boxTarefaAndamento.style.justifyContent = ''
            boxTarefaAndamento.innerHTML = ''

        }

        
           
        boxTarefaAndamento.appendChild(boxTarefa)
        contBoxAdicionar = 1
        moverBox()
        novaTarefa.value = '';

    } else {

        contBoxAdicionar = 1
        moverBox()

    }

})

// const btnsDeletar = [...document.getElementsByClassName('btn-delete')]

// btnsDeletar.map((el) => {
    
// })



const btnCancelar = document.getElementById('btn-cancelar')

btnCancelar.addEventListener('click', () =>{

    const novaTarefa = document.getElementById('input-tarefa')
    contBoxAdicionar = 1
    moverBox()
    novaTarefa.value = '';
})