import { getProjectById } from "@/api/ProjectAPI";
import EditProjectFormEdit from "@/components/projects/EditProjectFormEdit";
import { useQuery } from "@tanstack/react-query";
import { Navigate, useParams } from "react-router-dom"

export default function EditProjectView() {
    const params = useParams();
    const projectId = params.projectId!
    const {data,isError,isLoading} = useQuery({
      queryKey:['editProject',projectId],
      queryFn:()=>getProjectById(projectId),
      retry:false
    })

    if(isError) return <Navigate to='/404'/>
    if(isLoading) return 'Cargando ...'
  if(data) return <EditProjectFormEdit data={data} projectId={projectId}/>
}
