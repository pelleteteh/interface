import { Flex, Text } from 'ui/src'

export default function Leaderboard() {
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
        Leaderboard
      </Text>
      <Text variant="body2" color="$neutral2" textAlign="center" maxWidth="500px">
        Welcome to the Uniswap Leaderboard! Track top traders, liquidity providers, and community members.
      </Text>
      
      <Flex
        borderRadius="$rounded16"
        backgroundColor="$surface2"
        padding="$padding24"
        width="100%"
        maxWidth="800px"
        gap="$gap12"
        flexDirection="column"
      >
        <Text variant="subheading1" color="$neutral1">
          Top Traders
        </Text>
        <Flex gap="$gap8" flexDirection="column">
          {[1, 2, 3].map((index) => (
            <Flex
              key={index}
              padding="$padding12"
              backgroundColor="$surface3"
              borderRadius="$rounded12"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text variant="body2" color="$neutral1">
                #{index} - Trader Address
              </Text>
              <Text variant="body2" color="$accent1" fontWeight="600">
                ${(100000 - index * 5000).toLocaleString()}
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
        maxWidth="800px"
        gap="$gap12"
        flexDirection="column"
      >
        <Text variant="subheading1" color="$neutral1">
          Top Liquidity Providers
        </Text>
        <Flex gap="$gap8" flexDirection="column">
          {[1, 2, 3].map((index) => (
            <Flex
              key={index}
              padding="$padding12"
              backgroundColor="$surface3"
              borderRadius="$rounded12"
              justifyContent="space-between"
              alignItems="center"
            >
              <Text variant="body2" color="$neutral1">
                #{index} - LP Address
              </Text>
              <Text variant="body2" color="$accent1" fontWeight="600">
                ${(500000 - index * 50000).toLocaleString()}
              </Text>
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  )
}
