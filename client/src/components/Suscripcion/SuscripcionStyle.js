import styled from 'styled-components'

export const SuscripcionContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  place-items: center;
  padding: 2rem;
  border-radius: 10px;
`
export const CardSuscripcion = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 15vh 0;
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
  margin: 20px 10px;
  text-align: center;
  align-items: center;
  h1 {
    font-weight: bold;
    color: #010326;
    letter-spacing: 3.5px;
    font-size: 30px;
    margin-bottom: 30px;
    border-bottom: #d97823 3px solid;
  }
  h2 {
    background-color: #d97823;
    border-radius: 10px;
    width: 50%;
    color: #fff;
    padding: 15px 0;
    font-weight: 600;
    font-size: 2rem;
    margin-top: 10px;
    margin-bottom: 30px;
  }
`
export const ContentChecks = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 50px 20px 30px 20px;
  text-align: center;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    li {
      display: flex;
      gap: 20px;
      align-items: center;
      margin-bottom: 10px;
    }
    span {
      font-size: 1.2rem;
      font-weight: 600;
      color: #d97823;
    }
  }
`

export const BtnSuscripcion = styled.button`
  color: #d97823;
  font-weight: 600;
  width: 70%;
  padding: 0.3rem 0.4rem 0.3rem 0.4rem;
  border: 1px solid #d97823;
  border-radius: 0.2rem;
  transition: all 0.3s ease-in-out;
  text-transform: uppercase;
  &:hover {
    background-color: #d97823;
    color: #fff;
  }
`

export const SuscriptionBanner = styled.div `
display: flex;
align-items: center;
margin-top: 5rem;
margin-left: 38rem;
display: flex;
flex-direction: row;

color: black;
width: 100%;


`

export const SuscriptionBannerTitle = styled.div `
font-size: 3.7rem;
width: 100%;
line-height: 4.2rem;
font-weight: 600;
color: #222130

`

export const SuscriptionBannerText = styled.div  `

font-size: 2.5rem;
margin-top: 1rem;
color: #3f3d56;
font-weight: 500;
width: 70%; 
line-height: 2.8rem

`
export const SuscripcionBannerTextSide = styled.div `
display: flex;
flex-direction: column;
width: 38%;
height: 300px;
margin-top: 4rem


`
export const SuscriptionBannerImg = styled.div `
width: 37%;
max-width: 800px


`
