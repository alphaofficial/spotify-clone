import { Box, Grid, GridItem, Text } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import GradientLayout from "../components/gradientLayout";
import { useMe } from "../lib/hooks";
import prisma from "../lib/prisma";

const Home = ({ artists }) => {
  const { user } = useMe();

  return (
    <GradientLayout
      color="gray"
      subTitle="Profile"
      title={`${user?.firstName || ""} ${user?.lastName || ""}`}
      description={`${user?.playlistsCount || 0} public playlist`}
      image="https://tinted-gym-f99.notion.site/image/https%3A%2F%2Fdl.dropboxusercontent.com%2Fs%2Fbgiv0ssz3xpotz9%2Fpeep.png%3Fdl%3D0?table=block&id=33f9771b-0e6f-4a72-832c-69ed2d41f290&spaceId=511cd811-5561-4a61-b550-c4086b4afafb&width=2000&userId=&cache=v2"
      roundImage
    >
      <Box color="white" paddingX="40px">
        <Box marginBottom="20px">
          <Text fontSize="2xl" fontWeight="bold">
            Top artists this month
          </Text>
          <Text fontSize="md">Only visible to you</Text>
        </Box>

        <Grid templateColumns={`repeat(${artists.length}, 1fr)`} gap={6}>
          {artists.map((artist) => (
            <GridItem key={artist.id} w="100%">
              <Box key={artist.id}>
                <Box
                  bg="gray.900"
                  borderRadius="4px"
                  padding="15px"
                  width="100%"
                >
                  <Image src="http://placekitten.com/300" borderRadius="100%" />
                  <Box marginTop="10px">
                    <Text fontSize="large">{artist.name}</Text>
                    <Text fontSize="x-small">ARTIST</Text>
                  </Box>
                </Box>
              </Box>
            </GridItem>
          ))}
        </Grid>
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async () => {
  const artists = await prisma.artist.findMany();
  return {
    props: {
      artists,
    },
  };
};

export default Home;
