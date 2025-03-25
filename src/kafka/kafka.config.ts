export const kafkaConfig = {
  client: {
    clientId: 'chromalogger-gateway',
    brokers: ['localhost:29092'],
    retry: {
      initialRetryTime: 100,
      retries: 8,
    },
  },
  consumer: {
    groupId: 'api-gateway-group',
  },
};
