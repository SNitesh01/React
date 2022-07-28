const redux = require('redux')


//action creator

function addAddress(){
    return{
        type:'ADD_ADDRESS',
        payload:"",
    };
}

function removeAddress(){
    return{
        type:'REMOVE_ADDRESS',
        payload:"",
    };
}

const initialState = {
    address:["#78", "#2848"]

}

//reducers

function reducer(state = initialState, action){
    switch(action.type)
    {
    case "ADD_ADDRESS" :
        return {
            ...state }
    
    case "REMOVE_ADDRESS" :
        return{state}    

    break;    
    }
}



//create store
