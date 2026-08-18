import MenuIcon from "../ui/icons/MenuIcon";
import useApp from "../hooks/useApp";

export default function MenuButton() {
  const { isMenu, setIsMenu } = useApp();

  return (
    <button
      onClick={() => setIsMenu(!isMenu)}
      className={`w-fit ${isMenu ? "h-5.5" : ""} cp`}
    >
      <MenuIcon />
    </button>
  );
}
