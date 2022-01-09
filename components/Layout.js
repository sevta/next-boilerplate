import classNames from "classnames";
import Navbar from "./navbar";

export default function Layout({ children, className }) {
  return (
    <div
      data-theme="emerald"
      className={classNames(
        "w-full min-h-screen p-10 bg-base-200 font-public-sans",
        className
      )}
    >
      <div className="container">
        <div className="flex items-center justify-between">
          <div className="title">Boilerplate</div>
          <Navbar />
        </div>
        <main className="mt-10">{children}</main>
      </div>
    </div>
  );
}
