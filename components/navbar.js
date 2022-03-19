export default function NavBar() {

  return (
    <div>
      <nav className="absolute top-6 right-4 lg:right-8 items-center font-cousine md:text-lg hidden sm:flex">
        <div
          className="cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#about");
            anchor.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="mr-14">About</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#projects");
            anchor.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="mr-14">FAQs</p>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => {
            const anchor = document.querySelector("#writing");
            anchor.scrollIntoView({ behavior: "smooth" });
          }}
        >
          <p className="mr-14">Sponsors</p>
        </div>
      </nav>
    </div>
  );
}
