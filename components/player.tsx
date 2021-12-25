import {
  ButtonGroup,
  Box,
  IconButton,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Center,
  Flex,
  Text,
} from "@chakra-ui/react";
import ReactHowler from "react-howler";
import React, { useEffect, useRef, useState } from "react";
import {
  MdShuffle,
  MdSkipPrevious,
  MdSkipNext,
  MdOutlinePlayCircleFilled,
  MdOutlinePauseCircleFilled,
  MdOutlineRepeat,
} from "react-icons/md";
import { useStoreActions } from "easy-peasy";

const Player = () => {
  return (
    <Box>
      <Box>{/* <ReactHowler /> */}</Box>
      <Center color="gray.600">
        <ButtonGroup>
          <IconButton
            aria-label="suffle"
            outline="none"
            variant="link"
            fontSize="24px"
            icon={<MdShuffle />}
          />
          <IconButton
            aria-label="previous"
            outline="none"
            variant="link"
            fontSize="24px"
            icon={<MdSkipPrevious />}
          />
          <IconButton
            aria-label="play"
            outline="none"
            variant="link"
            fontSize="40px"
            color="white"
            icon={<MdOutlinePlayCircleFilled />}
          />
          <IconButton
            aria-label="pause"
            outline="none"
            variant="link"
            fontSize="40px"
            color="white"
            icon={<MdOutlinePauseCircleFilled />}
          />
          <IconButton
            aria-label="next"
            outline="none"
            variant="link"
            fontSize="24px"
            icon={<MdSkipNext />}
          />
          <IconButton
            aria-label="repeat"
            outline="none"
            variant="link"
            fontSize="24px"
            icon={<MdOutlineRepeat />}
          />
        </ButtonGroup>
      </Center>
    </Box>
  );
};

export default Player;
