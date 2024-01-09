import { Inter } from "next/font/google";
import { cookies } from "next/headers";

import { TRPCReactProvider } from "~/trpc/react";
import { CustomNavbar } from "~/modules/Navbar/Navbar";
import { Providers } from "./providers";
import "./globals.css";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
});

export const metadata = {
    title: "Evan Home Care",
    description: "Evan Home Care",
    icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className={`font-sans ${inter.variable}`}>
                <Providers>
                    <TRPCReactProvider cookies={cookies().toString()}>
                        <div className="mb-2">
                            <CustomNavbar />
                        </div>

                        {children}
                    </TRPCReactProvider>
                </Providers>
            </body>
        </html>
    );
}
