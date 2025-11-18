import Glassbutton from '@/components/UI/blurredglass'

export default function hero() {
  return (
    <div className=" w-screen flex flex-row justify-center align-middle mt-50 mb-30">
      <div className="text-amber-50 w-3xl flex-col justify-center text-center" >
          <h1 className="text-4xl font-bold mb-5">Discover the Finest Meat</h1>
          <p className="text-1xl mb-5">tempore reprehendedita facilis minus.</p>
        <Glassbutton text='Browse'/>
      </div>
    </div>
  )
}
