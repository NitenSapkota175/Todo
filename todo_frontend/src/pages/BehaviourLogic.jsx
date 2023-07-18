import React from 'react'
import Behaviour from '../Components/Behaviour'
import custom_axios from '../axios/AxiosSetup'
import { toast } from 'react-toastify'
import { getLoginInfo } from '../utils/LoginInfo'
import ApiConstants from '../api/ApiConstants'
// const BehaviourModel = {
//       title : String,
//       date : String,
//       id : Number
// }

export default function BehaviourLogic() {
    const[behaviour , setBehaviour] = React.useState([])

   

    const  getAllBehaviours = async () =>{
    const userId = getLoginInfo()?.userId;
      if(userId !== null){
        
        const response = await custom_axios.get(ApiConstants.behaviour.FIND_ALL_BERHAVIOUR_OF_USER(userId));
        console.log(response.data)
        setBehaviour(response.data)
      }
      else{
        toast.info("Sorry you cannot perform this action cause you are  not authenticated")
      }
           

    };

    React.useEffect( () =>{

              if(behaviour.length == 0){
                getAllBehaviours()
              }

    },[]);  

    // create Behaviour
    const title = React.useRef()  
    
    const createBehaviour = async ()=>{

            if(title.current.value == "")
            {
                  toast.info("please provide title");
                  return;
            }
            const userId = getLoginInfo()?.userId;
            
            if(userId !== null){
              
              const response = await custom_axios.post(ApiConstants.behaviour.ADD(userId),{title : title.current.value});
              getAllBehaviours();
              title.current.value = ""
              toast.success("Todo is added")
  
            }
            else{
              toast.info("Sorry you cannot perform this action cause you are  not authenticated")
            }           


    }

    const handleEditSave = async (taskId, updatedValue) => {
      // Implement the logic to update the task value in the database
      try {
        const response = await custom_axios.put(ApiConstants.behaviour.UPDATE(taskId), {
          title: updatedValue,
        });
        toast.success('Task updated successfully');
        getAllBehaviours();
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
                <input type="submit" id="new-task-submit" onClick={createBehaviour} value="Add task" />

            </header>

         <main>


                {
                  behaviour.map((todo) => {
                        return <Behaviour 
                        key={todo.id}
                        dateTime={todo.date}
                        deleteBehaviour={async () => {


                          const response = await custom_axios.delete(ApiConstants.behaviour.DELETE(todo.id));
                          getAllBehaviours();  
                          toast.success("Behaviour deleted Sucessfully");




                        }}
                        id={todo.id}
                        todo={todo.title}
                        handleEditSave  = {handleEditSave}
                        
                    />
                  })
                }
                </main>

</div>
             
  )
}
