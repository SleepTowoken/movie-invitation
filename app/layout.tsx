import type { Metadata } from "next";
import { Noto_Serif_SC } from "next/font/google";
import "./globals.css";

const notoSerifSC = Noto_Serif_SC({
  variable: "--font-noto-serif-sc",
  display: "swap",
  preload: false,
  fallback: ["Songti SC", "STSong", "serif"],
});

export const metadata: Metadata = {
  title: "有一场电影，想邀请你一起看",
  description: "一封关于《去你的岛》的电影邀请。",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-CN" className={`${notoSerifSC.variable} h-full antialiased`}>
      <body className="min-h-full">
        <span
          className="hidden"
          aria-hidden="true"
          dangerouslySetInnerHTML={{
            __html:
              "<!-- THESIS: a watercolor cinema keepsake, not a generic romance card. OWN-WORLD: island-sky blue fields, vivid water-blue controls, golden petals, apricot warmth, and soft-pink haze on pale paper. STORY: open a private invitation, accept the film, continue into a moonlit walk, then keep the promise ticket. FIRST VIEWPORT: one large watercolor-blue envelope floats at center with a gold seal; the only action is opening it. FORM: poster-led watercolor correspondence, chosen approved direction; seed island-watercolor-ticket. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->",
          }}
        />
        {children}
      </body>
    </html>
  );
}
