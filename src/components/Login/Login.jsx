import { GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../../firebase/firebase";

const Login = () => {
  const [data, setData] = useState(null);
  const provider = new GoogleAuthProvider();

  const handleGoogleSignin = () => {
    console.log("button clicked");
    signInWithPopup(auth, provider)
      .then((data) => {
        console.log(data.user);
        setData(data.user);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleLogout = () => {
    signOut(auth)
      .then(() => {
        setData(null);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className=" py-10">
      <div>
        <p>Please Login</p>
        {data && (
          <>
            <img src={data?.photoURL} alt="" />
            <p>name : {data.displayName}</p>
            <p> email: {data?.email}</p>
          </>
        )}
        {data ? (
          <button
            onClick={handleLogout}
            className=" text-center px-4 py-2 rounded-md bg-black text-white"
          >
            Log out
          </button>
        ) : (
          <button
            onClick={handleGoogleSignin}
            className=" text-center px-4 py-2 rounded-md bg-black text-white"
          >
            Login with google
          </button>
        )}
      </div>
    </div>
  );
};

export default Login;
