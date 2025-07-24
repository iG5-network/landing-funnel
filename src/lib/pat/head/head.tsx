import styles from './head.module.css';
import Image from 'next/image'; 
import Icon from '../../comp/ico/ico';


type HeadProps = {
  brand?: string
}

const renderCtrls = 
      <div>
        <Icon w={32} h={32} alt='icon' src='/access.svg'/>
        <p style={{color:'white'}}>Access</p>
      </div>
    


const Head = ({brand}:HeadProps) => {
  return (
   <div className={styles.head}>
    <Image alt='brand' width={120} height={120} src={'/brand.svg'}/>
    <button>Build</button>
    {renderCtrls}
   </div>
  );

}

export default Head;