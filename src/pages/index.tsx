import Footer2 from "@/components/Footer2";
import Image from "next/image";
import useWindowSize from "../hooks/Windowsize";

export default function Web() {
    const [width, height] = useWindowSize();

    return (
        <>
            <Footer2 />
            <div
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    marginBottom: "-10px",
                    verticalAlign: "bottom",
                }}
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
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    marginBottom: "-10px",
                    marginTop: "0px",
                }}
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
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    marginBottom: "-10px",
                    marginTop: "0px",
                }}
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
                style={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    marginTop: "0px",
                }}
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
