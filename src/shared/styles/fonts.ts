import localFont from "next/font/local";

export const PelakFA = localFont({
  src: [
    {
      path: "../../../public/font/IRANSansWeb(FaNum).woff2",
      weight: "400",
    },
    {
      path: "../../../public/font/PelakFA-Black.woff2",
      weight: "900",
    },
    {
      path: "../../../public/font/PelakFA-Bold.woff2",
      weight: "700",
    },
    {
      path: "../../../public/font/PelakFA-ExtraBold.woff2",
      weight: "800",
    },
    {
      path: "../../../public/font/PelakFA-light.woff2",
      weight: "300",
    },
    {
      path: "../../../public/font/PelakFA-Medium.woff2",
      weight: "500",
    },
    {
      path: "../../../public/font/PelakFA-Regular.woff2",
      weight: "400",
    },
    {
      path: "../../../public/font/PelakFA-SemiBold.woff2",
      weight: "600",
    },
    {
      path: "../../../public/font/PelakFA-Thin.woff2",
      weight: "100",
    },
  ],
  variable: "--font-Pelak",
});
