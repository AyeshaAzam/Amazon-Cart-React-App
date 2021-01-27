import "./App.css";
import CartItems from "./Components/CartItems";
import CartTotal from "./Components/CartTotal";
import Header from "./Components/Header";

// Copy from here:  https://github.com/CleverProgrammers/pwj-reactjs-basics
// try on this editor too :https://stackblitz.com/
//https://css-tricks.com/snippets/css/a-guide-to-flexbox/

//https://images-na.ssl-images-amazon.com/images/I/81SGb5l%2BlZL._AC_SX679_.jpg
// try this color :  background-color: #0a2546;
// GOOD READ : https://www.freecodecamp.org/news/javascript-skills-you-need-for-react-practical-examples/

function App() {
  return (
    <div className="app">
      <Header title="Amazon Cart Clone" />
      <div className="app-main">
        <CartItems />
        <CartTotal />
      </div>
    </div>
  );
}

export default App;
