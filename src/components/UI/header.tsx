import Image from "next/image"

const header = () => {
  return (
    <div className="flex flex-row justify-between px-5 w-screen py-5 bg-amber-600 text-amber-50">
        <Image src="/images/logo1.png" alt="logo" width={70} loading="eager" height={70} />
        <div className=" flex flex-row justify-between align-middle w-80">
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Product</a>
        </div>
        <button>Contact Us</button>
    </div>
  )
}

export default header