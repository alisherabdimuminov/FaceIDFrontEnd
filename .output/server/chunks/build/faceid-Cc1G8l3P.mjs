import { defineComponent, ref, mergeProps, unref, withCtx, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrInterpolate, ssrRenderComponent } from 'vue/server-renderer';
import { LucideCircleCheckBig, LucideCamera } from 'lucide-vue-next';
import { u as useColorMode } from './composables-B6EwsWSM.mjs';
import { a as useRoute, n as navigateTo, u as useHead } from './server.mjs';
import { _ as _sfc_main$1 } from './Button-kc8BLKv4.mjs';
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
import 'radix-vue';
import './index-CmPE4-O1.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "faceid",
  __ssrInlineRender: true,
  setup(__props) {
    let colorMode = useColorMode();
    colorMode.preference = "dark";
    const route = useRoute();
    const passport = ref(route.query.passport);
    if (passport.value === "") {
      navigateTo("/");
    }
    useHead({
      title: "FaceID"
    });
    ref("VIDEO");
    let tasks = ref([
      // left
      [
        { direction: "left", translation: "Chapga" },
        { direction: "right", translation: "O'ngga" }
      ],
      [
        { direction: "left", translation: "Chapga" },
        { direction: "top", translation: "Tepaga" }
      ],
      [
        { direction: "left", translation: "Chapga" },
        { direction: "bottom", translation: "Pastga" }
      ],
      // right
      [
        { direction: "right", translation: "O'ngga" },
        { direction: "left", translation: "Chapga" }
      ],
      [
        { direction: "right", translation: "O'ngga" },
        { direction: "top", translation: "Tepaga" }
      ],
      [
        { direction: "right", translation: "O'ngga" },
        { direction: "bottom", translation: "Pastga" }
      ],
      // top
      [
        { direction: "top", translation: "Tepaga" },
        { direction: "left", translation: "Chapga" }
      ],
      [
        { direction: "top", translation: "Tepaga" },
        { direction: "right", translation: "O'ngga" }
      ],
      [
        { direction: "top", translation: "Tepaga" },
        { direction: "bottom", translation: "Pastga" }
      ],
      // bottom
      [
        { direction: "bottom", translation: "Pastga" },
        { direction: "left", translation: "Chapga" }
      ],
      [
        { direction: "bottom", translation: "Pastga" },
        { direction: "right", translation: "O'ngga" }
      ],
      [
        { direction: "bottom", translation: "Pastga" },
        { direction: "top", translation: "Tepaga" }
      ]
    ]);
    let givenTasks = ref(tasks.value[Math.floor(Math.random() * tasks.value.length)]);
    let tasksDone = ref({
      task1: false,
      task2: false
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "h-screen" }, _attrs))}><div class="p-5 z-50"><p class="font-bold text-3xl">FaceID</p><span>1. Kamerani yoqish tugmasini bosing. 2. Quyidagi holatlarni kameraga qarab bajaring.</span><p class="flex items-center justify-center gap-3 text-center">1. ${ssrInterpolate(unref(givenTasks)[0].translation)} `);
      _push(ssrRenderComponent(unref(LucideCircleCheckBig), {
        color: unref(tasksDone).task1 ? "#008000" : "#fff"
      }, null, _parent));
      _push(`</p><p class="flex items-center justify-center gap-3 text-center">2. ${ssrInterpolate(unref(givenTasks)[1].translation)} `);
      _push(ssrRenderComponent(unref(LucideCircleCheckBig), {
        color: unref(tasksDone).task2 ? "#008000" : "#fff"
      }, null, _parent));
      _push(`</p>`);
      _push(ssrRenderComponent(_component_Button, {
        id: "button",
        class: "fixed gap-2 left-1/4 bottom-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(LucideCamera), null, null, _parent2, _scopeId));
            _push2(`<span${_scopeId}>Kamerni yoqish</span>`);
          } else {
            return [
              createVNode(unref(LucideCamera)),
              createVNode("span", null, "Kamerni yoqish")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><video class="fixed top-0 left-0 w-full h-full z-[-1]" id="video" autoplay playsinline></video><canvas height="900" class="fixed top-0 w-full left-0 border z-[-1]" id="border"></canvas><canvas id="image" class="hidden"></canvas></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faceid.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=faceid-Cc1G8l3P.mjs.map
