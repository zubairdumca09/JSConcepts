
//Action
const loginAction = (data) => {
    return { type: "LOGIN SUCCESS", data }
}

// Reducer
const LoginReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN SUCCESS":
            return action.data
    }
}
// Dispatching an action
this.props.dispatch(loginAction())


//Accessing data in component
mapStateToProps(state) {
    return { data: state.LoginReducer }
}

//Store 
export default function configureStore(initialState) {
    return createStore(
      rootReducer,
      initialState,
      applyMiddleware(thunk),
    );
  }