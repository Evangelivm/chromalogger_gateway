# ChromaLogger Gateway

Un gateway de registro basado en microservicios utilizando NestJS, Kafka y gRPC.

## 🚀 Características

- **API Gateway con gRPC**
- **Broker de mensajes Apache Kafka**
- **Arquitectura basada en microservicios**
- **Contenerización con Docker**

## 📋 Requisitos Previos

- **Node.js** (v18 o superior)
- **Docker Desktop**
- **Git**

## 🛠️ Instalación

1. Clonar el repositorio:
   ```sh
   git clone <URL_DEL_REPOSITORIO>
   cd chroma-logger-gateway
   ```
2. Instalar las dependencias:
   ```sh
   npm install
   ```
3. Iniciar los servicios de Kafka:
   ```sh
   docker-compose up -d
   ```

## 🏗️ Estructura del Proyecto

```
chroma-logger-gateway/
│── src/
│   ├── modules/
│   ├── services/
│   ├── controllers/
│   ├── main.ts
│── proto/
│── docker-compose.yml
│── package.json
│── README.md
│── .env
```

## 🔧 Configuración

### Kafka UI

Accede al panel de control de Kafka UI en:
[http://localhost:8080](http://localhost:8080)

- **Nombre del clúster:** `sensorwits`
- **Puertos por defecto:**
  - Kafka: `9092`
  - Zookeeper: `2181`
  - Kafka UI: `8080`

### Variables de Entorno

Crear un archivo `.env` en la raíz del proyecto con las configuraciones necesarias.

## 🚀 Ejecución de la Aplicación

### Modo Desarrollo

```sh
npm run start:dev
```

### Modo Producción

```sh
npm run build
npm run start:prod
```

## 📊 Monitoreo

- **Kafka UI:** [http://localhost:8080](http://localhost:8080)
- **Funciones:**
  - Monitorear tópicos
  - Ver mensajes
  - Gestionar brokers
  - Rastrear grupos de consumidores

## 📦 Soporte para Docker

Para construir y ejecutar la aplicación completa con Docker:

```sh
docker-compose up --build
```

## 📝 Documentación de la API

Los archivos de definición de servicio gRPC se encuentran en el directorio `proto/`.

## 🤝 Contribución

1. Bifurcar el repositorio
2. Crear una rama de características (`git checkout -b feature/nueva-caracteristica`)
3. Confirmar los cambios (`git commit -m 'Añadir nueva característica'`)
4. Enviar los cambios (`git push origin feature/nueva-caracteristica`)
5. Abrir una **Pull Request**

## 📄 Licencia

Este proyecto está licenciado bajo la **Licencia MIT** - ver el archivo `LICENSE` para más detalles.

## 👥 Autores

- **Tu Nombre** - Trabajo inicial

## 🙏 Agradecimientos

- **Equipo de NestJS**
- **Apache Kafka**
