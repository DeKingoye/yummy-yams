
import { RouterName } from './RouterNames';
import type { RouteObject } from 'react-router-dom';
import Home from '../../pages/default/home/Home'; 
import Game from '../../pages/default/game/Game';
import Winners from '../../pages/default/game/Winners';



export const defaultRouteConfig: RouteObject[] = [
  {
    path: RouterName.HOME.path,
    element: <Home />,
  },
  {
    path: RouterName.GAME.path,
    element: <Game />,
  },
  {
    path: RouterName.WINNERS.path,
    element: <Winners />,
  },

];
