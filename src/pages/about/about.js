import { Footer, AboutUs, FooterApp, Redes, Separator } from "@/components";
import { BasicLayout } from "../../layouts";

export default function AboutHome() {
  return (
    <>
      <BasicLayout>
        <Separator />
        <AboutUs />
        <FooterApp />
        <Footer />
      </BasicLayout>
    </>
  );
}
