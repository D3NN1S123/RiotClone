import { Box, Button, Flex, Image, Input } from "@chakra-ui/react";
import React from "react";
import { SiRiotgames } from "react-icons/si";
import { CiGlobe } from "react-icons/ci";

import "/src/index.css";

const TopBar = () => {
  return (
    <>
      <Flex
        zIndex={99}
        position={"fixed"}
        border={"none"}
        borderBottom={"1px solid"}
        borderColor={"#1c1c1c"}
        backgroundColor={"#111111"}
        height={"80px"}
        width={"100%"}
      >
        <Flex margin={"auto"} width={"95%"}>
          <Flex marginRight={"auto"} alignItems={"center"}>
            <Image
              mr={6}
              cursor={"pointer"}
              src="/src/images/riotGamesLogo.png"
              width={86}
              height={6}
            ></Image>
            <Image
              mr={5}
              cursor={"pointer"}
              src="/src/images/riotlogo.png"
              width={8}
              height={8}
            ></Image>

            <Flex
              pt={1}
              pb={1}
              gap={1}
              cursor={"pointer"}
              pl={4}
              pr={8}
              fontWeight={"bold"}
              _hover={{ bg: "#292929" }}
              fontSize={14}
              borderRadius={6}
              justifyContent={"center"}
              alignItems={"center"}
            >
              WHO WE ARE
            </Flex>
            <Flex
              pt={1}
              pb={1}
              gap={1}
              cursor={"pointer"}
              pl={4}
              pr={8}
              fontWeight={"bold"}
              _hover={{ bg: "#292929" }}
              fontSize={14}
              borderRadius={6}
              justifyContent={"center"}
              alignItems={"center"}
            >
              WORK WITH US
            </Flex>
            <Flex
              pt={1}
              pb={1}
              gap={1}
              cursor={"pointer"}
              pl={4}
              pr={4}
              fontWeight={"bold"}
              _hover={{ bg: "#292929" }}
              fontSize={14}
              borderRadius={6}
              justifyContent={"center"}
              alignItems={"center"}
            >
              NEWS
            </Flex>
          </Flex>

          <Flex marginLeft={"auto"}>
            <Flex gap={3}>
              <Input
                height={9}
                pl={5}
                placeholder="SEARCH"
                backgroundColor={"#292929"}
                border={"none"}
                width={190}
                borderRadius={30}
                type="text"
              ></Input>
              <Button
                fontWeight={"bold"}
                height={9}
                color={"black"}
                borderRadius={30}
                width={110}
                fontSize={14}
                _hover={{ bg: "#d13639" }}
                backgroundColor={"#d13639"}
              >
                SIGN IN
              </Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default TopBar;
