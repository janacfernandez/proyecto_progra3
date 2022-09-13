import React, {Component} from 'react';


class Form extends Component{
    constructor(props){
        super(props);
        this.state={
            value:''
        }
    }

    evitarSubmit(e){
        e.preventDefault();
        
    }

    
    obtenerDatos(e){
        this.setState({
          value: e.target.value,  
        },()=>this.props.filtrarPelis(this.state.value))
    }


    render(){
        return(
            <form onSubmit={(e)=>this.evitarSubmit(e)} className='evitar'>
                <input onChange={(e)=>this.obtenerDatos(e)} type="text" name="usuario" value={this.state.value} />
                
            </form>)

        }
}

export default Form;