import Image from 'next/image'
import styles from './brandmark.module.css'
import Link from 'next/link'

const BrandMark = () => {
	return (
		<Link href={'/'}>
			<Image
				className={styles.brandmark}
				alt="brand"
				width={240}
				height={48}
				src={'/brand.svg'}
			/>
		</Link>
	)
}

export default BrandMark
