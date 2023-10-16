'use client';

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';

// Replace test data with your own
const features = [
  {
    id: 0,
    title: 'Blockchain Security',
    text: 'Your documents are securely hashed and stored on the blockchain,to preserve their authenticity.',
  },
  {
    id: 1,
    title: 'Easy Verification',
    text: 'You can easily verify the authenticity of your documents at any time, using our verification tool.',
  },
  {
    id: 2,
    title: 'Secure Storage',
    text: 'Your documents are securely stored in our database, we use the latest encryption technology.',
  },
  {
    id: 3,
    title: 'User Friendly',
    text: 'Our user interface is simple and easy to use, you can upload your documents in a few clicks.',
  },
  {
    id: 4,
    title: 'Fast Verification',
    text: 'We use the latest technology to ensure that your documents are verified quickly.',
  },
  {
    id: 5,
    title: 'Timestamped Records',
    text: 'Your documents are timestamped and stored on the blockchain, providing tamper-proof records.',
  },
  {
    id: 6,
    title: 'Multi-Platform Access',
    text: 'You can access your documents from any device, we support all major platforms',
  },
  {
    id: 7,
    title: 'Easy to Use',
    text: 'Our user interface is simple and easy to use.',
  },
];

export default function Features() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Text color={'gray.600'} fontSize={'xl'}>
          We provide a secure and immutable way to store your documents. Your
          documents are hashed and stored on the blockchain. This allows you to
          verify the authenticity of your documents at any time.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map(feature => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'center'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}
