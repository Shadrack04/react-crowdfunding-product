import Nav from "./Nav";

export default function Header() {
  return (
    <div className="hero w-full h-52 md:h-60">
      <header className=" py-2 px-4 md:px-10">
        <Nav />
      </header>
    </div>
  );
}
