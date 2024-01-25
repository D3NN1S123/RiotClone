import { Box, Button, Flex, Image } from "@chakra-ui/react";
import React from "react";
import { HiArrowCircleRight } from "react-icons/hi";

import "/src/index.css";

const ImageText = () => {
  return (
    <>
      <Flex justifyContent={"center"} position={"relative"}>
        <Image src="/src/images/kindred.jpg" width={"full"}></Image>
        <Flex
          height={"full"}
          margin={"auto"}
          width={"full"}
          position={"absolute"}
        >
          <Flex margin={"auto"} height={"full"} width={"90%"}>
            <Flex width={"38%"} height={"full"} marginRight={"auto"}>
              <Flex
                pt={10}
                margin={"auto"}
                justifyContent={"center"}
                direction={"column"}
              >
                <Flex fontSize={30} fontWeight={"bold"} alignItems={"center"}>
                  Still Here | Season 2024 Cinematic
                </Flex>
                <Flex
                  pt={3}
                  color={"gray"}
                  fontSize={20}
                  fontWeight={"bold"}
                  alignItems={"center"}
                  margin={"auto"}
                >
                  Fight for tomorrow.
                </Flex>
                <Flex pt={20} margin={"auto"}>
                  <Flex
                    className="blueButton"
                    pb={1}
                    pl={2}
                    width={280}
                    height={70}
                    borderRadius={20}
                    alignItems={"center"}
                    _hover={{
                      boxShadow: "1px 10px 23px -1px rgba(15,189,222,0.73)",
                    }}
                    boxShadow={"1px 10px 23px -10px rgba(15,189,222,0.73)"}
                    cursor={"pointer"}
                  >
                    <HiArrowCircleRight size={55} />
                    <Flex pb={1} pl={3} fontSize={30} fontWeight={"bold"}>
                      Watch Now
                    </Flex>
                  </Flex>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </>
  );
};

export default ImageText;
