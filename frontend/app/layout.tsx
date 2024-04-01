import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import Footer from "@/components/Footer";
import NavBar from '@/components/NavBar';
import { ToasterProvider } from "@/components/ToastProvider";
import { AuthProvider } from "@/app/lib/AuthProvider";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <html lang="en">
      <AuthProvider>
      <ToasterProvider />
        <body className={`${inter.className} antialiased`}>
          <NavBar />
            {children}
          <Footer />
          </body>
      </AuthProvider>
    </html>
  );
}
