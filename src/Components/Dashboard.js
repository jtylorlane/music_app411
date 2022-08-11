import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import SwitchLabels from "./Controls/Switch";
import VolumeSlider from "./Controls/Volume";
import SoundQuality from "./Controls/SoundQuality";
import Notifications from "./Notifications";

export default function BasicCard() {
  const [volume, setVolume] = React.useState(30);
  const [soundQuality, setSoundQuality] = React.useState("Normal");
  const [status, setStatus] = React.useState(false);
  const [notification, setNotification] = React.useState([]);

  // console.log("Volume Status", volume);
  // console.log("Sound Quality", soundQuality);
  // console.log("Online Status", status);
  console.log("Notification", notification);

  return (
    <div className="every_Card">
      <Notifications notification={notification} />
      <Box
        style={{
          maxWidth: 500,
          paddingTop: 3,
          margin: "auto",
        }}
      >
        <Card
          variant="BasicCard"
          style={{ backgroundColor: " rgb(38, 122, 241)", color: "white" }}
        >
          <SwitchLabels
            setStatus={setStatus}
            status={status}
            setNotification={setNotification}
            notification={notification}
          />
        </Card>
      </Box>

      <Box
        style={{
          maxWidth: 500,
          padding: 3,
          paddingTop: 30,
          margin: "auto",
        }}
      >
        <Card
          variant="BasicCard"
          style={{ backgroundColor: " rgb(38, 122, 241)", color: "white" }}
        >
          <VolumeSlider
            setVolume={setVolume}
            volume={volume}
            setNotification={setNotification}
            notification={notification}
          />
        </Card>
      </Box>

      <Box
        style={{
          maxWidth: 500,
          padding: 5,
          paddingTop: 30,
          margin: "auto",
        }}
      >
        <Card
          variant="BasicCard"
          style={{ backgroundColor: " rgb(38, 122, 241)", color: "white" }}
        >
          <SoundQuality
            setSoundQuality={setSoundQuality}
            soundQuality={soundQuality}
            setNotification={setNotification}
            notification={notification}
          />
        </Card>
      </Box>
    </div>
  );
}
