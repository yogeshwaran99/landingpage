import {useEffect, useState} from "react";
import logo from "./../assets/logo.png";
function Nav() {

  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [dark]);
  return (
    <>
      <nav className="fixed flex flex-col items-center">
        <div className="w-screen h-18 pt-4 flex justify-center ">
          <div className=" h-full flex justify-between items-center w-80 shadow-lg  px-6 rounded-full backdrop-blur-sm bg-stone-100/35 md:w-11/12 dark:bg-neutral-900">
            <img src={logo} alt="logo" className="h-8 md:h-16" />
            <div className="flex items-center gap-6">
              <button onClick={() => setDark(!dark)} className="md:hidden font-sans text-xl dark:text-stone-200">{dark ? "☀" : "☾"}</button>
              <button onClick={() => setOpen(!open)} className="h-4 w-4 flex flex-col justify-between md:hidden focus:outline-none">
                <span className={`block h-0.5 bg-slate-400  ${open ? "rotate-45  translate-y-1.5" : ""}`} ></span>
                <span className={`block h-0.5 bg-slate-400  ${open ? "opacity-0" : "opacity-100"}`} ></span>
                <span className={`block h-0.5 bg-slate-400 ${open ? "-rotate-45  -translate-y-2" : ""}`} ></span>
              </button>
            </div>
            <div className="hidden md:flex gap-12 p-4">
              <button className="hover:cursor-pointer hover:text-stone-500 dark:hover:text-stone-100 dark:text-stone-400">Login</button>
              <button className="hover:cursor-pointer hover:text-stone-500 dark:hover:text-stone-100 dark:text-stone-400">Register</button>
              <button onClick={() => setDark(!dark)} className="hover:cursor-pointer font-sans text-xl dark:text-stone-200">{dark ? "☀" : "☾"}</button>
            </div>
          </div>
        </div>
        {open &&
          <div className="bg-gray-300 backdrop-blur w-78 rounded-lg h-36 mt-2">

            <div className="flex flex-col text-black font-bold gap-4 m-4">
              <button className="p-2 bg-zinc-200 rounded-xl shadow-lg">
                login
              </button>
              <button className="p-2 bg-zinc-200 rounded-xl shadow-lg">
                Register
              </button>
            </div>
          </div>
        }
      </nav >
    </>
  );
}

export default Nav;
