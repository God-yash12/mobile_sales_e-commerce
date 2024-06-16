import React from 'react';
import Star from "../../../assets/star.png"

const Condition = () => {
  return (
    <div className="mt-10 mb-72 mx-aut0">
      <div className="container">
      <div className="flex justify-center items-center gap-3 mb-10">
          <img src={Star} alt="" className="w-8 h-8" />
          <h1 className="text-3xl sm:lg md:2xl text-center">Conditions</h1>
          <img src={Star} alt="" className="w-8 h-8" />
        </div>
      </div>
    </div>
  )
}

export default Condition
