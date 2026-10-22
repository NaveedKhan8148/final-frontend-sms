import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import axios from 'axios'
import './index.css'
import App from './App.jsx'

// Set live backend API URL
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'https://final-backend-sms-2.onrender.com'
axios.defaults.withCredentials = true

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1890ff',
          borderRadius: 6,
        },
      }}
    >
      <App />
    </ConfigProvider>
  </StrictMode>,
)
