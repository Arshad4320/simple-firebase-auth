import React, { useState } from "react";
import { Link } from "react-router";
import { auth } from "./../../firebase/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
const Register = () => {
  const [error, setError] = useState(false);
  const [show, setShow] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(email, password);
    const regExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{6}$/;

    if (!regExp.test(password)) {
      setError(true);
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((data) => {
        setError(false);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
        setError(true);
      });

    // console.log("Register Data:", formData);
  };

  return (
    <div className="flex justify-center items-center min-h-screen  from-green-100 via-emerald-200 to-teal-300">
      <div className="bg-white p-8 rounded-2xl shadow-2xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-emerald-600 mb-6">
          Create an Account
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
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-gray-700 font-medium mb-1">
              Password
            </label>
            <div className="relative ">
              <input
                type={show ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <div
                className="absolute top-3 right-3"
                onClick={() => {
                  setShow(!show);
                }}
              >
                {show ? <IoEyeOutline /> : <IoEyeOffOutline />}{" "}
              </div>
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-emerald-600 text-white py-2 rounded-lg font-semibold hover:bg-emerald-700 transition duration-300"
          >
            Register
          </button>
        </form>

        {/* Extra Link */}
        <p className="text-center text-gray-600 text-sm mt-5">
          Already have an account?{" "}
          <Link to="/login" className="text-emerald-500 hover:underline">
            Login
          </Link>
        </p>
        {error && (
          <p className="text-red-500">please provide letter, number, symbol </p>
        )}
      </div>
    </div>
  );
};

export default Register;
