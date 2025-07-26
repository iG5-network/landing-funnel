import styles from './mobmenu.module.css'

import Link from 'next/link'

import { PlainGlyph } from '../../glyphs'
import { DropPanel } from '@/lib/ux/patterns/panels'

import { Fragment } from 'react'

import { useState } from 'react'

type MobMenuProps = {
	menu: {
		name: string
		href: string
	}[]
	style?: React.CSSProperties
}

const MobMenu = ({ menu, style }: MobMenuProps) => {
	const [isDropPanelOpen, setIsDropPanelOpen] = useState(false)
	const [activeMenu, setActiveMenu] = useState<string | null>(null)

	const MenuHandler = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault()
		setActiveMenu(e.currentTarget.textContent)
		setIsDropPanelOpen(!isDropPanelOpen)
	}

	return (
		<Fragment>
			<ul style={style} className={styles.mobmenu}>
				{menu.map((anchor, i) => (
					<Link
						style={{
							display: 'flex',
							alignItems: 'center',
							cursor: 'pointer',
						}}
						onClick={MenuHandler}
						key={i}
						href={anchor.href}>
						{anchor.name}
						<PlainGlyph
							style={{
								marginLeft: '4px',
								cursor: 'pointer',
							}}
							src={
								isDropPanelOpen && activeMenu === anchor.name
									? '/chevron-up.svg'
									: '/chevron-down.svg'
							}
							w={16}
							h={16}
							alt="drop-icon"
						/>
					</Link>
				))}
			</ul>
			{isDropPanelOpen && <DropPanel />}
		</Fragment>
	)
}

export default MobMenu
