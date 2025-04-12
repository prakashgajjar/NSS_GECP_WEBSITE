import React from 'react'
import { AppProvider } from './hooks/AppContext'

const App = () => {
  return (
    <AppProvider>
      <div>App</div>
    </AppProvider>
  )
}

export default App