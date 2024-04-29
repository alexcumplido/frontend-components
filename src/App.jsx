
import { Product } from './components/Product.jsx'
import { ProductSales } from './components/ProductSales.jsx'
function App() {
  return (
      <section className="flex justify-center gap-x-12 items-center">
        <Product/>
        <section>
          <h1 className="p-4 uppercase font-bold text-left text-lg">Choose your treatment:</h1>
            <div className="max-w-md flex flex-col p-4 text-black">
              <ProductSales/>
          </div>
        </section>
      </section>
  )
}
export default App
