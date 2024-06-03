import Image from "next/image";
import Button from "@/components/Button/button";
import DragonImg from "../../../public/Dragon.jpg"

const About = () => {
    return (
        <div>
           <div className="w-full h-[300px] relative">
               <Image className="object-cover filter grayscale" src={DragonImg} fill={true} alt="top_image"></Image>
               <div className="absolute bottom-[20px] left-[20px] bg-[#53c28b] p-[5px] text-white">
                   <h1>Digital Storytellers</h1>
                   <h2>Handcrafting award winning digital experiences</h2>
               </div>
           </div>
            <div className="flex gap-[100px]">
                <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
                    <h1>What We Do?</h1>
                    <div className="text-[24px] font-light text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </div>
                </div>
                <div className="flex-1 mt-[50px] flex flex-col gap-[30px]">
                    <h1>What We Do?</h1>
                    <div className="text-[24px] font-light text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        quae dolor, optio voluptatibus magnam iure esse tempora beatae, a
                        suscipit eos. Animi quibusdam cum omnis officiis voluptatum quo ea
                        eveniet? Lorem ipsum dolor sit amet consectetur adipisicing elit. -
                        Creative Illustrations
                        <br />
                        <br /> - Dynamic Websites
                        <br />
                        <br /> - Fast and Handy
                        <br />
                        <br /> - Mobile Apps
                    </div>
                    <Button url="/contact" text="Contact"></Button>
                </div>
            </div>
        </div>
    )
}

export default About