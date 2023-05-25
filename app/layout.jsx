import "@styles/globals.css";
import Nav from "@components/Nav";

export const metadata = {
  title: "Vet Vet",
  description:
    "BulutVet veteriner klinik yazılımı ile hastalarınızı kolayca yönetin.Veteriner takip programımız ile hasta takibi,pet takibi, aşı ve stok takibi yapabilirsiniz.",
};

function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  );
}

export default RootLayout;
