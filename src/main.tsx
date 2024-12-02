import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { QueryClient, QueryClientProvider } from 'react-query'
import { NotificationProvider } from './common/context/notification.tsx'
import Notification from './common/components/Notification/index.tsx'
import { CartProvider } from './common/context/cart.tsx'


const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false, // Customize options as needed
      retry: 1, // Retry failed queries once
    },
  },
});

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <NotificationProvider>
        <Notification />
        <CartProvider>
          <App/>
        </CartProvider>
      </NotificationProvider>
    </QueryClientProvider>
  </StrictMode>,
)
