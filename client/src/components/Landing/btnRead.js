import styled from 'styled-components'

export const BtnHome = styled.button`
  justify-content: center;
  padding: 0;
  margin: 0;
  border: none;
  background: none;
  position: relative;
  display: flex;
  font-weight: 600;
  font-size: 20px;
  gap: 0.5rem;
  align-items: center;
  color: #111;
  cursor: pointer;
  p {
    margin: 0;
    position: relative;
    font-size: 20px;
    color: #111;
    &::after {
      position: absolute;
      content: '';
      width: 0;
      left: 0;
      bottom: -7px;
      background: #f28322;
      height: 2px;
      transition: 0.3s ease - out;
    }
    &::before {
      position: absolute;
      /*   box-sizing: border-box; */
      content: 'Inicio';
      width: 0%;
      inset: 0;
      text-align: center;
      color: #c84747;
      overflow: hidden;
      transition: 0.3s ease - out;
    }
  }
  &:hover p::before {
    width: 100%;
  }
  &:hover svg {
    transform: translateX(4px);
    color: #c84747;
  }
  svg {
    color: #111;
    transition: 0.2s;
    position: relative;
    width: 15px;
    transition-delay: 0.2s;
  }
`
