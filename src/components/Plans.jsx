import PropTypes from "prop-types";
import Button from "./Button";
import { usePlan } from "../context/plan-context";

const plansArray = [
  {
    id: "bambooStand",
    plan: "Bamboo stand",
    amount: 25,
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    quantity: 101,
  },
  {
    id: "blackStand",
    plan: "Black Edition Stand",
    amount: 75,
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quantity: 64,
  },
  {
    id: "mahoganyStand",
    plan: "Mahogany Special Edition",
    amount: 200,
    text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quantity: 0,
  },
];

function Plans() {
  const { state } = usePlan();
  const { planQuantities } = state;

  return (
    <div className=" flex flex-col gap-4">
      {plansArray.map((plan) => (
        <Plan
          key={plan.plan}
          plan={plan.plan}
          amount={plan.amount}
          text={plan.text}
          quantity={planQuantities[plan.id]}
        />
      ))}
    </div>
  );
}

Plan.propTypes = {
  plan: PropTypes.string,
  amount: PropTypes.number,
  text: PropTypes.string,
  quantity: PropTypes.number,
};

function Plan({ plan, amount, text, quantity }) {
  return (
    <>
      <div
        className={`${
          quantity === 0 ? " grayscale-100" : ""
        } border-2 border-gray-300 rounded-lg p-4`}
      >
        <h2
          className={`${
            quantity === 0 ? " text-gray-600" : ""
          } text-2xl font-bold`}
        >
          {plan}
        </h2>
        <p className=" text-xl mb-3 text-[hsl(176_50%_47%)] font-bold">
          Pledge ${amount} or more
        </p>
        <article className=" text-gray-500 text-md my-4">
          <p>{text}</p>
        </article>
        <div className=" flex flex-col md:flex-row md:justify-between">
          <p className="text-gray-500 text-lg my-8">
            <span className=" text-4xl text-black font-bold">{quantity} </span>
            <span className="">left</span>
          </p>
          <div className=" my-2">
            <Button>Select Reward</Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Plans;
