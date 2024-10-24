import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { bookStore } from './Redux/store.jsx'


// const store=createStore(bookReducer)

createRoot(document.getElementById('root')).render(
  
  <StrictMode>
    <Provider store={bookStore}>
    <App />
    </Provider>
  </StrictMode>,
)
