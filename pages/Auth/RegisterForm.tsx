import Image from "next/image";
import Link from "next/link";
import { ButtonBaseCss } from "../styles";
import { Form, FormikProvider, useFormik } from "formik";
import * as Yup from "yup";
import TextField from "../components/TextField";

export default function RegisterForm({
  onLogin,
  active,
}: {
  onLogin: any;
  active: any;
}) {
  const newSchema = Yup.object().shape({
    email: Yup.string().required("Email is required"),
    password: Yup.string().required("Password is required"),
    confirm_password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    enableReinitialize: true,
    initialValues: {
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: newSchema,
    onSubmit: (values, { setErrors }) => {
      console.log(values);
    },
  });

  const { getFieldProps } = formik;

  return (
    <div
      className={`absolute flex w-full translate-x-[${
        active ? 480 : 0
      }px] flex-col  justify-center px-10 transition-transform duration-200 ease-linear`}
    >
      <FormikProvider value={formik}>
        <Form autoComplete="off" noValidate className="h-auto">
          <div className="mb-1 text-3xl font-semibold">Sign up</div>
          <div className="mb-12 flex items-center justify-between">
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
            className="-inset-1 w-full rounded-md border  border-slate-200 bg-transparent p-3 "
            {...getFieldProps("email")}
            DIVProps={{ className: "mb-4" }}
          />
          <TextField
            type="password"
            placeholder="Password"
            className="-inset-1  w-full rounded-md  border border-slate-200 bg-transparent p-3"
            {...getFieldProps("password")}
            DIVProps={{ className: "mb-4" }}
          />
          <TextField
            type="password"
            placeholder="Confirm Password"
            className="-inset-1  w-full rounded-md  border border-slate-200 bg-transparent p-3"
            {...getFieldProps("confirm_password")}
          />
          <button onClick={() => {}} className={`${ButtonBaseCss} mt-4 w-full`}>
            Register
          </button>
        </Form>
      </FormikProvider>
    </div>
  );
}
