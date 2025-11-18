import { Button } from "@mui/material"

export default function hero() {
  return (
    <div className=" w-screen flex flex-row justify-center align-middle mt-50">
      <div className="text-amber-50 w-3xl flex-col justify-center text-center" >
          <h1 className="text-4xl font-bold mb-5">Discover the Finest Meat</h1>
          <p className="text-1xl mb-5">tempore reprehendedita iusto facilis minus.</p>
        <Button sx={{ backgroundColor: 'transparent',  border: '1px solid white', color: 'white' }}variant="outlined">Browse Our LiveStock</Button>
      </div>
    </div>
  )
}
