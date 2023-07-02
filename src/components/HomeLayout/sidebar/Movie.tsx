import { Link } from "react-router-dom"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import LocalMoviesIcon from "@mui/icons-material/LocalMovies"

const ViewAllMovies = () => {
  return (
    <Link to="/movies">
      <ListItemButton>
        <ListItemIcon>
          <LocalMoviesIcon />
        </ListItemIcon>
        <ListItemText primary="Movies" />
      </ListItemButton>
    </Link>
  )
}

export default ViewAllMovies
