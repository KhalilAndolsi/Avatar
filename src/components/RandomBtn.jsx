import clean from "/clean.png"

const RandomBtn = ({random}) => {
  return (
    <button className="bg-white rounded-full w-[35px] h-[35px] grid place-items-center" onClick={() => random((prev) => !prev)}><img src={clean} alt="random" className="h-[20px]"/></button>
  )
}

export default RandomBtn