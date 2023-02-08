import Image from '../erin-lindford.jpg'

function CardResponsive() {
  return (
    <div className="max-w-md mx-auto bg-black rounded-xl shadow-md overflow-hidden md:max-w-2xl text-white">
      <div className="md:flex">
        <div className="md:shrink-0">
          <img className="h-48 w-full object-cover md:h-full md:w-48" src={Image} alt=""/>
        </div>
        <div className='p-8'>
          <div>Company retreats</div>
          <a href="#">Incredible accommodation for your team</a>
          <p>Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
        </div>
      </div>
    </div>
  )
}

export default CardResponsive
