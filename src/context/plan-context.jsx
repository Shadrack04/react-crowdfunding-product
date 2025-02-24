import { createContext, useContext, useReducer } from "react";

const PlanContext = createContext();
const initialState = {
  amountReceived: 0,
  totalBackers: 0,
  bambooStand: 100,
  blackStand: 50,
  mahoganyStand: 20,
};
function reducer(state, action) {}

export function PlanContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <PlanContext.Provider value={{ state, dispatch }}>
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
