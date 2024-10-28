import { _ as _sfc_main$1, a as _sfc_main$2 } from './Input-Cj1luoh3.mjs';
import { defineComponent, ref, mergeProps, unref, withCtx, createTextVNode, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { LucideFileWarning } from 'lucide-vue-next';
import { u as useToast } from './index-DI-F3f8f.mjs';
import { u as useHead, n as navigateTo, b as useRuntimeConfig } from './server.mjs';
import { _ as _sfc_main$3 } from './Button-kc8BLKv4.mjs';
import 'radix-vue';
import './index-CmPE4-O1.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import '@vueuse/core';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-the-mask';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Location"
    });
    useToast();
    const config = useRuntimeConfig();
    ref(0);
    ref(0);
    const login = ref(false);
    const errorText = ref("");
    const passport = ref("");
    ref(false);
    const loginWithPassport = async () => {
      let response = await $fetch(config.public.api + "passport/", {
        method: "POST",
        body: JSON.stringify({
          passport: passport.value
        }),
        headers: {
          "Content-Type": "application/json"
        }
      });
      if (response.status === "success") {
        if (response.code === "200") {
          if (response.data) {
            navigateTo({ name: "faceid", query: { passport: passport.value } });
          } else {
            errorText.value = "Passport raqami noto'g'ri kiritildi.";
          }
        } else {
          errorText.value = "Passport raqami noto'g'ri kiritildi.";
        }
      } else {
        errorText.value = "Passport raqami noto'g'ri kiritildi.";
      }
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Label = _sfc_main$1;
      const _component_Input = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen w-full flex items-center justify-center" }, _attrs))}><div class="grid gap-5 p-5 w-96">`);
      if (unref(errorText)) {
        _push(`<p class="border border-red-500 p-1 rounded-lg bg-red-500/10 flex items-center gap-3 text-lg font-bold text-red-500">`);
        _push(ssrRenderComponent(unref(LucideFileWarning), { size: 50 }, null, _parent));
        _push(` ${ssrInterpolate(unref(errorText))}</p>`);
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Passport raqam`);
          } else {
            return [
              createTextVNode("Passport raqam")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        modelValue: unref(passport),
        "onUpdate:modelValue": ($event) => isRef(passport) ? passport.value = $event : null,
        disabled: !unref(login),
        class: "w-full"
      }, null, _parent));
      _push(ssrRenderComponent(_component_Button, {
        onClick: loginWithPassport,
        disabled: !unref(login),
        class: "w-full"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kirish`);
          } else {
            return [
              createTextVNode("Kirish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CAQpTyR4.mjs.map
