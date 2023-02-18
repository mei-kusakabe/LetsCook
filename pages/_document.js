import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html data-theme="emerald" lang="en">
      <Head />
      <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
      <body >
        <Main />
        <NextScript />
        <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script>
      </body>
    </Html>
  )
}
