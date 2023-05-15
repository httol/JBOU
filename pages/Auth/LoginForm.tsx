import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { ButtonBaseCss } from "../../styles";
import { Form, FormikProvider, useFormik } from "formik";
import TextField from "../../components/TextField";
import styled from "styled-components";
import Box from "../../components/Box";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../config/firebase";
import Button from "../../components/Button";
import { useState } from "react";
import useToaster from "../../hooks/useToaster";

const StyledBox = styled(Box)``;

export default function LoginForm({
  onRegister,
  active,
}: {
  onRegister: any;
  active: any;
}) {
  const toaster = useToaster();
  const [errorMessage, setErrorMessage] = useState("");
  const newSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: newSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        setErrorMessage("");
        setSubmitting(true);
        const user = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        setSubmitting(false);
        toaster.success("Login successful");
      } catch (err: any) {
        setErrorMessage(err.message);
        setSubmitting(false);
        toaster.error("Failed to login");
      }
    },
  });

  const { getFieldProps, isSubmitting, touched, errors } = formik;

  return (
    <StyledBox
      className={`flex flex-1 ${
        active ? "scale-1 translate-x-0" : "-translate-x-[480px] scale-0"
      } flex-col justify-center px-10 transition-transform duration-200 ease-linear`}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <div className="mb-1 text-3xl font-semibold">Sign in</div>
          <div className="mb-6 flex items-center justify-between">
            <span>
              New user? &nbsp;
              <Link
                href=""
                className=" font-semibold text-regal-blue hover:underline"
                onClick={onRegister}
              >
                Create an account
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
            autoComplete="off"
            {...getFieldProps("email")}
            DIVProps={{ className: "mb-4" }}
            errors={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          <TextField
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...getFieldProps("password")}
            errors={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />

          {errorMessage && (
            <div className="mt-2 text-red-500">{errorMessage}</div>
          )}

          <Button type="submit" loading={isSubmitting}>
            Login
          </Button>
        </Form>
      </FormikProvider>
    </StyledBox>
  );
}
