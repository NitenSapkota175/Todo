const ApiConstants ={
    behaviour : {
        ADD : (userId : number) =>{
            return "/behaviour/"+userId;
        },
        DELETE: (behaviourId: number) => {
            return "/behaviour/" + behaviourId + '/delete';
          },
        FIND_ALL_BERHAVIOUR_OF_USER: (userId:number)=>{
            return '/behaviour/'+userId;
        },
        UPDATE : (behaviourId: number)=>{
            return "behaviour/"+behaviourId+"/update";
    }   

    },
    improveBehaviour : {
        ADD : (behaviourId : number) =>{
            return "improveBehaviour/"+behaviourId;
        },
        DELETE: (improveBehaviourId: number) => {
                return  "improveBehaviour/"+improveBehaviourId+"/delete";
          },
        FIND_ALL_IMPROVEBEHAVIOUR_OF_BEHAVIOUR : (behaviourId : number)=>{
            return "improveBehaviour/"+behaviourId;
        },
        UPDATE : (improveBehaviourId: number)=>{
                return "improveBehaviour/"+improveBehaviourId+"/update";
        } 
    }   ,     
    USER: {

        SIGN_UP: "/user/signUp",
      
    },
      LOGIN: "/auth/login",
};

export default ApiConstants;