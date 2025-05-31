# 🌐 Traer Detalle desde el Backend

> **Tip #4:** Integración con API usando Axios y TanStack Query para obtener detalles de películas

---

## 📖 Descripción

Para traer el detalle de una película, utilizaremos **@tanstack/react-query** que permite hacer peticiones a la API de forma sencilla y con un manejo de estado optimizado para aplicaciones web productivas.

---

## 🔧 1. Configurar Instancia de Axios

Crear el archivo `src/api/api.ts`:

```typescript
import { URL_BASE } from "@constants/url-base";
import axios from "axios";

export const api = axios.create({
  baseURL: URL_BASE,
});
```

> 🌍 **Configuración base:** Usa la URL_BASE configurada previamente en las constantes

---

## 🛠️ 2. Crear Servicio de Películas

Crear el archivo `src/services/movie.service.ts`:

```typescript
import { api } from "@api/api";
import type { Movie } from "@type/movie";

export class MovieService {
  public static async getMovie(id: string): Promise<Movie> {
    try {
      const { data } = await api.get<Movie>(`/movies/${id}`);
      return data;
    } catch (error) {
      // console.error("Error fetching movie:", error);
      throw new Error("Failed to fetch movie");
    }
  }
}
```

> 🎯 **Funcionalidad:** Maneja la petición HTTP y el tratamiento de errores

---

## 🪝 3. Crear Hook con TanStack Query

Crear el archivo `src/hooks/useDetail.ts`:

```typescript
import { useQuery } from "@tanstack/react-query";
import { QUERY_KEYS } from "@constants/query-key";
import { MovieService } from "@services/movie.service";

const MINUTE = 60 * 1000; // 1 minuto en millisegundos

export const useDetail = (id: string) => {
  const query = useQuery({
    queryKey: [QUERY_KEYS.DETAIL, id],
    queryFn: () => MovieService.getMovie(id),
    refetchOnWindowFocus: false,
    staleTime: 10 * MINUTE,
  });

  return {
    data: query.data,
    isLoading: query.isLoading,
    isError: query.isError,
  };
};
```

> ⚡ **Optimizaciones:**
>
> - **Cache:** Los datos se mantienen frescos por 10 minutos
> - **No refetch:** Al cambiar de pestaña no se vuelve a hacer la petición
> - **Query key:** Incluye el ID para cache independiente por película

---

## 🚀 4. Usar el Hook en Componentes

```typescript
import { useDetail } from "@hooks/useDetail";
import { useMovieId } from "@hooks/useMovieId";

export const MovieDetail = () => {
  const movieId = useMovieId();
  const { data, isLoading, isError } = useDetail(movieId ?? "");

  if (isLoading) {
    return <div>Cargando película...</div>;
  }

  if (isError) {
    return <div>Error al cargar la película</div>;
  }

  if (!data) {
    return <div>Película no encontrada</div>;
  }

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.description}</p>
      {/* Resto del componente */}
    </div>
  );
};
```

---

## 📁 Estructura de Archivos

```
src/
├── api/
│   └── api.ts                 # Configuración de Axios
├── services/
│   └── movie.service.ts       # Lógica de peticiones
├── hooks/
│   └── useDetail.ts          # Hook con TanStack Query
└── components/
    └── MovieDetail.tsx       # Componente que consume el hook
```

---

## ✅ Beneficios de esta Implementación

| 🎯 **Característica**               | 📝 **Beneficio**                           |
| ----------------------------------- | ------------------------------------------ |
| **TanStack Query**                  | Cache automático y gestión de estado       |
| **Axios**                           | Interceptores y configuración centralizada |
| **TypeScript**                      | Tipado fuerte y mejor DX                   |
| **Separación de responsabilidades** | Fácil mantenimiento y testing              |
| **Manejo de errores**               | UX mejorada con estados de carga           |

---

## 🎉 ¡Listo!

Ahora tienes una implementación robusta para obtener detalles de películas desde el backend con cache, manejo de errores y estados de carga optimizados.
