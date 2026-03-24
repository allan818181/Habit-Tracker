import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Habits from "./pages/Habits";
import Progress from "./pages/Progress";
import Navbar from "./components/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/habits" element={<Habits />} />
        <Route path="/progress" element={<Progress />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
