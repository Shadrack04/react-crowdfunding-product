import Button from "./Button";
import InputComp from "./InputComp";
import { IoCloseSharp } from "react-icons/io5";

const plansArray = [
  {
    id: "noReward",
    plan: "Pledge with no reward",
    amount: null,
    text: "Choose to support us without a reward if you simply believe in our project. As a backer, you will be signed up to receive product updates via emil.",
    quantity: null,
  },
  {
    id: "bamboo",
    plan: "Bamboo stand",
    amount: 25,
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.",
    quantity: 101,
  },
  {
    id: "black",
    plan: "Black Edition Stand",
    amount: 75,
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quantity: 64,
  },
  {
    id: "mahogany",
    plan: "Mahogany Special Edition",
    amount: 200,
    text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    quantity: 0,
  },
];

function ModalPlans() {
  return (
    <div>
      <div className=" flex items-center justify-between mb-2">
        <h1 className=" text-2xl font-bold my-2">Back this project</h1>
        <IoCloseSharp className=" w-8 h-8" />
      </div>
      <div className=" max-h-[78vh] overflow-y-auto">
        <p className=" text-gray-500 text-sm">
          Want to support us in bringing Mastercraft Bamboo Monitor Riser out in
          the world?
        </p>
        {plansArray.map((plan, index) => (
          <Plan key={plan.id} plan={plan} />
        ))}
      </div>
    </div>
  );
}

function Plan({ plan }) {
  return (
    <div className="border-2 border-gray-300 rounded-lg p-4 mt-4">
      <div className=" mb-4">
        <label
          htmlFor={plan.id}
          className=" flex items-center text-xl font-bold"
        >
          <input
            type="radio"
            id="noReward"
            name={plan.id}
            className=" mr-4 w-6 h-6"
          />
          <div>
            {plan.plan}
            {plan.amount && (
              <p className=" text-xl text-[hsl(176_50%_47%)] font-bold">
                Pledge ${plan.amount} or more
              </p>
            )}
          </div>
        </label>
      </div>
      <article>
        <p className=" text-gray-500 text-sm">
          Choose to support us without a reward if you simply believe in our
          project. As a backer, you will be signed up to receive product updates
          via emil.
        </p>
      </article>
      <div>
        {plan.quantity && (
          <div className=" border-b-2 border-gray-300 mb-2">
            <p className="text-gray-500 text-lg my-4 md:hidden">
              <span className=" text-2xl text-black font-bold">
                {plan.quantity}{" "}
              </span>
              <span className="">left</span>
            </p>
          </div>
        )}
        <div>
          <p className=" my-2 text-center">Enter your pledge</p>
          <div className=" flex items-center justify-between">
            <InputComp />
            <Button>Continue</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ModalPlans;
