import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function SoundQuality(props) {
  const { setNotification, setSoundQuality, soundQuality, notification } =
    props;

  const handleChange = (event, newSoundQuality) => {
    setSoundQuality(event.target.value);
    const warningMessage =
      "Music quality is degraded. Increase quality if your connection allows it.";
    const index = notification.indexOf(warningMessage);

    // const newNotification = [...notifcation]

    if (newSoundQuality.props.value === "Low" && index === -1) {
      setNotification([...notification, warningMessage]);
    } else if (newSoundQuality !== 'Low') {
      setNotification(notification.splice());
    }
  };
 
  return (
    <FormControl fullWidth>
      <InputLabel style={{ color: "black" }}>Sound Koala-ty</InputLabel>
      <Select
        style={{ color: "white" }}
        labelId="demo-simple-select-label"
        value={soundQuality}
        label="Sound Koala-ty"
        onChange={handleChange}
      >
        <MenuItem value={"Low"}>Low</MenuItem>
        <MenuItem value={"Normal"}>Normal</MenuItem>
        <MenuItem value={"High"}>High</MenuItem>
      </Select>
    </FormControl>
  );
}
