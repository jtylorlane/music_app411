import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { CardContent, CardActions } from "@mui/material";

export default function SwitchLabels(props) {

const handleChange = (event) => props.setStatus(event.target.checked);

  return (
    <CardContent>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={props.status}
              onChange={handleChange}
              inputProps={{ "aria-label": "controlled" }}
            />
          }
          label="Online Status"
        />
      </FormGroup>
    </CardContent>
  );
}
