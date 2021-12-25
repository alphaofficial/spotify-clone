import { Box, Flex, Text } from "@chakra-ui/layout";

const PlayerBar = () => {
  return (
    <Box height="100px" width="100vw" bg="gray.900" padding="10px">
      <Flex align="center">
        <Box padding="10px" color="white" width="30%">
          <Text fontSize="large">Song name</Text>
          <Text fontSize="small">Artist name</Text>
        </Box>
        <Box padding="10px" color="white" width="40%">
          Controls
        </Box>
        <Box padding="10px" color="white" width="30%">
          Other
        </Box>
      </Flex>
    </Box>
  );
};

export default PlayerBar;
