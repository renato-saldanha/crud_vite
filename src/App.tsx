import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import axios from 'axios'

import './global.css'

import { Header } from './componentes/Header'
import MainRoutes from './routes'

export interface Pessoa {
  id: number,
  nome: string,
  cargo: string,
  idade: number
}

export interface PessoasProps {
  pessoas: Pessoa[]
}

export interface AcoesProps {
  deletarRegistro?: (pessoa: Pessoa) => void,
  alterarRegistro?: (pessoa: Pessoa) => void,
  setIsNovoCadastro?: Dispatch<SetStateAction<boolean>>,
  isNovoCadastro?: boolean
}

function App() {
  const [pessoas, setPessoas] = useState<Pessoa[]>([])
  const [isNovoCadastro, setIsNovoCadastro] = useState(false)

  function alterarRegistro() {

  }

  function deletarRegistro(pessoa: Pessoa) {
    axios
      .delete(`http://localhost:3000/pessoas/${pessoa.id}`)
      .then(() => alert('Registro deletado!'))
      .catch(error => alert(error));
  }

  useEffect(() => {
    axios
      .get('http://localhost:3000/pessoas')
      .then(r => {
        if (r.data && r.data.length > 0) {
          const pessoasCarregadas: Pessoa[] = r.data;
          setPessoas(pessoasCarregadas)
        }
      });
  }, [!pessoas])

  return (
    <div >
      <Header isNovoCadastro={isNovoCadastro} setIsNovoCadastro={setIsNovoCadastro} />
      <MainRoutes
        pessoas={pessoas}
        isNovoCadastro={isNovoCadastro}
        deletarRegistro={deletarRegistro} 
        alterarRegistro={alterarRegistro}/>
    </div>

  )
}

export default App
