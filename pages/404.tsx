import Image from "next/image";
import Link from "next/link";
import { ButtonBaseCss } from "../styles";

export default function Error() {
  return (
    <div className="h-screen p-5">
      <div className="flex justify-between">
        <Image
          src="/next.svg"
          width={100}
          height={0}
          alt="illustration_dashboard"
        />
        <Link href="" className="hover:underline">
          Need help?
        </Link>
      </div>
      <div className="mt-24 flex flex-col items-center justify-center">
        <div className="w-1/2 md:w-1/3">
          <div className="text-center text-4xl font-extrabold text-slate-700">
            Sorry, page not found!
          </div>
          <div className="mt-3 text-center text-base text-gray-500">
            Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve
            mistyped the URL? Be sure to check your spelling.
          </div>
          <Image
            src="/images/illustration_dashboard.png"
            width={500}
            height={0}
            alt="illustration_dashboard"
            className="mt-4"
          />
        </div>
        <Link href="/" className={ButtonBaseCss}>
          Go to home
        </Link>
      </div>
    </div>
  );
}
