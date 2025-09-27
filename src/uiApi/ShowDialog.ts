import { h, render } from 'vue'
import GlobalDialog from '../components/GlobalDialog.vue'

let dialogRoot: HTMLElement | null = null

export function showDialog(title: any, component: any, props: Record<string, any> = {}) {
  dialogRoot = document.getElementById('global-dialog-root');
  if (!dialogRoot) {
    return;
  }
  dialogRoot.innerHTML = '';

  // 正确传递 default slot
  const vnode = h(GlobalDialog, {
    title,
    onClose: () => {
      dialogRoot!.innerHTML = '';
    }
  });

  render(vnode, dialogRoot);
}