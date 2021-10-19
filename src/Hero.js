import React, { useEffect, useState } from "react";
import {
  chakra,
  Box,
  useColorModeValue,
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
  const [countries, setCountries] = useState([]);
  const [products, setProducts] = useState([]);
  useEffect(() => {
    orders.map((eachOrder) =>
      setCountries((orders) => [...orders, eachOrder.Country])
    );
    orders.map((eachOrder) =>
      setProducts((orders) => [...orders, eachOrder["Product Name"]])
    );
  }, [orders]);

  //deletes duplicate courtries
  var realCountries = [];
  var realCountries = countries.filter(function (elem, pos) {
    return countries.indexOf(elem) == pos;
  });
  console.log(realCountries);

  //deletes duplicate products
  var realProducts = [];
  var realProducts = products.filter(function (elem, pos) {
    return products.indexOf(elem) == pos;
  });
  console.log(realCountries, realProducts);
  return (
    <Box maxW="7xl" mx={"auto"} pt={5} px={{ base: 2, sm: 12, md: 24 }}>
      <chakra.h1
        textAlign={"center"}
        fontSize={"2xl"}
        py={10}
        fontWeight={"medium"}
      >
        Welcome
      </chakra.h1>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 8 }}>
        <StatsCard
          title={"Total Orders"}
          stat={orders.length}
          bg="teal"
          color="white"
        />
        <StatsCard
          title={"Total Products"}
          stat={realProducts.length}
          bg="white"
        />
        <StatsCard
          title={"Countries"}
          stat={realCountries.length}
          bg="#046494"
          color="white"
        />
      </SimpleGrid>
    </Box>
  );
}
