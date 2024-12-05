import type { Metadata } from "next";
import "@/assets/scss/style.scss";

export const metadata: Metadata = {
  title: "ART GUIDE RUN | 아트가이드런",
  description: "ART GUIDE RUN | 아트가이드런",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <div id="root_layout">
          <div className="root_container">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
