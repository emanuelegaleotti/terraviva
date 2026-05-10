/**
 * JSON-LD Structured Data for TerraViva.
 *
 * Includes: WebSite · Organization · LocalBusiness · BreadcrumbList
 *
 * Before going live, update every value marked with "TODO:" with
 * the real business information.
 */

const BASE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.terraviva-reggiolo.it";

const schema = {
  "@context": "https://schema.org",
  "@graph": [
    // ── WebSite ────────────────────────────────────────────────
    {
      "@type": "WebSite",
      "@id": `${BASE_URL}/#website`,
      url: BASE_URL,
      name: "TerraViva",
      description:
        "Agricoltura biologica e stagionale a Reggiolo, Emilia-Romagna. Dal 1987.",
      inLanguage: "it-IT",
      publisher: { "@id": `${BASE_URL}/#organization` },
    },

    // ── Organization ───────────────────────────────────────────
    {
      "@type": "Organization",
      "@id": `${BASE_URL}/#organization`,
      name: "TerraViva",
      alternateName: "TerraViva Reggiolo",
      url: BASE_URL,
      foundingDate: "1987",
      description:
        "Azienda agricola biologica e stagionale fondata nel 1987 a Reggiolo, Emilia-Romagna. Coltiviamo la terra con rispetto per la natura e i suoi cicli naturali.",
      logo: {
        "@type": "ImageObject",
        "@id": `${BASE_URL}/#logo`,
        url: `${BASE_URL}/opengraph-image.png`,
        width: "1200",
        height: "630",
        caption: "TerraViva – Agricoltura Biologica Reggiolo",
      },
      image: { "@id": `${BASE_URL}/#logo` },
      address: {
        "@type": "PostalAddress",
        // TODO: replace with actual street address
        streetAddress: "",
        addressLocality: "Reggiolo",
        addressRegion: "RE",
        postalCode: "42046",
        addressCountry: "IT",
      },
      // TODO: add real phone/email/social URLs
      // telephone: "+39 0522 000000",
      // email: "info@terraviva-reggiolo.it",
      areaServed: [
        { "@type": "City", name: "Reggiolo" },
        { "@type": "AdministrativeArea", name: "Reggio Emilia" },
        { "@type": "AdministrativeArea", name: "Emilia-Romagna" },
      ],
      knowsAbout: [
        "Agricoltura biologica",
        "Prodotti stagionali",
        "Coltivazione sostenibile",
        "Filiera corta",
        "Km zero",
        "Ortaggi biologici",
        "Frutta biologica",
      ],
      // TODO: add Google Business, Facebook, Instagram URLs
      sameAs: [],
    },

    // ── LocalBusiness ──────────────────────────────────────────
    {
      "@type": "LocalBusiness",
      "@id": `${BASE_URL}/#localbusiness`,
      name: "TerraViva",
      alternateName: "TerraViva Reggiolo",
      description:
        "Azienda agricola biologica e stagionale a Reggiolo. Dal 1987 coltiviamo prodotti freschi di qualità nel rispetto della terra e dei cicli naturali.",
      url: BASE_URL,
      image: [`${BASE_URL}/opengraph-image.png`],
      priceRange: "€",
      currenciesAccepted: "EUR",
      paymentAccepted: "Cash",
      // TODO: replace with actual street address and phone
      address: {
        "@type": "PostalAddress",
        streetAddress: "",
        addressLocality: "Reggiolo",
        addressRegion: "RE",
        postalCode: "42046",
        addressCountry: "IT",
      },
      // TODO: replace with precise GPS coordinates of the farm
      geo: {
        "@type": "GeoCoordinates",
        latitude: 44.9183,
        longitude: 10.7961,
      },
      // TODO: replace with Google Maps link to the actual location
      hasMap: "https://maps.google.com/?q=Reggiolo+RE+Italy",
      // TODO: update with actual opening hours
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "08:00",
          closes: "18:00",
        },
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: "Saturday",
          opens: "08:00",
          closes: "13:00",
        },
      ],
      foundingDate: "1987",
      areaServed: ["Reggiolo", "Reggio Emilia", "Emilia-Romagna"],
      parentOrganization: { "@id": `${BASE_URL}/#organization` },
    },

    // ── BreadcrumbList ─────────────────────────────────────────
    {
      "@type": "BreadcrumbList",
      "@id": `${BASE_URL}/#breadcrumb`,
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: BASE_URL,
        },
      ],
    },
  ],
};

export function JsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
