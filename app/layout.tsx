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
              "<!-- THESIS: a private cinema letter, not a generic romantic card. OWN-WORLD: mist-blue paper, violet ink, precise envelope geometry. STORY: open, choose, walk home, remember. FIRST VIEWPORT: one floating sealed envelope and a quiet prompt. FORM: cinematic correspondence / approved-plan. FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, and DESIGN.md -->",
          }}
        />
        {children}
      </body>
    </html>
  );
}
