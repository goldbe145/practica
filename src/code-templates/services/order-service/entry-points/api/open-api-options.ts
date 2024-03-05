export const OpenAPIOptions = {
  openapi: {
    info: {
      title: 'Order service',
      description: 'The order service API ',
      version: '1.0.0',
    },
    tags: [{ name: 'v0.1', description: 'Current version in production' }],
  },
};

export const OpenAPIUIOptions = {
  routePrefix: '/docs',
  exposeRoute: true,
};
