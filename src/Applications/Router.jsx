import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from '../App'
import SubscribeConfirmation from '../components/subscribeComfirmation/SubscribeConfirmation'


function Router() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/newsletter-sign-up'  element={<App/>} />
            <Route path='/subscribe' element={<SubscribeConfirmation/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router