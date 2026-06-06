import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (email === "abhi@gmail.com" && password === "82711") {
      alert("Login succesfully");

    }else{
      alert("Invalid email or password");
    }
  };

  return(
    <div>

      <h1>Login Page</h1>

      <input 

      type="email"
      placeholder="Enter Email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      
      
      />
       
       <br /><br />

       <input

       type="password"
       placeholder="Enter Password"
       value={password}
       onChange={(e) => setPassword(e.target.value)}
       
       />

       <br /><br />

       <button onClick={handleLogin}>Login</button>
       

       

    




    </div>
  );
}
export default App;