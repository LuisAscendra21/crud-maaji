import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { TasksPage } from "./pages/TasksPage";
import { TaskFormPage } from "./pages/TaskFormPage";
import { Navigations } from "./components/Navigations";
import { Toaster } from "react-hot-toast"
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <BrowserRouter>
      <Navigations />
        <Routes>
          <Route path="/" element={<Navigate to="/Home"/>} />
          <Route path="/tasks" element={<TasksPage />} />
          <Route path="/tasks-create" element={<TaskFormPage />} />
          <Route path="/tasks/:id" element={<TaskFormPage />} />
          <Route path="/Home" element={<Home />} />
        </Routes>
        <Toaster />
      </BrowserRouter>
    </>
  );
}

export default App;
