'use client';
import useWindowSize from "@rooks/use-window-size";
import FooterSmall from "./FooterSmall";
import FooterFull from "./FooterFull";
import { useEffect, useState } from "react";


export default function Footer() {
    const [ outerWidtha , setOuterWitha ] = useState();
    const { outerWidth } = useWindowSize();
    useEffect ( () => {
        setOuterWitha(outerWidth)
    }, [outerWidth])
    return (
        <div className="mt-auto">
            {outerWidtha >= 1024 ? <FooterFull /> : <FooterSmall />}
        </div>
    )
}