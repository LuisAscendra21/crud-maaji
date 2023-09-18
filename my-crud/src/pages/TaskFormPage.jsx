import { useForm } from'react-hook-form';
import { Link, useNavigate, useParams} from "react-router-dom";
import { createTask, deleteTask, getTask, updateTask } from '../api/tasksapi';
import { useEffect } from 'react';
import { toast } from 'react-hot-toast'


export function TaskFormPage() {
    const {register, handleSubmit, formState:{errors},setValue} = useForm();
    const navigate = useNavigate();
    const params = useParams();

    const onSubmit = handleSubmit(async data =>{
       if (params.id){
        await updateTask(params.id, data);
        toast.success('Persona actualizada',{
            position: "bottom-left",
            style:{
                background: "#101010",
                color: "#ffffff"
            }
        })
       }else{
        await createTask(data);
        toast.success('Persona registrada',{
            position: "bottom-left",
            style:{
                background: "#101010",
                color: "#ffffff"
            }
        })
       }
       navigate("/tasks");
    });

    useEffect(()=> {
       async function loadTasks(){
            if (params.id ){
                const {
                    data: {nombre, apellido, telefono, correo },
                } = await getTask(params.id);
                    setValue("nombre", nombre);
                    setValue("apellido", apellido);
                    setValue("telefono", telefono);
                    setValue("correo", correo);
            }
        }
        loadTasks();
        
        
    }, [params.id, setValue]);

    return(

      <section>
      <section id="body_Dos">
        <section className="regreso">
          <Link className="a" to="/">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </Link>
          <form action="">
            {errors.title && <span>Los campos son requeridos</span>}
          </form>
        </section>
        <section className="datos_Personas">
          <article className="form_box">
            <article className="form-value">
              <form onSubmit={handleSubmit(onSubmit)}>
                <h2>REGISTRO</h2>
                <article className="inputbox">
                  <input type="text" required 
                  {...register('nombre', {required: true})}
                  />
                  <label>NOMBRE:</label>

                </article>
                <article className="inputbox">
                  <input type="text" required 
                  {...register('apellido', {required: true})}
                  />
                  <label>APELLIDO:</label>
                </article>
                <article className="inputbox">
                  <input type="text" required 
                  {...register('telefono', {required: true})}
                  />
                  <label>TELEFONO:</label>
                </article>
                <article className="inputbox">
                  <input type="Email" required 
                  {...register('correo', {required: true})}
                  />
                  <label>CORREO:</label>
                </article>
                <button type="submit" className="btn_guardar">GUARDAR</button>

                {params.id && <button className="btn_eliminar"  onClick={async ()=>{
                    const accepted = window.confirm('Proceder a eliminar')
                    if (accepted) {
                        await deleteTask(params.id);
                        toast.success('Persona eliminada',{
                            position: "bottom-left",
                            style:{
                                background: "#101010",
                                color: "#ffffff"
                            }
                        })
                        navigate("/tasks");
                    }
                }}>ELIMINAR</button>}
              </form>
            </article>
          </article>
        </section>
      </section>
    </section>
    )
}