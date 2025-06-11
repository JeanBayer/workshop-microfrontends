const CATEGORIES = [
  {
    id: "cat-001",
    name: "Action Packed",
    movies: [
      {
        id: "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3",
        title: "The Matrix",
        description:
          "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth--the life he knows is the elaborate deception of an evil cyber-intelligence.",
        rating: 8.7,
        year: 1999,
        genres: ["Action", "Sci-Fi"],
        thumbnail:
          "https://m.media-amazon.com/images/M/MV5BN2NmN2VhMTQtMDNiOS00NDlhLTliMjgtODE2ZTY0ODQyNDRhXkEyXkFqcGc@._V1_.jpg",
        poster:
          "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABZzDupwylH-h0zoEyASxaxb-eXBvlskslcNE-zYTrF4-vtehLHmkb13FL95R8M9mjji5whxBux6iS-fKTRiHju_wAuMgRi7Dwybo.jpg?r=608",
        actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        duration: 136,
      },
      {
        id: "j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5",
        title: "Gladiator",
        description:
          "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        rating: 8.5,
        year: 2000,
        genres: ["Action", "Adventure", "Drama"],
        thumbnail:
          "https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        poster:
          "https://occ-0-8407-90.1.nflxso.net/dnm/api/v6/Z-WHgqd_TeJxSuha8aZ5WpyLcX8/AAAABcdwKJMGYeEuFVdFMgNxDX1xfVU1WKeaYdBwxobMWM2DW581p5kBOTEBSGsaqJiCCqKNRSG0HnhS6xXuFYUzDPPtek4om_slJGYf.jpg?r=89a",
        actors: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        duration: 155,
      },
    ],
  },
  {
    id: "cat-002",
    name: "Adventure & Fantasy",
    movies: [
      {
        id: "1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t",
        title: "Harry Potter and the Sorcerer's Stone",
        description:
          "An orphaned boy enrolls in a school of wizardry, where he learns the truth about himself, his family and the terrible evil that haunts the magical world.",
        rating: 7.6,
        year: 2001,
        genres: ["Adventure", "Family", "Fantasy"],
        thumbnail: "https://m.media-amazon.com/images/I/715YKSv-XuL.jpg",
        poster:
          "https://filmartgallery.com/cdn/shop/files/Harry-Potter-and-the-Sorcerers-Stone-British-Movie-Poster-Quad-Size-395-Vintage-Movie-Poster-Original.jpg?v=1738912365",
        actors: ["Daniel Radcliffe", "Rupert Grint", "Emma Watson"],
        duration: 152,
      },
      {
        id: "z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4",
        title: "The Lord of the Rings: The Fellowship of the Ring",
        description:
          "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
        rating: 8.8,
        year: 2002,
        genres: ["Action", "Adventure", "Drama"],
        thumbnail:
          "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        poster:
          "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2900393/5940391/MOVEE8950__98906.1679586551.jpg?c=2",
        actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
        duration: 178,
      },
    ],
  },
] as const;

const CATEGORIES_ERROR = {
  error: "Error fetching categories data",
} as const;

const NULL_CATEGORIES = [] as const;

const GET_CATEGORIES_RESPONSES = {
  OK: CATEGORIES,
  ERROR: CATEGORIES_ERROR,
  NULL: NULL_CATEGORIES,
} as const;

export const CATEGORY_SERVICE_MOCK = {
  GET_CATEGORIES: GET_CATEGORIES_RESPONSES,
} as const;
