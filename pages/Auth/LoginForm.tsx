import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { ButtonBaseCss } from "../styles";
import { Form, FormikProvider, useFormik } from "formik";
import TextField from "../components/TextField";
import styled from "styled-components";
import Box from "../components/Box";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../config/firebase";
import Button from "../components/Button";

const StyledBox = styled(Box)``;

export default function LoginForm({
  onRegister,
  active,
}: {
  onRegister: any;
  active: any;
}) {
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
    onSubmit: async (values, { setErrors, setSubmitting }) => {
      try {
        setSubmitting(true);
        const user = await signInWithEmailAndPassword(
          auth,
          values.email,
          values.password
        );
        console.log(user);
        setSubmitting(false);
      } catch (err) {
        setSubmitting(false);
        console.log(err);
      }
    },
  });

  const { getFieldProps, isSubmitting } = formik;

  return (
    <StyledBox
      className={`flex flex-1 ${
        active ? "scale-1 translate-x-0" : "-translate-x-[480px] scale-0"
      } flex-col justify-center px-10 transition-transform duration-200 ease-linear`}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <div className="mb-1 text-3xl font-semibold">Sign in to XXX</div>
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
          />

          <TextField
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...getFieldProps("password")}
          />

          <Button type="submit" loading={isSubmitting}>
            Login
          </Button>
        </Form>
      </FormikProvider>
    </StyledBox>
  );
}
