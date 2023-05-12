import * as Yup from "yup";
import {
  ErrorMessage,
  ErrorMessageProps,
  Field,
  FieldAttributes,
} from "formik";
import { HTMLAttributes, InputHTMLAttributes } from "react";
import styled from "styled-components";

const Box = styled.div``;

type TextFieldProps = {
  DIVProps?: HTMLAttributes<HTMLDivElement>;
  errors?: any;
  helperText?: string | boolean;
} & InputHTMLAttributes<Partial<HTMLInputElement>>;

export default function TextField({
  DIVProps,
  errors,
  helperText,
  ...others
}: TextFieldProps) {
  return (
    <Box {...DIVProps}>
      <Field
        className={`-inset-1 w-full rounded-md border ${
          errors ? "border-1 border-red-500 " : " border-slate-200"
        }  bg-transparent p-3`}
        {...others}
      />
      {errors ? (
        <div className="mt-1 text-sm text-red-500">{helperText}</div>
      ) : null}
    </Box>
  );
}
