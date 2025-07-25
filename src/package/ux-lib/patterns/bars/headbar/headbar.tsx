'use client'

import styles from './headbar.module.css'
import { LabelGlyph } from '@/package/ux-lib/components/glyphs'
import { HookTrigger } from '@/package/ux-lib/components/triggers'
import { BrandMark } from '@/package/ux-lib/components/marks'
import { DropMenu } from '@/package/ux-lib/components/menus'

import { HeadbarSettings } from '@/config/settings'

const Headbar = () => {
	return (
		<div className={styles.headbar}>
			<BrandMark />
			<DropMenu menu={HeadbarSettings.menu} />
			<div className={styles.ctrls}>
				<HookTrigger label="Login" />
				<LabelGlyph {...HeadbarSettings.labelGlyph} />
			</div>
		</div>
	)
}

export default Headbar
