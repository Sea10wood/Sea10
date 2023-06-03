import useWindowSize from "@/hooks/Windowsize";
import Image from "next/image";

export default function Home() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Image
                src="/whoisSea10.gif"
                alt="whoisSea10"
                width={width}
                height={height}
            />
            <Image
                src="/whoisSea10orange.gif"
                alt="whoisSea10orange"
                width={width}
                height={height}
            />
            <Image
                src="/whoisSea10sea10.gif"
                alt="whoisSea10sea10"
                width={width}
                height={height}
            />
            <Image
                src="/whoisSea10whoissea10.gif"
                alt="whoisSea10owhoissea10"
                width={width}
                height={height}
            />
        </>
    );
}
