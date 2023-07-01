import { Link } from "react-router-dom"
import ListItemButton from "@mui/material/ListItemButton"
import ListItemIcon from "@mui/material/ListItemIcon"
import ListItemText from "@mui/material/ListItemText"
import TaskIcon from "@mui/icons-material/Task"

const Moive = () => {
  return (
    <Link to="/movies">
      <div>
        <ListItemButton>
          <ListItemIcon>
            <TaskIcon />
          </ListItemIcon>
          <ListItemText primary="Movies" />
        </ListItemButton>
      </div>
    </Link>
  )
}

export default Moive
