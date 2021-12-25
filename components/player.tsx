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
      <Box color="gray.600">
        <Flex justify="center" align="center">
          <Box width="10%">
            <Text fontSize="x-small">1:21</Text>
          </Box>
          <Box width="80%">
            <RangeSlider
              // eslint-disable-next-line jsx-a11y/aria-proptypes
              aria-label={["min", "max"]}
              step={0.1}
              min={0}
              max={300}
              id="player-range"
            >
              <RangeSliderTrack bg="gray.800">
                <RangeSliderFilledTrack bg="gray.600" />
              </RangeSliderTrack>
              <RangeSliderThumb index={0} />
            </RangeSlider>
          </Box>
          <Box width="10%" textAlign="right">
            <Text fontSize="x-small">3:00</Text>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Player;
