import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0px auto;
  padding: 20px;
  background-color: #ebf2ed;
`

export const FormContent = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  width: 50%;
  margin-left: 27rem;
  background: #fff;
  border-radius: 10px;
  padding: 20px;
  box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px #010326,
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 60%;
  margin: 0 auto;
  text-align: center;
`

export const Input = styled.input`
  font-weight: 500;
  font-size: 14px;
  height: 30px;
  border-radius: 10px;
  padding-left: 10px;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  outline: none;
  &:focus {
    border-bottom: 1px solid #00a3fe;
    -webkit-transition: 0.1s;
    transition: 0.5s;
  }
  background-color: #ebf2ed;
`

export const Select = styled.select`
  font-weight: 500;
  font-size: 14px;
  height: 40px;
  border-radius: 10px;
  padding-left: 10px;
  border: none;
  border-bottom: 1px solid #e5e5e5;
  outline: none;
  &:focus {
    border-bottom: 1px solid #00a3fe;
    -webkit-transition: 0.1s;
    transition: 0.5s;
  }
  background-color: #ebf2ed;
`

export const InputFile = styled.input`
  ::-webkit-file-upload-button {
    padding: 10px;
    color: black;
    cursor: pointer;
    margin-bottom: 0;
    width: 50%;
    word-wrap: break-word;
    border-radius: 5px;
    /*  border: 2px solid #00a3fe; */
    height: 35px;
    /* border-color: transparent; */
    background-color: #ffffff;
    border: none;
    box-shadow: 0px;
    outline: none;
    transition: 0.15s;
    text-align: center;
    &::after {
      content: 'Upload';
    }
    &:active {
      background-color: #f1ac15;
    }
  }
`
