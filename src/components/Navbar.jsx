import {
  Avatar,
  AvatarBadge,
  Box,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

function Navbar() {
  const toast = useToast()

  const showToast  = () => {
    toast ({
      title: 'LogOut',
      description: "successfully logOut",
      status: 'success',
      duration: 5000,
      isClosable: true,
    })
  } 

  return (
    <Flex as="nav" p="10px" alignItems="center" mb="40px" >
      <Heading as="h1">Dojo Tasks</Heading>
      <Spacer />
      <HStack spacing="20px">
        <Avatar src="/public/img/mario.png" >
          <AvatarBadge width="1.3em" bg="teal.500"  >
            <Text fontSize="xs" color="white"  >3</Text>
          </AvatarBadge>
        </Avatar>
        <Text>ma614351@gmail.com</Text>
        <Button colorScheme="purple"  onClick={showToast} >Logout</Button>
      </HStack>
    </Flex>
  );
}

export default Navbar;
