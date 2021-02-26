import * as actionType from '../actions/actionsType';

const INITIAL_STATE = {
    userList:[],
    error:null  
}

export const Reducer = (state = INITIAL_STATE,action)=>{
    switch(action.type){
        case actionType.USER:
            return{...state, userList:action.payload}

        case actionType.ADD_USER: 
        //  console.log(state)
        //  console.log(action.payload)
            return {    
                ...state,    
                userList: state.userList.concat(action.payload)    
            };    
        case actionType.EDIT_USER:  
        // console.log(action.payload)  
        const newUserList = state.userList.map((user,index) => {
            if(index=== action.payload.index){
              user[action.payload.field] = action.payload.value;
            }
            return user;
          })
            return {    
                ...state,    
                userList:[...newUserList]
            };  
        default:
            return state
    }
};




export default Reducer;