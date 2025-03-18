export const kafkaConfig = {
  client: {
    brokers: ['localhost:9092'], // Dirección del broker de Kafka
  },
  consumer: {
    groupId: 'api-gateway-group', // Grupo de consumidores
  },
};
