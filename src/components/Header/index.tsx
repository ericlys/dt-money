import { HeaderContaiener, HeaderContent, NewTransactionButton } from "./styles";

import logoImg from '../../assets/logo.svg';

export function Header() {
  return (
    <HeaderContaiener>
      <HeaderContent>
        <img src={logoImg} alt="" />

        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContaiener>
  )
}