import {PiTelegramLogoFill} from 'react-icons/pi'

function Footer() {
  return (
    <div className='bg-sky-800 py-4 '>
      <div className='max-w-5xl mx-auto flex justify-center items-center'>
      <a href="https://t.me/muxtorov_MS"><PiTelegramLogoFill className='text-3xl hover:text-pink-700 cursor-pointer'/></a>
      </div>
    </div>
  )
}
  
export default Footer