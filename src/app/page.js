import {Roboto} from 'next/font/google'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const roboto = Roboto({
    weight: ['400', '500', '600', '700'],
    style: ['normal', 'italic'],
})

// const inter = Inter({subsets: ['latin']})

export default function Home() {
    return <main className={roboto.className} />
}
