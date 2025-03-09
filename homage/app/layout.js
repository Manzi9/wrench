import "./globals.css";

export const metadata = {
  title: "Homage - Innovation Reimagined",
  description:
    "Experience the perfect blend of design and functionality with our premium products and services.",
  keywords: ["design", "innovation", "technology", "premium", "modern"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body>{children}</body>
    </html>
  );
}
