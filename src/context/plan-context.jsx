import { createContext, useContext, useReducer, useState } from "react";

const PlanContext = createContext();
const initialState = {
  amountReceived: 0,
  totalBackers: 0,
  bambooStand: 100,
  blackStand: 50,
  mahoganyStand: 20,
};
function reducer(state, action) {
  switch (action.type) {
    case "submit":
      if (action.error === "") {
        return {
          ...state,
          amountReceived: state.amountReceived + action.payload,
          totalBackers: state.totalBackers + 1,
        };
      }
      console.log(action.error);

      break;

    default:
      break;
  }
}

export function PlanContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [inputAmount, setInputAmount] = useState(0);
  const [error, setError] = useState("");

  function handleInput(e, minimumAmount) {
    setInputAmount(e.target.value);
    console.log(e.target);
  }

  return (
    <PlanContext.Provider
      value={{ state, dispatch, inputAmount, handleInput, error, setError }}
    >
      {children}
    </PlanContext.Provider>
  );
}
export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) throw new Error("Plan context used outside its scope");
  return context;
}

export default PlanContextProvider;
