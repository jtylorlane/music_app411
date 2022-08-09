import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import SwitchLabels from "./Controls/Switch";
import VolumeSlider from "./Controls/Volume";
import SoundQuality from "./Controls/SoundQuality";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);


export default function OutlinedCard() {
  const [volume, setVolume] = React.useState(30);
const [soundQuality, setSoundQuality] = React.useState('Normal');
const [status, setStatus] = React.useState(false);
console.log('Volume Status', volume)
console.log('Sound Quality', soundQuality)
console.log('Online Status', status)

  return (
    <div className="all-cards">
      <Box
        id="all-cards-child"
        sx={{
          color: "purple",
          maxWidth: 200,
          padding: 1,
          margin: "auto",
        }}
      >
        <Card variant="Outlined">
          <SwitchLabels setStatus={setStatus} status={status}/>
        </Card>
      </Box>

      <Box
        id="all-cards-child"
        sx={{
          color: "purple",
          maxWidth: 200,
          padding: 1,
          margin: "auto",
        }}
      >
        <Card variant="Outlined">
          <VolumeSlider setVolume={setVolume} volume={volume}/>
        </Card>
      </Box>

      <Box
        id="all-cards-child"
        sx={{
          color: "purple",
          maxWidth: 200,
          padding: 1,
          margin: "auto",
        }}
      >
        <Card variant="Outlined">
          <SoundQuality setSoundQuality={setSoundQuality} soundQuality={soundQuality}/>
        </Card>
      </Box>
    </div>
  );
}
