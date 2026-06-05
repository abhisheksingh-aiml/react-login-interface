import { useState } from "react";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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

       <button>Login</button>
       <p>Email: {email}</p>
       <p>Password: {password}</p>

       

    




    </div>
  );
}
export default App;