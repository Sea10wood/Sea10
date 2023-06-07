import Image from "next/image";
import useWindowSize from "../hooks/Windowsize";

import { Button } from "@mui/material";
import Link from "next/link";

export default function Home() {
    const [width, height] = useWindowSize();
    return (
        <>
            <Image
                src="/sea10back.png"
                alt="sea10back"
                width={width}
                height={height}
            />

            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                }}
            >
                <Link href="/smartphone">
                    <Button>スマートフォンの方はこちら</Button>
                </Link>
                <Link href="/smartphone">
                    <Button>PC・タブレットの方はこちら</Button>
                </Link>
            </div>
        </>
    );
}
