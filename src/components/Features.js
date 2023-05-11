import { Box, Flex, HStack, Icon, Stack, Text } from '@chakra-ui/react';
import React from 'react';
import {
  HassleFreeIcon,
  MoneyBackGuaranteeIcon,
  MonthlySubscriptionIcon,
} from '../Icons/Icon';

export const Feature = props => {
  const { icon, children, ...rest } = props;
  return (
    <HStack {...rest} spacing="6" align="start">
      <Icon as={icon} boxSize={{ base: '8', lg: '12' }} />
      <Text textAlign="left" fontSize="lg" fontWeight="bold">
        {children}
      </Text>
    </HStack>
  );
};

function Features() {
  return (
    <Box maxW="1024px" m="auto" pt="60px" pb="32px" as="section">
      <Stack
        px="12"
        direction={{ base: 'column', lg: 'row' }}
        spacing={{ base: '6', lg: '5' }}
      >
        <Flex>
          <Feature icon={MoneyBackGuaranteeIcon}>
            30 days money back Guarantee
          </Feature>
        </Flex>

        <Flex>
          <Feature icon={HassleFreeIcon}>
            No setup fees 100% hassle-free
          </Feature>
        </Flex>

        <Flex>
          <Feature icon={MonthlySubscriptionIcon}>
            No monthly subscription Pay once and for all
          </Feature>
        </Flex>
      </Stack>
    </Box>
  );
}
export default Features;
