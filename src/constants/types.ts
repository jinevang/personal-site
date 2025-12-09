interface DrinkLocation {
  name: string;
  city: string;
  type: "Pickup" | "Sit-down" | "Drive-thru";
  studyWorkRating: string;
  drinkRating: string;
  foodRating: string;
  topDrinks: string | string[];
  topFood: string | string[];
  notes: string;
}

interface DrinkRating {
  name: string;
  type: string;
  teaType: string;
  toppings: string | string[];
  sugarLevel: string;
  iceLevel: string;
  rating: number | string;
  notes: string;
}

interface AlbumRating {
  name: string;
  artist: string;
  subgenre: string | string[];
  year: number | string;
  albumType: string;
  listenDate: string | Date;
  score: number | string;
  topSongs: string | string[];
  notes: string;
}

interface Track {
	title: string,
	artists: string[],
	length?: number
}

interface Release {
  title: string;
  releaseDate: string;
  image: string;
  soundcloudLink?: string;
  youtubeLinkToEmbed?: string;
  youtubeLink: string;
  tracklist: Track[];
  totalLength?: number;
}
