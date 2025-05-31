# 🏗️ Actualizar Shell para usar MFE Detail

> **Tip #2:** Integrar el microfrontend `mfe-movie-detail` en la aplicación shell

---

## 🗺️ 1. Configurar Import Map en `index.ejs`

Para que la shell pueda cargar el microfrontend, necesitamos indicarle dónde está corriendo:

### Modificar el import-map local:

```html
<script type="systemjs-importmap">
  {
    "imports": {
      "@techschool/root-config": "//localhost:9001/techschool-root-config.js",
      // ...otros imports existentes...
      "@techschool/mfe-movie-detail": "//localhost:2029/techschool-mfe-movie-detail.js"
    }
  }
</script>
<% } %>
```

> 🔍 **Agregar:** La línea del microfrontend `mfe-movie-detail` apuntando al puerto 2029

---

## 📐 2. Agregar al Layout de la Shell

Incluir el microfrontend en el layout principal:

```html
<main>
  <application
    id="single-spa-application:@techschool/mfe-hero-banner"
  ></application>

  <application
    id="single-spa-application:@techschool/mfe-movies-categories"
  ></application>

  <!-- ✨ Agregar esta aplicación -->
  <application
    id="single-spa-application:@techschool/mfe-movie-detail"
  ></application>

  <application id="single-spa-application:@techschool/mfe-footer"></application>
</main>
```

---

## 🎯 3. Registrar en `techschool-root-config.js`

Registrar el microfrontend en Single-SPA para control de rutas:

```javascript
registerApplication({
  name: "@techschool/mfe-movie-detail",
  app: () => System.import("@techschool/mfe-movie-detail"),
  activeWhen: ["/movies/:movieId"],
});
```

> 📍 **Ruta activa:** El microfrontend se activará cuando la URL coincida con `/movies/:movieId`

---

## ✅ Resumen de Cambios

| 📁 **Archivo**              | 🔧 **Acción** | 📝 **Descripción**                       |
| --------------------------- | ------------- | ---------------------------------------- |
| `index.ejs`                 | Import Map    | Agregar referencia al MFE en puerto 2029 |
| `index.ejs`                 | Layout        | Incluir `<application>` en el DOM        |
| `techschool-root-config.js` | Registro      | Configurar Single-SPA y rutas activas    |

---

## 🚀 Siguiente Paso

Una vez completados estos cambios, el microfrontend estará integrado en la shell y se activará automáticamente cuando navegues a una URL de detalle de película.
