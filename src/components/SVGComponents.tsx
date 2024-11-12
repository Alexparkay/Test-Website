import React from 'react';

export const Pattern = ({ children, ...props }: React.SVGProps<SVGPatternElement>) => (
  <pattern {...props}>{children}</pattern>
);

export const Defs = ({ children, ...props }: React.SVGProps<SVGDefsElement>) => (
  <defs {...props}>{children}</defs>
);

export const Path = ({ ...props }: React.SVGProps<SVGPathElement>) => (
  <path {...props} />
);