'use client'

import styles from './headbar.module.css'
import { LabelGlyph } from '@/lib/ux/components/glyphs'
import { HookTrigger } from '@/lib/ux/components/triggers'
import { BrandMark } from '@/lib/ux/components/marks'
import { DropMenu } from '@/lib/ux/components/menus'

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
