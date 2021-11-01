import Login from "./components/login/Login"
import Register from "./components/register/Register"
import ShowUsers from "./components/showUsers/ShowUsers";

function App() {
  return (
    <div className="page">
      <Login></Login>
      <Register></Register>
      <ShowUsers></ShowUsers>
    </div>
  );
}

export default App;
