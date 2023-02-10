import { ThemeProvider } from 'styled-components'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <h2>App</h2>
    </ThemeProvider>
  )
}

export default App
