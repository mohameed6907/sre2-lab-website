import FacilitiesClient from "./FacilitiesClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research Facilities & Advanced Instrumentation",
  description:
    "Explore the state-of-the-art research facilities, precision instruments, and nanofabrication platforms at SRE² Lab (SBTÜ) led by Dr. Qazi Muhammad Saqib, including LCR meters, electrospinning systems, and potentiostats.",
  alternates: {
    canonical: "https://sre2lab.org.tr/facilities",
  },
  openGraph: {
    title: "Research Facilities & Advanced Instrumentation | SRE² Lab",
    description:
      "Explore the state-of-the-art research facilities, precision instruments, and nanofabrication platforms at SRE² Lab (SBTÜ) led by Dr. Qazi Muhammad Saqib.",
    url: "https://sre2lab.org.tr/facilities",
    images: [
      {
        url: "https://sre2lab.org.tr/Logo/SRE2_LAB_Logo_Primary.png",
        width: 1774,
        height: 561,
        alt: "SRE² Lab Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Research Facilities & Advanced Instrumentation | SRE² Lab",
    description:
      "Explore the state-of-the-art research facilities, precision instruments, and nanofabrication platforms at SRE² Lab (SBTÜ) led by Dr. Qazi Muhammad Saqib.",
    images: ["https://sre2lab.org.tr/Logo/SRE2_LAB_Logo_Primary.png"],
  },
};

export default function FacilitiesPage() {
  return <FacilitiesClient />;
}
