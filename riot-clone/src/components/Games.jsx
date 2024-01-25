import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Games = () => {
  return (
    <>
      <Box backgroundColor={"#1f1f1f"}>
        <Flex width={"90%"} margin={"auto"} pt={90}>
          <Flex fontWeight={"bold"} fontSize={50} alignItems={"center"}>
            Games
          </Flex>
        </Flex>

        <Flex
          gap={50}
          pt={20}
          margin={"auto"}
          width={"90%"}
          direction={"column"}
        >
          <Flex gap={6}>
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{
                borderColor: "white",
              }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://editors.dexerto.com/wp-content/uploads/2021/12/14/league-of-legends-2022-patch-schedule-all-lol-season-12-updates-changes.jpg"
            />
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://d1lss44hh2trtw.cloudfront.net/assets/article/2020/04/10/valorant-preview_feature.jpg"
            />
          </Flex>
          <Flex gap={6}>
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://editors.dexerto.com/wp-content/uploads/2022/05/12/TFT-Set-7-details.jpg"
            />
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://www.riotgames.com/darkroom/1440/08bcc251757a1f64e30e0d7e8c513d35:be16374e056f8268996ef96555c7a113/wr-cb1-announcementarticle-banner-1920x1080.png"
            />
          </Flex>
          <Flex>
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              margin={"auto"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://images.contentstack.io/v3/assets/blta38dcaae86f2ef5c/blt375d6282df6bcb98/60e8ab2add52f525eb2bda6a/LoR-SoL-Community-Battle-Key-Visual-optimized.jpg"
            />
          </Flex>
        </Flex>
        <Flex width={"90%"} margin={"auto"} pt={90}>
          <Flex fontWeight={"bold"} fontSize={50} alignItems={"center"}>
            Esports
          </Flex>
        </Flex>
        <Flex
          gap={50}
          pt={20}
          margin={"auto"}
          width={"90%"}
          direction={"column"}
        >
          <Flex gap={6}>
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://www.ungeek.ph/wp-content/uploads/2023/08/VCT-Season-24.png"
            />
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://www.creocommunity.pl/wp-content/uploads/2023/01/1673377216_Ujawniono-formaty-turniejow-i-mistrzostw-w-League-of-Legends-2023.png"
            />
          </Flex>
          <Flex></Flex>
        </Flex>
        <Flex width={"90%"} margin={"auto"}>
          <Flex fontWeight={"bold"} fontSize={50} alignItems={"center"}>
            Entertainment
          </Flex>
        </Flex>
        <Flex
          gap={50}
          pt={"80px"}
          margin={"auto"}
          width={"90%"}
          direction={"column"}
        >
          <Flex gap={6}>
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"380"}
              width={"49%"}
              src="https://cdn.oneesports.gg/cdn-data/2021/11/LeagueofLegends_ArcanePosterWallpaper.jpg"
            />
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"378"}
              width={"49%"}
              src="https://assets-global.website-files.com/5d7e8885cad5174a2fcb98d7/611c87315867b025256786e4_Riot%20Games%20Launches%20Virtual%20Record%20Label-%20Riot%20Games%20Music.jpg"
            />
          </Flex>
          <Flex></Flex>
        </Flex>
        <Flex width={"90%"} margin={"auto"}>
          <Flex fontWeight={"bold"} fontSize={50} alignItems={"center"}>
            Riot Forge
          </Flex>
        </Flex>
        <Flex
          gap={50}
          pt={20}
          margin={"auto"}
          width={"90%"}
          direction={"column"}
        >
          <Flex></Flex>
        </Flex>
        <Flex pb={135} justifyContent={"center"} margin={"auto"} width={"88%"}>
          <Flex gap={6}>
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"200"}
              width={"450px"}
              src="https://images.contentstack.io/v3/assets/blt1d37b8e155757b13/blt7833a814c99a2d2e/63e43fc57ccfaf4bc688002d/mageseeker-thumbnail-en-us.jpg"
            />
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"200"}
              width={"450px"}
              src="https://images.gog-statics.com/b008f343952c76da66987e9d7f13df4b1a7b7f4654c91475c56feb6cd8796aa1.jpg"
            />
            <Image
              boxShadow={"1px 4px 14px 1px rgba(0,0,0,0.55)"}
              border={"2px solid"}
              borderColor={"#1f1f1f"}
              _hover={{ borderColor: "white" }}
              cursor={"pointer"}
              borderRadius={10}
              height={"200"}
              width={"450px"}
              src="https://cdn.cloudflare.steamstatic.com/steam/apps/1651960/capsule_616x353.jpg?t=1655222718"
            />
          </Flex>
        </Flex>
      </Box>
    </>
  );
};

export default Games;
