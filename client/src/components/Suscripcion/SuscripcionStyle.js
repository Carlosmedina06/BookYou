import styled from 'styled-components'

export const SuscripcionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  place-items: center;
  padding: 2rem;
  margin: 2rem 0;
  border-radius: 10px;
`
export const CardSuscripcion = styled.div`
  display: flex;
  flex-direction: column;
  place-items: center;
  width: 100%;
  max-width: 400px;
  padding: 1rem;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
`

export const ContentSuscripcion = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  text-align: center;
  h1 {
    font-weight: bold;
    font-size: 30px;
    margin-bottom: 10px;
  }
  p {
    font-size: 16px;
    margin-bottom: 10px;
  }
`

export const BtnSuscripcion = styled.button`
  color: #d97823;
  font-weight: 600;
  padding: 0.3rem 0.4rem 0.3rem 0.4rem;
  border: 1px solid #d97823;
  border-radius: 0.2rem;
  text-transform: uppercase;
`
