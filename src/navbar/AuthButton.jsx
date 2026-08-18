import AuthIcon from "../ui/icons/AuthIcon";

export default function AuthButton() {
  return (
    <button className="cp">
      <AuthIcon className={`text-sablis-secondary hover:text-sablis-primary`} />
    </button>
  );
}
