import { Box, Text } from "@chakra-ui/layout";
import prisma from "../../lib/prisma";
import GradientLayout from "../../components/gradientLayout";
import { validateToken } from "../../lib/auth";
import SongsTable from "../../components/songsTable";

// generic bg colors
const getBgColor = (id) => {
  const colors = [
    "red",
    "green",
    "blue",
    "orange",
    "purple",
    "gray",
    "teal",
    "yellow",
  ];

  return colors[id - 1] || colors[Math.floor(Math.random() * colors.length)];
};

const Playlist = ({ playlist }) => {
  const color = getBgColor(playlist.id);
  return (
    <GradientLayout
      color={color}
      roundImage={false}
      title={playlist.name}
      subTitle="Playlist"
      description={`${playlist.songs.length} Songs`}
      image={`https://picsum.photos/400?random=${playlist.id}`}
    >
      <Box>
        <SongsTable songs={playlist.songs} />
      </Box>
    </GradientLayout>
  );
};

export const getServerSideProps = async ({ query, req }) => {
  let user;
  try {
    user = validateToken(req.cookies.TRAX_ACCESS_TOKEN);
  } catch (e) {
    return {
      redirect: {
        permanent: false,
        destination: "/signin",
      },
    };
  }

  const [playlist] = await prisma.playlist.findMany({
    where: {
      id: +query.id,
      userId: user.id,
    },
    include: {
      songs: {
        include: {
          artist: {
            select: {
              name: true,
              id: true,
            },
          },
        },
      },
    },
  });

  return {
    props: { playlist },
  };
};

export default Playlist;
