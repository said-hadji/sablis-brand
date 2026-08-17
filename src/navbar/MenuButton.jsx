import { MenuIcon } from "../ui/icons/MenuIcon";

export function MenuButton() {
  return (
    <button className={`flex-align gap-1 cp`}>
      <MenuIcon  className={`text-sablis-secondary hover:text-sablis-primary`} />
    </button>
  );
}
