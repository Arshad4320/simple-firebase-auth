// import {
//   GithubAuthProvider,
//   GoogleAuthProvider,
//   signInWithPopup,
//   signOut,
// } from "firebase/auth";
// import React, { useState } from "react";
// import { auth } from "../../firebase/firebase";

// const Login = () => {
//   const [data, setData] = useState(null);
//   const provider = new GoogleAuthProvider();
//   const githubProvider = new GithubAuthProvider();
//   const handleGoogleSignin = () => {
//     console.log("button clicked");
//     signInWithPopup(auth, provider)
//       .then((data) => {
//         setData(data.user);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   const handleLogout = () => {
//     signOut(auth)
//       .then(() => {
//         setData(null);
//       })
//       .catch((err) => console.log(err));
//   };
//   const handleGithubSignin = () => {
//     signInWithPopup(auth, githubProvider)
//       .then((result) => setData(result.user))
//       .catch((err) => {
//         console.log(err);
//       });
//   };
//   return (
//     <div className=" py-10">
//       <div>
//         <p>Please Login</p>
//         {data && (
//           <>
//             <img src={data?.photoURL} alt="" />
//             <p>name : {data.displayName}</p>
//             <p> email: {data?.email}</p>
//           </>
//         )}
//         {data ? (
//           <button
//             onClick={handleLogout}
//             className=" text-center px-4 py-2 rounded-md bg-black text-white"
//           >
//             Log out
//           </button>
//         ) : (
//           <>
//             <button
//               onClick={handleGoogleSignin}
//               className=" text-center px-4 py-2 rounded-md bg-black text-white"
//             >
//               Login with google
//             </button>
//             <button
//               onClick={handleGithubSignin}
//               className=" text-center px-4 py-2 rounded-md bg-black text-white"
//             >
//               Login with Github
//             </button>
//           </>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Login;

import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
} from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "../../firebase/firebase";
import { useRef } from "react";

const Login = () => {
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    // 123Aa!
    signInWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  const handleForgetPassword = () => {
    const email = emailRef.current.value;

    if (!email) {
      alert("Please enter your email before resetting password!");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("Please check your email for reset instructions.");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="flex justify-center items-center min-h-screen  from-blue-100 via-indigo-200 to-blue-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-indigo-600 mb-6">
          Login to Your Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              ref={emailRef}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            />
          </div>
          <p className="cursor-pointer" onClick={handleForgetPassword}>
            Forget Password{" "}
          </p>
          {/* Button */}
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-2 rounded-lg font-semibold hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
        </form>

        {/* Extra Links */}
        <p className="text-center text-gray-600 text-sm mt-5">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-500 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
