import { routes } from "@/data/routes";
import { siteConfig } from "@/data/site";

export function LocalBusinessJsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "TaxiService"],
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: siteConfig.baseUrl,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Thái Bình",
      addressCountry: "VN",
    },
    areaServed: siteConfig.serviceArea.map((name) => ({ "@type": "Place", name })),
    serviceType: ["Xe ghép", "Xe tiện chuyến", "Bao xe 5 chỗ", "Bao xe 7 chỗ"],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Tuyến xe Nhà Xe Vũ Phú",
      itemListElement: routes.map((route) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: route.title,
          description: route.description,
        },
      })),
    },
  };

  return <script dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} type="application/ld+json" />;
}
