import "./globals.css";
import { Navbar } from "./components/Navbar";
import { ThemeProvider } from "../components/ui/theme-provider";

export const metadata = {
  title: "New blog",
  description: "App teste com Next.js",
};

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className="min-h-screen bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main className="max-w-3x3 mx-auto mt-6 p-4">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}

type RootLayoutProps = {
  children: React.ReactNode;
};
