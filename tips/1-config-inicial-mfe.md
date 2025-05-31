# ⚙️ Configuración Inicial del Microfrontend

> **Tip #1:** Guía paso a paso para configurar tu nuevo microfrontend `mfe-movie-detail`

---

## 📦 1. Configuración de `package.json`

### Cambiar los valores de los siguientes campos:

```json
{
  "name": "@techschool/mfe-x" → "@techschool/mfe-movie-detail",
  "name-repository": "mfe-x" → "mfe-movie-detail",
  "types": "dist/devschool-mfe-x.d.ts" → "dist/devschool-mfe-movie-detail.d.ts"
}
```

### Actualizar el puerto disponible:

```json
{
  "scripts": {
    "start": "webpack serve --port 2029"
  }
}
```

> 💡 **Nota:** Asegúrate de usar un puerto que no esté en uso (ej: 2029)

---

## 🔧 2. Configuración de `webpack.config.js`

Cambiar el nombre del proyecto:

```javascript
// Antes
projectName: "mfe-x";

// Después
projectName: "mfe-movie-detail";
```

---

## 🌍 3. Variables de Entorno

### Configurar archivo `.env`:

1. **Copiar** el archivo `.env-example` a `.env`
2. **Actualizar** la variable de entorno:

```bash
# Antes
REACT_APP_URL_BASE_MFE_X=http://localhost:3000

# Después
REACT_APP_URL_BASE_MFE_MOVIE_DETAIL=http://localhost:3000
```

---

## 📁 4. Renombrar Archivos

### Archivo principal del componente:

```
src/techschool-mfe-x.tsx → src/techschool-mfe-movie-detail.tsx
```

---

## 🔗 5. Actualizar `src/constants/url-base.ts`

Cambiar la referencia de la variable de entorno:

```typescript
// Antes
export const URL_BASE =
  process.env.REACT_APP_URL_BASE_MFE_X || PARAMS_SHELL?.urlBaseMfeX;

// Después
export const URL_BASE =
  process.env.REACT_APP_URL_BASE_MFE_MOVIE_DETAIL ||
  PARAMS_SHELL?.urlBaseMfeMovieDetail;
```

---

## ✅ Checklist de Verificación

- [ ] ✏️ Campos actualizados en `package.json`
- [ ] 🔧 Puerto configurado en `webpack.config.js`
- [ ] 🌍 Variables de entorno configuradas
- [ ] 📁 Archivos renombrados correctamente
- [ ] 🔗 Constantes URL actualizadas
