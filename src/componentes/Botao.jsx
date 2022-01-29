import React, {Component}  from "react";
import './estiloComp.css'

class Botao extends Component{
    render(){
        return(
            <div>
                <button onClick={this.props.acaoBtn}>Sorte do Dia</button>
            </div>
        )
    }
}

export default Botao
