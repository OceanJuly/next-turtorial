import {notFound} from "next/navigation";
import Button from "@/components/Button/button";
import {items} from "./data";
import Image from "next/image";

const getData = (cat: string) => {
    const data = items[cat]
    if (data) return data
    return notFound()
}

const CateGory = ({params}) => {
    const data = getData(params.category)
    return (
        <div>
            <h1 className="text-[#53c28b]">{params.category}</h1>
            {data.map((item) => (
                <div key={item.id} className="flex gap-[50px] mt-[50px] mb-[50px] odd:flex-row-reverse">
                    <div className="flex-1 flex flex-col gap-[20px] justify-center">
                        <h1 className="text-[50px]">{item.title}</h1>
                        <div className="text-[20px]">{item.desc}</div>
                        <Button text="See More" url="#"></Button>
                    </div>
                    <div className="flex-1 h-[500px] relative">
                        <Image
                            className="object-cover"
                            fill={true}
                            src={item.image}
                            alt="category_image"
                        />
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CateGory