# 📋 Instrucciones del Proyecto - Microfrontends

## 🔧 Requerimientos

> **Versión mínima requerida:** Node.js 22 o superior

---

## 🚀 Instrucciones para ejecutar el proyecto

1. **Navegar al directorio** de los proyectos
2. **Instalar dependencias** ejecutando:
   ```bash
   npm install
   ```
3. **Ejecutar el proyecto** con:
   ```bash
   npm start
   ```
4. **Abrir el navegador** y acceder a:
   ```
   http://localhost:9001
   ```

---

## 🏗️ Crear un nuevo microfrontend

Sigue estos pasos para crear el microfrontend `mfe-movie-detail`:

1. **Copiar la carpeta** del microfrontend `mfe-x` y renombrarla a `mfe-movie-detail`
2. **Cambiar las referencias** para que apunten a `mfe-movie-detail`
3. **Actualizar el puerto** en `package.json` por uno disponible (ej: `2029`)
4. **Agregar la referencia** del microfrontend a la shell
5. **Instalar las dependencias** del microfrontend
6. **Ejecutar el microfrontend**
7. **Probar en el navegador** - abrir la shell en `localhost:9001`

---

## 🆘 ¿Necesitas ayuda?

Si encuentras problemas durante el desarrollo:

1. **📁 Navega** a la carpeta `/tips`
2. **📖 Revisa** los archivos de tips para problemas comunes
3. **🔍 Compara** con `mfe-movie-detail` y `shell-dev` en la carpeta tips
4. **💬 Consulta** en la sesión si no encuentras solución

---

## 🌐 Sitio Productivo

Puedes ver la versión productiva en:

**🔗 [shell-dev.netlify.app](https://shell-dev.netlify.app/)**
