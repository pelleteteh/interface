import { Flex, Text } from 'ui/src'

export default function Bridge() {
  return (
    <Flex
      width="100%"
      padding="$padding20"
      flexDirection="column"
      gap="$gap16"
      justifyContent="center"
      alignItems="center"
      minHeight="600px"
    >
      <Text variant="heading1" color="$neutral1">
        Token Bridge
      </Text>
      <Text variant="body2" color="$neutral2" textAlign="center" maxWidth="500px">
        Bridge your tokens across multiple blockchain networks with security and ease.
      </Text>

      <Flex
        borderRadius="$rounded16"
        backgroundColor="$surface2"
        padding="$padding24"
        width="100%"
        maxWidth="600px"
        gap="$gap16"
        flexDirection="column"
      >
        <Text variant="subheading1" color="$neutral1">
          Select Source Chain
        </Text>
        <Flex gap="$gap8" flexDirection="column">
          {['Ethereum', 'Arbitrum', 'Optimism', 'Polygon'].map((chain) => (
            <Flex
              key={chain}
              padding="$padding12"
              backgroundColor="$surface3"
              borderRadius="$rounded12"
              justifyContent="space-between"
              alignItems="center"
              hoverStyle={{ backgroundColor: '$surface3Hovered' }}
              cursor="pointer"
            >
              <Text variant="body2" color="$neutral1">
                {chain}
              </Text>
              <Text variant="body2" color="$accent1">
                →
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex
        borderRadius="$rounded16"
        backgroundColor="$surface2"
        padding="$padding24"
        width="100%"
        maxWidth="600px"
        gap="$gap12"
        flexDirection="column"
        marginTop="$padding16"
      >
        <Text variant="subheading1" color="$neutral1">
          Select Destination Chain
        </Text>
        <Flex gap="$gap8" flexDirection="column">
          {['Ethereum', 'Arbitrum', 'Optimism', 'Polygon', 'Solana'].map((chain) => (
            <Flex
              key={chain}
              padding="$padding12"
              backgroundColor="$surface3"
              borderRadius="$rounded12"
              justifyContent="space-between"
              alignItems="center"
              hoverStyle={{ backgroundColor: '$surface3Hovered' }}
              cursor="pointer"
            >
              <Text variant="body2" color="$neutral1">
                {chain}
              </Text>
              <Text variant="body2" color="$accent1">
                ✓
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>

      <Flex
        padding="$padding16 $padding24"
        backgroundColor="$accent1"
        borderRadius="$rounded12"
        marginTop="$padding24"
        width="100%"
        maxWidth="600px"
        justifyContent="center"
      >
        <Text variant="buttonLabel1" color="white">
          Continue Bridging
        </Text>
      </Flex>
    </Flex>
  )
}
