import React from "react";

import Header from '@/componant/header';
import Piller from '@/componant/5pillers';
import Trusted from "@/componant/trustedBy";
import Services from "@/componant/services";
// import Products from "@/componant/products";
import Plans from "@/componant/plan";
import Portfolio from "@/componant/portfolio";
// import BBCVines from "@/componant/bbcVines";
import About from "@/componant/about";
import FAQ from "@/componant/faqs";
import CTA from "@/componant/cta";

export default function Home() {
  return (
    <React.Fragment>
      <Header/>
      <Piller />
      <Trusted />
      <Services />
      {/* <Products /> */}
      <Plans />
      <Portfolio />
      {/* <BBCVines /> */}
      <About />
      <FAQ />
      <CTA />
    </React.Fragment>
  );
}
