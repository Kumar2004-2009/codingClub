import React from 'react'

const Dummy = () => {
  return (
    <>
    <style jsx>
      {`
        .dummy {
          color: red;
          background-color: blue;
        }
      `}
    </style>
    <div className='dummy'>
      dummy
    </div>
    </>
  )
}

export default Dummy
