import Image from 'next/image'; 

type IconProps = {
    src: string;
    w:number;
    h:number;
    alt:string;
}

const Icon = ({src,w,h,alt}:IconProps) => {
    return (
        <Image alt={alt} width={w} height={h} src={src} />
    )  
}
export default Icon;