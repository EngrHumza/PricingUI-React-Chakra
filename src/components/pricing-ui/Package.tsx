import { Box, Button, Flex, Heading, HStack, List, ListIcon, ListItem, Text } from "@chakra-ui/react";
import { CheckIcon } from "../../icons/CheckIcon";

export default function PricePackage() {
    return (

        <Flex as="section" direction={{base:'column',sm:'column', md:'row'}} w={{base:"82%",sm:"73%",md:"73%",lg:"73%"}} m="-140px auto 0 auto" bg="#FFFFFF" boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)" borderRadius="12px" >

            <Box padding="60px 48px" bg="rgba(101, 44, 211,0.1)" color="#171923">
                <Heading as="h3" fontWeight="800"fontSize="24px">Premium PRO</Heading>
                <Text as="span" fontWeight="800"fontSize="60px">$329</Text>
                <Text fontWeight="500"fontSize="18px">billed just once</Text>
                <Button w={{base:"210px",sm:"282px"}}h="51px" bg="#805AD5" color="#F7FAFC" padding="14px 75px" borderRadius="8px" fontWeight="700"fontSize="14px" mt="24px" _hover={{color:"#F7FAFC",backgroundColor:"black"}}>Get Started</Button>
            </Box>
            <Box p={{base:"40px 0px 40px 14px", sm:"40px 0px 40px 14px",md:"40px",lg:"48px"}}>
                <Text textAlign="left">Access these features when you get this pricing package for your business.</Text>
                <List spacing="16px" mt="24px">
                    <HStack as="li" spacing="20px">
                        <ListIcon as={CheckIcon} />
                        <Text>International calling and messaging API</Text>
                    </HStack>
                    <HStack as="li" spacing="20px">
                        <ListIcon as={CheckIcon} />
                        <Text>Additional phone numbers</Text>
                    </HStack>
                    <HStack as="li" spacing="20px">
                        <ListIcon as={CheckIcon} />
                        <Text>Automated messages via Zapier</Text>
                    </HStack>
                    <HStack as="li" spacing="20px">
                        <ListIcon as={CheckIcon} />
                        <Text>24/7 support and consulting</Text>
                    </HStack>
                </List>
            </Box>
        </Flex>
    )
}