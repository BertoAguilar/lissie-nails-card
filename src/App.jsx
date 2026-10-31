import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import CardPage from './pages/CardPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [{ index: true, element: <CardPage /> }],
  },
])

export default function App() {
  return <RouterProvider router={router} />
}
