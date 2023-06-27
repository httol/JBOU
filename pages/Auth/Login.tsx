import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import IllusHome from "../assets/illus_home";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";

export default function Login() {
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(true);
  };

  const handleRegister = () => {
    setLogin(false);
  };

  return (
    <main className="relative h-screen   dark:text-white">
      <div className="flex h-full w-full ">
        <div className=" relative hidden flex-grow flex-col items-center justify-center dark:bg-slate-800  lg:flex">
          <div className="mt-14 text-4xl font-semibold dark:text-white">
            启明星计划
          </div>
          <IllusHome className="w-2/5 animate-pulse" />
          <div
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.9)) center center / cover no-repeat, url(/images/overlay_2.jpg)",
            }}
            className="absolute left-0 top-0 -z-[1] h-full w-full scale-x-[-1]"
          />
        </div>
        <div
          className={`relative m-auto flex h-full w-[480px] flex-shrink-0 items-center justify-center overflow-hidden dark:bg-slate-900`}
        >
          <LoginForm active={login} onRegister={handleRegister} />
          <RegisterForm active={!login} onLogin={handleLogin} />
        </div>
      </div>
    </main>
  );
}
