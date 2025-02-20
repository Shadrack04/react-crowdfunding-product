import { FaRegBookmark } from "react-icons/fa6";
import { FaBookmark } from "react-icons/fa6";
import Button from "./Button";
import masterCraft from "/images/logo-mastercraft.svg";
import bookmark from "/images/icon-bookmark.svg";
import Card from "./Card";
import Progress from "./Progress";
import About from "./About";

function Main() {
  return (
    <main className=" relative w-full">
      <div className=" flex flex-col bg-white w-[90%] md:w-[60%] relative -mt-10 mx-auto shadow-lg rounded-xl">
        <div className=" w-full absolute -top-8 flex items-center">
          <img
            src={masterCraft}
            alt="Master craft logo"
            className=" mx-auto w-16 h-16"
          />
        </div>
        <div className=" mt-12 px-5">
          <h1 className=" text-center text-2xl font-bold my-2">
            Mastercraft Bamboo Monitor Riser
          </h1>
          <p className=" text-gray-500 text-md text-center">
            A beautifully handcrafted monitor stand to reduce neck and eye
            strain.
          </p>
          <div className="my-8 flex items-center justify-center gap-3 md:gap-40">
            <Button>Back this project</Button>
            <div className=" flex items-center cursor-pointer">
              {/* <img className=" z-20" src={bookmark} alt="Bookmark" /> */}
              <div className=" z-20 p-4 bg-black rounded-full">
                <FaBookmark className=" text-gray-400 z-20 h-6 w-6" />
              </div>
              <span className="hidden md:flex text-lg font-semibold text-stone-600 py-3.5 -ml-12 pl-14 pr-6 z-10 rounded-full bg-gray-300">
                Bookmark
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* fake background color for the main section */}
      <div className="absolute top-0 left-0 w-full h-full bg-gray-100 -z-10"></div>

      {/* <div className=" bg-white mt-4 h-56 w-[90%] mx-auto shadow-xl"></div> */}
      <Card>
        <Progress />
      </Card>
      <About />
    </main>
  );
}

export default Main;
