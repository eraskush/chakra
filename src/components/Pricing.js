import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Icon,
  Stack,
  Text,
} from '@chakra-ui/react';
import React from 'react';
import { CheckIcon } from '../Icons/Icon';

export const ListItem = props => {
  const { children, ...rest } = props;
  return (
    <HStack as="li" spacing="20px" {...rest} alignItems="start">
      <Icon as={CheckIcon} w="22px" h="22px"></Icon>
      <Text textAlign={['left', 'left', 'center']} color="#171923">
        {children}
      </Text>
    </HStack>
  );
};

function Pricing() {
  return (
    <Box mx="6">
      <Box
        maxW="994px"
        margin="auto"
        mt="-256px"
        borderRadius="12px"
        overflow="hidden"
        boxShadow="0px 20px 25px -5px rgba(0, 0, 0, 0.1), 0px 10px 10px -5px rgba(0, 0, 0, 0.04)"
        textAlign="center"
      >
        <Flex direction={['column', 'column', 'row']}>
          <Box
            bg="#F0EAFB"
            P="60px"
            align="center"
            p={4}
            justifyContent="center"
            justifyItems="center"
            display="grid"
          >
            <Text color="#171923" fontSize="2xl" fontWeight="extrabold">
              Premium PRO
            </Text>
            <Heading
              color="#171923"
              as="h3"
              fontSize={['5xl', '5xl', '6xl']}
              mt="16px"
            >
              $329
            </Heading>
            <Text color="#171923" fontSize="18px" fontWeight="medium" mt="2">
              billed just once
            </Text>
            <Button colorScheme="purple" size="lg" w="282px" mt="36">
              Get Started
            </Button>
          </Box>
          <Box p="60px" fontSize="18px" bg="white">
            <Text color="#171923" textAlign="left">
              Access these features when you get this pricing package for your
              business.
            </Text>
            <Stack as="ul" spacing="20px" pt="24px">
              <ListItem>International calling and messaging API</ListItem>
              <ListItem>Additional phone numbers</ListItem>
              <ListItem>Automated messages via Zapier</ListItem>
              <ListItem>24/7 support and consulting</ListItem>
            </Stack>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Pricing;
