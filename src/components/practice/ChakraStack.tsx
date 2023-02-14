import { Box, Stack } from "@chakra-ui/react";

export default function ChakraStack() {
    return (
        <Stack direction={"row"} align="center" justify={"space-between"} mt="40px" spacing={"40px"}>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg="red.300" color="white" w="30%" h="80px" >
                A
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg="yellow.400" color="white" w="20%" h="40px">
                B
            </Box>
            <Box display={"flex"} alignItems={"center"} justifyContent={"center"} bg="red.300" color="white" w="30%" h="80px">
                C
            </Box>
        </Stack>
    )
}