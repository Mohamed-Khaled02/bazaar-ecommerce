import React from "react";
import { BsGithub, BsGoogle } from "react-icons/bs";
import { toast, ToastContainer } from "react-toastify";
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../redux/features/bazarSlice";

const Login = () => {
  const auth = getAuth();

  const provider = new GoogleAuthProvider();

  const dispatch = useDispatch();

  const navigate = useNavigate();
  // handel google auth
  const handelGoogleLogIn = (e) => {
    e.preventDefault();
    signInWithPopup(auth, provider)
      .then((result) => {
        // The signed-in user info.
        const user = result.user;
        console.log(user);
        dispatch(
          addUser({
            id: user.uid,
            name: user.displayName,
            email: user.email,
            image: user.photoURL,
          })
        );

        setTimeout(() => {
          navigate("/cart");
        }, 1000);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  // sign out handel
  const handelGoogleSingOut = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        toast.success("Log Out Successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-4">
        <button
          className="flex items-center justify-center px-4 py-2 bg-red-500 hover:bg-red-600 text-white rounded-lg"
          onClick={handelGoogleLogIn}
        >
          <BsGoogle className="w-5 h-5 mr-2" />
          Sign in with Google
        </button>
        <button className="flex items-center justify-center px-4 py-2 bg-gray-800 hover:bg-gray-900 text-white rounded-lg">
          <BsGithub className="w-5 h-5 mr-2" />
          Sign in with Github
        </button>
      </div>
      <button
        onClick={handelGoogleSingOut}
        className="text-xl ml-4 bg-black text-white duration-200 px-4 py-2 rounded-lg hover:bg-gray-200 hover:text-black"
      >
        Sign out
      </button>
      {/* toastify */}
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
};

export default Login;
