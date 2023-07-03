import * as React from "react"
import { useAppSelector, useAppDispatch } from "@/store/hooks"
import Backdrop from "@mui/material/Backdrop"
import CircularProgress from "@mui/material/CircularProgress"
import Button from "@mui/material/Button"

export default function SimpleBackdrop() {
  // The `state` arg is correctly typed as `RootState` already
  const loading = useAppSelector((state) => state.loading.value)

  return (
    <div>
      <Backdrop sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }} open={loading}>
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  )
}
