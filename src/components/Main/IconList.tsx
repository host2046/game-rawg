import {
  FaWindows,
  FaLinux,
  FaAndroid,
  FaApple,
  FaXbox,
  FaPlaystation,
} from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import { SiNintendo } from "react-icons/si";
import { BsGlobe } from "react-icons/bs";
import { Icon, HStack } from "@chakra-ui/react";
import { IconType } from "react-icons";
import { Platform } from "../../entities/Platform";

interface Props {
  platforms: Platform[];
}

const IconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: FaWindows,
    linux: FaLinux,
    playstation: FaPlaystation,
    xbox: FaXbox,
    mac: FaApple,
    android: FaAndroid,
    apple: MdPhoneIphone,
    web: BsGlobe,
    nintendo: SiNintendo,
  };
  return (
    <HStack marginY={1}>
      {platforms.map((platform) => (
        <Icon key={platform.id} as={iconMap[platform.slug]} color="gray.500" />
      ))}
    </HStack>
  );
};

export default IconList;
