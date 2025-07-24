type TailProps = {
  copyright?: string
}

const Tail = ({copyright}:TailProps) => {
  return (
   <div>
        <p>{copyright}</p>
   </div>
  );

}

export default Tail;