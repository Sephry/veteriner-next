import "@styles/globals.css";
import Nav from "@components/Nav";
import Provider from "@components/Provider";

export const metadata = {
  title: "Vet Vet",
  description:
    "BulutVet veteriner klinik yazılımı ile hastalarınızı kolayca yönetin.Veteriner takip programımız ile hasta takibi,pet takibi, aşı ve stok takibi yapabilirsiniz.",
  icons: {
    icon: "/assets/images/logo.svg",
  },
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className="main">
            <div className="gradient" />
          </div>

          <main className="app">
            <Nav />
            {children}
          </main>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;
