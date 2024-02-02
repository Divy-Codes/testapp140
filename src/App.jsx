import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import auth from "../fire";

function App() {
  const [count, setCount] = useState(0);

  async function authorize() {
    try {
      const provider = new GoogleAuthProvider();
      // provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");
      const response = await signInWithPopup(auth, provider);
      console.log(`response:`, response);
    } catch (error) {}
  }

  return (
    <>
      <div>
        Learning firebase deploy. Added this to check npm CI && npm run build
      </div>
      <p>
        Adding another para to check if pushing code to github will also update
        the app in firebase link
      </p>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <button onClick={authorize}>Login</button>
    </>
  );
}

export default App;
