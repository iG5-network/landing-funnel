import Image from 'next/image'
import styles from './brandmark.module.css'
import Link from 'next/link'

const BrandMark = () => {
	return (
		<Link href={'/'}>
			<Image
				className={styles.brandmark}
				alt="brand"
				width={120}
				height={70}
				src={'/brand.svg'}
			/>
		</Link>
	)
}

export default BrandMark
