import Header from "./components/header/page";
import Footer from "./components/footer/page";

import "./style/globals.css";

export const metadata = {
  title: "Gogad Granite",
  description: "Specializing in granite cutting and supply, delivering premium quality granite products with precision and excellence.",
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
