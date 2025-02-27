import { useState } from "react";
import { usePlan } from "../context/plan-context";
import Button from "./Button";
import InputComp from "./InputComp";
import { IoCloseSharp } from "react-icons/io5";

const plansArray = [
  {
    id: "noReward",
    plan: "Pledge with no reward",
    amount: null,
    text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via emil.",
  },
  {
    id: "bambooStand",
    plan: "Bamboo stand",
    amount: 25,
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
  },
  {
    id: "blackStand",
    plan: "Black Edition Stand",
    amount: 75,
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
  },
  {
    id: "mahoganyStand",
    plan: "Mahogany Special Edition",
    amount: 200,
    text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
  },
];

function ModalPlans({ setOpenModal }) {
  const [selectedPlan, setSelectedPlan] = useState(null);

  document.querySelectorAll("input[type=number]").forEach((input) => {
    input.addEventListener("wheel", (event) => event.preventDefault());
  });

  return (
    <div className=" pb-4">
      <div className=" flex items-center justify-between">
        <h1 className=" text-2xl font-bold my-2">Back this project</h1>
        <IoCloseSharp
          onClick={() => setOpenModal(false)}
          className=" w-8 h-8 cursor-pointer"
        />
      </div>
      <div className=" max-h-[78vh] overflow-y-auto scrollbar-hide">
        <p className=" text-gray-500 text-sm">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        {plansArray.map((plan, index) => (
          <Plan
            key={index}
            plan={plan}
            index={index}
            setOpenModal={setOpenModal}
            selectedPlan={selectedPlan}
            setSelectedPlan={setSelectedPlan}
          />
        ))}
      </div>
    </div>
  );
}

function Plan({ plan, index, setOpenModal, selectedPlan, setSelectedPlan }) {
  const { state, dispatch, error, setError } = usePlan();

  const [inputAmount, setInputAmount] = useState("");
  const [stand, setStand] = useState("");

  const { planQuantities } = state;

  function handleSelectPlan(index) {
    setSelectedPlan(index);
    setError("");
  }

  function handleInput(e, minimumAmount) {
    const { value, name } = e.target;
    if (!value) return;
    setInputAmount(value);
    setStand(name);
    if (e.target.value < minimumAmount) {
      setError(`Amount can not be less than ${minimumAmount}`);
    } else {
      setError("");
    }
  }

  function handleSubmit() {
    if (!error) {
      dispatch({
        type: "submit",
        error: error,
        payload: Number(inputAmount),
        stand: stand,
      });
      setOpenModal(false);
    }
  }

  return (
    <div
      onClick={() => handleSelectPlan(index)}
      className={`${
        selectedPlan === index ? "border-[hsl(176_50%_47%)]" : "border-gray-300"
      }
      ${
        planQuantities[plan.id] === 0
          ? " grayscale-100 pointer-events-none"
          : ""
      }
       border-2 rounded-xl p-4 mt-4 cursor-pointer`}
    >
      <div className=" mb-4">
        <label
          htmlFor={plan.id}
          className={`${
            planQuantities[plan.id] === 0 ? " text-gray-600" : ""
          } flex items-center text-xl font-bold`}
        >
          <input
            checked={selectedPlan === index}
            onChange={() => console.log("changed")}
            type="radio"
            id="plan"
            name="plan"
            className=" mr-4 w-6 h-6 accent-[hsl(176_50%_47%)] focus:outline-none focus:ring-2 focus:ring-[hsl(176_50%_47%)]"
          />

          <div className=" flex items-center justify-between w-full">
            <div className=" md:flex gap-4">
              {plan.plan}
              {plan.amount && (
                <p className=" text-xl text-[hsl(176_50%_47%)] font-bold">
                  Pledge ${plan.amount} or more
                </p>
              )}
            </div>
            {planQuantities[plan.id] >= 0 ? (
              <p className=" hidden md:block text-gray-500 text-lg">
                <span className=" text-2xl text-black font-bold ">
                  {planQuantities[plan.id]}
                </span>
                <span className=""> left</span>
              </p>
            ) : (
              ""
            )}
          </div>
        </label>
      </div>
      <article>
        <p className=" text-gray-500 text-sm">{plan.text}</p>
      </article>
      <div>
        <div className="  mb-2">
          <p className="text-gray-500 text-lg my-4 md:hidden">
            <span className=" text-2xl text-black font-bold ">
              {planQuantities[plan.id]}
            </span>
            <span className=""> left</span>
          </p>
        </div>

        <div
          className={` ${
            selectedPlan === index ? "" : "hidden "
          } border-t-2 border-gray-300 mt-4`}
        >
          <div className=" md:flex md:justify-between mt-4">
            <p className=" my-2 text-center text-gray-500 text-lg">
              Enter your pledge
            </p>
            <div className=" flex items-center justify-between md:gap-4">
              <InputComp
                minimumAmount={plan.amount}
                inputAmount={inputAmount}
                handleInput={handleInput}
                name={plan.id}
              />
              <Button onClick={handleSubmit}>Continue</Button>
            </div>
          </div>
          {error && <p className=" text-red-700 text-end mr-8">{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default ModalPlans;
