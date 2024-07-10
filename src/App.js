import { useAuth0 } from "@auth0/auth0-react";
import "./App.css";
import LoginButton from "./Components/LoginButton";
import UserProfile from "./Components/UserProfile";

function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div>
      <h1>Reactjs auth poc</h1>
      {isAuthenticated ? <UserProfile /> : <LoginButton />}
    </div>
  );
}

export default App;
