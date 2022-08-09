import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SoundQuality(props) {

  const handleChange = (event) => props.setSoundQuality(event.target.value)
  
  

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Sound Koala-ity</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={props.soundQuality}
          label="Sound Koala-ity"
          onChange={handleChange}
        >
          <MenuItem value={'Low'}>Low</MenuItem>
          <MenuItem value={'Normal'}>Normal</MenuItem>
          <MenuItem value={'High'}>High</MenuItem>
        </Select>
      </FormControl>
  );
}
