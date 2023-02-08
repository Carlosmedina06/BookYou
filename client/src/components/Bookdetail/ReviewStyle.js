import styled from 'styled-components'

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  margin: 2px;
  background-color: #ffffff;
  border-bottom: 2px solid orange;
  padding: 10px;
  border-radius: 10px;
  margin-bottom: 20px;
`
export const ImgContainer = styled.div`
  height: 100%;
  font-size: 40px;
  margin: 20px;
  color: gray;
  margin-bottom: 25%;
`
export const ReviewContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 50%;
`
export const ReviewText = styled.div`
  width: 100%;
  padding: 10px;
  color: #010326;
  h2 {
    font-size: 18px;
    font-weight: 600;
    text-transform: capitalize;
  }
  p {
    font-size: 14px;
    font-weight: 400;
  }
`
export const ReviewDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding-right: 20px;
  font-size: 12px;
  font-weight: 400;
  color: #010326;
`
export const ButtonContent = styled.div`
  display: flex;
  flex-direction: row-reverse;
`

export const ButtonReport = styled.button`
  border: solid 1px #f28322;
  padding: 1px 5px;
  margin-left: 10px;
  margin-bottom: 10px;
  font-weight: bold;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: #f28322;
    color: #fff;
  }
`
