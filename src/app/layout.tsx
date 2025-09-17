import "../styles/globals.css";

export const metadata = {
  title: "TacTec",
  description: "Revolutionising Football Club Management"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
