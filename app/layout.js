import { Montserrat, Roboto } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  weight: ["800"],
  subsets: ["latin"],
  variable: "--font-heading",
});

const roboto = Roboto({
  weight: ["400"],
  subsets: ["latin"],
  variable: "--font-body",
});

export const metadata = {
  title: "Adarshini TVS | Authorized TVS Bike Showroom & Service Center",
  description:
    "Adarshini TVS is an authorized TVS Motor showroom offering the latest TVS bikes, scooters, test rides, genuine service, accessories, and easy finance options. Visit us for the best deals on TVS vehicles.",
  keywords: [
    "Adarshini TVS",
    "TVS showroom",
    "TVS bike showroom",
    "TVS scooters",
    "TVS motorcycles",
    "TVS service center",
    "TVS test ride",
    "TVS finance offers",
    "TVS dealer"
  ],
  openGraph: {
    title: "Adarshini TVS",
    description:
      "Explore the complete range of TVS bikes and scooters at Adarshini TVS. Book test rides, service appointments, and get exciting offers today.",
    type: "website",
    siteName: "Adarshini TVS"
  },
  robots: {
    index: true,
    follow: true
  }
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${montserrat.variable} ${roboto.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
