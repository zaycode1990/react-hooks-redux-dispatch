let state = { count: 0 };

function changeState(state, action) {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
}


function render() {
  document.body.textContent = state.count;
}


function dispatch(action) {
  state = changeState(state, action);
  render()
}

dispatch({ type: "counter/increment" });
// => {count: 1}
dispatch({ type: "counter/increment" });
// => {count: 2}
dispatch({ type: "counter/increment" });
// => {count: 3}
dispatch({ type: "counter/increment" });
// => {count: 3}
dispatch({ type: "counter/increment" });
// => {count: 3}
dispatch({ type: "counter/increment" });
// => {count: 3}
dispatch({ type: "counter/increment" });
// => {count: 3}
dispatch({ type: "counter/increment" });
// => {count: 3}
dispatch({ type: "counter/increment" });
// => {count: 3}