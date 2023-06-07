import useWindowSize from "@/hooks/Windowsize";
import { Link, Paper } from "@mui/material";
import Image from "next/image";

export default function Footerweb() {
    const [width, height] = useWindowSize();

    return (
        <div style={{ position: "fixed", bottom: 10, right: 0, width: "100%" }}>
            <Paper
                sx={{
                    width: width >= 450 ? 450 : "100%",
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
                        width={width >= 450 ? 80 : 60}
                        height={width >= 450 ? 80 : 60}
                        style={{ opacity: 1 }}
                    />
                </Link>
                <Link href="https://twitter.com/10derSea">
                    <Image
                        src="/Twittericonmake.png"
                        alt="twitterlogo"
                        width={width >= 450 ? 80 : 60}
                        height={width >= 450 ? 80 : 60}
                        style={{ opacity: 1 }}
                    />
                </Link>
                <Image
                    src="/favicon.ico"
                    alt="favicon"
                    width={width >= 450 ? 100 : 80}
                    height={width >= 450 ? 100 : 80}
                    style={{ opacity: 1 }}
                />
            </Paper>
        </div>
    );
}
