import { PencilLine, Trash } from "@phosphor-icons/react";
import { AcoesProps, Pessoa, PessoasProps } from "../../App";

import styles from './Lista.module.css'

interface ListaProps {
  deletarRegistro: (event: Pessoa) => { pessoa: Pessoa }
  alterarRegistro: (event: Pessoa) => { pessoa: Pessoa }
}

type Props = PessoasProps & ListaProps;

export default function Lista({ pessoas, deletarRegistro, alterarRegistro }: Props) {
  return (
    <div className={styles.lista}>
      <table>
        <thead>
          <tr>
            <th> Id </th>
            <th> Nome </th>
            <th> Cargo </th>
            <th> Idade </th>
            <th> Ações </th>
          </tr>
        </thead>
        <tbody>
          {pessoas && pessoas.length > 0 ? (
            pessoas.map((pessoa: Pessoa) => (
              <tr key={pessoa.id}>
                <td>{pessoa.id}</td>
                <td>{pessoa.nome}</td>
                <td>{pessoa.cargo}</td>
                <td>{pessoa.idade}</td>
                <td>
                  <a
                    id="editar"
                    href=''
                    onClick={() => alterarRegistro(pessoa)}><PencilLine size={18} /> </a>
                  <a
                    id="deletar"
                    href=""
                    onClick={() => deletarRegistro(pessoa)}><Trash size={18} /></a>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th colSpan={4}> Sem Registros. </th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  )
}