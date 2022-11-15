import Image from 'next/image'
import {
  Container,
  EquallyGrid,
  View,
  AspectRatio,
  Image as CoImage,
} from '@co-design/core'

export default function Home() {
  const myLoader = ({
    src,
    width,
    quality,
  }: {
    src: string
    width: number
    quality: number
  }) => {
    return `https://example.com/${src}?w=${width}&q=${quality || 75}`
  }

  return (
    <Container
      size={1152}
      padding={40}
      co={{ paddingTop: 40, paddingBottom: 40 }}
    >
      <EquallyGrid cols={4}>
        <span style={{ position: 'relative' }}>
          <View
            component={Image}
            alt="sample"
            src="https://cdn.dev.present.do/document/626a0fdfd174897e7698ed85/86a5dad0-6849-43ec-8e66-2b834c050955.jpg"
            fill
            co={{ objectFit: 'contain' }}
          />
        </span>
        <span style={{ position: 'relative' }}>
          <Image
            src="https://cdn.dev.present.do/document/626a0fdfd174897e7698ed85/86a5dad0-6849-43ec-8e66-2b834c050955.jpg"
            alt="sample"
            fill
            priority
            placeholder="blur"
            blurDataURL="https://cdn.dev.present.do/document/626a0fdfd174897e7698ed85/86a5dad0-6849-43ec-8e66-2b834c050955.jpg"
            style={{ objectFit: 'contain' }}
          />
        </span>
        <View component="span" co={{ position: 'relative' }}>
          <Image
            src="https://cdn.dev.present.do/document/62a93bd9f6365307fc446d82/9df965dc-1319-4fbe-9033-98cfc3c61f59.jpg"
            alt="sample"
            fill
            placeholder="blur"
            blurDataURL="https://cdn.dev.present.do/document/62a93bd9f6365307fc446d82/9df965dc-1319-4fbe-9033-98cfc3c61f59.jpg"
            style={{ objectFit: 'contain' }}
          />
        </View>
        <Image
          src="https://cdn.dev.present.do/document/620745f9c2813774be43695b/594967ea-7749-4a95-8a5c-fee99d28ec58.jpg"
          alt="sample"
          width={240}
          height={240}
          placeholder="blur"
          priority
          blurDataURL="https://cdn.dev.present.do/document/620745f9c2813774be43695b/594967ea-7749-4a95-8a5c-fee99d28ec58.jpg"
        />
      </EquallyGrid>
    </Container>
  )
}
