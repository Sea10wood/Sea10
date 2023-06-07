import Image from "next/image";
import useWindowSize from "../hooks/Windowsize";

import Footer from "../components/Footer";

export default function Home() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Footer />
            <Image
                src="/smartphone.gif"
                alt="smartphone"
                width={width}
                height={height}
            />
        </>
    );
}
