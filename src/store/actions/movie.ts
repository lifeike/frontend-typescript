import * as api from "@/api/movie"
import create from "../create"

export const getMovies = create("getMovies", api.getMovie)
