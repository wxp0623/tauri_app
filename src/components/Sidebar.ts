import { ref, effect } from "vue";
import { RouteUtil, RouteList, type ViewMeta, type RouteItem } from "../router";
import BaseView from "./BaseView";


export  function useSidebar() {
  const viewBase = new BaseView();

  const drawer = ref(true);
  const rail = ref(false);

  const menus: ViewMeta[] = RouteList
  .map((route: RouteItem) => route.meta)
  .filter((meta): meta is ViewMeta => Boolean(meta) && (meta as ViewMeta).showInMenu);

  function onMenuClick(menu: ViewMeta) {
    // 这里可以做路由跳转或其他逻辑
    viewBase.Redirect(RouteUtil[menu.Name || "Home"]);
  }
  return {
    drawer,
    rail,
    menus,
    onMenuClick,
  };
}
