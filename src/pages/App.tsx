import { Box } from "@chakra-ui/react"
import FooterDisplay from "../components/footer";
import HeaderDispley from "../components/header";
import MainDisplay from "../components/main";


function App() {
  return (
    <>
      <Box w="100%" h="1000px" bgGradient="linear(to-l, #210241, #251535)">
      <HeaderDispley />
      <MainDisplay />
      </Box>
      <FooterDisplay/>
      
      </>
  );
}

export default App;
