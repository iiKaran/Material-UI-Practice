import React from 'react'
import { TextField, Button, Stack, Select, MenuItem, Alert } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';



export default function Input() {
    return (
        <div className='text'>
            <Stack direction={'row'} spacing={2} justifyContent={"center"} alignItems={"center"}>
                <TextField variant='filled' aria-label='input field' label="Input" color="success" size="medium" required helperText="enter the value" multiline minRows={4} > Input:</TextField>
                <Button variant="contained" onClick={() => {
                    alert("Here is me")
                }} disableRipple>Click me</Button>
                <div className='selected'>
                    <Select label="Age handlereee" fullWidth>
                        <MenuItem>hello</MenuItem>
                        <MenuItem>world</MenuItem>
                        <MenuItem>Hello</MenuItem>
                    </Select>


                </div>
                <svg data-testid="DeleteIcon"></svg>
                <TextField
                    label="Username"
                    variant="outlined"
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="start" style={{ color: 'blue' }}>
                                <AccountCircle />
                            </InputAdornment>
                        ),
                    }}
                />
            </Stack>
            <Alert severity="error">This is an error alert — check it out!</Alert>
            <Alert severity="warning">This is a warning alert — check it out!</Alert>
            <Alert severity="info">This is an info alert — check it out!</Alert>
            <Alert severity="success">This is a success alert — check it out!</Alert>

            
        </div>
    )
}
