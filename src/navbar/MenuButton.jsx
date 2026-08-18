import MenuIcon from "../ui/icons/MenuIcon";

export default function MenuButton() {
  return (
    <button className={`flex-align gap-1 cp`}>
      <MenuIcon strokeWidth={1.2} className={`text-sablis-secondary hover:text-sablis-primary`} />
    </button>
  );
}
