# 📖 Proyecto Angular y .NET Core

Este es un proyecto full-stack que combina un **frontend en Angular** y un **backend en .NET Core**. La aplicación gestiona eventos, permitiendo que los usuarios se registren y visualicen detalles de los eventos disponibles.

---

## 🛠️ Configuración del Proyecto

### Frontend: Angular

El frontend consume la API proporcionada por el backend. Asegúrate de configurar correctamente la URL del backend en el archivo de configuración.

**Archivo: `src/app/api-configuration.ts`**
```typescript
export class ApiConfiguration {
  rootUrl: string = 'http://localhost:5211';
}
```
### Ejecutar las dependencias:
```npm
npm install
ng serve
```
## 📂 Estructura del Proyecto
### Frontend: Angular
 `src/app`: Contiene los componentes, servicios y módulos de Angular.
### Backend: .NET Core
`Controllers`: Define los endpoints de la API.

`Services`: Contiene la lógica de negocio.

`Repositories`: Maneja las operaciones con la base de datos mediante Entity Framework.

`Models`: Define las entidades del proyecto

## 🚀 Características

### Frontend
- Interacción dinámica con la API para la gestión de eventos y registros.
- Diseño responsivo para múltiples dispositivos.
### Backend
- Lógica de negocio eficiente utilizando patrones de diseño como Unit of Work y Repository.
- Validación de reglas de negocio (capacidad máxima, registros únicos por usuario).
- Documentación de la API generada automáticamente con Swagger.

## 🔑 Endpoints Clave
### Eventos
GET `/api/Events/list`: Lista todos los eventos.

POST `/api/Events/create?userId={userId}`: Crea un nuevo evento.

POST `/api/Events/{eventId}/register?userId={userId}`: Registra un usuario en un evento.

DELETE `/api/Events/{eventId}?userId={userId}`: Elimina un evento si no tiene registros.

## 📝 Notas
1. Asegúrate de que el backend esté ejecutándose en la misma URL configurada en el archivo api-configuration.ts.
2. Usa Swagger para explorar y probar los endpoints de la [API]([https://pages.github.com/]http://localhost:5211/swagger) http://localhost:5211/swagger.

## 🎉 ¡Gracias por usar este proyecto! Si tienes dudas, no dudes en consultarlas.
