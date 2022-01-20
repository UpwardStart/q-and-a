import clsx from "clsx"

const Layout = ({ children, variant, styles }) => (
  <div className={`${variant}-layout`} styles={clsx(styles)}>
    {children}
  </div>
)

export default Layout
