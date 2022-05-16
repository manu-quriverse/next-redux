import { createStore, applyMiddleware, combineReducers  } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { HYDRATE, createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducer";


const combinedReducer = combineReducers({
  rootReducer
})
// middleware
const middleware = [thunk];

const masterReducer = (state, action) => {
  console.log("state is: ", state, "action: ", action, "type ", typeof action)
  if (action.type === HYDRATE) {

    const nextState = {
      ...state,
      rootReducer: {number: action.payload.rootReducer.number}
    }
    return nextState
  }
  else {
    return combinedReducer(state,action);
  }
}

// creating store
export const store = createStore(
  masterReducer,
  composeWithDevTools(applyMiddleware(...middleware))
);

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);