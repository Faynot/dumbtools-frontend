import { Link } from "@/shared/ui";

// later move colors to global vars :o
// (and delete "min-h-[25vh] and move text style to text container ;;;3"

export const Footer = () => {
  return (
    <footer className="bg-[#FF8F40] text-[#0D1017] text-xl min-h-[25vh] p-5 flex justify-center items-center">
      <Link href="https://t.me/natalya_kpop">Telegram</Link>
    </footer>
  );
};
