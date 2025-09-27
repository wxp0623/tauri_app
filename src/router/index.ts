import type { AnymatchFn } from 'vite';
import { createRouter, createWebHistory, type RouteRecordRaw, type RouteMeta, type Router } from 'vue-router'

export type ViewMeta = RouteMeta & {
  title?: string;
  icon?: string;
  Name?: string;
  description?: string;
  [key: string]: any;
}

export type RouteItem = RouteRecordRaw & {
  name: string
  path: string
  component?: any;
  children?: RouteItem[]
  meta?: ViewMeta;
  props?: any
  beforeEnter?: any
  afterEnter?: any
  beforeLeave?: any
  afterLeave?: AnymatchFn
  directTo: (router: Router) => void;
}

// 推荐用绝对路径 glob
const modules = import.meta.glob('/src/views/*.vue')

// 动态生成路由
const routesPromise = Promise.all(
  Object.keys(modules).map(async (path) => {
    const mod = await modules[path]()
    console.log("mod", mod);
    
    const name = path.match(/\/([^\/]+)\.vue$/)?.[1] || 'home';
    const modTyped = mod as { meta: ViewMeta };
    const routePath = name === "Home" ? "/" : `/${name.toLowerCase()}`;
    RouteUtil[name] = {
      name,
      path: routePath,
      component: modules[path],
      meta: modTyped.meta,
      directTo: (router: Router) => {
        router.push(routePath);
      }
    };
    return RouteUtil[name]
  })
);
export const RouteList: RouteItem[] = [];

export const RouteUtil: { [key: string]: RouteItem } = {};

routesPromise.then((routes) => {
  RouteList.push(...routes );
  return RouteUtil;

});


export default routesPromise.then((routes) => {
  return createRouter({
    history: createWebHistory(),
    routes,
  });
});