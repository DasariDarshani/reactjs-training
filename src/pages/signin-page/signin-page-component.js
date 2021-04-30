import React, { useState, useEffect } from "react";
import "./signin-page-styles.scss";
import { signInWithGoogle } from "../../firebase";
import { auth } from "../../firebase";

const SignInPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribeFromAuth = auth.onAuthStateChanged((user1) => {
      setUser(user1);
    });
  }, []);

  const handleSubmit = () => {
    alert(email);
  };

  return (
    <div className="signin-page">
      <h2>Sign In</h2>

      {user ? (
        <div>
          <div>
            <img src={user.photoURL} alt="pic" />
          </div>
          <div>Name: {user.displayName}</div>
          <div>Email: {user.email}</div>

          <button onClick={() => auth.signOut()}>LOG OUT</button>
        </div>
      ) : (
        <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      )}

      {/* <button onClick={signInWithGoogle}>SIGN IN WITH GOOGLE</button>
      <button onClick={() => auth.signOut()}>LOG OUT</button> */}
      <form onSubmit={handleSubmit}>
        <input
          name="email"
          type="email"
          value={email}
          placeholder="Email"
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          name="password"
          type="password"
          value={password}
          placeholder="Password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignInPage;
