import Image from "next/image";
import Link from "next/link";
import useWindowSize from "../hooks/Windowsize";

export default function Home() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Image
                src="/aboutsea10.gif"
                alt="aboutsea10"
                width={width}
                height={height}
            />
            <div
                style={{
                    position: "fixed",
                    bottom: 0,
                    right: 5,
                }}
            >
                <Link href="/smartphone">
                    <Image
                        src="/seeyoubutton.png"
                        alt="seeyou"
                        width={80}
                        height={30}
                    />
                </Link>
            </div>
        </>
    );
}
