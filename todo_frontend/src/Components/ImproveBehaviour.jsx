import React from 'react'

export default function ImproveBehaviour(props) {

    
    const[inputValue,setInputValue] = React.useState(props.todo)

    const [isEditing , setIsEditing] = React.useState(false)

    const ref = React.useRef(null)
    
    
    const handleEditing =() =>{
        
        
            setIsEditing(!isEditing);
            ref.current.readOnly = !isEditing;
            if(!isEditing)
            {
                ref.current.focus();
            }
       
       
        

    };

    const setValue = (e) =>{
        
        
        setInputValue(e.target.value) 
    };
    

    const handleSave =()=>{
        setIsEditing(false);
        ref.current.readOnly = true;
        props.handleEditSave(props.id,inputValue);
    }

  return (
    <div>
         
                <section className="task-list">
                       
                        <div id="tasks">
                            <div className="task">
                                <div className="content">
                                    <input ref ={ref} type="text" className="text" onChange={setValue} value={inputValue} readOnly={!isEditing}/>
                                </div>

                                <div className="actions">
                                {isEditing ? (
                <>
                  <button className="save" onClick={handleSave}>
                    Save
                  </button>
                  <button className="cancel" onClick={handleEditing}>
                    Cancel
                  </button>
                </>
              ) : (
                <button className="edit" onClick={handleEditing}>
                  Edit
                </button>
              )}
              <button
                className="delete"
                onClick={() => props.deleteImproveBehaviour(props.id)}
              >
                Delete
              </button>
                                </div>
                            </div>
                        </div>
                </section>
          



      </div>
  )
}
