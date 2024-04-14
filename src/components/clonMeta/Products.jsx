import meta_quest from './public/products_1.webp'
import accessories from './public/products_2.webp'
import mixed_reality from './public/products_3.webp'
import ray_ban from './public/products_4.webp'

const Products = () => {
  return (
    <section>
      <div className="max-w-[1380px] mx-auto w-full px-8 flex flex-col items-center mb-32">
        <h2 className="text-5xl mb-4">
          Shop Meta products
        </h2>
        <p className="mb-12">
          The future of virtual reality, mixed reality and smart glasses is here.
        </p>
        <div className="flex flex-row">
          <div className="flex flex-col justify-between items-center h-80">
            <img src={meta_quest} alt="products_meta_quest" 
              className='w-64'
            />
            <p className="text-lg mb-6 w-36 text-center font-medium">
              Meta Quest
            </p>
            <a href="#"
              className='text-xs py-3 px-7 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
            >
              Shop now
            </a>
          </div>

          <div className="flex flex-col justify-between items-center h-80">
            <img src={accessories} alt="products_meta_quest" 
              className='w-64'
            />
            <p className="text-lg mb-6 w-36 text-center font-medium">
              Meta Quest accessories
            </p>
            <a href="#"
              className='text-xs py-3 px-7 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
            >
              Shop now
            </a>
          </div>

          <div className="flex flex-col justify-between items-center h-80">
            <img src={mixed_reality} alt="products_meta_quest" 
              className='w-64'
            />
            <p className="text-lg mb-6 w-36 text-center font-medium">
              Meta Quest mixed reality
            </p>
            <a href="#"
              className='text-xs py-3 px-7 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
            >
              Shop now
            </a>
          </div>

          <div className="flex flex-col justify-between items-center h-80">
            <img src={ray_ban} alt="products_meta_quest" 
              className='w-64'
            />
            <p className="text-lg mb-6 w-36 text-center font-medium">
              Ray-Ban | Meta smart glasses
            </p>
            <a href="#"
              className='text-xs py-3 px-7 border-2 border-gray-300 rounded-full text-blue-500 hover:text-blue-400 font-semibold'
            >
              Shop now
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Products