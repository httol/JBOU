import { useRouter } from "next/router";
import { ButtonBaseCss } from "./styles";

export default function Home() {
  const router = useRouter();

  const handleLogin = () => {
    router.push("/dashboard/12");
  };

  return (
    <main className="relative h-screen">
      <div className="flex h-full">
        <div className="relative hidden  flex-grow items-center justify-center lg:flex ">
          <div className="text-3xl font-semibold">Hi, Welcome back!</div>
          <div className="absolute left-0 top-0 -z-[1] h-full w-full scale-[-1] bg-[url('/images/overlay_2.jpg')] bg-center bg-no-repeat" />
        </div>
        <div className="relative w-[480px] px-20">
          <div className="mb-12 text-3xl font-semibold">Sign in to XXX</div>
          <fieldset>
            <input id="username" type="text" placeholder="username" />
            <label htmlFor="username">Username</label>
          </fieldset>
          <fieldset>
            <input id="password" type="password" placeholder="password" />
            <label htmlFor="password">Password</label>
          </fieldset>
          <button
            onClick={handleLogin}
            className={`${ButtonBaseCss} mt-4 w-full`}
          >
            Login
          </button>
        </div>
      </div>
    </main>
  );
}
