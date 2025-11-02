import { Montserrat } from "next/font/google"
import Script from 'next/script'
import NextTopLoader from 'nextjs-toploader';
// import { Analytics } from "@vercel/analytics/next"
import "@/style/globals.css";


const montserrat = Montserrat()

//file add
import Nav from "@/componant/nav";
import Footer from "@/componant/footer";



export const metadata = {
  title: {
    template: "%s | BBC - Bengal Business Committee",
    default: "BBC - Bengal Business Committee",
  },
  description: "We're not just another agency. We're a committee of Bengal's top tech and marketing experts with a single mission: to provide local businesses with the world-class tools they need to win. We believe in execution over talk, and partnership over contracts.",
  canonical: "https://staging.straxcel.com/",
  sitename: "Yia Yia's Baklava",
  openGraph: {
    url: 'https://staging.straxcel.com',
    title: "BBC - Bengal Business Committee",
    type: 'website',
    siteName: "BBC - Bengal Business Committee",
    description: "We're not just another agency. We're a committee of Bengal's top tech and marketing experts with a single mission: to provide local businesses with the world-class tools they need to win. We believe in execution over talk, and partnership over contracts.",
    images: [
      {url: "https://staging.straxcel.com/32x32.webp", alt: "straxcel | Logo", type: 'image/webp', sizes:"32x32", fetchPriority: "auto"},
      {url: "https://staging.straxcel.com/192x192.webp", alt: "straxcel | Logo", type: 'image/webp', sizes:"192x192", fetchPriority: "auto"}
    ],
  },
  twitter:{
    card: "BBC - Bengal Business Committee",
    title: "BBC - Bengal Business Committee",
    creator: "Subham Sarkar",
    description: "We're not just another agency. We're a committee of Bengal's top tech and marketing experts with a single mission: to provide local businesses with the world-class tools they need to win. We believe in execution over talk, and partnership over contracts.",
    images: [
      {url: "https://staging.straxcel.com/32x32.webp", alt: "straxcel | Logo", type: 'image/webp', sizes:"32x32", fetchPriority: "auto"},
      {url: "https://staging.straxcel.com/192x192.webp", alt: "straxcel | Logo", type: 'image/webp', sizes:"192x192", fetchPriority: "auto"}
    ],
  },
  icons:{
    icon:[
      {url: '/32x32.webp', type: "image/webp", sizes:"32x32", rel:"icon", fetchPriority: "auto"},
      {url: '/192x192.webp', type: "image/webp", sizes:"192x192", rel:"icon", fetchPriority: "auto"},
    ],
    shortcut: {url: '/192x192.webp', type: "image/webp", fetchPriority: "auto"},
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  minimumScale: 1,
  userScalable: false,
  // Also supported but less commonly used
  // 
}
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <script id="tag_manager_index" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_MeasurementId_ga}`} /> */}
        {/* <Script id="tag_manager" dangerouslySetInnerHTML={{ __html: `window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', '${process.env.NEXT_PUBLIC_MeasurementId_ga}'); `}} /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0,minimum-scale=1.0"/> */}
        {/* <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Home - Yia Yia&#039;s Baklava" />
        <meta property="og:description" content="A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped" />
        <meta property="og:url" content="https://straxcel.com/" />
        <meta property="og:site_name" content="Yia Yia\&#039;s Baklava" />
        <meta property="og:updated_time" content="2025-06-23T13:45:26+00:00" />
        <meta property="og:image" content="https://straxcel.com/wp-content/uploads/2025/02/unnamed.webp" />
        <meta property="og:image:secure_url" content="https://straxcel.com/wp-content/uploads/2025/02/unnamed.webp" />
        <meta property="og:image:width" content="601" />
        <meta property="og:image:height" content="613" />
        <meta property="og:image:alt" content="Home" />
        <meta property="og:image:type" content="image/webp" />
        <meta property="article:published_time" content="2023-12-08T12:39:44+00:00" />
        <meta property="article:modified_time" content="2025-06-23T13:45:26+00:00" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home - Yia Yia&#039;s Baklava" />
        <meta name="twitter:description" content="A modern twist on a beloved classic. Our Chocolate Hazelnut Baklava features layers of crispy phyllo, a fragrant blend of cinnamon and walnuts, all enveloped" />
        <meta name="twitter:image" content="https://straxcel.com/wp-content/uploads/2025/02/unnamed.webp" /> */}
      </head>
      <body className={`${montserrat.className} antialiased overflow-x-hidden scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-sky-500 scrollbar-corner-sky-800 scrollbar-track-sky-200`}>
        <NextTopLoader   color="#9810fa"   initialPosition={0.08}   crawlSpeed={200}   height={3}   crawl={true}   showSpinner={false}   easing="ease"   speed={200}   shadow="0 0 10px #f1a4c7,0 0 5px #f1a4c7" />
        <Nav />
        {children}
        {/* <Analytics /> */}
        <Script id="browser-update" dangerouslySetInnerHTML={{ __html: `var $buoop = {required:{e:-4,f:-3,o:-3,s:-1,c:-3},insecure:true,api:2025.06 }; function $buo_f(){ var e = document.createElement("script"); e.src = "https://browser-update.org/update.min.js"; document.body.appendChild(e); }; try {document.addEventListener("DOMContentLoaded", $buo_f,false)} catch(e){window.attachEvent("onload", $buo_f)}` }} />
        <Footer />
      </body>
    </html>
  );
}