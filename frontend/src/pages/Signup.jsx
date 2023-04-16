import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, ErrorMessage, Field } from "formik";
import * as Yup from "yup";

import GoogleLoginBtn from "../components/lvl0components/GoogleLoginBtn";
import ErrorToast from "../components/lvl0components/ErrorToast";
import { useAuth } from "../context/AuthContext";
import { getAdditionalUserInfo } from "firebase/auth";

const duration = 0.3;
const easing = [0.16, 1, 0.3, 1];

const pageVariants = {
  initial: {
    opacity: 0,
    y: 10
  },
  in: {
    opacity: 1,
    y: 0,
    transition: {
      duration,
      ease: easing
    }
  },
  out: {
    opacity: 0,
    y: -10,
    transition: {
      duration,
      ease: easing
    }
  }
};

const initialValues = {
  username: "",
  email: "",
  password: "",
  confirmPassword: ""
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .min(3, "Username must be 3 charcters at minimum")
    .max(30, "Username is too big!")
    .required("Required"),

  email: Yup.string().email("Invalid Email Address").required("Required"),

  password: Yup.string()
    .min(6, "Password must be 6 charcters at minimum")
    .max(30, "Password is too big!")
    .required("Required"),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords don't match!")
    .required("Required")
});

const Signup = () => {
  const { signUp, currentUser, updateProfileName, deleteUser } = useAuth();
  let navigate = useNavigate();
  const toastRef = useRef(null);
  const [errorMessage, setErrorMessage] = useState(null);

  async function onSubmit(values, onSubmitProps) {
    console.log("signup started!");
    const { email, password, username } = values;
    try {
      const response = await signUp(email, password);
      await updateProfileName(username);

      const { isNewUser } = getAdditionalUserInfo(response);
      console.log(isNewUser, "new user1");

      if (isNewUser) {
        console.log(isNewUser, "new user2");
        // TODO: add new user to mysql database
        const addUser = await fetch("/api/user", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            id: response.user.uid,
            name: username,
            email
          })
        });

        const addUserRes = await addUser.json();
        console.log("added new user!!", addUserRes);
        if (!addUser.ok) {
          throw new Error(addUser);
        }
      }

      if (response.user) {
        console.log("created user successfully");
        navigate("/app");
      }
    } catch (error) {
      setErrorMessage(error.message);
      toastRef.current.show();
      console.log(error);
    }
  }

  useEffect(() => {
    if (currentUser) {
      navigate("/app");
    }
  }, [currentUser]);

  return (
    <motion.div
      key={location.pathname}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}
    >
      <ErrorToast message={errorMessage} ref={toastRef} />
      <main className="w-full flex">
        <div className="relative flex-1 hidden items-center justify-center h-screen bg-gray-900 lg:flex">
          <div className="relative z-10 w-full max-w-md">
            <img src="https://floatui.com/logo-dark.svg" width={150} />
            <div className=" mt-4 space-y-5">
              <h3 className="text-white text-3xl font-bold">
                TechConnect: The Ultimate Event App for Tech Enthusiasts
              </h3>
              <p className="text-gray-300">
                Join the Tech Revolution with TechConnect - The Only App You Need for Tech Events!
              </p>
              <div className="flex items-center -space-x-2 overflow-hidden">
                <img
                  src="https://randomuser.me/api/portraits/women/79.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://api.uifaces.co/our-content/donated/xZ4wg2Xj.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=a72ca28288878f8404a795f39642a46f"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://randomuser.me/api/portraits/men/86.jpg"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src="https://images.unsplash.com/photo-1510227272981-87123e259b17?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=3759e09a5b9fbe53088b23c615b6312e"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <p className="text-sm text-gray-400 font-medium translate-x-5">Join 5.000+ users</p>
              </div>
            </div>
          </div>
          <div
            className="absolute inset-0 my-auto h-[500px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 132, 252, 0.2) 4.54%, rgba(232, 121, 249, 0.26) 34.2%, rgba(192, 132, 252, 0.1) 77.55%)",
              filter: "blur(118px)"
            }}
          ></div>
        </div>
        {/* main layout */}
        <div className="flex-1 flex items-center justify-center h-screen">
          <div className="w-full max-w-md space-y-8 px-4 bg-white text-gray-600 sm:px-0">
            <div className="">
              {/* <img src="https://floatui.com/logo.svg" width={150} className="lg:hidden" /> */}
              <div className="mt-5 space-y-2">
                <h3 className="text-gray-800 text-2xl font-bold sm:text-3xl">Sign up</h3>
                <p className="">
                  Already have an account?{" "}
                  <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                    Log in
                  </Link>
                </p>
              </div>
            </div>
            <GoogleLoginBtn />

            <div className="relative">
              <span className="block w-full h-px bg-gray-300"></span>
              <p className="inline-block w-fit text-sm bg-white px-2 absolute -top-2 inset-x-0 mx-auto">
                Or continue with
              </p>
            </div>
            <Formik
              initialValues={initialValues}
              onSubmit={onSubmit}
              validationSchema={validationSchema}
              validateOnMount
            >
              {(formik) => {
                return (
                  <Form autoComplete="off" className="space-y-5">
                    <div>
                      <label className="font-medium">Name</label>
                      <Field
                        id="username"
                        name="username"
                        type="username"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.username}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      <ErrorMessage name="username">
                        {(errorMsg) => <p className="text-sm text-red-600">{errorMsg}</p>}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="font-medium">Email</label>
                      <Field
                        id="email"
                        name="email"
                        type="email"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.email}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      <ErrorMessage name="email">
                        {(errorMsg) => <p className="text-sm text-red-600">{errorMsg}</p>}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="font-medium">Password</label>
                      <Field
                        id="password"
                        name="password"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.password}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      <ErrorMessage name="password">
                        {(errorMsg) => {
                          setErrorMessage(errorMsg);
                          toastRef.current.show();
                          return <p className="text-sm text-red-600">{errorMsg}</p>;
                        }}
                      </ErrorMessage>
                    </div>
                    <div>
                      <label className="font-medium">Confirm Password</label>
                      <Field
                        id="confirmPassword"
                        name="confirmPassword"
                        type="password"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.confirmPassword}
                        required
                        className="w-full mt-2 px-3 py-2 text-gray-500 bg-transparent outline-none border focus:border-indigo-600 shadow-sm rounded-lg"
                      />
                      <ErrorMessage name="confirmPassword">
                        {(errorMsg) => {
                          setErrorMessage(errorMsg);
                          toastRef.current.show();
                          return <p className="text-sm text-red-600">{errorMsg}</p>;
                        }}
                      </ErrorMessage>
                    </div>
                    <button
                      type="submit"
                      disabled={!formik.isValid || formik.isSubmitting}
                      aria-label="create my account"
                      className={`${
                        (!formik.isValid || formik.isSubmitting) &&
                        "bg-gray-600 hover:bg-gray-500 active:bg-gray-600"
                      } w-full px-4 py-2 text-white font-medium bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-600 rounded-lg duration-150`}
                    >
                      Create an account
                    </button>
                  </Form>
                );
              }}
            </Formik>
          </div>
        </div>
      </main>
    </motion.div>
  );
};

export default Signup;
