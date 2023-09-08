import React from 'react'
import { Switch, FormControlLabel} from '@mui/material'
export default function SwitchChoose() {
  return (
    <div>
      <FormControlLabel label="dark-mode" control={<Switch></Switch>} />
    </div>
  )
}
