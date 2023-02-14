import { Box, Stack, Text } from "@chakra-ui/react";

export default function ChakraTypography() {
    return (
        <Stack direction={"row"} align="center" justify={"space-between"} mt="40px" spacing={"40px"}>
            <Box bg="red.300" color="white" w="30%" h="80px" >
                <Text fontSize={"20px"}>A</Text>
            </Box>
            <Box bg="yellow.400" color="white" w="20%" h="40px">
                <Text fontSize={"20px"}>B</Text>
            </Box>
            <Box bg="red.300" color="white" w="30%" h="80px">
                <Text fontSize={"20px"}>C</Text>
            </Box>
        </Stack>
    )
}