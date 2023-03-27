'use client';
import FooterSmall from "./FooterSmall";
import FooterFull from "./FooterFull";

export default function Footer() {
    return (
        <div className="mt-auto">
            <FooterFull />
            <FooterSmall />
        </div>
    )
}