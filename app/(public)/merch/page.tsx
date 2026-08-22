import { MiniNewsletter } from "@/components/site/mini-newsletter";
import { MerchPage } from "@/components/site/pages/merch-page";

export default async function Page() {
  return (
    <>
      <MerchPage />
      <MiniNewsletter />
    </>
  );
}
