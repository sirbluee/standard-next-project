"use client";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import style from "@/app/(auth)/register/style.module.css";
import { IoEyeOffSharp, IoEyeSharp } from "react-icons/io5";
import { useState } from "react";
import { BASE_URL } from "@/lib/constants";

type valuesTypes = {
  email: string;
  password1: string;
  password2: string;
  first_name: string;
  last_name: string;
};

const initializeValues: valuesTypes = {
  email: "",
  password1: "",
  password2: "",
  first_name: "",
  last_name: "",
};

const validationSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Required"),
  password1: Yup.string()
    .min(8, "Password is too short, at least 8 characters required")
    .matches(/[a-zA-Z]/, "Password must contain at least one letter")
    .matches(/\d/, "Password must contain at least one number")
    .required("Password is required"),
  password2: Yup.string()
    .oneOf([Yup.ref("password1")], "Passwords must match")
    .required("Confirmation password is required"),
  first_name: Yup.string().required("First name is required"),
  last_name: Yup.string().required("Last name is required"),
});

export default function LoginPage() {
  const [loading, setLoading] = useState(true);
  const [showPassword, setShowPassword] = useState(true);
  // toggle function
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  //  handle submit
  const handleSubmit = (values: valuesTypes) => {
    setLoading(true);
    fetch(`${BASE_URL}/api/user/register/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(values),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };

  if (loading) {
    return (
      <div className={`${style.container}`}>
        <h1 className="text-2xl text-center">Loading...</h1>
      </div>
    );
  }

  return (
    <main className={`${style.container}`}>
      <Formik
        initialValues={initializeValues}
        validationSchema={validationSchema}
        onSubmit={(values, action) => {
          handleSubmit(values);
          action.resetForm();
        }}
      >
        <Form className={`${style.form}`}>
          <h1 className={`${style.title}`}>Login</h1>
          {/* email */}
          <div className="mb-4">
            <label htmlFor="email" className={`${style.label}`}>
              Email
            </label>
            <Field type="email" name="email" className={`${style.input}`} />
            <ErrorMessage
              name="email"
              component="section"
              className={`${style.error}`}
            />
          </div>
          {/* first_name */}
          <div className="mb-4">
            <label htmlFor="first_name" className={`${style.label}`}>
              First Name
            </label>
            <Field
              type="first_name"
              name="first_name"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="first_name"
              component="section"
              className={`${style.error}`}
            />
          </div>
          {/* last_name */}
          <div className="mb-4">
            <label htmlFor="last_name" className={`${style.label}`}>
              Last Name
            </label>
            <Field
              type="last_name"
              name="last_name"
              className={`${style.input}`}
            />
            <ErrorMessage
              name="last_name"
              component="section"
              className={`${style.error}`}
            />
          </div>
          {/* password1 */}
          <div className="mb-4">
            <label htmlFor="password1" className={`${style.label}`}>
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password1"
                className={`${style.input}`}
              />
              <ErrorMessage
                name="password1"
                component="section"
                className={`${style.error}`}
              />
              {!showPassword ? (
                <IoEyeOffSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-3"
                />
              ) : (
                <IoEyeSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-3"
                />
              )}
            </div>
          </div>
          {/* password2 */}
          <div className="mb-4">
            <label htmlFor="password2" className={`${style.label}`}>
              Password
            </label>
            <div className="relative">
              <Field
                type={showPassword ? "text" : "password"}
                name="password2"
                className={`${style.input}`}
              />
              <ErrorMessage
                name="password2"
                component="section"
                className={`${style.error}`}
              />
              {!showPassword ? (
                <IoEyeOffSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-3"
                />
              ) : (
                <IoEyeSharp
                  onClick={() => handleShowPassword()}
                  className="cursor-pointer absolute right-2 top-3"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className={`${style.button}`}
            onSubmit={(value) => console.log(value)}
          >
            Submit
          </button>
        </Form>
      </Formik>
    </main>
  );
}
