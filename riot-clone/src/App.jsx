import { Box, Button, Container, Image } from "@chakra-ui/react";
import MainPage from "./components/MainPage";
import TopBar from "./components/TopBar";
import Happening from "./components/Happening";
import Games from "./components/Games";
import Hiring from "./components/Hiring";
import Credits from "./components/Credits";
import ImageText from "./components/ImageText";

import "/src/main.css";

function App() {
  return (
    <>
      <Box className="font">
        <TopBar />
        <ImageText />
        <Happening />
        <Games />
        <Hiring />
        <Credits />
      </Box>
    </>
  );
}

export default App;
