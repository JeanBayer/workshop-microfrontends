# 🎯 Escuchar Cambios en la URL

> **Tip #3:** Cómo detectar y extraer parámetros de la URL en tiempo real

---

## 📖 Descripción

Para escuchar los cambios en la URL, utilizamos el evento `popstate` del objeto `window`. Este evento se activa cuando se navega hacia atrás o hacia adelante en el historial del navegador.

---

## 🔧 Implementación del Hook Personalizado

### Función auxiliar para extraer el ID:

```typescript
const getIdFromUrl = () => {
  const path = window.location.pathname;
  const match = path.match(/\/movies?\/([^\/]+)/);
  return match ? match[1] : null;
};
```

> 🔍 **Regex explicado:** `/\/movies?\/([^\/]+)/` captura el ID después de `/movie/` o `/movies/`

### Hook personalizado `useMovieId`:

```typescript
import { useEffect, useState } from "react";

export const useMovieId = () => {
  const [movieId, setMovieId] = useState<string | null>("");

  useEffect(() => {
    const handleLocationChange = () => {
      const newId = getIdFromUrl();
      setMovieId(newId);
    };

    // Ejecutar al montar el componente
    handleLocationChange();

    // Escuchar cambios en el historial
    window.addEventListener("popstate", handleLocationChange);

    // Cleanup: remover listener al desmontar
    return () => {
      window.removeEventListener("popstate", handleLocationChange);
    };
  }, [movieId]);

  return movieId;
};
```

---

## 🚀 Uso del Hook

```typescript
import { useMovieId } from "./hooks/useMovieId";

export const MovieDetail = () => {
  const movieId = useMovieId();

  if (!movieId) {
    return <div>No se encontró ID de película</div>;
  }

  return (
    <div>
      <h1>Detalle de la película: {movieId}</h1>
      {/* Resto del componente */}
    </div>
  );
};
```

---

## 🎯 Casos de Uso

| 📍 **URL**                 | 🆔 **movieId extraído** |
| -------------------------- | ----------------------- |
| `/movie/123`               | `"123"`                 |
| `/movies/avengers-endgame` | `"avengers-endgame"`    |
| `/movies/`                 | `null`                  |
| `/other-page`              | `null`                  |

---

## 💡 Características Clave

- ✅ **Reactivo:** Se actualiza automáticamente cuando cambia la URL
- ✅ **Limpieza automática:** Remueve listeners al desmontar
- ✅ **TypeScript:** Totalmente tipado para mejor desarrollo
- ✅ **Flexible:** Funciona con `/movie/` y `/movies/`
- ✅ **Seguro:** Maneja casos donde no hay ID en la URL
