import * as React from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import Button from "@mui/material/Button"

export default function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false)
  const handleClose = () => {
    setOpen(false)
  }
  const handleOpen = () => {
    setOpen(true)
  }

  // The `state` arg is correctly typed as `RootState` already
  const test = useAppSelector((state) => state.loading)
  console.log(test)
  const dispatch = useAppDispatch()

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={open} onClick={handleClose}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
