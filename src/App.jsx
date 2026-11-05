import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import CardPage from './pages/CardPage'
import ServicesPage from './pages/ServicesPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      { index: true, element: <CardPage /> },
      { path: 'services', element: <ServicesPage /> },
    ],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
