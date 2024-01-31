import { Route , Switch } from "react-router-dom";

import AllMeetupsPage from "./component/AllMeetup";
import NewMeetupPage from "./component/NewMeetup";
import FavoritesPage from "./component/Favorites";
import Layout from './component/layout/Layout';

function App() {
    return (
      <Layout>
        <Switch>  
          <Route path='/' exact>
            <AllMeetupsPage />
          </Route>
          <Route path='/new-meetup'>
            <NewMeetupPage />
          </Route>
          <Route path='/favorites'>
            <FavoritesPage />
          </Route>
        </Switch>  

     </Layout>
  );  
}

export default App;