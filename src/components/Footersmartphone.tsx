import useWindowSize from "@/hooks/Windowsize";
import { Link, Paper } from "@mui/material";
import Image from "next/image";

export default function Footersmartphone() {
    const [width, height] = useWindowSize();
    return (
        <div
            style={{
                position: "fixed",
                bottom: 30,
                width: "100%",
            }}
        >
            <Paper
                sx={{
                    width: "100%",
                    height: 100,
                    opacity: 1,
                    backgroundColor: "rgba(199, 230, 226, 0.5)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-around",
                }}
            >
                <Link href="https://github.com/Sea10wood">
                    <Image
                        src="/github-mark.png"
                        alt="github-mark"
                        width={90}
                        height={90}
                        style={{ opacity: 1 }}
                    />
                </Link>
                <Link href="https://instagram.com/sea10____?igshid=NTc4MTIwNjQ2YQ==">
                    <Image
                        src="/Instagramlogo.png"
                        alt="Instagramlogo"
                        width={80}
                        height={80}
                        style={{ opacity: 1 }}
                    />
                </Link>

                <Link href="https://twitter.com/10derSea">
                    <Image
                        src="/Twittericonmake.png"
                        alt="twitterlogo"
                        width={80}
                        height={80}
                        style={{ opacity: 1 }}
                    />
                </Link>
                <Link href="about">
                    <Image
                        src="/favicon.ico"
                        alt="favicon"
                        width={100}
                        height={100}
                        style={{ opacity: 1 }}
                    />
                </Link>
            </Paper>
        </div>
    );
}
