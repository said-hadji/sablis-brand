import AuthButton from "./AuthButton";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <div>
      <div className={`w-full flex-between px-10 py-7`}>
        <MenuButton />
        <h1 className={`text-sablis-primary text-3xl font-display select-none`}>SABLIS</h1>
        <AuthButton />
      </div>
    </div>
  );
}
