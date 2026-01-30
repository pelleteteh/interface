import { Flex, Text, Button } from 'ui/src'
import { useMemo } from 'react'

type Creator = {
  rank: number
  name: string
  twitter?: string
  totalVolume: number
  followers: number
  projects?: number
}

const SAMPLE_CREATORS: Creator[] = [
  { rank: 1, name: 'Alpha Labs', twitter: '@alphalabs', totalVolume: 1250000, followers: 52300, projects: 12 },
  { rank: 2, name: 'Beta Studio', twitter: '@betastudio', totalVolume: 980000, followers: 42100, projects: 9 },
  { rank: 3, name: 'Gamma Creators', twitter: '@gammacreators', totalVolume: 760000, followers: 33200, projects: 7 },
  { rank: 4, name: 'Delta Devs', twitter: '@deltadev', totalVolume: 550000, followers: 19800, projects: 5 },
  { rank: 5, name: 'Epsilon Guild', twitter: '@epsilon', totalVolume: 430000, followers: 14200, projects: 4 },
]

function formatNumber(n: number) {
  if (n >= 1_000_000) return `$${(n / 1_000_000).toFixed(2)}M`
  if (n >= 1_000) return `$${(n / 1_000).toFixed(0)}k`
  return `$${n}`
}

export default function Creators() {
  const creators = useMemo(() => SAMPLE_CREATORS, [])

  return (
    <Flex width="100%" padding="$padding20" flexDirection="column" gap="$gap16">
      <Flex justifyContent="space-between" alignItems="center">
        <Text variant="heading1" color="$neutral1">
          Creators
        </Text>
        <Button variant="ghost" size="small">
          Apply to Program
        </Button>
      </Flex>

      <Text variant="body2" color="$neutral2">
        Discover and follow top creators building on Uniswap. Sort by volume, followers, or projects.
      </Text>

      <Flex flexDirection="column" gap="$gap12" width="100%">
        {/* Table header */}
        <Flex
          padding="$padding12"
          backgroundColor="$surface2"
          borderRadius="$rounded8"
          alignItems="center"
          justifyContent="space-between"
        >
          <Flex width="100%" gap="$gap12" alignItems="center">
            <Text variant="caption" color="$neutral2" style={{ width: 60 }}>
              #
            </Text>
            <Text variant="caption" color="$neutral2" style={{ flex: 1 }}>
              Creator
            </Text>
            <Text variant="caption" color="$neutral2" style={{ width: 160, textAlign: 'right' }}>
              Total Volume
            </Text>
            <Text variant="caption" color="$neutral2" style={{ width: 120, textAlign: 'right' }}>
              Followers
            </Text>
            <Text variant="caption" color="$neutral2" style={{ width: 100, textAlign: 'right' }}>
              Projects
            </Text>
            <Text variant="caption" color="$neutral2" style={{ width: 120, textAlign: 'center' }}>
              Action
            </Text>
          </Flex>
        </Flex>

        {/* Rows */}
        {creators.map((c) => (
          <Flex
            key={c.rank}
            padding="$padding12"
            backgroundColor="$surface1"
            borderRadius="$rounded8"
            alignItems="center"
            justifyContent="space-between"
            hoverStyle={{ backgroundColor: '$surface2' }}
          >
            <Flex width="100%" gap="$gap12" alignItems="center">
              <Text variant="body2" color="$neutral1" style={{ width: 60 }}>
                {c.rank}
              </Text>
              <Flex flexDirection="column" style={{ flex: 1 }}>
                <Text variant="body1" color="$neutral1" fontWeight={600}>
                  {c.name}
                </Text>
                <Text variant="caption" color="$neutral2">
                  {c.twitter}
                </Text>
              </Flex>

              <Text variant="body2" color="$neutral1" style={{ width: 160, textAlign: 'right' }}>
                {formatNumber(c.totalVolume)}
              </Text>
              <Text variant="body2" color="$neutral1" style={{ width: 120, textAlign: 'right' }}>
                {c.followers.toLocaleString()}
              </Text>
              <Text variant="body2" color="$neutral1" style={{ width: 100, textAlign: 'right' }}>
                {c.projects}
              </Text>

              <Flex justifyContent="center" style={{ width: 120 }}>
                <Button size="small" variant="outline">
                  View
                </Button>
              </Flex>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
