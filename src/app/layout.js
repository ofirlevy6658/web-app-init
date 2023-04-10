import './globals.css'

export const metadata = {
    title: 'Mitzpe-Yam Omega-XXX',
    description: 'Generated by Vitaly',
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    )
}
