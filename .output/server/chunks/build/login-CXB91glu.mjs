import { _ as _sfc_main$1, a as _sfc_main$2 } from './Input-Cj1luoh3.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, unref, isRef, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useAuth } from './useAuth-hQZ-v8Ol.mjs';
import { u as useToast } from './index-DI-F3f8f.mjs';
import { a as apify } from './useAPI-C-AfzH2x.mjs';
import { u as useHead, n as navigateTo } from './server.mjs';
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
  __name: "login",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Kirish"
    });
    const { login } = useAuth();
    const { toast } = useToast();
    const username = ref("");
    const password = ref("");
    const isLoading = ref(false);
    const loginHandler = async () => {
      isLoading.value = true;
      let response = await $fetch(apify("auth/login/"), {
        method: "POST",
        body: JSON.stringify({
          username: username.value,
          password: password.value
        })
      });
      if (response.status === "success") {
        login(response.data);
        navigateTo({ name: "admin" });
      } else {
        if (response.code === "404") {
          toast({
            title: "Xatolik",
            description: "Foydalanuvchi topilmadi! Qaytadan urinib ko'ring"
          });
        } else if (response.code === "405") {
          toast({
            title: "Xatolik",
            description: "Parol noto'g'ri. Qaytadan urinib ko'ring"
          });
        } else {
          toast({
            title: "Xatolik",
            description: "Tizim xatoligi. Adminga murojat qiling."
          });
        }
      }
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Label = _sfc_main$1;
      const _component_Input = _sfc_main$2;
      const _component_Button = _sfc_main$3;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "w-96 grid gap-3" }, _attrs))}><p class="text-center">Kirish</p><div>`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Foydalanuvchi nomi`);
          } else {
            return [
              createTextVNode("Foydalanuvchi nomi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        disabled: unref(isLoading),
        modelValue: unref(username),
        "onUpdate:modelValue": ($event) => isRef(username) ? username.value = $event : null
      }, null, _parent));
      _push(`</div><div>`);
      _push(ssrRenderComponent(_component_Label, null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Parol`);
          } else {
            return [
              createTextVNode("Parol")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Input, {
        disabled: unref(isLoading),
        modelValue: unref(password),
        "onUpdate:modelValue": ($event) => isRef(password) ? password.value = $event : null
      }, null, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_Button, {
        disabled: unref(isLoading),
        onClick: loginHandler
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
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/auth/login.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=login-CXB91glu.mjs.map
