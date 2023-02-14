import { Box } from "@chakra-ui/react";
import Features from "./Features";
import Header from "./Header";
import PricePackage from "./Package";

export default function PricingUi(){
    return(
        <>
            <Header />
            <PricePackage />
            <Features />

            {/* <Box w="500px" h="250px"  bg="yellow" color="red" border="5px solid green">
                A
            </Box>
            <Box w="500px" h="250px"  bg="red" color="yellow" border="5px solid black">
                B
            </Box> */}




        </>
    )
}