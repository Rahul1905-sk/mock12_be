import { Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

// img = `https://images.assetsdelivery.com/compings_v2/farakos/farakos1905/farakos190500005.jpg`

const JobCard = ({
  company,
  contract,
  position,
  location,
  postedAt,
  role,
  level,
  language,
}) => {
  return (
    <Stack
      m={"auto"}
      p={"10px 15px"}
      direction={"row"}
      justifyContent={"space-between"}
      alignItems={'center'}
      boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px"}
    >
      <Stack w={"10%"}>
        <img
          style={{ width: "100%" }}
          src="https://images.assetsdelivery.com/compings_v2/farakos/farakos1905/farakos190500005.jpg"
          alt="pic1"
        />
      </Stack>
      <Stack w={"60%"} m={"auto"} textAlign={"left"}>
        <Text> {company} </Text>
        <Stack direction={"row"} justifyContent={"flex-start"}>
          <Heading size={"sm"}>{position} </Heading>
        </Stack>
        <Stack direction={"row"}>
          <Text>{postedAt}</Text>
          <Text>{contract}</Text>
          <Text>{location}</Text>
        </Stack>
      </Stack>
      <Stack direction={"row"}>
        <Text p={"1px 3px"} bgColor={"#EDF5F5"}>
          {role}
        </Text>
        <Text p={"1px 3px"} bgColor={"#EDF5F5"}>
          {level}
        </Text>
        {language.map((e) => (
          <Text key={e} p={"1px 3px"} bgColor={"#EDF5F5"}>
            {e}
          </Text>
        ))}
      </Stack>
    </Stack>
  );
};

export default JobCard;
