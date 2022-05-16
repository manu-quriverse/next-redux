const reducer = (state = {number : 0}, action) => {
    switch (action.type) {
      case "add":
        return {
          number: state.number + action.payload
        };
      case "sub":
        return {
          number: state.number - action.payload
        };
      default:
        return state;
    }
  };

export default reducer;