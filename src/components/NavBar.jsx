import { Box, Flex, Link, Text } from '@chakra-ui/react';
import { FaHome, FaServicestack } from 'react-icons/fa';
import { Link as RouterLink } from 'react-router-dom';

function NavBar() {
  return (
    <Flex as="nav" bg="blue.500" color="white" padding="4" justifyContent="space-between">
      <Link as={RouterLink} to="/" leftIcon={<FaHome />}>
        <Text>Home</Text>
      </Link>
      <Link as={RouterLink} to="/services" leftIcon={<FaServicestack />}>
        <Text>Services</Text>
      </Link>
    </Flex>
  );
}

export default NavBar;