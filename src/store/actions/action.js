import axios from 'axios';
import * as actionsType  from'./actionsType'

// payload user
export const userList = user => {
    return {
        type: actionsType.USER,
        payload: user
    }
}

// fetch data
export const getUser = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            const users = res.data;
            dispatch(userList(users));
          
        })
        .catch(err => {
            console.log(err)
        })
    }
}
 
// Add New User
export function addUser(data) {  
    console.log(data);
    return dispatch => {  
        return dispatch({  
            type: actionsType.ADD_USER,  
            payload: data  
        });  
    }  
};  
 
// Edit user
export function editUser(data) {  
    return dispatch => {  
        return dispatch({  
            type: actionsType.EDIT_USER,  
            payload: data  
        });  
    }  
};   

