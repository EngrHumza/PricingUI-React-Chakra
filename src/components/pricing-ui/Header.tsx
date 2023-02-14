import { Box, Heading, HStack, Icon, Text } from "@chakra-ui/react";

export default function Header() {
    return (
        <Box as="section" bg="#6B46C1" pt={{base:"56px",sm:"90px"}} pr={{base:"24px",md:"90px"}} pl={{base:"24px",md:"90px"}} pb={{base:"176px",sm:"198px"}} w="100%">
            <Heading fontWeight="800" fontSize={{base:'30px',sm:"48px"}} color="#F7FAFC">Simple pricing for your business</Heading>
            <Text fontWeight="500" fontSize={{base:"18px",sm:"24px"}} color="#F7FAFC" opacity="0.84" mt="16px">Plans that are carefully crafted to suit your business.</Text>
        </Box>
    )
}