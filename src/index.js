import React, { Suspense, useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import { BrowserRouter } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import './i18n'

function AppWrapper() {
  const { i18n } = useTranslation()

  useEffect(() => {
    const lang = i18n.language
    document.documentElement.lang = lang
    document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr'
    const rootEl = document.getElementById('root')
    if (rootEl) rootEl.dir = lang === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  return <App />
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <Suspense fallback="loading">
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </Suspense>
  </React.StrictMode>
)
