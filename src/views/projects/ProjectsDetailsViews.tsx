import { getProjectById } from "@/api/ProjectAPI";
import AddTaskModal from "@/components/tasks/AddTaskModal";
import EditTaskData from "@/components/tasks/EditTaskData";
import TaskList from "@/components/tasks/TaskList";
import TaskModalDetails from "@/components/tasks/TaskModalDetails";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useNavigate, useParams } from "react-router-dom"

export default function ProjectsDetailsViews() {
    const navigate = useNavigate()
    const params = useParams();
    const projectId = params.projectId!
    const {data,isError,isLoading} = useQuery({
      queryKey:['project',projectId],
      queryFn:()=>getProjectById(projectId),
      retry:false
    })

    if(isError) return <Navigate to='/404'/>
    if(isLoading) return 'Cargando ...'
  if(data) return(
    <>
    <h1 className="text-5xl font-black">{data.projectName}</h1>
    <p className=" text-2xl font-light text-gray-500 mt-5">{data.description}</p>
    <nav className="my-5 flex gap-3">
    <button type="button" className="bg-purple-400 hover:bg-purple-500 px-10 py-3 text-white text-xl
    cursor-pointer font-bold transition-colors
    "
    onClick={()=>navigate(location.pathname+"?newTask=true")}
    >
        Agregar Tarea
    </button>
    </nav>
    <TaskList tasks={data.tasks}/>
    <AddTaskModal/>
    <EditTaskData/>
    <TaskModalDetails/>
    </>
  )
}
