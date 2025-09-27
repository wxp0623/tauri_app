import { ref } from "vue";
import { invoke } from "@tauri-apps/api/core";
import { useRouter } from "vue-router";
import type { ViewMeta, RouteItem } from "../router";
import { inject } from 'vue'

export default class BaseView{
    public ref: any = ref;
    public tauriInvoker = invoke;
    public router = useRouter();

    public showDialog = inject('showDialog') as Function

    public Redirect(route: RouteItem) {
        if (route) {
            route.directTo(this.router);
        }
    }
    constructor(ViewMeta?: ViewMeta) {
              
    }
}
