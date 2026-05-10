import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "TerraViva – Agricoltura Biologica a Reggiolo",
    short_name: "TerraViva",
    description:
      "Azienda agricola biologica e stagionale a Reggiolo, Emilia-Romagna. Dal 1987.",
    start_url: "/",
    display: "standalone",
    orientation: "portrait",
    background_color: "#0d1c10",
    theme_color: "#0d1c10",
    lang: "it",
    categories: ["food", "shopping", "lifestyle"],
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
