import styles from './head.module.css';
import Image from 'next/image'; 
import Icon from '../../comp/ico/ico';
import { link } from 'fs';


type HeadProps = {
  brand?: string
}

const renderCtrls = 
      <div className={styles.ctrl}>
        <Icon w={32} h={32} alt='icon' src='/access.svg'/>
        <p style={{color:'white'}}>Access</p>
      </div>
    

    const links = [
      {
        name: 'Ecosystem',
        href: '/docs'
      },
         {
        name: 'Foundation',
        href: '/build'
      },
      {
        name: 'Resources',
        href: '/blog'
      },
    ]
    const renderMenu = 
   <ul className={styles.menu}>
   {links.map((link, index) => (
     <li key={index}>
       <a href={link.href}>
         {link.name}
       </a>
     </li>  ))
     }
   </ul>

const Head = ({brand}:HeadProps) => {
  return (
   <div className={styles.head}>
    <Image alt='brand' width={240} height={48} src={'/brand.svg'}/>
    {renderMenu}
    <div className={styles.ctrls}>
      <button>Build</button>
       {renderCtrls}
    </div>
   </div>
  );

}

export default Head;