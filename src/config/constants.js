import { Dimensions } from "react-native";

//Base Url
export const BASE_URL = "http://swapi.dev/api"

//Sub Url
export const FILMS = "/films"

//Action Types
export const FETCHING_TODOS = 'FETCHING_TODOS';
export const FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS';
export const FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE';
export const NAVIGATE_TO_DETAILS = 'NAVIGATE_TO_DETAILS';


// Width and Height of Scenes
export const SCREEN_HEIGHT = Dimensions.get('window').height
export const SCREEN_WIDTH = Dimensions.get('window').width

//List keys

export const CHARACTERS = "Characters"
export const PRODUCER = "Producer"
export const DIRECTOR = "Director"
export const STARSHIPS = "Starships"
export const SPECIES = "Species"
export const VEHICLES = "Vehicles"
export const PLANETS = "Planets"

//some common Api key's

export const Characters = 'characters'
export const Starships = 'starships'
export const Species = 'species'
export const Vehicles = 'vehicles'
export const Planets = 'homeworld'
export const Pilots = 'pilots'
export const Films = 'films'
export const People = "people"
export const Residents = "residents"
