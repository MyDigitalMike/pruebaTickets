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
