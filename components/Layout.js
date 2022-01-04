import classNames from "classnames";

export default function Layout({ children, className }) {
  return (
    <div
      data-theme="emerald"
      className={classNames(
        "w-full min-h-screen p-10 bg-base-200 font-inter",
        className
      )}
    >
      {children}
    </div>
  );
}
