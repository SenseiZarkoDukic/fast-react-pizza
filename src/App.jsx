import { createBrowserRouter } from "react-router-dom";
import Home from "./ui/Home.jsx";
import Menu from "./menu/Menu.jsx";
const BrowserRouter = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/menu",
    element: <Menu />,
  },
]);

function App() {
  return <div>Hello Vite!</div>;
}

export default App;
