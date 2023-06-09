import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import {
  GoogleAuthProvider,
  getAdditionalUserInfo,
  getAuth,
  signInWithCredential
} from "firebase/auth";
import { Capacitor } from "@capacitor/core";
import { FirebaseAuthentication } from "@capacitor-firebase/authentication";

import Google from "../../assets/svg/google.svg";

import { useAuth } from "../../context/AuthContext";
import ErrorToast from "./ErrorToast";

const GoogleLoginBtn = () => {
  const { signInWithGoogle } = useAuth();
  let navigate = useNavigate();

  const toastRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function googleSignInHandler() {
    try {
      let userNetworth, availableCoins;
      if (!Capacitor.isNativePlatform()) {
        const response = await signInWithGoogle();
        const { isNewUser } = getAdditionalUserInfo(response);
        if (isNewUser) {
          // TODO: add new user to mysql database
          const addUser = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              id: response.user.uid,
              name: response.user.displayName,
              email: response.user.email
            })
          });
          const addUserRes = await addUser.json();
          console.log(addUserRes);
        }
      } else {
        // 1. Create credentials on the native layer
        const result = await FirebaseAuthentication.signInWithGoogle();
        // 2. Sign in on the web layer using the id token
        const credential = GoogleAuthProvider.credential(result.credential?.idToken);
        const auth = getAuth();
        await signInWithCredential(auth, credential);

        if (result?.additionalUserInfo.isNewUser) {
          // TODO: add new user to mysql database
          const addUser = await fetch("/api/user", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({
              userId: result.user?.uid,
              username: result.user?.displayName,
              email: result.user?.email
            })
          });
        }
      }

      console.log("logged in user successfully");
      navigate("/app");
    } catch (error) {
      setErrorMessage(error.message);
      toastRef.current.show();
      console.log(error);
    }
  }
  return (
    <>
      <ErrorToast message={errorMessage} ref={toastRef} />
      <button
        onClick={googleSignInHandler}
        aria-label="Continue with google"
        className="focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-gray-700 py-3.5 px-4 border rounded-lg border-gray-700 flex items-center w-full mt-10"
      >
        <img src={Google} alt="" width={19} height={20} />
        <p className="text-base font-medium ml-4 text-gray-900">Continue with Google</p>
      </button>
    </>
  );
};

export default GoogleLoginBtn;
