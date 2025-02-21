import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Modal from "./components/Modal";
import ModalPlans from "./components/ModalPlans";

function App() {
  return (
    <div className="">
      <Header />
      <Main />
      <Modal>
        <ModalPlans />
      </Modal>
    </div>
  );
}

export default App;
