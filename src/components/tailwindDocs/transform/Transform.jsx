const Transform = () => {
  return (
    <div className="container mx-auto bg-gray-200 flex justify-center">
      <img src="https://picsum.photos/100" alt="test" className="-scale-50"/>
      <img src="https://picsum.photos/100" alt="test" className="scale-50 origin-bottom-right"/>
      <img src="https://picsum.photos/100" alt="test" className="-rotate-45"/>
      <img src="https://picsum.photos/100" alt="test" className="-rotate-45 origin-bottom-right"/>
      <img src="https://picsum.photos/100" alt="test" className=""/>
      <img src="https://picsum.photos/100" alt="test" className="translate-x-10 translate-y-1/2 origin-center"/>
    </div>
  )
}

export default Transform