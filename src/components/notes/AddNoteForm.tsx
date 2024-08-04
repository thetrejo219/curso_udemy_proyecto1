import {useForm} from 'react-hook-form'
export default function AddNoteForm() {
    const initialValues = {
        content:''
    }
    const{register,handleSubmit,formState:{errors}} = useForm({
        defaultValues:initialValues
    })
  return (
    <form
        onSubmit={()=>{}}
        className="space-y-3"
        noValidate
    >

    <div className="flex flex-col gap-2">
    <label className="font-bold" htmlFor="content">Crear nota</label>
    <input id="content" placeholder="Contenido de la nota " type="text" className="w-full p-3 border border-gray-300"/>
    </div>
    <input type="submit"  value='Crear nota' className=" bg-fuchsia-600 hover:bg-fuchsia-600 w-full p-2 text-white font-black
    cursor-pointer"/>
    </form>
  )
}
