import Image from "next/image";
import Link from "next/link";
import * as Yup from "yup";
import { ButtonBaseCss } from "../styles";
import { Form, FormikProvider, useFormik } from "formik";
import TextField from "../components/TextField";

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
    onSubmit: (values, { setErrors }) => {
      console.log(values);
    },
  });

  const { getFieldProps } = formik;

  return (
    <div
      className={`flex flex-1 -translate-x-[${
        active ? 0 : 480
      }px] flex-col justify-center px-10 transition-transform duration-200 ease-linear`}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate>
          <div className="mb-1 text-3xl font-semibold">Sign in to XXX</div>
          <div className="mb-12 flex items-center justify-between">
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
            className="-inset-1  w-full rounded-md  border border-slate-200 bg-transparent p-3"
            {...getFieldProps("password")}
          />

          <button type="submit" className={`${ButtonBaseCss} mt-4 w-full`}>
            Login
          </button>
        </Form>
      </FormikProvider>
    </div>
  );
}
