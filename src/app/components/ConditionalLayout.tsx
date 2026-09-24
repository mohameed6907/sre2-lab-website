"use client";

import Header from "./Header";
import Footer from "./Footer";

export default function ConditionalLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <Header />
            <main className="flex-grow pt-[72px]">{children}</main>
            <Footer />
        </>
    );
}