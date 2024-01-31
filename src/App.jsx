import { Suspense } from 'react'

import CustomRoute from '@auction/Routes/CustomRoute'

import '@auction/App.scss'

function App() {
  return (
    <div className="dashboard-app">
      <Suspense fallback={<>Loading....</>}>
        <CustomRoute />
      </Suspense>
    </div>
  )
}

export default App
