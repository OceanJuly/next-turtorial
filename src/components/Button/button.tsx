import {ButtonProps} from "@/components/Button/interface";
import Link from "next/link";

const Button = ({text, url}: ButtonProps) => {
    return (
        <Link href={url}>
            <button className="p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] w-max text-white">{text}</button>
        </Link>
    );
}

export default Button