import Image from "next/image";
import Hero from './../../public/hero.png';

export default function Home() {
  return (
      <div className="flex items-center gap-[100px]">
        <div className="flex-1 flex flex-col gap-[50px]">
          <h1 className="text-[72px] color bg-gradient-to-b from-green-800 to-blue-500 text-transparent bg-clip-text">
            Better design for your digital products.
          </h1>
          <div className="text-[24px] font-light">
            Turning your Idea into Reality. We bring together the teams from the
            global tech industry.
          </div>
          {/*<Button url="/portfolio" text="See Our Works"/>*/}
        </div>
        <div className="flex-1 flex flex-col gap-[50px]">
          <Image src={Hero} alt="" className="object-contain" width="100%" height={500} />
        </div>
      </div>
  );
}
