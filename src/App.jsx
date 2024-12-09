import './App.css'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import RootLayout from './components/RootLayout';
import PageNotFound from './pages/PageNotFound';
import Blog from './pages/Blog';
import Shop from './pages/Shop';

function App() {
let myRouter = createBrowserRouter(createRoutesFromElements(
<Route element={<RootLayout/>}>
<Route path='/' element={<Home/>}/>
<Route path='/about-us' element={<About/>}/>
<Route path='/blog' element={<Blog/>}/>
<Route path='/contact' element={<Contact/>}/>
<Route path='/shop' element={<Shop/>}/>
<Route path='*' element={<PageNotFound/>}/>
</Route>
))

  return (
    <>
     <RouterProvider router={myRouter}/>
    </>
  )
}

export default App
