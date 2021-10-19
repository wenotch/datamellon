import React, { useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
  Flex,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";

function StatsCard(props) {
  const { title, stat } = props;
  return (
    <Stat
      _hover={{
        boxShadow: "2xl",
      }}
      px={{ base: 4, md: 8 }}
      py={"5"}
      shadow={"xl"}
      borderColor={useColorModeValue("gray.800", "gray.500")}
      rounded={"lg"}
      bg={props.bg}
      color={props.color}
    >
      <StatLabel fontWeight={"normal"} isTruncated>
        {title}
      </StatLabel>
      <StatNumber fontSize={"2xl"} fontWeight={"medium"}>
        {stat}
      </StatNumber>
    </Stat>
  );
}

export default function Hero({ orders }) {
  const totalOrders = orders.length;
  const names = ["John", "Paul", "George", "Ringo", "John"];
  console.log(orders);
  const neworders = orders;
  console.log(
    neworders.map((each) => {
      return delete each["Country"];
    })
  );
  let unique = [...new Set(names)];
  //   console.log(unique);
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 24 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={10}
        fontWeight={"bold"}
      >
        Welcome
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Total Orders"}
          stat={totalOrders}
          bg="teal"
          color="white"
        />
        <StatsCard title={"In"} stat={"30 different countries"} bg="white" />
        <StatsCard
          title={"Total Customers"}
          stat={"100 "}
          bg="#046494"
          color="white"
        />
      </SimpleGrid>
    </Box>
  );
}
