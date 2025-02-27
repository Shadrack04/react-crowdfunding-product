import {
  createContext,
  useContext,
  useMemo,
  useReducer,
  useState,
} from "react";

export const PlanContext = createContext();
const initialState = {
  amountReceived: 0,
  totalBackers: 0,
  planQuantities: {
    noReward: null,
    bambooStand: 100,
    blackStand: 50,
    mahoganyStand: 20,
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "submit":
      if (action.error === "") {
        console.log(action.stand);
        return action.stand === "noReward"
          ? {
              ...state,
              amountReceived: state.amountReceived + action.payload,
              totalBackers: state.totalBackers + 1,
            }
          : {
              ...state,
              amountReceived: state.amountReceived + action.payload,
              totalBackers: state.totalBackers + 1,
              planQuantities: {
                ...state.planQuantities,
                [action.stand]: state.planQuantities[action.stand] - 1,
              },
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

  const [error, setError] = useState("");

  const value = useMemo(
    () => ({ state, dispatch, error, setError }),
    [state, error]
  );

  return <PlanContext.Provider value={value}>{children}</PlanContext.Provider>;
}

export function usePlan() {
  const context = useContext(PlanContext);
  if (!context) throw new Error("Plan context used outside its scope");
  return context;
}

export default PlanContextProvider;
