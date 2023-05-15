import Image from "next/image";
import Link from "next/link";
import { ButtonBaseCss } from "../styles";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";
import Box from "../components/Box";
import Button from "../components/Button";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import { useState } from "react";
import useToaster from "../hooks/useToaster";

export default function RegisterForm({
  onLogin,
  active,
}: {
  onLogin: any;
  active: any;
}) {
  const toaster = useToaster();
  const [errorMessage, setErrorMessage] = useState("");
  const newSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password")], "Both password need to be the same")
      .required("Password is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: newSchema,
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      console.log(values);
      try {
        setErrorMessage("");
        setSubmitting(true);
        const user = await createUserWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(user);
        setSubmitting(false);
        toaster.success("User Registered");
      } catch (err: any) {
        setErrorMessage(err.message);
        setSubmitting(false);
        toaster.error("Failed to register");
      }
    },
  });

  const { getFieldProps, errors, touched, isSubmitting } = formik;

  return (
    <Box
      className={`absolute flex w-full ${
        active ? "scale-1 translate-x-0" : "translate-x-[480px] scale-0"
      } flex-col justify-center px-10 transition-all duration-200 ease-linear`}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate className="h-auto">
          <div className="mb-1 text-3xl font-semibold">Sign up</div>
          <div className="mb-6 flex items-center justify-between">
            <span>
              Already have an account? &nbsp;
              <Link
                href=""
                className=" font-semibold text-regal-blue hover:underline"
                onClick={onLogin}
              >
                Login
              </Link>
            </span>
            <div>
              <Image
                className="select-none"
                src="https://minimals.cc/assets/icons/auth/ic_firebase.png"
                width={40}
                height={40}
                alt="logo"
              />
            </div>
          </div>
          <TextField
            type="email"
            placeholder="Email"
            {...getFieldProps("email")}
            DIVProps={{ className: "mb-4" }}
            errors={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            type="password"
            placeholder="Password"
            {...getFieldProps("password")}
            DIVProps={{ className: "mb-4" }}
            errors={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <TextField
            type="password"
            placeholder="Confirm Password"
            {...getFieldProps("confirm_password")}
            errors={Boolean(
              touched.confirm_password && errors.confirm_password
            )}
            helperText={touched.confirm_password && errors.confirm_password}
          />
          {errorMessage && (
            <div className="mt-2 text-red-500">{errorMessage}</div>
          )}

          <Button type="submit" loading={isSubmitting}>
            Register
          </Button>
        </Form>
      </FormikProvider>
    </Box>
  );
}
