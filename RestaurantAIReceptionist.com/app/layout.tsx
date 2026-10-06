import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "RestaurantAIReceptionist.com | Never Miss a Restaurant Call",
  description: "AI-powered phone answering for restaurants in Sacramento and surrounding areas.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
