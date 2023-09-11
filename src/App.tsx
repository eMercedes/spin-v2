import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Root from 'containers/root'
import Financial from 'containers/financial'
import './App.scss'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<Root />}>
            <Route path='start'>
                <Route path='financial' element={<Financial />} />
            </Route>
        </Route>,
    ),
)

function App() {
    return <RouterProvider router={router} />
}

export default App
