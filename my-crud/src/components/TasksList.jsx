import { useEffect, useState } from "react";
import { getAllTasks } from "../api/tasksapi";
import { useNavigate } from "react-router-dom";


export function TasksList() {
    const [tasks, setTasks] = useState([]);
    const navigate = useNavigate();

  useEffect(() => {
    async function loadTasks() {
      const res = await getAllTasks();
      setTasks(res.data)
    }
    loadTasks();
  }, []);

  return <div>
    {tasks.map(task => (
       <div key={task.id} className="Personas" onClick={() => navigate(`/tasks/${task.id}`)}>
       <h2>Datos del cliente</h2>
      <ul>
        <li>{task.nombre}</li>
        <li>{task.apellido}</li>
        <li>{task.telefono}</li>
        <li>{task.correo}</li>
      </ul>
      </div>
      
    ))}
  </div>;
}
