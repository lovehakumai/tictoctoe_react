import './styles.css';

export default function RootLayout({ children }) {
  return (
    <html lang="ja">
      <body>
        <header>Tic Tac Toe</header>
        {children}
        <footer>@Mafin-tech</footer>
      </body>
    </html>
  );
}
