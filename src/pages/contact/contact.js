import { Footer, Contact, Separator, Redes } from "@/components";
import { BasicLayout } from "../../layouts";

export default function ContactHome() {
  return (
    <>
      <BasicLayout>
        <Separator />
        <Contact />

        <Footer />
      </BasicLayout>
    </>
  );
}
