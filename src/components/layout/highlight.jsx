const Highlight = ({ children, variant }) => {
  if (variant === "bold") return <span className="highlight-strong">{children}</span>
  if(variant === "emphasis") return  <span className={"highlight"}>{children}</span>
}

export default Highlight
