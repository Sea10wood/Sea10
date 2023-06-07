import Footer2 from "@/components/Footer2";
import Footerweb from "@/components/webresponsive";
import Image from "next/image";
import Footer from "../components/Footer";
import useWindowSize from "../hooks/Windowsize";

export default function Web() {
    const [width, height] = useWindowSize();

    return (
        <>
            <Footer2 />
            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <Image
                    src="/whoisSea10.gif"
                    alt="whoisSea10"
                    layout="responsive"
                    objectFit="contain"
                    width={width}
                    height={height}
                />
            </div>

            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <Image
                    src="/whoisSea10orange.gif"
                    alt="whoisSea10orange"
                    layout="responsive"
                    objectFit="contain"
                    width={width}
                    height={height}
                />
            </div>

            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <Image
                    src="/whoisSea10sea10.gif"
                    alt="whoisSea10sea10"
                    layout="responsive"
                    objectFit="contain"
                    width={width}
                    height={height}
                />
            </div>

            <div
                style={{ position: "relative", width: "100%", height: "100%" }}
            >
                <Image
                    src="/whoisSea10whoissea10.gif"
                    alt="whoisSea10owhoissea10"
                    layout="responsive"
                    objectFit="contain"
                    width={width}
                    height={height}
                />
            </div>
        </>
    );
}
