import { Link } from 'react-router-dom';
import { AcoesProps } from '../../App';
import styles from './Header.module.css'

interface HeaderProps {
  isNovoCadastro?: boolean;
}

type Props = HeaderProps & AcoesProps;

export function Header({ isNovoCadastro, setIsNovoCadastro }: Props) {
  function handleNovoCadastro() {
    setIsNovoCadastro(true)
  }

  return (
    <div className={styles.header}>
      <h1>CRUD + Vite</h1>
      {!isNovoCadastro &&
        <Link style={isNovoCadastro ? { display: 'none' } : { display: 'flex' }}
          onClick={handleNovoCadastro}
          to='formCadastro'>Novo Cadastro</Link>
      }
    </div>
  )
}