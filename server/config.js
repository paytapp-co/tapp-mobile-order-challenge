export const config = {
  port: Number(process.env.PORT ?? 4000),
  clientUrl: process.env.CLIENT_URL ?? 'http://localhost:5180',
  tapp: {
    baseUrl: process.env.TAPP_BASE_URL ?? 'http://localhost:4100',
    apiKey: process.env.TAPP_API_KEY ?? 'sk_test_tapp_interview',
    webhookSecret: process.env.TAPP_WEBHOOK_SECRET ?? 'whsec_test_tapp_interview',
  },
};
