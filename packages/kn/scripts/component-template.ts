export const componentTemplate = (
  pathData: string
) => `import { type SVGProps } from 'react';

export interface LogoProps extends SVGProps<SVGSVGElement> {}

export function Logo({
  className,
  width = 1024,
  height = 1024,
  ...props
}: LogoProps) {
  return (
    <svg
      viewBox="0 0 1024 1024"
      className={className}
      width={width}
      height={height}
      {...props}
    >
      <path d="${pathData}" fill="currentColor" />
    </svg>
  );
}

export default Logo;
`;
