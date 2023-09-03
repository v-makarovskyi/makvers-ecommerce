import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { navigationsLinks } from '../public/data-samples'
import { Layout } from '@/components/big/Layout/Layout'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout navLinks={navigationsLinks}>
      <Component {...pageProps} />
    </Layout>
  ) 
}
