import { Box, Flex, Image } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import React from "react";

const Hiring = () => {
  return (
    <>
      <Box width={"full"} height={550} backgroundColor={"#ebebeb"}>
        <Flex marginRight={"auto"} height={"full"}>
          <Flex width={"50%"} pt={20} justifyContent={"center"}>
            <Flex alignItems={"center"} width={"80%"} direction={"column"}>
              <Flex
                fontWeight={"bold"}
                fontSize={45}
                justifyContent={"center"}
                width={"70%"}
                color={"black"}
              >
                We're hiring!
              </Flex>
              <Flex
                pt={5}
                width={"70%"}
                fontWeight={"bold"}
                fontSize={18}
                color={"#656462"}
                justifyContent={"center"}
              >
                Team up with Riot to forge your path and craft
              </Flex>
              <Flex
                width={"70%"}
                fontWeight={"bold"}
                fontSize={18}
                color={"#656462"}
                justifyContent={"center"}
              >
                unforgettable experiences for players
              </Flex>
              <Flex gap={6} pt={"45px"}>
                <Flex
                  backgroundColor={"#dfdede"}
                  width={"260px"}
                  height={"140px"}
                  borderRadius={10}
                  justifyContent={"center"}
                  _hover={{ bg: "#cbcbcb" }}
                  cursor={"pointer"}
                >
                  <Flex direction={"column"}>
                    <Flex
                      justifyContent={"center"}
                      color={"black"}
                      fontWeight={"bold"}
                      fontSize={60}
                    >
                      77
                    </Flex>
                    <Flex
                      justifyContent={"center"}
                      color={"#656462"}
                      fontWeight={"bold"}
                      fontSize={25}
                    >
                      Open Positions
                    </Flex>
                  </Flex>
                </Flex>

                <Flex
                  justifyContent={"center"}
                  backgroundColor={"#dfdede"}
                  width={"260px"}
                  height={"140px"}
                  borderRadius={10}
                  _hover={{ bg: "#cbcbcb" }}
                  cursor={"pointer"}
                >
                  <Flex direction={"column"}>
                    <Flex
                      justifyContent={"center"}
                      color={"black"}
                      fontWeight={"bold"}
                      fontSize={60}
                    >
                      24
                    </Flex>
                    <Flex
                      justifyContent={"center"}
                      color={"#656462"}
                      fontWeight={"bold"}
                      fontSize={25}
                    >
                      Offices
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
              <Button
                fontSize={20}
                fontWeight={"bold"}
                borderRadius={20}
                width={250}
                height={"60px"}
                mt={38}
                _hover={{ bg: "#da5e61" }}
                backgroundColor={"#d13639"}
              >
                Explore Careers
              </Button>
            </Flex>
          </Flex>
          <Flex
            position={"relative"}
            marginLeft={"auto"}
            width={"50%"}
            backgroundColor={"black"}
            height={"full"}
          >
            <Image src="https://www.riotgames.com/darkroom/1400/d5285b8b221b1dcea0165f6ca67a0565:9ff408c7ea949f3846103f4c320b92f6/annie.jpg"></Image>
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Hiring;
