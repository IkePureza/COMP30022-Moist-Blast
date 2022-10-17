import React, { useCallback } from "react";
import { useRouter } from "next/router";
import { auth } from "../firebase/clientApp";
import { signInWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";

const EmailPasswordAuthLogin = () => {
  const Router = useRouter();

  const loginHandler = useCallback(
    async (event: any) => {
      event.preventDefault();
      const { email, password } = event.target.elements;
      try {
        await signInWithEmailAndPassword(auth, email.value, password.value);
        Router.push("/");
      } catch (error) {
        console.log("error");
        alert(error);
      }
    },
    [Router]
  );
  return (
    <div className="">
      <form
        onSubmit={loginHandler}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
      >
        <div className="form-control w-full max-w-md mb-4">
          <label
            className="label text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="input input-bordered w-full max-w-xs"
            name="email"
            id="email-login"
            type="email"
            placeholder="email"
          />
        </div>
        <div className="form-control w-full max-w-md mb-6">
          <label
            className="label text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Password
          </label>
          <input
            className="input input-bordered max-w-xs shadow appearance-none w-full"
            name="password"
            id="password-login"
            type="password"
            placeholder="******************"
          />
        </div>
        <button
          className="btn btn-primary btn-wide transition-all duration-500 py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Sign In
        </button>
        <br />
        <Link href="/signUp">
          <a className="link link-primary link-hover transition-all duration-500">
            Sign up?
          </a>
        </Link>
      </form>
    </div>
  );
};

export default EmailPasswordAuthLogin;
