export function Product() {
    return (
      <div className=" flex flex-col p-4 bg-slate-50  text-black">
        <div className="w-full h-full">
          <img className="w-full object-cover h-48 rounded" src="../src/images/image.png"></img>
        </div>
        <div className="relative bg-slate-100 rounded-md">
          <h2 className="font-bold bg-white p-1 px-4 mx-2 md:mx-8 rounded-2xl absolute top-[-7%] right-0 left-0">Combination of 3 hyaluronic acids</h2>
          <ul className="pt-8">
            <li className="flex flex-col sm:flex-row items-center gap-x-2">
              <img src="../src/images/icon-3.png"></img>
              <p className="text-left max-w-xs overflow-hidden" ><span className="font-bold">Low: </span> Dismishes wrinkles and improves skin texture</p>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-x-2">
              <img src="../src/images/icon-2.png"></img>
              <p className="text-left max-w-xs"><span className="font-bold">Medium: </span> Improves skin firmness and quality</p>
            </li>
            <li className="flex flex-col sm:flex-row items-center gap-x-2">
              <img src="../src/images/icon-4.png"></img>
              <p className="text-left max-w-xs"><span className="font-bold">High:</span> Deeply moisturises for protected, silky sin</p>
            </li>
          </ul>
        </div>
      </div>
    )
  }