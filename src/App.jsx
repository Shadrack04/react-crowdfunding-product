import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import PlanContextProvider from "./context/plan-context";

function App() {
  return (
    <div className="">
      <Header />
      <PlanContextProvider>
        <Main />
      </PlanContextProvider>
    </div>
  );
}

export default App;
