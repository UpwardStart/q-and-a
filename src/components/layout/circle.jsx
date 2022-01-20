const Circle = ({ variant, value }) => variant === "fill"
    ? <div  value={value} className="circle-filled"/>
    : <div value={value} className="circle-filled" />

export default Circle
