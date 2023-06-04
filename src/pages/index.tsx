import Image from "next/image";
import React from "react";
import useWindowSize from "../hooks/Windowsize";
import Header from "../components/Footer";
import Footer from "../components/Footer";

export default function Home() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Footer />
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
