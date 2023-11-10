import logo from "./logo.png";

export function Header() {
  return (
    <header className='container-lg'>
      <img src={logo} alt='State of New Mexico Seal' />
      <h1 className='display-5'>State of New Mexico | Group Benefits Plan</h1>
    </header>
  );
}
