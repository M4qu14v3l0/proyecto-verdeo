'use client';
import useWindowSize from "@rooks/use-window-size";
import NavSmall from "./NavSmall";
import NavFull from "./NavFull";
import { useEffect, useState } from "react";


export default function Header() {
    const [ outerWidtha , setOuterWitha ] = useState();
    const { outerWidth } = useWindowSize();
    useEffect ( () => {
        setOuterWitha(outerWidth)
    }, [outerWidth])
    return (
        <header>
            {outerWidtha >= 1024 ? <NavFull /> : <NavSmall />}
        </header>
    );
}