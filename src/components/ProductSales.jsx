import { useState, useEffect} from 'react';
export function ProductSales() {
  const [product, setProduct] = useState([])
  useEffect( () => {
    async function fetchData() {
      try {
        const fetchCocunat = await fetch('https://go.cocunat.com/products/clinical-beauty-filler');
        const responseCocunatFetch = await fetchCocunat.json();
        setProduct(
          [
            { 
              "application": 2,
              "image": "../src/images/product1.jpg",
              "title": responseCocunatFetch.title,
              "id":responseCocunatFetch.variants[0].price.variant_id,
              "currency": responseCocunatFetch.variants[0].price.currency_code,
              "amount": responseCocunatFetch.variants[0].sku
            },
            {
              "application": 1,
              "image": "../src/images/product2.jpg",
              "title": responseCocunatFetch.title,
              "id":responseCocunatFetch.variants[0].id,
              "currency": responseCocunatFetch.variants[0].price.currency_code,
              "amount": responseCocunatFetch.variants[0].price.amount
            },
          ]
        )
        
      } catch (error) {
          throw new Error(error)
      }
    }
    fetchData();
  },[])
    return (
      <ul className="flex flex-col gap-y-14">
        {product.length > 0 && product.map((item, index) => (
          <li key={index} className="relative items-center md:items-stretch flex flex-col gap-y-4 md:gap-y-4  sm:flex-row  md:justify-between gap-x-4">
            <div className=" h-full">
              <img className="object-cover" src={item.image}></img>
            </div>
            <div className="flex flex-col justify-between gap-y-2 md:gap-y-0">
              <span className="p-1 bg-cyan-100 rounded-lg font-light">OFFER | <span className='font-bold'>20% OFF</span></span>
              <p className="text-left">
                <span className=" text-slate-700 font-black text-l´">{item.title} | {item.application > 1 ? "2 Application":  "1 Application"}
                </span>
              </p>
                <span className="flex gap-x-2">
                  <span className="bg-cyan-100 p-2 px3 rounded-lg "> {item.amount} &#8364; </span>
                  <span className="text-slate-500 p-2 font-light line-through"> {item.amount} &#8364; </span>
                </span>
                <button className='bg-black text-white p-2 spacing-md '>SHOP NOW</button> 
            </div>
            <span className="absolute text-slate-700 bottom-[-2rem]">What&apos;s included 
              <span className="mx-3 inline-block transform rotate-90">&gt;</span>
            </span> 
            
          </li>
        ))}
      </ul>
    )
  }