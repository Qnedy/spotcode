import React from 'react';
import HomeScreen from './screen/home/index';
import AlbumScreen from './screen/album/index';
import DiscoveryScreen from './screen/discovery/index';
import FavoritesScreen from './screen/favorites/index';
import SearchScreen from './screen/search/index';

import { Switch, Route } from 'react-router-dom';

const Routes = () => (
    <Switch>
        <Route exact path="/" component={HomeScreen} />
        <Route exact path="/album/:id" component={AlbumScreen} />
        <Route exact path="/discovery" component={DiscoveryScreen} />
        <Route exact path="/favorites" component={FavoritesScreen} />
        <Route exact path="/search" component={SearchScreen} />
    </Switch>
);

export default Routes;