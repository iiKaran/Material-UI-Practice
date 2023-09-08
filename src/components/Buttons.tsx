import React from 'react'
import {
    Button, Stack, ButtonGroup, Fab, FormControl, FormControlLabel, Radio, RadioGroup, FormLabel
} from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import { Label } from '@mui/icons-material'
export default function Buttons() {
    return (
        <div>
            <ButtonGroup variant='contained' color='secondary' orientation='vertical'>

                <Button>Value </Button>
                <Button>Value </Button>
                <Button>Value </Button>
            </ButtonGroup>
            <Fab color='secondary'>
                <AddIcon></AddIcon>
            </Fab>
       
             <FormControl>
                <FormLabel id='label'>
                        choose Exoerience
                </FormLabel>
                <RadioGroup name='label' aria-labelledby='label'>
                    <FormControlLabel control={<Radio/>} label='1-2' value={"0-1"}></FormControlLabel>
                    <FormControlLabel control={<Radio/>} label='2-4' value={"2-4"}></FormControlLabel>
                    <FormControlLabel control={<Radio/>} label='3-5' value={"3-5"}></FormControlLabel>
                </RadioGroup>
             </FormControl>
        </div>
    )
}
