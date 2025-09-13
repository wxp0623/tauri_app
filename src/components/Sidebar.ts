import { ref } from "vue";
import { useRouter } from "vue-router";

export function useSidebar() {
  const drawer = ref(true);
  const rail = ref(false);
  const router = useRouter();

  const menus = [
    { title: "首页", icon: "mdi-home", path: "/" },
    { title: "创建", icon: "mdi-plus-box", path: "/create" },
    // 你可以根据需要添加更多菜单项
  ];

  function onMenuClick(menu: { title: string; icon: string; path: string }) {
    console.log("菜单点击:", menu);
    // 这里可以做路由跳转或其他逻辑
    router.push(menu.path);
  }
  return {
    drawer,
    rail,
    menus,
    onMenuClick,
  };
}
