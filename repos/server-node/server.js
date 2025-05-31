const express = require("express");
const cors = require("cors");

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Datos en memoria (simulando db.json)
const db = {
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
      id: "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
      title: "Jurassic Park",
      description:
        "A pragmatic paleontologist visiting an almost complete theme park on an island in Central America is tasked with protecting a couple of kids after a power failure causes the park's cloned dinosaurs to run loose.",
      rating: 8.2,
      year: 1993,
      genres: ["Action", "Adventure", "Sci-Fi"],
      thumbnail:
        "https://visualprint-store.com/cdn/shop/products/v8FJ8b8SQ6xVxh220wHrXS0ehwI.jpg?v=1666744895",
      poster:
        "https://vice-press.com/cdn/shop/products/Jurassic-Park-Alternative-Movie-poster-Paul-Mann.jpg?v=1581008841&width=1100",
      actors: ["Sam Neill", "Laura Dern", "Jeff Goldblum"],
      duration: 127,
    },
    {
      id: "z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4",
      title: "The Lord of the Rings: The Fellowship of the Ring",
      description:
        "A meek Hobbit from the Shire and eight companions set out on a journey to destroy the powerful One Ring and save Middle-earth from the Dark Lord Sauron.",
      rating: 8.8,
      year: 2001,
      genres: ["Action", "Adventure", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNzIxMDQ2YTctNDY4MC00ZTRhLTk4ODQtMTVlOWY4NTdiYmMwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/2900393/5940391/MOVEE8950__98906.1679586551.jpg?c=2",
      actors: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
      duration: 178,
    },
    {
      id: "c3b2a1d4-f5e6-h7g8-j9i0-l1k2m3n4o5p6",
      title: "Pulp Fiction",
      description:
        "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
      rating: 8.9,
      year: 1994,
      genres: ["Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYTViYTE3ZGQtNDBlMC00ZTAyLTkyODMtZGRiZDg0MjA2YThkXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://images.squarespace-cdn.com/content/v1/5b18735a3917ee20d18a2117/34e09aab-4f26-4d33-889a-becf916a92e2/maxresdefault-5-1024x576.jpg",
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
      duration: 154,
    },
    {
      id: "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
      title: "The Shawshank Redemption",
      description:
        "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
      rating: 9.3,
      year: 1994,
      genres: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDAyY2FhYjctNDc5OS00MDNlLThiMGUtY2UxYWVkNGY2ZjljXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTQ5NTI4NDAxMV5BMl5BanBnXkFtZTcwMTQxNDY3Mw@@._V1_.jpg",
      actors: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
      duration: 142,
    },
    {
      id: "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
      title: "The Dark Knight",
      description:
        "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
      rating: 9.0,
      year: 2008,
      genres: ["Action", "Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://freight.cargo.site/t/original/i/1f07b43aaf29ce22c07efe237baa82d69a59bfaf65ee73c632ef62ad8f3c0deb/DarkKnight_Variant2.jpg",
      actors: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
      duration: 152,
    },
    {
      id: "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
      title: "Forrest Gump",
      description:
        "The presidencies of Kennedy and Johnson, the Vietnam War, the Watergate scandal and other historical events unfold from the perspective of an Alabama man with an IQ of 75, whose only desire is to be reunited with his childhood sweetheart.",
      rating: 8.8,
      year: 1994,
      genres: ["Drama", "Romance"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMGRhODhiMTAtNDUxMy00NTY1LTgyYmUtMTgwNzE2MGFlMWJmXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://resizing.flixster.com/kNAalgVTTW4PiJNLyUlQrRoXbTA=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15829_v_h9_aa.jpg",
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
      duration: 142,
    },
    {
      id: "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
      title: "Inception",
      description:
        "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
      rating: 8.8,
      year: 2010,
      genres: ["Action", "Adventure", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://m.media-amazon.com/images/S/pv-target-images/e826ebbcc692b4d19059d24125cf23699067ab621c979612fd0ca11ab42a65cb._SX1080_FMjpg_.jpg",
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
      duration: 148,
    },
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
      id: "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
      title: "Star Wars: Episode IV - A New Hope",
      description:
        "Luke Skywalker joins forces with a Jedi Knight, a cocky pilot, a Wookiee and two droids to save the galaxy from the Empire's world-destroying battle station, while also attempting to rescue Princess Leia from the mysterious Darth Vader.",
      rating: 8.6,
      year: 1977,
      genres: ["Action", "Adventure", "Fantasy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOGUwMDk0Y2MtNjBlNi00NmRiLTk2MWYtMGMyMDlhYmI4ZDBjXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://www.lighthousecinema.ie/themes/user/site/lighthouse/images/A-New-Hope-Still-1-e1714060133733.webp",
      actors: ["Mark Hamill", "Harrison Ford", "Carrie Fisher"],
      duration: 121,
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
    {
      id: "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6",
      title: "Titanic",
      description:
        "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
      rating: 7.9,
      year: 1997,
      genres: ["Drama", "Romance"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://cdn.hobbyconsolas.com/sites/navi.axelspringer.es/public/media/image/2022/01/titanic-2577593.jpg?tf=3840x",
      actors: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
      duration: 194,
    },
    {
      id: "l2m3n4o5-p6q7-r8s9-t0u1-v2w3x4y5z6a7",
      title: "The Lion King",
      description:
        "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
      rating: 8.5,
      year: 1994,
      genres: ["Animation", "Adventure", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMjIwMjE1Nzc4NV5BMl5BanBnXkFtZTgwNDg4OTA1NzM@._V1_.jpg",
      poster:
        "https://disney.images.edge.bamgrid.com/ripcut-delivery/v2/variant/disney/9e4b5eba-7cb6-4db5-b423-ca8cc0e73e7f/compose?aspectRatio=1.78&format=webp&width=1200",
      actors: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
      duration: 88,
    },
    {
      id: "m3n4o5p6-q7r8-s9t0-u1v2-w3x4y5z6a7b8",
      title: "Back to the Future",
      description:
        "Marty McFly, a 17-year-old high school student, is accidentally sent 30 years into the past in a time-traveling DeLorean invented by his close friend, the maverick scientist Doc Brown.",
      rating: 8.5,
      year: 1985,
      genres: ["Adventure", "Comedy", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZmM3ZjE0NzctNjBiOC00MDZmLTgzMTUtNGVlOWFlOTNiZDJiXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://deadline.com/wp-content/uploads/2024/11/back-to-the-future-robert-zemeckis.jpg",
      actors: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson"],
      duration: 116,
    },
    {
      id: "n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9",
      title: "Spirited Away",
      description:
        "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches, and spirits, and where humans are changed into beasts.",
      rating: 8.6,
      year: 2001,
      genres: ["Animation", "Adventure", "Family"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNTEyNmEwOWUtYzkyOC00ZTQ4LTllZmUtMjk0Y2YwOGUzYjRiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://m.media-amazon.com/images/S/pv-target-images/b20af430f42c264ebac4369e9400e096ecdd8026bff161d70c7cf2555894231a._SX1080_FMjpg_.jpg",
      actors: ["Daveigh Chase", "Suzanne Pleshette", "Miyu Irino"],
      duration: 125,
    },
    {
      id: "o5p6q7r8-s9t0-u1v2-w3x4-y5z6a7b8c9d0",
      title: "Interstellar",
      description:
        "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      rating: 8.7,
      year: 2014,
      genres: ["Adventure", "Drama", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYzdjMDAxZGItMjI2My00ODA1LTlkNzItOWFjMDU5ZDJlYWY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://www.mubis.es/media/users/1864/103428/review-interstellar-christopher-nolan-2014-original.jpg",
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
      duration: 169,
    },
    {
      id: "p6q7r8s9-t0u1-v2w3-x4y5-z6a7b8c9d0e1",
      title: "The Godfather",
      description:
        "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
      rating: 9.2,
      year: 1972,
      genres: ["Crime", "Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://communist.red/wp-content/uploads/2022/08/godfather.png.webp",
      actors: ["Marlon Brando", "Al Pacino", "James Caan"],
      duration: 175,
    },
    {
      id: "q7r8s9t0-u1v2-w3x4-y5z6-a7b8c9d0e1f2",
      title: "Fight Club",
      description:
        "An insomniac office worker looking for a way to change his life crosses paths with a devil-may-care soap maker and they form an underground fight club that evolves into something much, much more.",
      rating: 8.8,
      year: 1999,
      genres: ["Drama"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BOTgyOGQ1NDItNGU3Ny00MjU3LTg2YWEtNmEyYjBiMjI1Y2M5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://media.newyorker.com/photos/5dbafcc91b4a6700085a7a9b/master/pass/Baker-FightClub.jpg",
      actors: ["Brad Pitt", "Edward Norton", "Meat Loaf"],
      duration: 139,
    },
    {
      id: "r8s9t0u1-v2w3-x4y5-z6a7-b8c9d0e1f2g3",
      title: "Avatar",
      description:
        "A paraplegic Marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      rating: 7.9,
      year: 2009,
      genres: ["Action", "Adventure", "Fantasy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNmQxNjZlZTctMWJiMC00NGMxLWJjNTctNTFiNjA1Njk3ZDQ5XkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://www.sebastianzavala.com/wp-content/uploads/2022/09/avatar1.jpeg",
      actors: ["Sam Worthington", "Zoe Saldana", "Sigourney Weaver"],
      duration: 162,
    },
    {
      id: "s9t0u1v2-w3x4-y5z6-a7b8-c9d0e1f2g3h4",
      title: "The Avengers",
      description:
        "Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity.",
      rating: 8.0,
      year: 2012,
      genres: ["Action", "Adventure", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNmE5ZjNmZTQtODIwMy00YzQwLTk5MTUtN2Y5MDFmNjMzYjI4XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://www.cuartomundo.cl/wp-content/uploads/2015/04/the_avengers_2012_movie_2-wallpaper-1366x7681.jpg",
      actors: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo"],
      duration: 143,
    },
    {
      id: "t0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5",
      title: "Saving Private Ryan",
      description:
        "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper whose brothers have been killed in action.",
      rating: 8.6,
      year: 1998,
      genres: ["Drama", "War"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster: "https://ychef.files.bbci.co.uk/1280x720/p0j2dzgq.jpg",
      actors: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
      duration: 169,
    },
    {
      id: "u1v2w3x4-y5z6-a7b8-c9d0-e1f2g3h4i5j6",
      title: "Braveheart",
      description:
        "Scottish warrior William Wallace leads his countrymen in a rebellion to free his homeland from the tyranny of King Edward I of England.",
      rating: 8.4,
      year: 1995,
      genres: ["Biography", "Drama", "History"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNGMxZDBhNGQtYTZlNi00N2UzLWI4NDEtNmUzNWM2NTdmZDA0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://www.concierto.cl/wp-content/uploads/2025/03/corazon-valiente.webp",
      actors: ["Mel Gibson", "Sophie Marceau", "Patrick McGoohan"],
      duration: 178,
    },
    {
      id: "v2w3x4y5-z6a7-b8c9-d0e1-f2g3h4i5j6k7",
      title: "Toy Story",
      description:
        "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room.",
      rating: 8.3,
      year: 1995,
      genres: ["Animation", "Adventure", "Comedy"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZTA3OWVjOWItNjE1NS00NzZiLWE1MjgtZDZhMWI1ZTlkNzYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://mondoshop.com/cdn/shop/products/Francavilla_ToyStory3_Sm.jpg?v=1667698461",
      actors: ["Tom Hanks", "Tim Allen", "Don Rickles"],
      duration: 81,
    },
    {
      id: "w3x4y5z6-a7b8-c9d0-e1f2-g3h4i5j6k7l8",
      title: "Inglourious Basterds",
      description:
        "In Nazi-occupied France during World War II, a plan to assassinate Nazi leaders by a group of Jewish U.S. soldiers coincides with a theatre owner's vengeful plans for the same.",
      rating: 8.3,
      year: 2009,
      genres: ["Adventure", "Drama", "War"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BODZhMWJlNjYtNDExNC00MTIzLTllM2ItOGQ2NGVjNDQ3MzkzXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://musicart.xboxlive.com/7/a3e95100-0000-0000-0000-000000000002/504/image.jpg",
      actors: ["Brad Pitt", "Mélanie Laurent", "Christoph Waltz"],
      duration: 153,
    },
    {
      id: "x4y5z6a7-b8c9-d0e1-f2g3-h4i5j6k7l8m9",
      title: "The Silence of the Lambs",
      description:
        "A young F.B.I. trainee must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer, a madman who skins his victims.",
      rating: 8.6,
      year: 1991,
      genres: ["Crime", "Drama", "Thriller"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://beam-images.warnermediacdn.com/BEAM_LWM_DELIVERABLES/b79674a9-8abe-4da6-b471-b55013501beb/7a074c3c-7a09-42cc-ad28-dc35b96f44d2?host=wbd-images.prod-vod.h264.io&partner=beamcom",
      actors: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
      duration: 118,
    },
    {
      id: "y5z6a7b8-c9d0-e1f2-g3h4-i5j6k7l8m9n0",
      title: "Django Unchained",
      description:
        "With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.",
      rating: 8.5,
      year: 2012,
      genres: ["Drama", "Western"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMjIyNTQ5NjQ1OV5BMl5BanBnXkFtZTcwODg1MDU4OA@@._V1_.jpg",
      poster: "https://img2.rtve.es/im/6765651/?w=900",
      actors: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
      duration: 165,
    },
    {
      id: "z6a7b8c9-d0e1-f2g3-h4i5-j6k7l8m9n0o1",
      title: "Parasite",
      description:
        "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
      rating: 8.5,
      year: 2019,
      genres: ["Comedy", "Drama", "Thriller"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BYjk1Y2U4MjQtY2ZiNS00OWQyLWI3MmYtZWUwNmRjYWRiNWNhXkEyXkFqcGc@._V1_.jpg",
      poster:
        "https://media.gq.com.mx/photos/5e163a93a3ee270008aa3501/16:9/w_2046,h_1151,c_limit/parasite-datos-de-la-pelicula-que-esta-ganando-todos-los-premios-dos.jpg",
      actors: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
      duration: 132,
    },
    {
      id: "a7b8c9d0-e1f2-g3h4-i5j6-k7l8m9n0o1p2",
      title: "Whiplash",
      description:
        "A promising young drummer enrolls at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor who will stop at nothing to realize a student's potential.",
      rating: 8.5,
      year: 2014,
      genres: ["Drama", "Music"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BN2NiMjY3OTgtMzVmYi00MjIwLTljOWItY2QzYTdiNTFkMTQyXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://play-lh.googleusercontent.com/proxy/zjYLHOx3KBJcmR_yr95t6t1eMaYN0JMA7svQ4WjDVuN7T6tQkE82Y3VUJ1-gQ9pauplRrRa4v2aOGTDtrQSbCo_hhVfAb0JM3CwhhKqKonYZ0oFIS-JoPKSFqg=s1920-w1920-h1080",
      actors: ["Miles Teller", "J.K. Simmons", "Melissa Benoist"],
      duration: 106,
    },
    {
      id: "b8c9d0e1-f2g3-h4i5-j6k7-l8m9n0o1p2q3",
      title: "Mad Max: Fury Road",
      description:
        "In a post-apocalyptic wasteland, a woman rebels against a tyrannical ruler in search for her homeland with the help of a group of female prisoners, a psychotic worshiper, and a drifter named Max.",
      rating: 8.1,
      year: 2015,
      genres: ["Action", "Adventure", "Sci-Fi"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BZDRkODJhOTgtOTc1OC00NTgzLTk4NjItNDgxZDY4YjlmNDY2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster:
        "https://i0.wp.com/todalacultura.org/wp-content/uploads/2015/09/mad-max-fury-road.jpg?ssl=1",
      actors: ["Tom Hardy", "Charlize Theron", "Nicholas Hoult"],
      duration: 120,
    },
    {
      id: "c9d0e1f2-g3h4-i5j6-k7l8-m9n0o1p2q3r4",
      title: "Coco",
      description:
        "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather, a legendary singer.",
      rating: 8.4,
      year: 2017,
      genres: ["Animation", "Adventure", "Family"],
      thumbnail:
        "https://m.media-amazon.com/images/M/MV5BMDIyM2E2NTAtMzlhNy00ZGUxLWI1NjgtZDY5MzhiMDc5NGU3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      poster: "https://cdn.culturagenial.com/es/imagenes/pelicula-coco-og.jpg",
      actors: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
      duration: 105,
    },
  ],
  categories: [
    {
      id: "cat-001",
      name: "Action Packed",
      movies: [
        "a1b2c3d4-e5f6-g7h8-i9j0-k1l2m3n4o5p6",
        "e5f6g7h8-i9j0-k1l2-m3n4-o5p6q7r8s9t0",
        "h8i9j0k1-l2m3-n4o5-p6q7-r8s9t0u1v2w3",
        "j0k1l2m3-n4o5-p6q7-r8s9-t0u1v2w3x4y5",
        "s9t0u1v2-w3x4-y5z6-a7b8-c9d0e1f2g3h4",
        "b8c9d0e1-f2g3-h4i5-j6k7-l8m9n0o1p2q3",
      ],
    },
    {
      id: "cat-002",
      name: "Adventure & Fantasy",
      movies: [
        "1e2f3g4h-5i6j-7k8l-9m0n-1o2p3q4r5s6t",
        "z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4",
        "i9j0k1l2-m3n4-o5p6-q7r8-s9t0u1v2w3x4",
        "r8s9t0u1-v2w3-x4y5-z6a7-b8c9d0e1f2g3",
        "m3n4o5p6-q7r8-s9t0-u1v2-w3x4y5z6a7b8",
        "g7h8i9j0-k1l2-m3n4-o5p6-q7r8s9t0u1v2",
      ],
    },
    {
      id: "cat-003",
      name: "Iconic Dramas",
      movies: [
        "d4e5f6g7-h8i9-j0k1-l2m3-n4o5p6q7r8s9",
        "f6g7h8i9-j0k1-l2m3-n4o5-p6q7r8s9t0u1",
        "k1l2m3n4-o5p6-q7r8-s9t0-u1v2w3x4y5z6",
        "p6q7r8s9-t0u1-v2w3-x4y5-z6a7b8c9d0e1",
        "t0u1v2w3-x4y5-z6a7-b8c9-d0e1f2g3h4i5",
        "u1v2w3x4-y5z6-a7b8-c9d0-e1f2g3h4i5j6",
      ],
    },
    {
      id: "cat-004",
      name: "Crime & Thrillers",
      movies: [
        "c3b2a1d4-f5e6-h7g8-j9i0-l1k2m3n4o5p6",
        "q7r8s9t0-u1v2-w3x4-y5z6-a7b8c9d0e1f2",
        "x4y5z6a7-b8c9-d0e1-f2g3-h4i5j6k7l8m9",
        "w3x4y5z6-a7b8-c9d0-e1f2-g3h4i5j6k7l8",
        "y5z6a7b8-c9d0-e1f2-g3h4-i5j6k7l8m9n0",
        "z6a7b8c9-d0e1-f2g3-h4i5-j6k7l8m9n0o1",
      ],
    },
    {
      id: "cat-005",
      name: "Animation & Modern Gems",
      movies: [
        "l2m3n4o5-p6q7-r8s9-t0u1-v2w3x4y5z6a7",
        "n4o5p6q7-r8s9-t0u1-v2w3-x4y5z6a7b8c9",
        "v2w3x4y5-z6a7-b8c9-d0e1-f2g3h4i5j6k7",
        "c9d0e1f2-g3h4-i5j6-k7l8-m9n0o1p2q3r4",
        "o5p6q7r8-s9t0-u1v2-w3x4-y5z6a7b8c9d0",
        "a7b8c9d0-e1f2-g3h4-i5j6-k7l8m9n0o1p2",
      ],
    },
  ],
};

// Rutas
// Obtener todas las películas
app.get("/movies", (req, res) => {
  res.json(db.movies);
});

// Obtener película por ID
app.get("/movies/:id", (req, res) => {
  const movie = db.movies.find((m) => m.id === req.params.id);
  if (movie) {
    res.json(movie);
  } else {
    res.status(404).send("Movie not found");
  }
});

// Obtener categorías con películas asociadas
app.get("/categories", (req, res) => {
  const categoriesWithMovies = db.categories.map((category) => {
    const moviesInCategory = category.movies
      .map((movieId) => {
        return db.movies.find((movie) => movie.id === movieId);
      })
      .filter((movie) => movie !== undefined);
    return {
      ...category,
      movies: moviesInCategory,
    };
  });
  res.json(categoriesWithMovies);
});

// Obtener detalle de una película aleatoria
app.get("/hero", (req, res) => {
  const randomIndex = Math.floor(Math.random() * db.movies.length);
  const randomMovie = db.movies[randomIndex];
  res.json(randomMovie);
});

// Iniciar servidor
app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
