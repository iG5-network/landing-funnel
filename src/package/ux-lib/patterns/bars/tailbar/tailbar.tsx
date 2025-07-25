type TailbarProps = {
  copyright?: string
}

const Tailbar = ({copyright}:TailbarProps) => {
  return (
   <div>
        <p>{copyright}</p>
   </div>
  );

}

export default Tailbar;