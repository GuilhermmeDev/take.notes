import Logo from "./Logo";
import MenuUser from "./MenuUser";
export default function Cabecalho() {
  return (
    <header className="flex items-center bg-neutral-900 h-20 gap-5 px-5 justify-between">
      <Logo />
      <span className="flex-grow"></span>
      <MenuUser user={"G"} />
    </header>
  );
}
