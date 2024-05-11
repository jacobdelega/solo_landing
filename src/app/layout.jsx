import { Bricolage_Grotesque } from "next/font/google";
import "./globals.css";

const bricolage = Bricolage_Grotesque({ weight: ['400', '500', '600', '700'], subsets: ["latin"] });

export const metadata = {
    title: "Missy Hour Tracker",
    description: "Made by Jacob",
};

export default function RootLayout({ children }) {
    return (
        <html className="scroll-smooth" lang='en'>
            <body className={bricolage.className}>{children}</body>
        </html>
    );
}
