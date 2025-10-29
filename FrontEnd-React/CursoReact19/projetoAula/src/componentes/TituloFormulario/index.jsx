// props é um OBJETO
// props.AÇÃO -> para realizar algo 
// props.children

export function TituloFormulario (props) {
    
    return (
         <h2>
            {props.children} 
         </h2>
    )
}