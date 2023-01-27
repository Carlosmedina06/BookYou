import styled from 'styled-components'

export const ReviewContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  width: 40%;
  margin: 2px;
  background-color: none;
  border-bottom: 2px solid orange;
  padding: 10px;
`
export const ImgContainer = styled.div`
  height: 100%;
  margin: 20px;
  img {
    width: 40px;
    height: 40px;
  }
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
