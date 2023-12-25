import { Routes, Route } from "react-router-dom";

import { AcoesProps, PessoasProps } from "./App";

import Lista from "./componentes/Lista";
import FormCadastro from "./componentes/FormCadastro";

type Props = PessoasProps & AcoesProps;

export default function MainRoutes({ pessoas, isNovoCadastro, deletarRegistro }: Props) {
  return (
    <Routes>
      <Route path='/' element={
        <Lista pessoas={pessoas} deletarRegistro={deletarRegistro}/>
      } />
      <Route
        path='formCadastro'
        element={
          <FormCadastro
            pessoas={pessoas}
            isNovoCadastro={isNovoCadastro} />
        } />
    </Routes>
  )
}