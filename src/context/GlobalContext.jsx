// import React, { createContext, useContext, useState } from "react";

// const AppContext = createContext();

// function GlobalContext({ children }) {
//   const [selectedPlan, setSelectedPlan] = useState(null);

//   function handleSelectPlan(index) {
//     setSelectedPlan(index);
//   }

//   return (
//     <AppContext.Provider
//       value={{
//         selectedPlan,
//         handleSelectPlan,
//       }}
//     >
//       {children}
//     </AppContext.Provider>
//   );
// }

// export const useAppContext = () => {
//   const context = useContext(AppContext);
//   if (context === undefined)
//     throw new Error("AppContext is used outside its scope");
//   return context;
// };

// export default GlobalContext;
