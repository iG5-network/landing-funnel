import styles from './head.module.css';
import Image from 'next/image'; 


type HeadProps = {
  brand?: string
}

const Head = ({brand}:HeadProps) => {
  return (
   <div className={styles.head}>
    <Image alt='brand' width={120} height={120} src={'/brand.svg'}/>
        <button>Build</button>
        <button>Access</button>
   </div>
  );

}

export default Head;