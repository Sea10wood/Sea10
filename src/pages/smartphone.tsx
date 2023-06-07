import Footersmartphone from "@/components/Footersmartphone";
import Image from "next/image";
import useWindowSize from "../hooks/Windowsize";

export default function Home() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Footersmartphone />
            <Image
                src="/smartphone.gif"
                alt="smartphone"
                width={width}
                height={height}
            />
        </>
    );
}
