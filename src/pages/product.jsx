import React from 'react'
import Navbar from '../components/navbar'
import { FoldHorizontal, Logs } from 'lucide-react'
import { productData } from '../../utils/data'

const Product = () => {
  return (
    <>
      <div className="flex py-10 px-10">
        {/* Sidebar Filters */}
        <div className="w-[25%] pr-6">
          <button className="flex items-center gap-2 text-blue-600 font-medium mb-6">
            <span className="text-xl">«</span> Hide filters
          </button>

          {/* Category */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Category</label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Any</option>
            </select>
          </div>

          {/* Brightness */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Brightness (lumen output)</label>
            <input type="range" className="w-full accent-blue-600" />
            <p className="text-blue-600 text-sm mt-1">Any</p>
          </div>

          {/* Finish */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Finish</label>
            <div className="space-y-2">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-black" />
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-black border" />
                  Textured Black
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-gray-100 border" />
                  Textured White
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-gray-400 border" />
                  Textured Grey
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-gradient-to-br from-gray-300 to-gray-500 border" />
                  Anodised Aluminium
                </span>
              </label>
              <label className="flex items-center gap-2">
                <input type="checkbox" />
                <span className="flex items-center gap-2">
                  <span className="w-5 h-5 bg-gradient-to-br from-gray-200 to-gray-400 border" />
                  Aluminium
                </span>
              </label>
            </div>
            <p className="text-blue-600 text-sm mt-2 cursor-pointer">More finishes</p>
          </div>

          {/* Colour Temperature */}
          <div className="mb-6">
            <label className="block text-sm mb-2">Colour Temperature</label>
            <select className="w-full border border-gray-300 rounded-md p-2">
              <option>Any</option>
            </select>
            <p className="text-blue-600 text-sm mt-2 cursor-pointer">More filters</p>
          </div>
        </div>

        {/* Products Section */}
        <div className="w-[75%]">
          <h1 className="text-4xl font-medium">All products</h1>

          <div className="flex justify-between my-10">
            <div>
              <p>1 - 24 of 102 Products</p>
            </div>
            <div className="flex items-center gap-8">
              <div><Logs /></div>
              <div className="flex gap-2">
                <p className="font-bold underline">Product</p>
                <p className="opacity-50">in-site</p>
              </div>
              <p>Sort By: <span className="font-bold">Recommended</span></p>
              <div className="border rounded-sm text-blue-700 border-gray-300 flex justify-center items-center gap-3 px-3 py-3">
                <FoldHorizontal />
                <p className="text-blue-700 font-medium">Compare</p>
              </div>
            </div>
          </div>

          {/* Product Grid */}
          <div className="flex flex-wrap gap-5">
            {productData.map((item, index) => (
              <div
                className="w-[32%] hover:border-2 border-blue-800 flex-col items-center rounded-sm bg-gray-100 flex"
                key={index}
              >
                <div>
                  <img
                    src={item.img}
                    alt=""
                    className="hover:scale-110 ease-in-out transition-transform"
                  />
                </div>
                <p className="my-10 font-medium text-lg">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Product
