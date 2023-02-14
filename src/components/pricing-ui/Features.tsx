import { Box, HStack, Icon, Stack, Text } from "@chakra-ui/react";
import MBGIcon from "../../icons/MBGIcon";
import SUBIcon from "../../icons/SUBIcon";
import { SUIcon } from "../../icons/SUIcon";

export default function Features() {
    return (
        <Box padding="60px 0px 140px 0px">
            <Stack direction={{base:"column",sm:"column",md:"row"}} justify="center" align="center" spacing="25px" >
                <HStack spacing="24px">
                    <Icon as={MBGIcon} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>
                <HStack spacing="24px">
                    <Icon as={SUBIcon} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>
                <HStack spacing="24px">
                    <Icon as={SUIcon} />
                    <Text>30 days money back Guarantee</Text>
                </HStack>
            </Stack>
        </Box>
    )
}