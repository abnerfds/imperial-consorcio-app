import Advantage from "./components/Advantage/Advantage";
import InitialPage from "./components/InitialPage/InitialPage";
import StepsHowItWorks from "./components/StepsHowItWorks/StepsHowItWorks";
import WhatIs from "./components/WhatIs/WhatIs";

export default function Home() {
  return (
    <section>
      <InitialPage />
      <Advantage />
      <WhatIs />
      <StepsHowItWorks />
    </section>
  )
}
