import ProductList from "../components/ProductList"
import { getAllProducts } from "../lib/shopify"

export default function Home({ products }) {

  return (
    <ProductList products={products} />
  )
}

export async function getStaticProps() {
  const products = await getAllProducts()

  return {
    props: { products }, // will be passed to the page component as props
  }
}