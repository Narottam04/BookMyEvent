import { useRef, useState } from "react";
import { useNavigate } from "react-router";

import ErrorToast from "./ErrorToast";
import { useAuth } from "../../context/AuthContext";

const Logout = () => {
  const { logout } = useAuth();
  let navigate = useNavigate();

  const toastRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function logoutHandler() {
    try {
      await logout();
      console.log("logged out user successfully");
      navigate("/");
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
        type="button"
        onClick={logoutHandler}
        className="text-white my-2 bg-blue-500 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-semibold rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  font-text w-full text-center"
      >
        Logout
      </button>
    </>
  );
};

export default Logout;
