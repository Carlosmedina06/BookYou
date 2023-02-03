import styled from 'styled-components'

export const SuccessContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  place-items: center;
  padding: 2rem;
  border-radius: 10px;
`
export const CardSuccess = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 100%;
  max-width: 500px;
  padding: 1rem;
  margin: 30vh 0px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  background-color: #f9f9f9;
`

export const ContentSuccess = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  gap: 1rem;
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  h1 {
    font-size: 1.5rem;
    font-weight: 600;
    color: #d97823;
  }
  p {
    font-size: 1rem;
    font-weight: 400;
    color: #000;
  }
`

export const BtnSuccess = styled.button`
  color: #d97823;
  font-weight: 600;
  padding: 0.3rem 0.4rem 0.3rem 0.4rem;
  border: 1px solid #d97823;
  border-radius: 0.2rem;
  margin-top: 20px;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: #d97823;
    color: #fff;
  }
`
