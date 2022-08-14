import * as React from "react";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { CardContent } from "@mui/material";

export default function SwitchLabels(props) {
  const { setNotification, setStatus, status, notification } = props;
  const warningMessage =
    "Your application is offline. You won't be able to share or stream music to other devices.";
  const index = notification.indexOf(warningMessage);

  const handleChange = (event, newStatus) => {
    setStatus(event.target.checked);
    console.log("notification from switch", notification);
    if (newStatus === false && index === -1) {
      setNotification([...notification, warningMessage]);
    } else if (newStatus === true) {
      setNotification(notification.splice());
    }
  };

  return (
    <CardContent>
      <FormGroup>
        <FormControlLabel
          control={
            <Switch
              checked={status}
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
