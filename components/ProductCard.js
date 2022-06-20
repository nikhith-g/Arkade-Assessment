import Image from 'next/image'

const ProductCard = ({ product }) => {
   const { title } = product.node

  const { url } = product.node.images.edges[0].node

  return (
      <a className="group">
        <div className="w-full bg-gray-200 rounded-3xl overflow-hidden">
          <div className="relative group-hover:opacity-75 h-72">
            <Image 
              src={url}
              alt={''}
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>
        <h3 className="mt-4 text-lg font-medium text-gray-900">{title}</h3>
      </a>
  )
}

export default ProductCard