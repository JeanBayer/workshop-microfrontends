# API Documentation

## Endpoints

### GET /movies

Retorna una lista de todas las películas.

**Respuesta Ejemplo:**

```json
[
  {
    "id": "1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t",
    "title": "Harry Potter and the Sorcerer's Stone",
    "description": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
    "rating": 7.6,
    "year": 2001,
    "genres": ["Adventure", "Family", "Fantasy"],
    "thumbnail": "https://m.media-amazon.com/images/I/715YKSv-XuL.jpg",
    "poster": "https://filmartgallery.com/cdn/shop/files/Harry-Potter-and-the-Sorcerers-Stone-British-Movie-Poster-Quad-Size-395-Vintage-Movie-Poster-Original.jpg?v=1738912365",
    "actors": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
    "duration": 152
  },
  {
    "id": "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
    "title": "Jurassic Park",
    "description": "A pragmatic paleontologist visiting an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
    "rating": 8.2,
    "year": 1993,
    "genres": ["Action", "Adventure", "Sci-Fi"],
    "thumbnail": "https://visualprint-store.com/cdn/shop/products/v8FJ8b8SQ6xVxh220wHrXS0ehwI.jpg?v=1666744895",
    "poster": "https://vice-press.com/cdn/shop/products/Jurassic-Park-Alternative-Movie-poster-Paul-Mann.jpg?v=1581008841&width=1100",
    "actors": ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
    "duration": 127
  }
  // ... más películas
]
```

### GET /movies/:id

Retorna los detalles de una película específica por su ID.

**Parámetros de URL:**

- `id` (string, requerido): El ID de la película.

**Respuesta Ejemplo (Película encontrada):**

```json
{
  "id": "1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t",
  "title": "Harry Potter and the Sorcerer's Stone",
  "description": "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
  "rating": 7.6,
  "year": 2001,
  "genres": ["Adventure", "Family", "Fantasy"],
  "thumbnail": "https://m.media-amazon.com/images/I/715YKSv-XuL.jpg",
  "poster": "https://filmartgallery.com/cdn/shop/files/Harry-Potter-and-the-Sorcerers-Stone-British-Movie-Poster-Quad-Size-395-Vintage-Movie-Poster-Original.jpg?v=1738912365",
  "actors": ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
  "duration": 152
}
```

**Respuesta Ejemplo (Película no encontrada):**

```json
{
  "message": "Movie not found"
}
```

Status Code: 404

### GET /categories

Retorna una lista de todas las categorías con sus películas asociadas.

**Respuesta Ejemplo:**

```json
[
  {
    "id": "cat-001",
    "name": "Action Packed",
    "movies": [
      {
        "id": "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
        "title": "Jurassic Park"
        // ... otros campos de la película
      }
      // ... más películas en esta categoría
    ]
  }
  // ... más categorías
]
```

### GET /hero

Retorna los detalles de una película aleatoria. Útil para mostrar una película destacada.

**Respuesta Ejemplo:**

```json
{
  "id": "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
  "title": "Inception",
  "description": "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
  "rating": 8.8,
  "year": 2010,
  "genres": ["Action", "Adventure", "Sci-Fi"],
  "thumbnail": "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
  "poster": "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
  "actors": ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
  "duration": 148
}
```
