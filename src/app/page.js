import Image from 'next/image'
import {Inter} from 'next/font/google'
import styles from './page.module.css'

import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

const inter = Inter({subsets: ['latin']})

export default function Home() {
    return <main className={styles.main} />
}
