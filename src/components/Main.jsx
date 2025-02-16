import Button from "./Button";
import masterCraft from "/images/logo-mastercraft.svg";
import bookmark from "/images/icon-bookmark.svg";

function Main() {
  return (
    <main className=" w-full">
      <div className=" flex flex-col bg-white w-[90%] md:w-[60%]  relative -mt-10 mx-auto shadow-lg rounded-xl">
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
              <img className=" z-20" src={bookmark} alt="Bookmark" />
              <span className="hidden md:flex text-lg font-semibold text-stone-600 py-3.5 -ml-12 pl-14 pr-6 z-10 rounded-full bg-gray-300">
                Bookmark
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className=" bg-white mt-4 h-56 w-[90%] mx-auto shadow-xl"></div>
    </main>
  );
}

export default Main;
