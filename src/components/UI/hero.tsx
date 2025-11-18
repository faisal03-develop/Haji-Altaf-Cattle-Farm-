import { Button } from "@mui/material"

export default function hero() {
  return (
    <div className="w-3xl h-5xl flex-col justify-between align-middle">
        <h1 className="text-5xl font-bold">Discover the Finest Meat here with us</h1>
        <p className="text-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint, numquam tempore reprehenderit nobis sapiente repudiandae eaque debitis ullam reiciendis veniam accusantium odio cumque facere saepe eius expedita iusto facilis minus.</p>
      <Button sx={{ backgroundColor: '#E17100', color: 'white' }}variant="outlined">Outlined</Button>
    </div>
  )
}
