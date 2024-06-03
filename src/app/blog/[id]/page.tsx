import {notFound} from "next/navigation";
import Image from "next/image";

async function getData(id) {
    const res = await fetch(`http://3000/api/posts/${id}`, {
        cache: "no-cache"
    })
    if (!res.ok) return notFound()
    return res.json()
}

export async function generateMetaDate({ params }) {
    const post = await getData(params.id)
    return {
        title: post.title,
        description: post.desc
    }
}

const BLogPost = async ({ params }) => {
    const data = await getData(params.id)
    return (
        <div>
            <div className="flex">
                <div className="flex-1 flex flex-col justify-between">
                    <h1 className="text-[40px]">{data.title}</h1>
                    <div className="text-[18px] font-light">{data.desc}</div>
                    <div className="flex items-center gap-10">
                        <Image
                            className="object-cover rounded-full"
                            src={data.img}
                            alt=""
                            width={40}
                            height={40}
                        />
                        <div>{data.userName}</div>
                    </div>
                </div>
                <div className="flex-1 h-[300px] relative">
                    <Image
                        className="object-cover"
                        src={data.img}
                        alt=""
                        fill={true}
                    />
                </div>
                <div className="mt-[50px] text-[20px] font-light color-[#999] text-justify">
                    <div>{data.content}</div>
                </div>
            </div>
        </div>
    )
}

export default BLogPost