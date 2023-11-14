import NavBar from "./components/NavBar"
import Home from "./pages/Home"
import Login from "./pages/Login"
import { createBrowserRouter, Route, createRoutesFromChildren, RouterProvider } from "react-router-dom"
import Register from "./pages/Register"
import Chats from "./pages/Chats"
import { useAuth } from "./context/AuthContext"

const router = createBrowserRouter(
  createRoutesFromChildren(
    <Route path='/' element={<NavBar />}>
      <Route path='/' element={<Home />} />
      <Route path='register' element={<Register/>} />
      <Route path='login' element={<Login/>} />
      <Route path='chat' element={<Chats />} />
    </Route>
  )
)
function App() {
  return <RouterProvider router={router} />
}

export default App