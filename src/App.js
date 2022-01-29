import React, { Component } from 'react'
import './estilo.css'
import Botao from './componentes/Botao';

class App extends Component{
    
    constructor(props){
        super(props)
        this.state={
            dia: '',
            fraseEscolhida:''
        };

        this.fraseAleatoria = this.fraseAleatoria.bind(this)

        this.frases = ['As pessoas costumam dizer que a motivação não dura sempre. Bem, nem o efeito do banho, por isso recomenda-se diariamente.',
        'Motivação é a arte de fazer as pessoas fazerem o que você quer que elas façam porque elas o querem fazer.',
        'Toda ação humana, quer se torne positiva ou negativa, precisa depender de motivação.',
        'No meio da dificuldade encontra-se a oportunidade.',
        'Lute. Acredite. Conquiste. Perca. Deseje. Espere. Alcance. Invada. Caia. Seja tudo o quiser ser, mas, acima de tudo, seja você sempre.',
        'Eu faço da dificuldade a minha motivação. A volta por cima vem na continuação.',
        'A persistência é o caminho do êxito.',
        'A verdadeira motivação vem de realização, desenvolvimento pessoal, satisfação no trabalho e reconhecimento.',
        'Pedras no caminho? Eu guardo todas. Um dia vou construir um castelo.',
        'É parte da cura o desejo de ser curado.',
        'Tudo o que um sonho precisa para ser realizado é alguém que acredite que ele possa ser realizado.',
        'O que me preocupa não é o grito dos maus. É o silêncio dos bons.',
        'Imagine uma nova história para sua vida e acredite nela.',
        'O insucesso é apenas uma oportunidade para recomeçar com mais inteligência.',
        'Quando você quer alguma coisa, todo o universo conspira para que você realize o seu desejo.',
        'Você precisa fazer aquilo que pensa que não é capaz de fazer.',
        'O sucesso é ir de fracasso em fracasso sem perder o entusiasmo.',
        'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.',
        'Lute com determinação, abrace a vida com paixão, perca com classe e vença com ousadia, porque o mundo pertence a quem se atreve e a vida é muito para ser insignificante.',
        'Nossa maior fraqueza está em desistir. O caminho mais certo de vencer é tentar mais uma vez.',
        'Por vezes sentimos que aquilo que fazemos não é senão uma gota de água no mar. Mas o mar seria menor se lhe faltasse uma gota.',
        'Coragem é a resistência ao medo, domínio do medo, e não a ausência do medo.',
        'Quando uma criatura humana desperta para um grande sonho e sobre ele lança toda a força de sua alma, todo o universo conspira a seu favor.',
        'Na vida, não existem soluções. Existem forças em marcha: é preciso criá-las e, então, a elas seguem-se as soluções.',
        'Quem quer vencer um obstáculo deve armar-se da força do leão e da prudência da serpente.',
        'O entusiasmo é a maior força da alma. Conserva-o e nunca te faltará poder para conseguires o que desejas.']
    }

    fraseAleatoria(){
        let state = this.state
        let numeroRandom = Math.floor(Math.random() * this.frases.length)
        state.fraseEscolhida = this.frases[numeroRandom]
        state.dia = new Date().toLocaleDateString()
        this.setState(state)
        
    }
    
    render(){
        return(
            <div className='container'>
                <img src={require('./assets/imagem_motivacional.jpg')}></img>
                <Botao acaoBtn={this.fraseAleatoria}/>
                <h2>Sorte do dia {this.state.dia}</h2>
                <h3>{this.state.fraseEscolhida}</h3>
                
            </div>
        )
    }
}





export default App;