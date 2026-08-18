import AuthButton from "./AuthButton";
import MenuButton from "./MenuButton";

export default function Navbar() {
  return (
    <div className={`fixed-top`}>
      <div className={`w-full bg-sablis-graphite flex-between px-10 py-7`}>
        <MenuButton />
        <h1 className={`text-sablis-primary text-3xl font-display select-none`}>SABLIS</h1>
        <AuthButton />
      </div>

      <div className={`absolute top-full left-0 z-50 w-80 h-screen bg-sablis-surface border border-sablis-border`}></div>
    </div>
  );
}
