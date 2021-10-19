import { Button } from "@chakra-ui/button";
import { Input, InputGroup, InputLeftElement } from "@chakra-ui/input";
import { Box, Divider, Flex, Stack, Text } from "@chakra-ui/layout";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";
import React, { useState } from "react";
import Pagination from "./Pagination";

function List({ orders }) {
  const [isLoading] = useState(false);
  const [value, setValue] = useState("");
  const [currentPage, setcurrentPage] = useState(1);
  const [postsPerPage] = useState(100);
  const handleChange = (event) => setValue(event.target.value);

  let dataSearch = orders.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(value.toString().toLowerCase())
    );
  });

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = dataSearch.slice(indexOfFirstPost, indexOfLastPost);

  // Change page

  const paginate = (pageNumber) => setcurrentPage(pageNumber);
  const mobiletoggler = { base: "none", md: "table-cell" };
  return (
    <Box p="50px" px={36}>
      <Stack
        direction="row"
        spacing={4}
        align="center"
        mb={4}
        justify="center"
      ></Stack>
      <Divider />
      <Table variant="simple">
        <TableCaption placement="top">
          All Orders ({orders.length})
          <InputGroup w="60" m="auto" mt="10px">
            <InputLeftElement pointerEvents="none" />
            <Input
              value={value}
              onChange={handleChange}
              size="md"
              placeholder="Search Order"
            />
          </InputGroup>
        </TableCaption>
        <Thead>
          <Tr>
            <Th>Order Id</Th>
            <Th display={mobiletoggler}>Product</Th>
            <Th display={mobiletoggler}>Order Date</Th>
            <Th display={mobiletoggler}>Customer Id</Th>
            <Th display={mobiletoggler}>Customer Name</Th>
            <Th display={mobiletoggler}>Postal Code</Th>
          </Tr>
        </Thead>
        <Tbody>
          {isLoading ? (
            <Flex w="full" justify="space-between" align="center">
              <Button isLoading colorScheme="gray" loadingText="Loading">
                Click me
              </Button>
            </Flex>
          ) : (
            currentPosts.map((order) => {
              return (
                <Tr key={order["Order ID"]}>
                  <Td>{order["Order ID"]}</Td>
                  <Td display={mobiletoggler}>{order["Product Name"]}</Td>
                  <Td display={mobiletoggler}>{order["Order Date"]}</Td>
                  <Td display={mobiletoggler}>{order["Customer ID"]}</Td>
                  <Td display={mobiletoggler}>{order["Customer Name"]}</Td>
                  <Td display={mobiletoggler}>{order["Postal Code"]}</Td>
                </Tr>
              );
            })
          )}
        </Tbody>
      </Table>
      {dataSearch.length === 0 ? <Text>No Match Found</Text> : null}
      <Pagination
        postsPerpage={postsPerPage}
        totalPosts={dataSearch.length}
        paginate={paginate}
      />
    </Box>
  );
}

export default List;
