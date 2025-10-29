/* 
    para se evitar ficar fzndo props.chieldren toda vez, da para "desconstruir" esse parâmetro
    que está sendo recebido.
    Para isso, ao inves de props no parametro, vc abre chaves {}, que significa um objeto 
    JavaScript, e passa o children nele. 
    Isso se chama destructure. É DO JAVA SCRIPT

*/
export function CampoFormulário ({children}) {

    return(
        <fieldset>
            {children}
        </fieldset>
    )
}