import './App.css';
import About from './pages/About';
import Announce from './pages/Announce';
import Home from './pages/Home';
import NotFound from "./pages/NotFound";
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Footer from './components/Footer';


function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "/a-propos",
      element: <About/>,
    },
    {
      path: "/annonce/:id",
      element: <Announce/>,
    },
    {
      path: "*",
      element: <NotFound/>,
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
      <Footer/>
    </div>
  );
}

export default App;
