import Image from "next/image";
import Hero from "./component/hero";
import Tokenomics from "./component/tokenomics";

import Footer from "./component/footer";
import Roadmap from "./component/roadmap";

export default function Home() {
  return (
    <div className="bg-red-100">
      <Hero />
      <Tokenomics />
    
      <Roadmap />
      <Footer />
    </div>
  );
}
