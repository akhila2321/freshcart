// import node module libraries
import { Inter } from "next/font/google";
import "styles/theme.scss";
import { Toaster } from "react-hot-toast";

//import custom components
import ClientWrapper from "components/common/ClientWrapper";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientWrapper>
          {children}
          <Toaster />
        </ClientWrapper>
      </body>
    </html>
  );
};

export default RootLayout;
