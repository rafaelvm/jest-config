import { ThemeProvider } from 'styled-components'
import { Button } from './components/Button/Button.component'
import { GlobalStyle } from './styles/global'
import { theme } from './styles/theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <div style={{ margin: '24px', textAlign: 'center' }}>
        <h2>Template Vite + TS</h2>
        <Button variant="primary" label="Text" />
        <Button variant="outline" label="Text" />
      </div>
    </ThemeProvider>
  )
}

export default App
