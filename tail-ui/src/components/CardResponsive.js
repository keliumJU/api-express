/* eslint-disable jsx-a11y/anchor-is-valid */
import Image from '../erin-lindford.jpg'

function CardResponsive() {
  return (
    <div className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl text-white">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={Image} alt=""/>
        </div>
        <div className='p-8'>
          <div className="uppercase tracking-wide text-sm text-yellow-500 font-semibold">Company retreats</div>
          <a className="block mt-1 text-lg leading-tight font-medium text-green-500 hover:underline">Incredible accommodation for your team</a>
          <p className="mt-2 text-slate-200">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>
  )
}

export default CardResponsive
