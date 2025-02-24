import React, { createContext, useContext, useState } from "react";

const AppContext = createContext();

function GlobalContext({ children }) {
  const [openModal, setOpenModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [bookmark, setBookmark] = useState(false);

  function handleSelectPlan(index) {
    setSelectedPlan(index);
  }

  function handleBookmarkClick() {
    setBookmark(!bookmark);
  }

  return (
    <AppContext.Provider
      value={{
        openModal,
        setOpenModal,
        selectedPlan,
        handleSelectPlan,
        bookmark,
        handleBookmarkClick,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("AppContext is used outside its scope");
  return context;
};

export default GlobalContext;
