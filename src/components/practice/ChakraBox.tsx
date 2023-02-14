import { Box, Flex } from "@chakra-ui/react";
import ChakraFlexBox from "../practice/ChakraFlexBox";
import ChakraStack from "../practice/ChakraStack";
import ChakraTypography from "../practice/ChakraTypography";

export default function ChakraBox() {
    return (
        <Box as='section'>
            <ChakraFlexBox />
            <ChakraStack />
            <ChakraTypography />
        </Box>
    )
}