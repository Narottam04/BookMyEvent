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

// import ErrorToast from "../ErrorToast";
import { useAuth } from "../../context/AuthContext";

const GoogleLoginBtn = () => {
  // const { signInWithGoogle } = useAuth();
  // let navigate = useNavigate();

  // const toastRef = useRef(null);
  // const [errorMessage, setErrorMessage] = useState(null);

  // async function googleSignInHandler() {
  //   try {
  //     let userNetworth, availableCoins;
  //     if (!Capacitor.isNativePlatform()) {
  //       const response = await signInWithGoogle();
  //       const { isNewUser } = getAdditionalUserInfo(response);
  //       if (isNewUser) {
  //         // add user data with networth on database
  //         const { data: networth, error } = await supabase.from("users").upsert([
  //           {
  //             userId: response.user.uid,
  //             username: response.user.displayName,
  //             email: response.user.email
  //           }
  //         ]);

  //         // if(error){
  //         //     console.log(error)
  //         //     await deleteUser(response.user)
  //         //     alert("Something Went Wrong! Please Try Again.")
  //         // }

  //         // give 100k coins to user
  //         console.log(networth);
  //         const { data: userCoin, error: addToPortfolioError } = await supabase
  //           .from("portfolio")
  //           .upsert([
  //             {
  //               userId: response.user.uid,
  //               coinId: "USD",
  //               coinName: "Virtual USD",
  //               image: "https://img.icons8.com/fluency/96/000000/us-dollar-circled.png",
  //               amount: 100000
  //             }
  //           ]);
  //         userNetworth = networth;
  //         availableCoins = userCoin;
  //       }
  //     } else {
  //       // 1. Create credentials on the native layer
  //       const result = await FirebaseAuthentication.signInWithGoogle();
  //       // 2. Sign in on the web layer using the id token
  //       const credential = GoogleAuthProvider.credential(result.credential?.idToken);
  //       const auth = getAuth();
  //       await signInWithCredential(auth, credential);

  //       if (result?.additionalUserInfo.isNewUser) {
  //         // add user data with networth on database
  //         const { data: networth, error } = await supabase.from("users").upsert([
  //           {
  //             userId: result.user?.uid,
  //             username: result.user?.displayName,
  //             email: result.user?.email
  //           }
  //         ]);

  //         // if(error){
  //         //     console.log(error)
  //         //     await deleteUser(response.user)
  //         //     alert("Something Went Wrong! Please Try Again.")
  //         // }

  //         // give 100k coins to user
  //         console.log(networth);
  //         const { data: userCoin, error: addToPortfolioError } = await supabase
  //           .from("portfolio")
  //           .upsert([
  //             {
  //               userId: result.user?.uid,
  //               coinId: "USD",
  //               coinName: "Virtual USD",
  //               image: "https://img.icons8.com/fluency/96/000000/us-dollar-circled.png",
  //               amount: 100000
  //             }
  //           ]);
  //         userNetworth = networth;
  //         availableCoins = userCoin;
  //       }
  //     }

  //     console.log("logged in user successfully");
  //     navigate("/app", {
  //       state: {
  //         userNetworth,
  //         availableCoins
  //       }
  //     });
  //   } catch (error) {
  //     setErrorMessage(error.message);
  //     toastRef.current.show();
  //     console.log(error);
  //   }
  // }
  return (
    <>
      {/* <ErrorToast message={errorMessage} ref={toastRef} /> */}
      <button
        // onClick={googleSignInHandler}
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
