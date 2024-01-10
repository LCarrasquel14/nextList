import Link from "next/link";

const navBar = () => {
  return (
    <nav className="bg-slate-400 mb-3 flex justify-between px-20 p-3 items-center text-black font-bold">
      <Link href="/">Home</Link>
      <ul>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </nav>
  );
};

export default navBar;
