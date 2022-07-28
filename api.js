const redux = require("redux");
const axios = require("axios");
const logger = require("redux-logger").default;
const thunk = require("redux-thunk").default;

// Inital State
const initalState = {
  loading: false,
  users: [],
  error: "",
};

const Users = {
   name: "abc",
   email: "abanb@gmail.com",

  };



// Actions type

const USER_FETCH_REQUEST = "USER_FETCH_REQUEST";
const USER_FETCH_SUCESS = "USER_FETCH_SUCESS";
const USER_FETCH_FAILED = "USER_FETCH_FAILED";

const USER_CREATE = "USER_CREATE";


// ACTION CRETAE

function userFetchRequest() {
  return {
    type: USER_FETCH_REQUEST,
  };
}
function userFetchSucesss(users) {
  return {
    type: USER_FETCH_SUCESS,
    payload: users,
  };
}
function userFetchFailed(error) {
  return {
    type: USER_FETCH_FAILED,
    payload: error.message,
  };
}

function createUser() {
    return {
      type: USER_CREATE,
    };
  }

// reducer

function reducer(state = initalState, action) {
  switch (action.type) {
    case USER_FETCH_REQUEST:
      return { ...state, loading: true };
    case USER_FETCH_SUCESS:
      return { loading: false, users: action.payload };

    case USER_CREATE:
      return { loading: false, users: action.payload }; 

    case USER_FETCH_FAILED:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
}

function getUser() {
  return function (dispatch) {
    dispatch(userFetchRequest());
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => dispatch(userFetchSucesss(res.data)))
      .catch((error) => dispatch(userFetchFailed(error)));
  };
}

function PostCreate() {
    return function (dispatch) {
      dispatch(createUser());
      axios.post("https://jsonplaceholder.typicode.com/users")
     
      .then((res) => dispatch((res.data)))
        .catch((error) => dispatch(userFetchFailed(error)));
    };
  }
  


// store definition

const store = redux.createStore(reducer, redux.applyMiddleware(thunk, logger));

store.subscribe(() => {
  console.log(store.getState);
});

store.dispatch(getUser());
store.dispatch(PostCreate())