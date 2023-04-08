'use client';
import NavSmall from "./NavSmall";
import NavFull from "./NavFull";


export default function Header() {
    return (
        <header className="z-90">
            <NavFull />
            <NavSmall />
        </header>
    );
}