import './App.css'
import {FormularioDeEvento} from './componentes/FormularioDeEvento'

// no react, componentes são FUNÇÕES

function App() {

  return (
    <main>
      <header>
        <img src="/logo.png" alt="logo" />
      </header>
      <section>
        <img src="/banner.png" alt="banner" />
      </section>
      <FormularioDeEvento/>
    </main>
  )
}

export default App
