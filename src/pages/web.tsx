import Footer2 from "@/components/Footer2";
import Image from "next/image";
import Footer from "../components/Footer";
import useWindowSize from "../hooks/Windowsize";

export default function Web() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Footer2 />
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
