import { useAsyncFn } from "react-use";

import { useEffect } from "react";
import {
  Box,
  Text,
  Center,
  Divider,
  Header,
  Image,
  Loader,
  Title,
  Anchor,
} from "@mantine/core";
import CardDemo from "../components/Card";

const IndexPage = () => {
  // normally the apiKey query would be replaced with env variable but we're not doing that for example sake
  const ycDataUrl = `https://api.withserve.com/v1/workflows/d8eacc4e-cc7d-4664-b49e-cc2c5694c746?apiKey=a7372b20-bc00-483f-99d0-769b0667a8cc`;

  const [state, doFetch] = useAsyncFn(async () => {
    const response = await fetch(ycDataUrl);
    const result = await response.json();
    return result;
  }, []);

  useEffect(() => {
    doFetch();
  }, []);

  return (
    <>
      <Center h={80} sx={{ gap: 10 }}>
        <Image
          src={
            "https://www.browse.ai/favicon-32x32.png?v=b3dc9f8751cd99f61df89875712b1324"
          }
          width={30}
        />
        <Title>Browse AI Demo</Title>
        <Text sx={{ position: "absolute", right: 20 }}>
          By{" "}
          <Anchor
            target="_blank"
            href="https://www.linkedin.com/in/youssefelmahallawy/"
          >
            Youssef El Mahallawy
          </Anchor>
        </Text>
      </Center>
      <Divider mb={20} />

      {!state?.value || state?.loading ? (
        <Center sx={{ height: "60vh" }}>
          <Loader size="xl" color="black" />
        </Center>
      ) : (
        state?.value?.results?.map((row) => <CardDemo row={row} />)
      )}
    </>
  );
};

export default IndexPage;
