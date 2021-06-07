import { Link } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <main className="grid place-items-center pt-20 bg-hero h-screen bg-cover">
        <button className=" focus:outline-none ring-offset-4  ring-2 bg-blue-400 p-2 ">
          <Link to="/catalog">Shop now</Link>
        </button>
      </main>
    </>
  );
}

export default App;
