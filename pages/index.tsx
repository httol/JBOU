import { useRouter } from "next/router";
import Image from "next/image";
import { ButtonBaseCss } from "./styles";
import Link from "next/link";
import LoginForm from "./Auth/LoginForm";
import RegisterForm from "./Auth/RegisterForm";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [login, setLogin] = useState(true);

  const handleLogin = () => {
    setLogin(true);
  };

  const handleRegister = () => {
    setLogin(false);
  };

  return (
    <main className="relative h-screen">
      <div className="flex h-full w-full ">
        <div className="relative hidden flex-grow flex-col items-center justify-center lg:flex ">
          <div className="mt-14 text-4xl font-semibold">Hi, Welcome back</div>
          <Image
            className="mt-20"
            src={"/svg/undraw_cloud_hosting_7xb1.svg"}
            alt="dashboard"
            height={0}
            width={350}
          />
          <div
            style={{
              background:
                "linear-gradient(rgba(255, 255, 255, 0.85), rgba(255, 255, 255, 0.9)) center center / cover no-repeat, url(/images/overlay_2.jpg)",
            }}
            className="absolute left-0 top-0 -z-[1] h-full w-full scale-x-[-1]"
          />
        </div>
        <div
          className={`relative m-auto flex h-[500px] w-[480px] flex-shrink-0 items-center justify-center  overflow-hidden`}
        >
          <LoginForm active={login} onRegister={handleRegister} />
          <RegisterForm active={login} onLogin={handleLogin} />
        </div>
      </div>
    </main>
  );
}
