export interface BoxProps {
  borders?: boolean;
  className?: string;
  children?: any;
}

export default function Box({ children, ...others }: BoxProps) {
  return <div {...others}>{children}</div>;
}
