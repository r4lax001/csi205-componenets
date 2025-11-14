import React from 'react'
import { useState } from 'react'

import Counter from "../components/Counter/Counter";
import Add from "../components/add/Add";
import Temperatures from "../components/Temperatures/Temperatures";
import Timer from "../components/Timer/Timer";

function components() {
  return (
    <>
      <div className='flex justify-center mt-5'>
        <div className="container max-w-[1200px] text-center  items-center  rounded-2xl">
          <div className="text-center mx-auto">
            <div className="lineOf_CAT flex items-center p-10">
                <div className="counter flex flex-col mx-auto gap-2">
                  <Counter name={""} value={0} />
                  <Timer />
                </div>
                <br />
                <div className="forAdd mt-5">
                  <Add aValue={0} bValue={0} />
                </div>
            </div>
            <div className='px-5'>
              <Temperatures />
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default components