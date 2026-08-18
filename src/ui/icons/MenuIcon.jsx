import useApp from "../../hooks/useApp";

export default function MenuIcon() {
  const { isMenu } = useApp();

  const lineStyle = "w-6 h-px bg-sablis-secondary rounded-full duration-300";

  return (
    <div className={`flex flex-col gap-1.5`}>
      <span
        className={[lineStyle, isMenu ? "-rotate-45 translate-y-1" : ""].join(" ")}
      ></span>
      <span
        className={[lineStyle, isMenu ? "rotate-45 translate-y-[-2.8px]" : ""].join(" ")}
      ></span>
    </div>
  );
}
