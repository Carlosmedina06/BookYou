import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import ChatBot from 'react-simple-chatbot'

import { stepifyScript } from './functionChat'
import { script } from './script'

const theme = {
  background: '#f5f8fb',
  headerBgColor: '#EF6C00',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#EF6C00',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
}

const Main = styled.div`
  font-family: sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

const Bot = () => {
  return (
    <Main>
      <ThemeProvider theme={theme}>
        <ChatBot floating headerTitle="Bookyou Bot" steps={stepifyScript(script)} />
      </ThemeProvider>
    </Main>
  )
}

export default Bot
