import AuthButton from "./AuthButton";
import MenuButton from "./MenuButton";
import MenuContainer from "./menu/MenuContainer";
import useApp from "../hooks/useApp";

export default function Navbar() {
  const { isMenu } = useApp();

  return (
    <div className={`fixed-top`}>
      <div className={`w-full bg-sablis-graphite flex-between px-10 py-7`}>
        <MenuButton />
        <h1 className={`text-sablis-primary text-3xl font-display select-none`}>SABLIS</h1>
        <AuthButton />
      </div>

      <MenuContainer />
    </div>
  );
}
