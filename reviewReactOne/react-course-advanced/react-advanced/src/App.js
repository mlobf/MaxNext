import { Route, Switch } from "react-router-dom"
import NewMeetupPage from "./pages/NewMeetup"
import AllMeetupsPage from "./pages/AllMeetups"
import FavoritesPage from "./pages/Favorites"
import MainNavegation from "./components/layout/MainNavegation"

function App() {
    return (
        <div>
            <MainNavegation />
            <Switch>
                <Route path="/" exact={true}>
                    <AllMeetupsPage />
                </Route>
                <Route path="/new-meetup">
                    <NewMeetupPage />
                </Route>
                <Route path="/favorites">
                    <FavoritesPage />
                </Route>
            </Switch>
        </div>
    )
}

export default App
