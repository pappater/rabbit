// Genre and subgenre data for footer rotation
export const genres = [
  {
    name: "Fiction",
    subgenres: [
      "Literary Fiction",
      "Historical Fiction",
      "Science Fiction (Sci-Fi)",
      "Fantasy",
      "Mystery",
      "Thriller",
      "Crime Fiction",
      "Romance",
      "Adventure",
      "Horror",
      "Magical Realism",
      "Urban Fantasy",
      "Dystopian Fiction",
      "Contemporary Fiction",
      "Political Fiction",
      "Satire",
      "Speculative Fiction",
      "Psychological Fiction",
      "War Fiction",
      "Western",
      "Fairy Tale Retelling"
    ]
  },
  {
    name: "Non-Fiction",
    subgenres: [
      "Biography",
      "Autobiography",
      "Memoir",
      "Self-Help",
      "True Crime",
      "Travel Writing",
      "History",
      "Philosophy",
      "Psychology",
      "Religion / Spirituality",
      "Science",
      "Nature Writing",
      "Business & Economics",
      "Politics",
      "Essays",
      "Journalism",
      "Education",
      "Art & Architecture",
      "Health & Wellness",
      "Cooking / Food Writing"
    ]
  },
  {
    name: "Poetry",
    subgenres: [
      "Narrative Poetry",
      "Lyric Poetry",
      "Epic Poetry",
      "Haiku",
      "Free Verse",
      "Sonnet",
      "Limerick",
      "Ode",
      "Elegy",
      "Ballad",
      "Villanelle"
    ]
  },
  {
    name: "Drama",
    subgenres: [
      "Tragedy",
      "Comedy",
      "Historical Drama",
      "Melodrama",
      "Tragicomedy",
      "Farce",
      "Musical Theatre",
      "One-Act Play"
    ]
  },
  {
    name: "Children's & Young Adult (YA)",
    subgenres: [
      "Picture Books",
      "Early Reader",
      "Middle Grade Fiction",
      "Young Adult Romance",
      "YA Fantasy",
      "YA Mystery / Thriller",
      "Coming-of-Age",
      "Educational Stories",
      "Adventure for Kids",
      "Fairytale & Folklore"
    ]
  },
  {
    name: "Graphic & Illustrated",
    subgenres: [
      "Graphic Novel",
      "Manga",
      "Comic Book",
      "Webtoon",
      "Illustrated Anthology",
      "Visual Memoir"
    ]
  },
  {
    name: "Academic & Reference",
    subgenres: [
      "Textbook",
      "Dictionary / Encyclopedia",
      "Research Paper",
      "Thesis / Dissertation",
      "Manual / Guidebook",
      "Academic Journal",
      "Study Companion",
      "Reference Compendium"
    ]
  }
];

/**
 * Get all genre/subgenre pairs as an array
 * @returns {Array<{genre: string, subgenre: string}>}
 */
export function getAllGenreSubgenrePairs() {
  const pairs = [];
  genres.forEach(genre => {
    genre.subgenres.forEach(subgenre => {
      pairs.push({
        genre: genre.name,
        subgenre: subgenre
      });
    });
  });
  return pairs;
}

/**
 * Get a random genre/subgenre pair
 * @returns {{genre: string, subgenre: string}}
 */
export function getRandomGenreSubgenrePair() {
  const pairs = getAllGenreSubgenrePairs();
  const randomIndex = Math.floor(Math.random() * pairs.length);
  return pairs[randomIndex];
}
