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
  ErrorMessageProps?: ErrorMessageProps;
} & InputHTMLAttributes<Partial<HTMLInputElement>>;

export default function TextField({
  ErrorMessageProps,
  DIVProps,
  ...others
}: TextFieldProps) {
  return (
    <Box {...DIVProps}>
      <Field
        className="-inset-1 w-full rounded-md border  border-slate-200 bg-transparent p-3 "
        {...others}
      />
      <div className="mt-1 text-sm text-red-500">
        <ErrorMessage name={others.name as string} {...ErrorMessageProps} />
      </div>
    </Box>
  );
}
