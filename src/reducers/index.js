const user = localStorage.getItem("user") || null;

const initialState = {
  user,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default reducer;
