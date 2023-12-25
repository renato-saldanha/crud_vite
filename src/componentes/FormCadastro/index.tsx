import { AcoesProps, Pessoa, PessoasProps } from "../../App";

type Props = PessoasProps & AcoesProps 

export default function FormCadastro({ pessoas, pessoa, isNovoCadastro }: Props) {
  const id = 
 


  return (
    <div>
      <form >
        <div className="campos">
          <label > Nome </label>
          <input id="nome" name="nome" value={pessoa.nome} type="text" />
          <label > Cargo </label>
          <input id="cargo" name="cargo" value={pessoa.cargo} type="text" />
          <label > Idade </label>
          <input id="idade" name="idade" value={pessoa.idade} type="text" />
        </div>
        <div className="botoes">
          <button type="submit" >Gravar</button>
          <button>Cancelar</button>
        </div>

      </form>
    </div>
  )
}