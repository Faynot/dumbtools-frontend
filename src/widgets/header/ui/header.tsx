import { Link } from "@/shared/ui";
import Image from "next/image";

import Logo from "@/shared/assets/logo.svg";

// later move colors to global vars

export const Header = () => {
  return (
    <header className="flex justify-between p-5 bg-[#FF8F40]">
      <div>
        <Image src={Logo} alt="logo" />
      </div>
      <div className="text-[#0D1017] gap-5 flex">
        <Link href="/env" className="text-xl">
          fake env
        </Link>
        <Link href="/config" className="text-xl">
          configs
        </Link>
      </div>
    </header>
  );
};
