import Link from "next/link";
const arr = []
const PortFolio = () => {
    return (
        <div>
            <h1 className="my-[20px]">Choose a gallery</h1>
            <div className="flex gap-[50px]">
                <Link href="/portFolio/illustrations" className="border-[5px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative bg-cover bg-[url('/illustration.png')] group/item1">
                    <div className="absolute right-[10px] bottom-[10px] text-[40px] font-bold group-hover/item1:text-green-600">illustrations</div>
                </Link>
                <Link href="/portFolio/websites" className="border-[5px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative bg-cover bg-[url('/websites.jpg')] group/item2">
                    <div className="absolute right-[10px] bottom-[10px] text-[40px] font-bold group-hover/item2:text-green-600">Websites</div>
                </Link>
                <Link href="/portFolio/Application" className="border-[5px] border-solid border-[#bbb] rounded-[5px] w-[300px] h-[400px] relative bg-cover bg-[url('/apps.jpg')] group/item3">
                    <div className="absolute right-[10px] bottom-[10px] text-[40px] font-bold group-hover/item3:text-green-600">Application</div>
                </Link>
            </div>
        </div>
    )
}

export default PortFolio