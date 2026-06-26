import { useSelector } from 'react-redux'
import { RootState } from '../../store'
import * as S from './styles'
import cesta from '../../assets/cesta.png'

const Header = () => {
  const itensNoCarrinho = useSelector((state: RootState) => state.carrinho.itens)

  const valorTotal = itensNoCarrinho.reduce((acc, item) => {
    return acc + item.preco
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{itensNoCarrinho.length} itens, valor total: {
          new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(valorTotal)
        }</span>
        <img src={cesta} alt="Carrinho" />
      </div>
    </S.Header>
  )
}

export default Header