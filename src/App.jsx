import Header from "./components/Header";
import "./App.css";
import Main from "./components/Main";
import Modal from "./components/Modal";
import ModalPlans from "./components/ModalPlans";
import { useAppContext } from "./context/GlobalContext";

function App() {
  const { openModal } = useAppContext();
  return (
    <div className="">
      <Header />
      <Main />
      {openModal ? (
        <Modal openModal={openModal}>
          <ModalPlans />
        </Modal>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
