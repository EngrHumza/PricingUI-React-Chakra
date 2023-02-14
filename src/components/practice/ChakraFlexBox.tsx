import { Box, Flex } from "@chakra-ui/layout";

export default function ChakraFlexBox() {
    return (
        <Flex direction="row" alignItems="center" justifyContent="space-between">
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg="green.300" color="white" w="30%" h="80px" >
                A
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg="yellow.400" color="white" w="20%" h="80px">
                B
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg="red.300" color="white" w="30%" h="80px">
                C
            </Box>
        </Flex>
    )
}