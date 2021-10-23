import React, { useEffect, useState } from "react";
import {
  chakra,
  Flex,
  Box,
  Button,
  useColorModeValue,
  SimpleGrid,
  Stat,
  StatLabel,
  StatNumber,
} from "@chakra-ui/react";
import Chart from "react-apexcharts";
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
  const series = [
    {
      name: "Temperature in Fahrenheit", //will be displayed on the y-axis
      data: [43, 53, 50, 57],
    },
  ];
  const options = {
    chart: {
      id: "simple-bar",
    },
    xaxis: {
      categories: [1, 2, 3, 4], //will be displayed on the x-asis
    },
  };

  const options2 = {
    labels: ["Comedy", "Action", "Romance", "Drama", "SciFi"],
  };
  const series2 = [4, 5, 6, 1, 5];

  const series3 = [
    {
      name: "Guests",
      data: [19, 22, 20, 26],
    },
  ];
  const options3 = {
    xaxis: {
      categories: ["2019-05-01", "2019-05-02", "2019-05-03", "2019-05-04"],
    },
  };
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
  realCountries = countries.filter(function (elem, pos) {
    return countries.indexOf(elem) === pos;
  });
  console.log(realCountries);

  //deletes duplicate products
  var realProducts = [];
  realProducts = products.filter(function (elem, pos) {
    return products.indexOf(elem) === pos;
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
          stat={
            orders.length === 0 ? (
              <Button isLoading color="white" bg="transparent"></Button>
            ) : (
              orders.length
            )
          }
          bg="teal"
          color="white"
        />
        <StatsCard
          title={"Total Products"}
          stat={
            realProducts.length === 0 ? (
              <Button isLoading color="black" bg="transparent"></Button>
            ) : (
              realProducts.length
            )
          }
          bg="white"
        />
        <StatsCard
          title={"Countries"}
          stat={
            realCountries.length === 0 ? (
              <Button isLoading color="white" bg="transparent"></Button>
            ) : (
              realCountries.length
            )
          }
          bg="#046494"
          color="white"
        />
      </SimpleGrid>

      {realCountries.length === 0 ? (
        <Button isLoading color="black" bg="transparent"></Button>
      ) : (
        <Flex justify="space-between" pt="20">
          <Chart options={options} type="bar" series={series} width="100%" />
          <Chart options={options2} type="pie" series={series2} width="380" />
          <Chart type="line" series={series3} options={options3} />;
        </Flex>
      )}
    </Box>
  );
}
