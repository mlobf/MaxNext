import classes from "./Layout.module.css"
import MainNavegation from "./MainNavegation"

function Layout(props) {
    return (
        <div>
            <MainNavegation />
            <main className={classes.main}>{props.children}</main>
        </div>
    )
}

export default Layout
