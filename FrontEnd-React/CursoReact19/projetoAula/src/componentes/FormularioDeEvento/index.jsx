import { CampoEntrada } from "../CampoEntrada"
import { CampoFormulário } from "../CampoFormulario"
import { Label } from "../Label"
import { TituloFormulario } from "../TituloFormulario"
import './formulario-evento.estilos.css'


export function FormularioDeEvento () {

    return (
        
        <form className="form-evento">
           <TituloFormulario>
                Preencha para criar um evento
           </TituloFormulario>
            <CampoFormulário>
                <Label htmlFor='nome'>
                    Qual o nome do evento? 
                </Label>
                <CampoEntrada type="text" id='nome' placeholder='Summer dev hits'></CampoEntrada>
            </CampoFormulário>
        </form>
    )

}