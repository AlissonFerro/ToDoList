import { Route, Routes } from "react-router-dom";
import { ToDoProvider } from "./Context/Todo";
import IndexPage from "./Pages/Index";
import HistoryPage from "./Pages/History";

function App() {
  return (
    <ToDoProvider>
      <Routes> 
        <Route path="/" element={<IndexPage />} />
        <Route path="/history" element={<HistoryPage />} />
      </Routes>
    </ToDoProvider>
  );
}

export default App;
