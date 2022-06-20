import 'tailwindcss/tailwind.css'
import Layout from '../components/Layout'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter()
  
  return (
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
  )
}

export default MyApp
