export function CampoEntrada (props) {

    return <input {...props} /> // ... é o spread operator, lembrar
}

// qndo se tem muitas props, ou se pode ter muitas em um item HTML, é mais facil 
// usar o spread operador (...) + props, que ele pega td que foi passado, sem ter que fzr na mão
