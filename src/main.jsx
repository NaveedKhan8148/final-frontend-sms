import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { ConfigProvider } from 'antd'
import axios from 'axios'
import './index.css'
import App from './App.jsx'

// Set live backend API URL
axios.defaults.baseURL = import.meta.env.VITE_API_URL || 'https://final-backend-sms-2.onrender.com'
axios.defaults.withCredentials = true

// Global request interceptor: ensure Authorization header is always attached and never "Bearer null"
axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken') || localStorage.getItem('token')
    config.headers = config.headers || {}
    const auth = config.headers.Authorization || config.headers.authorization
    if (!auth || auth === 'Bearer null' || auth === 'Bearer undefined' || auth === 'Bearer ') {
      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
    }
    return config
  },
  (error) => Promise.reject(error)
)

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
