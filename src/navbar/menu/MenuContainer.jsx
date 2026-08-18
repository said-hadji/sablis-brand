import useApp from "../../hooks/useApp";

export default function MenuContainer() {
  const { isMenu } = useApp();

  return (
    <div className={["below-parent duration-300", isMenu ? "translate-x-0" : "-translate-x-full"].join(" ")}>
      <div
        className={`w-80 h-screen bg-sablis-surface border border-sablis-border`}
      ></div>
    </div>
  );
}
