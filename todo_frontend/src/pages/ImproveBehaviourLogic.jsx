import React from 'react';
import { useParams } from 'react-router-dom';
import ImproveBehaviour from '../Components/ImproveBehaviour';
import custom_axios from '../axios/AxiosSetup'
import { toast } from 'react-toastify'
import ApiConstants from '../api/ApiConstants'
export default function ImproveBehaviourLogic() {
  const {id} = useParams()
  
    
    const[improvebehaviour , setImproveBehaviour] = React.useState([])

   

    const  getAllImproveBehaviours = async () =>{
 
    
        
        const response = await custom_axios.get(ApiConstants.improveBehaviour.FIND_ALL_IMPROVEBEHAVIOUR_OF_BEHAVIOUR(id));
        console.log(response.data)
        setImproveBehaviour(response.data)
     
           

    };

    React.useEffect( () =>{

              if(improvebehaviour.length == 0){
                getAllImproveBehaviours()
              }

    },[]);  

    // create Behaviour
    const title = React.useRef()  
    
    const createImproveBehaviour = async ()=>{

            if(title.current.value == "")
            {
                  toast.info("please provide title");
                  return;
            }
           
            
            
              // const {id} = useParams()  
              const response = await custom_axios.post(ApiConstants.improveBehaviour.ADD(id),{title : title.current.value});
              getAllImproveBehaviours();
              title.current.value = ""
              toast.success("Improve Behaviour is added")
  
                   


    }

    const handleEditSave = async (taskId, updatedValue) => {
      // Implement the logic to update the task value in the database
      try {
        const response = await custom_axios.put(ApiConstants.improveBehaviour.UPDATE(taskId), {
          title: updatedValue,
        });
        toast.success('Task updated successfully');
        getAllImproveBehaviours();
      } catch (error) {
        console.error('Failed to update task:', error);
        toast.error('Failed to update task');
      }
    };




    return (



<div>
                     
                      <header>
                      <h1>Task List</h1>
                                      
                                      <input ref={title} type="text" id="new-task-input" placeholder="Enter task here" />
                                      <input type="submit" id="new-task-submit" onClick={createImproveBehaviour} value="Add task" />

                       </header>

                      <main>
                                      {
                                        improvebehaviour.map((todo) => {
                                              return <ImproveBehaviour
                                              key={todo.id}
                                              dateTime={todo.date}
                                              deleteImproveBehaviour={async () => {


                                                const response = await custom_axios.delete(ApiConstants.improveBehaviour.DELETE(todo.id));
                                                getAllImproveBehaviours();  
                                                toast.success("Behaviour deleted Sucessfully");




                                              }}
                                           
                                              id={todo.id}
                                              todo={todo.title}
                                              handleEditSave = {handleEditSave} 
                                          />
                                        })
                                      }

                      </main>

     </div>
  )
}
