import { Box, Flex, Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";

import "/src/index.css";
const Happening = () => {
  return (
    <>
      <Box pb={30} className="background">
        <Flex pt={90} width={"90%"} margin={"auto"}>
          <Flex marginRight={"auto"} alignItems={"center"}>
            <Flex fontWeight={"bold"} fontSize={50}>
              What's happening?
            </Flex>
          </Flex>
          <Flex marginLeft={"auto"} alignItems={"center"}>
            <Button
              width={"95px"}
              fontSize={13}
              fontWeight={"bold"}
              height={7}
              backgroundColor={"#222323"}
            >
              SEE MORE
            </Button>
          </Flex>
        </Flex>
        <Flex direction={"row"} pt={"60px"} margin={"auto"} width={"90%"}>
          <Flex pb={100} height={"100%"} direction={"column"} width={"60%"}>
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              cursor={"pointer"}
              border={"none"}
              src="/src/images/riotOffice.png"
              borderRadius={10}
              width={825}
              height={400}
            ></Image>
            <Flex
              pb={3}
              cursor={"pointer"}
              pt={3}
              fontWeight={"bold"}
              fontSize={35}
            >
              Riot's Korea Office and the Cultural Heritage Protection Project
            </Flex>
            <Flex gap={2} alignItems={"center"}>
              <Image
                width={8}
                height={8}
                src="/src/images/riotlogo.png"
              ></Image>
              <Flex fontWeight={"bold"} color={"#5c5b59"}>
                INSIDE RIOT
              </Flex>
            </Flex>
          </Flex>
          <Flex className="list" gap={6} direction={"column"}>
            <Flex
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              cursor={"pointer"}
              opacity={0.8}
              borderRadius={10}
              ml={5}
              width={550}
              height={"125px"}
              backgroundColor={"#23373a"}
            >
              <Flex pl={7} pt={3} direction={"column"}>
                <Flex
                  pb={4}
                  fontSize={17}
                  fontWeight={"bold"}
                  width={"60%"}
                  marginRight={"auto"}
                >
                  Dev Update: One Runeterra & Arcane...
                </Flex>
                <Flex>
                  <Image
                    width={8}
                    src="https://fitness.catholic.edu/esports/lol_icon.svg.png"
                  ></Image>
                  <Flex pl={2} fontWeight={"bold"} color={"#5c5b59"}>
                    NEWS
                  </Flex>
                </Flex>
              </Flex>
              <Image
                src="https://www.riotgames.com/darkroom/1000/e689dea3ad80f34e4806eea6c318fe6a:37caa28ae2b921122be5f431b193e4da/1920x1080-textles-0-5x.png"
                border={"none"}
                borderRadius={10}
                height={"125px"}
                width={225}
                marginLeft={"auto"}
              ></Image>
            </Flex>
            <Flex
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              cursor={"pointer"}
              opacity={0.8}
              borderRadius={10}
              ml={5}
              width={550}
              height={"125px"}
              backgroundColor={"#23373a"}
            >
              <Flex pl={7} pt={3} direction={"column"}>
                <Flex
                  pb={4}
                  fontSize={17}
                  fontWeight={"bold"}
                  width={"70%"}
                  marginRight={"auto"}
                >
                  Introducing the Hall of Legends
                </Flex>
                <Flex>
                  <Image
                    width={8}
                    src="https://fitness.catholic.edu/esports/lol_icon.svg.png"
                  ></Image>
                  <Flex pl={2} fontWeight={"bold"} color={"#5c5b59"}>
                    NEWS
                  </Flex>
                </Flex>
              </Flex>
              <Image
                src="https://images.contentstack.io/v3/assets/blt731acb42bb3d1659/blt6730770e9b5bd434/65a19eeed6cafb6594f7584b/HOL_Textless_Thumbnail.jpg"
                border={"none"}
                borderRadius={10}
                height={"125px"}
                width={222}
                marginLeft={"auto"}
              ></Image>
            </Flex>
            <Flex
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              cursor={"pointer"}
              opacity={0.8}
              borderRadius={10}
              ml={5}
              width={550}
              height={"125px"}
              backgroundColor={"#23373a"}
            >
              <Flex pl={7} pt={3} direction={"column"}>
                <Flex
                  pb={4}
                  fontSize={17}
                  fontWeight={"bold"}
                  width={"70%"}
                  marginRight={"auto"}
                >
                  Riot and HP Team Up on New Global Partnership
                </Flex>
                <Flex>
                  <Image width={8} src="/src/images/riotlogo.png"></Image>
                  <Flex pl={2} fontWeight={"bold"} color={"#5c5b59"}>
                    NEWS
                  </Flex>
                </Flex>
              </Flex>
              <Image
                src="https://www.riotgames.com/darkroom/1440/3a6ee90efa59d6008fb57e7da940f7aa:feec11f166300c986345600cd27e5381/riot-social-1920x1080-1.png"
                border={"none"}
                borderRadius={10}
                height={"125px"}
                width={222}
                marginLeft={"auto"}
              ></Image>
            </Flex>
            <Flex
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              cursor={"pointer"}
              opacity={0.8}
              borderRadius={10}
              ml={5}
              width={550}
              height={"125px"}
              backgroundColor={"#23373a"}
            >
              <Flex pl={7} pt={3} direction={"column"}>
                <Flex
                  pb={4}
                  fontSize={17}
                  fontWeight={"bold"}
                  width={"70%"}
                  marginRight={"auto"}
                >
                  RECKONING // Episode 8 Cinematic - Valorant
                </Flex>
                <Flex>
                  <Image
                    borderRadius={20}
                    width={8}
                    src="https://media.tenor.com/bPDe4mX6nDoAAAAe/valorant.png"
                  ></Image>
                  <Flex pl={2} fontWeight={"bold"} color={"#5c5b59"}>
                    NEWS
                  </Flex>
                </Flex>
              </Flex>
              <Image
                src="https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt0750736bd8247a67/659894f8254eff4d79747d6c/8-1-Kickoff-Textless-Thumb-V2.jpg?auto=webp&disable=upscale&height=549"
                border={"none"}
                borderRadius={10}
                height={"125px"}
                width={222}
                marginLeft={"auto"}
              ></Image>
            </Flex>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Happening;
