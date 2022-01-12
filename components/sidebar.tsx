import {
  Box,
  List,
  ListItem,
  Divider,
  LinkBox,
  LinkOverlay,
  Flex,
  Text,
} from "@chakra-ui/layout";
import {
  MdSearch,
  MdLibraryMusic,
  MdPlaylistAdd,
  MdFavorite,
} from "react-icons/md";
import { HiOutlineHome } from "react-icons/hi";
import { BiPodcast } from "react-icons/bi";
import NextImage from "next/image";
import NextLink from "next/link"; // client side rendering
import { usePlaylist } from "../lib/hooks";

const navMenu = [
  {
    name: "Home",
    icon: ({ color, size }: { color: string; size: number }) => (
      <HiOutlineHome color={color} size={size} />
    ),
    route: "/home",
  },
  {
    name: "Search",
    icon: ({ color, size }: { color: string; size: number }) => (
      <MdSearch color={color} size={size} />
    ),
    route: "/",
  },
  {
    name: "Your Library",
    icon: ({ color, size }: { color: string; size: number }) => (
      <MdLibraryMusic color={color} size={size} />
    ),
    route: "/",
  },
];

const musicMenu = [
  {
    name: "Create Playlist",
    icon: ({ color, size }: { color: string; size: number }) => (
      <MdPlaylistAdd color={color} size={size} />
    ),
    route: "/",
  },
  {
    name: "Liked Songs",
    icon: ({ color, size }: { color: string; size: number }) => (
      <MdFavorite color={color} size={size} />
    ),
    route: "/",
  },
  {
    name: "Your Episodes",
    icon: ({ color, size }: { color: string; size: number }) => (
      <BiPodcast color={color} size={size} />
    ),
    route: "/",
  },
];

const Sidebar = () => {
  const { playlists } = usePlaylist();

  return (
    <Box
      width="100%"
      height="calc(100vh - 100px)"
      bg="black"
      paddingX="5px"
      color="gray"
    >
      <Box paddingY="20px" height="100%">
        <Box width="120px" marginBottom="20px" paddingX="20px">
          <NextImage src="/logo.svg" height={60} width={120} />
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {navMenu.map(({ name, icon, route }) => (
              <ListItem key={name} paddingX="20px" fontSize="16px">
                <LinkBox>
                  <NextLink href={route} passHref>
                    <LinkOverlay fontWeight="bold">
                      <Flex alignItems="center">
                        {icon({ color: "white", size: 28 })}
                        <Box marginLeft="15px">
                          <Text>{name}</Text>
                        </Box>
                      </Flex>
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box marginBottom="20px">
          <List spacing={2}>
            {musicMenu.map(({ name, icon, route }) => (
              <ListItem key={name} paddingX="20px" fontSize="16px">
                <LinkBox>
                  <NextLink href={route} passHref>
                    <LinkOverlay fontWeight="bold">
                      <Flex alignItems="center">
                        {icon({ color: "white", size: 24 })}
                        <Box marginLeft="15px">
                          <Text>{name}</Text>
                        </Box>
                      </Flex>
                    </LinkOverlay>
                  </NextLink>
                </LinkBox>
              </ListItem>
            ))}
          </List>
        </Box>
        <Divider color="gray.800" />
        {/** to make the section scroll we need a fixed height */}
        <Box height="66%" overflowY="auto" paddingY="20px">
          <List spacing={2}>
            {playlists?.length
              ? playlists?.map((playlist) => (
                  <ListItem key={playlist.id} paddingX="20px">
                    <LinkBox>
                      <NextLink
                        href={{
                          pathname: "/playlist/[id]",
                          query: { id: playlist.id },
                        }}
                        passHref
                      >
                        <LinkOverlay>{playlist.name}</LinkOverlay>
                      </NextLink>
                    </LinkBox>
                  </ListItem>
                ))
              : null}
          </List>
        </Box>
      </Box>
    </Box>
  );
};

export default Sidebar;
