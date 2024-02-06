import { lazy, Suspense } from 'react'
import { PersistGate } from 'redux-persist/integration/react'
import ReactDOM from 'react-dom/client'

import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from '@auction/reportWebVitals'

import Toast from './Components/Toast/Toast'
import { persistor, store } from './Store/store'

import '@auction/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = lazy(() => import('@auction/App'))

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Suspense>
        <Toast />
        <PersistGate loading={null} persistor={persistor}>
          <App />
        </PersistGate>
      </Suspense>
    </BrowserRouter>
  </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
