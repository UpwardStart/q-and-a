
import clsx from "clsx"

const Container = ({ children, color }) => (
  <div className={`container-${clsx(color)} container`}>
    {children}
  </div>
)

export default Container
