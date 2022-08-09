import * as React from "react";
import { FormGroup, Stack, Slider, } from "@mui/material";
import { VolumeDown, VolumeUp } from "@mui/icons-material";
import { CardContent, CardActions } from "@mui/material";

export default function VolumeSlider(props) {
    
   
    const handleChange = (event, value) => props.setVolume(value)

  return (
    <CardContent>
      <FormGroup>
        <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
          <VolumeDown />
          <Slider aria-label="Volume" value={props.volume} onChange={handleChange} />
          <VolumeUp />
        </Stack>
      </FormGroup>
    </CardContent>
  );
}
