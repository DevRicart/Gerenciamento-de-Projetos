import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AnchorTemporaryDrawer from "./AnchorTemporaryDrawer";
import Header from "./components/header";
import Login from "./pages/views/login";
import Register from "./pages/views/register";
import Home from "./pages/views/home";
import Tarefas from "./pages/tarefa/ListarTarefa";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <AnchorTemporaryDrawer />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/tarefas" element={<Tarefas />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
