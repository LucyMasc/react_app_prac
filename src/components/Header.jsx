// On the header goes the picture of the money bag and the title
// We need to bring the picture to the app, preferably within the assets folder
// within the component header
// import the picture
// create a function that returns the picture and the title

import logo from "../assets/logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Money bag logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}
