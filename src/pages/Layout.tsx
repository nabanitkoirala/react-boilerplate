
interface LayoutProps {
    children: React.ComponentType<any>
}




const Layout: React.FC<LayoutProps> = ({ children }) => {
    return (
        <div>
            <div>This is final data</div>
            <div>{children}</div>
        </div>
    )
}

export default Layout