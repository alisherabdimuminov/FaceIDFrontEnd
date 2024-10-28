import { a as buildAssetsURL } from '../routes/renderer.mjs';
import { defineComponent, mergeProps, unref, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent } from 'vue/server-renderer';
import { LucidePartyPopper } from 'lucide-vue-next';
import { u as useHead } from './server.mjs';
import 'vue-bundle-renderer/runtime';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-the-mask';

const _imports_0 = "" + buildAssetsURL("passed.GwM5pNud.gif");
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "passed",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Passed"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-full h-screen flex flex-col gap-10 items-center justify-center" }, _attrs))}><img class="w-32 h-32"${ssrRenderAttr("src", _imports_0)} alt=""><p class="flex items-center gap-3 text-2xl text-cyan-500 font-bold">`);
      _push(ssrRenderComponent(unref(LucidePartyPopper), { size: 30 }, null, _parent));
      _push(` Davomatdan o&#39;tdingiz</p></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/passed.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=passed-FQD_ZsIa.mjs.map
