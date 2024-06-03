import Button from "@/components/Button/button";
import Image from "next/image"


const Contact = () => {
    return (
        <div>
            <h1 className="text-[60px] mt-[100px] text-center">Let's Keep In Touch</h1>
            <div className="flex items-center gap-[100px]">
                <div className="flex h-[500px] relative">
                    <Image className="object-contain" src="/contact.png" alt="contact_image" width={500} height={500}></Image>
                </div>
                <form className="flex flex-1 flex-col gap-[20px]">
                    <input className="p-[20px] bg-transparent outline-none color-[#bbb] border-solid border-[#bbb] border-[3px] font-bold text-[20px]" type="text" placeholder="name" />
                    <input className="p-[20px] bg-transparent outline-none color-[#bbb] border-solid border-[#bbb] border-[3px] font-bold text-[20px]" type="text" placeholder="email" />
                    <textarea className="p-[20px] bg-transparent outline-none color-[#bbb] border-solid border-[#bbb] border-[3px] font-bold text-[20px]" placeholder="message" cols="30" rows="10"></textarea>
                    <Button url="#" text="Send"></Button>
                </form>
            </div>
        </div>
    )
}

export default Contact