import nextra from 'nextra';

const withNextra = nextra({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
  staticImage: true,
  defaultShowCopyCode: true,
  esmExternals: false,
  flexsearch: {
    codeblocks: false,
  },
});

export default withNextra();
