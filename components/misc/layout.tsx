import Footer from './footer'
import Header from './header'
import Meta from './meta'
import { GoogleAnalytics } from '@next/third-parties/google'
import { GoogleTagManager } from '@next/third-parties/google'

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Meta />
      <Header />
      <main className="grow">
        {children}
      </main>
      <Footer />
      {process.env.NEXT_PUBLIC_GTAG_ID && (
        <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GTAG_ID} />
      )}
      <GoogleTagManager gtmId="AW-16663863890" />
    </div>
  )
}
