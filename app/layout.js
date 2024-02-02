
import './globals.css'



export const metadata = {
  title: 'Whatsapp web clone',
  description: 'designed by soleil00',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="soleil w-[100%] h-[100vh] "><div>{children}</div></body>
    </html>
  )
}
