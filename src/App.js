import logo from "./logo.svg";
import classe from "./App.module.css";
import { UserSkill } from "./pages";

function App() {
  return (
    <div className={classe.container_main}>
      <UserSkill />
    </div>
  );
}

export default App;
