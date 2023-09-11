import React from 'react'

const Footer = () => {
  return (
    <footer
      className="w-full h-[192px] py-[37px]
      rounded-t-[24px] flex flex-col items-center justify-center
      bg-white bg-opacity-20 px-5"
    >
    A step towards more transparent voting system...

      <hr className="w-full sm:w-[450px] border-t border-gray-400 mt-3" />

      <p className="text-sm font-[500px] mt-5">©️{new Date().getFullYear()}</p>
      <p className="text-sm font-[500px]">With Love ❤️</p>
    </footer>
  )
}

export default Footer
