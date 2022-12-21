import config from '~/config';

import Home from '~/pages/Home';
import Covid from '~/pages/Covid';
import Blog from '~/pages/Blog';
import BlogDetail from '~/pages/BlogDetail/BlogDetail';
import Timer from '~/pages/Timer';
import Todo from '~/pages/Todo';
import Secret from '~/pages/Secret';

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.covid, component: Covid },
    { path: config.routes.blog, component: Blog },
    { path: config.routes.blogDetail, component: BlogDetail },
    { path: config.routes.timer, component: Timer },
    { path: config.routes.todo, component: Todo },
    { path: config.routes.secret, component: Secret },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
