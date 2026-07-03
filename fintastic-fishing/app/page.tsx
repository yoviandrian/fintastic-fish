import Hero from "@/components/Hero";
import Features from "@/components/Features";
import PricingPackages from "@/components/PricingPackages";
import EquipmentGrid from "@/components/EquipmentGrid";
import HowToRent from "@/components/HowToRent";
import InquiryForm from "@/components/InquiryForm";
import LocationSection from "@/components/LocationSection";
import GoogleReviews from "@/components/GoogleReviews";
import FAQSection from "@/components/FAQSection";
import WaveDivider from "@/components/WaveDivider";
import { faqs } from "@/lib/data";

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <Hero />
      <WaveDivider toColor="#F7FAF9" />
      <Features />
      <PricingPackages />
      <EquipmentGrid />
      <HowToRent />

      <section className="bg-sand-50 py-16 sm:py-20">
        <div className="mx-auto max-w-xl px-4 sm:px-6">
          <InquiryForm />
        </div>
      </section>

      <LocationSection />
      <GoogleReviews />
      <FAQSection />
    </>
  );
}
