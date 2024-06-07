import Link from "next/link";
import Image from "next/image";

async function getData() {
    const res = await fetch('http://localhost:3000/api/posts', {
        cache: "no-cache"
    })
    if (!res.ok) return new Error('Failed to fetch data!')
    return res.json()
}

const Blog = async () => {
    const data = await getData()
    return (
        <div>
            {data.map((item) => (
                <Link href={`/blog/${item.id}`} key={item.id} className="flex items-center gap-[50px] mt-[50px]">
                    <div>
                        <Image
                            className="object-cover"
                            src={item.img}
                            alt=""
                            width={400}
                            height={250}
                        />
                    </div>
                    <div>
                        <h1 className="mt-10">{item.title}</h1>
                        <div className="text-[18px] color-[#999]">{item.desc}</div>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default Blog