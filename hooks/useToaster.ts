import type { OptionsObject } from "notistack";
import { useSnackbar } from "notistack";
import type { ReactNode } from "react";

export default function useToaster() {
  const { enqueueSnackbar, closeSnackbar } = useSnackbar();
  const error = (message: string | ReactNode, options?: OptionsObject) => {
    enqueueSnackbar(message, { ...options, variant: "error" });
  };

  const success = (message: string | ReactNode, options?: OptionsObject) => {
    return enqueueSnackbar(message, { ...options, variant: "success" });
  };

  const warning = (message: string | ReactNode, options?: OptionsObject) => {
    enqueueSnackbar(message, { ...options, variant: "warning" });
  };

  const info = (message: string | ReactNode, options?: OptionsObject) => {
    enqueueSnackbar(message, { ...options, variant: "info" });
  };

  return {
    error,
    success,
    warning,
    info,
    closeSnackbar,
  };
}
