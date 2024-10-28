import { useSSRContext, defineComponent, ref, watch, mergeProps, withCtx, createTextVNode, createVNode, unref, isRef, toDisplayString, openBlock, createBlock, Fragment, renderList, createCommentVNode, renderSlot, computed } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate, ssrRenderAttr, ssrRenderSlot } from 'vue/server-renderer';
import { useForwardPropsEmits, TabsRoot, useForwardProps, TabsTrigger, TabsList, TabsContent, DropdownMenuRoot, DropdownMenuTrigger, DropdownMenuPortal, DropdownMenuContent, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuItemIndicator, DropdownMenuSeparator, DropdownMenuLabel } from 'radix-vue';
import { c as cn } from './index-CmPE4-O1.mjs';
import { a as _sfc_main$c, _ as _sfc_main$1$3 } from './Input-Cj1luoh3.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$1$1, b as _sfc_main$2$1, c as _sfc_main$4$1, d as _sfc_main$e, e as _sfc_main$3$1 } from './TableRow-DFpoXaJz.mjs';
import { DotFilledIcon } from '@radix-icons/vue';
import { _ as _sfc_main$f } from './Skeleton-Cl27xNs5.mjs';
import { _ as _sfc_main$6$1, a as _sfc_main$4$2, b as _sfc_main$1$2, c as _sfc_main$3$2, d as _sfc_main$2$2, e as _sfc_main$g, f as _sfc_main$5$2 } from './DialogFooter-BpKrDgkw.mjs';
import { u as useHead, n as navigateTo } from './server.mjs';
import { a as apify } from './useAPI-C-AfzH2x.mjs';
import { u as useAuth } from './useAuth-hQZ-v8Ol.mjs';
import { _ as _sfc_main$d } from './Button-kc8BLKv4.mjs';
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

const _sfc_main$b = /* @__PURE__ */ defineComponent({
  __name: "Tabs",
  __ssrInlineRender: true,
  props: {
    defaultValue: {},
    orientation: {},
    dir: {},
    activationMode: {},
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$b = _sfc_main$b.setup;
_sfc_main$b.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/Tabs.vue");
  return _sfc_setup$b ? _sfc_setup$b(props, ctx) : void 0;
};
const _sfc_main$a = /* @__PURE__ */ defineComponent({
  __name: "TabsTrigger",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsTrigger), mergeProps(unref(forwardedProps), {
        class: unref(cn)(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="truncate"${_scopeId}>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
            _push2(`</span>`);
          } else {
            return [
              createVNode("span", { class: "truncate" }, [
                renderSlot(_ctx.$slots, "default")
              ])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$a = _sfc_main$a.setup;
_sfc_main$a.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsTrigger.vue");
  return _sfc_setup$a ? _sfc_setup$a(props, ctx) : void 0;
};
const _sfc_main$9 = /* @__PURE__ */ defineComponent({
  __name: "TabsList",
  __ssrInlineRender: true,
  props: {
    loop: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsList), mergeProps(delegatedProps.value, {
        class: unref(cn)(
          "inline-flex items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$9 = _sfc_main$9.setup;
_sfc_main$9.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsList.vue");
  return _sfc_setup$9 ? _sfc_setup$9(props, ctx) : void 0;
};
const _sfc_main$8 = /* @__PURE__ */ defineComponent({
  __name: "TabsContent",
  __ssrInlineRender: true,
  props: {
    value: {},
    forceMount: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(TabsContent), mergeProps({
        class: unref(cn)("mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2", props.class)
      }, delegatedProps.value, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$8 = _sfc_main$8.setup;
_sfc_main$8.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/tabs/TabsContent.vue");
  return _sfc_setup$8 ? _sfc_setup$8(props, ctx) : void 0;
};
const _sfc_main$7 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenu",
  __ssrInlineRender: true,
  props: {
    defaultOpen: { type: Boolean },
    open: { type: Boolean },
    dir: {},
    modal: { type: Boolean }
  },
  emits: ["update:open"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRoot), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$7 = _sfc_main$7.setup;
_sfc_main$7.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenu.vue");
  return _sfc_setup$7 ? _sfc_setup$7(props, ctx) : void 0;
};
const _sfc_main$6 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuTrigger",
  __ssrInlineRender: true,
  props: {
    disabled: { type: Boolean },
    asChild: { type: Boolean },
    as: {}
  },
  setup(__props) {
    const props = __props;
    const forwardedProps = useForwardProps(props);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuTrigger), mergeProps({ class: "outline-none" }, unref(forwardedProps), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$6 = _sfc_main$6.setup;
_sfc_main$6.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuTrigger.vue");
  return _sfc_setup$6 ? _sfc_setup$6(props, ctx) : void 0;
};
const _sfc_main$5 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuContent",
  __ssrInlineRender: true,
  props: {
    forceMount: { type: Boolean },
    loop: { type: Boolean },
    side: {},
    sideOffset: { default: 4 },
    align: {},
    alignOffset: {},
    avoidCollisions: { type: Boolean },
    collisionBoundary: {},
    collisionPadding: {},
    arrowPadding: {},
    sticky: {},
    hideWhenDetached: { type: Boolean },
    updatePositionStrategy: {},
    prioritizePosition: { type: Boolean },
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["escapeKeyDown", "pointerDownOutside", "focusOutside", "interactOutside", "closeAutoFocus"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuPortal), _attrs, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
              class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
            }), {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  ssrRenderSlot(_ctx.$slots, "default", {}, null, _push3, _parent3, _scopeId2);
                } else {
                  return [
                    renderSlot(_ctx.$slots, "default")
                  ];
                }
              }),
              _: 3
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(DropdownMenuContent), mergeProps(unref(forwarded), {
                class: unref(cn)("z-50 min-w-32 overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2", props.class)
              }), {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "default")
                ]),
                _: 3
              }, 16, ["class"])
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$5 = _sfc_main$5.setup;
_sfc_main$5.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuContent.vue");
  return _sfc_setup$5 ? _sfc_setup$5(props, ctx) : void 0;
};
const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioGroup",
  __ssrInlineRender: true,
  props: {
    modelValue: {},
    asChild: { type: Boolean },
    as: {}
  },
  emits: ["update:modelValue"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const forwarded = useForwardPropsEmits(props, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRadioGroup), mergeProps(unref(forwarded), _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuRadioGroup.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuRadioItem",
  __ssrInlineRender: true,
  props: {
    value: {},
    disabled: { type: Boolean },
    textValue: {},
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  emits: ["select"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwarded = useForwardPropsEmits(delegatedProps, emits);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuRadioItem), mergeProps(unref(forwarded), {
        class: unref(cn)(
          "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
          props.class
        )
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="absolute left-2 flex h-3.5 w-3.5 items-center justify-center"${_scopeId}>`);
            _push2(ssrRenderComponent(unref(DropdownMenuItemIndicator), null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(unref(DotFilledIcon), { class: "h-4 w-4 fill-current" }, null, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(unref(DotFilledIcon), { class: "h-4 w-4 fill-current" })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</span>`);
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              createVNode("span", { class: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center" }, [
                createVNode(unref(DropdownMenuItemIndicator), null, {
                  default: withCtx(() => [
                    createVNode(unref(DotFilledIcon), { class: "h-4 w-4 fill-current" })
                  ]),
                  _: 1
                })
              ]),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuRadioItem.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuSeparator",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {}
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuSeparator), mergeProps(delegatedProps.value, {
        class: unref(cn)("-mx-1 my-1 h-px bg-muted", props.class)
      }, _attrs), null, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuSeparator.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DropdownMenuLabel",
  __ssrInlineRender: true,
  props: {
    asChild: { type: Boolean },
    as: {},
    class: {},
    inset: { type: Boolean }
  },
  setup(__props) {
    const props = __props;
    const delegatedProps = computed(() => {
      const { class: _, ...delegated } = props;
      return delegated;
    });
    const forwardedProps = useForwardProps(delegatedProps);
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(DropdownMenuLabel), mergeProps(unref(forwardedProps), {
        class: unref(cn)("px-2 py-1.5 text-sm font-semibold", _ctx.inset && "pl-8", props.class)
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/dropdown-menu/DropdownMenuLabel.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Xodimlar"
    });
    const { token } = useAuth();
    const department = ref("");
    const departmentName = ref("");
    const isLoading = ref(false);
    const employees = ref();
    const departments = ref();
    const departmentModal = ref(false);
    const getEmployees = async (departmentID = "0") => {
      isLoading.value = true;
      let response = await $fetch(apify(`employees/?department=${departmentID}`), {
        headers: {
          "Authorization": `Token ${token}`
        }
      });
      employees.value = response;
      isLoading.value = false;
    };
    const getDepartments = async () => {
      isLoading.value = true;
      let response = await $fetch(apify("departments/"), {
        headers: {
          "Authorization": `Token ${token}`
        }
      });
      departments.value = response;
      isLoading.value = false;
    };
    const addDepartment = async () => {
      isLoading.value = true;
      await $fetch(apify(`departments/create/`), {
        method: "POST",
        body: JSON.stringify({
          name: departmentName.value
        }),
        headers: {
          "Authorization": `Token ${token}`
        }
      });
      getDepartments();
      isLoading.value = false;
      departmentModal.value = false;
    };
    watch(department, (newValue) => {
      getEmployees(department.value);
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Tabs = _sfc_main$b;
      const _component_TabsList = _sfc_main$9;
      const _component_TabsTrigger = _sfc_main$a;
      const _component_TabsContent = _sfc_main$8;
      const _component_Input = _sfc_main$c;
      const _component_Button = _sfc_main$d;
      const _component_Table = _sfc_main$5$1;
      const _component_TableHeader = _sfc_main$1$1;
      const _component_TableHead = _sfc_main$2$1;
      const _component_DropdownMenu = _sfc_main$7;
      const _component_DropdownMenuTrigger = _sfc_main$6;
      const _component_DropdownMenuContent = _sfc_main$5;
      const _component_DropdownMenuLabel = _sfc_main$1;
      const _component_DropdownMenuSeparator = _sfc_main$2;
      const _component_DropdownMenuRadioGroup = _sfc_main$4;
      const _component_DropdownMenuRadioItem = _sfc_main$3;
      const _component_TableBody = _sfc_main$4$1;
      const _component_TableRow = _sfc_main$e;
      const _component_TableCell = _sfc_main$3$1;
      const _component_Skeleton = _sfc_main$f;
      const _component_Dialog = _sfc_main$6$1;
      const _component_DialogTrigger = _sfc_main$4$2;
      const _component_DialogContent = _sfc_main$1$2;
      const _component_DialogHeader = _sfc_main$3$2;
      const _component_DialogTitle = _sfc_main$2$2;
      const _component_Label = _sfc_main$1$3;
      const _component_DialogFooter = _sfc_main$g;
      const _component_DialogClose = _sfc_main$5$2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5 p-5 md:p-10" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Tabs, { "default-value": "employees" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TabsList, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "employees" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Xodimlar`);
                      } else {
                        return [
                          createTextVNode("Xodimlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TabsTrigger, { value: "departments" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;limlar`);
                      } else {
                        return [
                          createTextVNode("Bo'limlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_TabsTrigger, { value: "employees" }, {
                      default: withCtx(() => [
                        createTextVNode("Xodimlar")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TabsTrigger, { value: "departments" }, {
                      default: withCtx(() => [
                        createTextVNode("Bo'limlar")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "employees" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-3"${_scopeId2}><div class="flex flex-col md:flex-row justify-between"${_scopeId2}><p class="text-2xl"${_scopeId2}>Xodimlar ro&#39;yxati</p><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    class: "w-full md:w-96",
                    placeholder: "Xodim qidirish"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-add" })
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Xodim qo&#39;shish`);
                      } else {
                        return [
                          createTextVNode("Xodim qo'shish")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="border rounded-md overflow-x-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Table, { class: "whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableHead, { class: "w-4" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`#`);
                                  } else {
                                    return [
                                      createTextVNode("#")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Ism, familiya, sharifi`);
                                  } else {
                                    return [
                                      createTextVNode("Ism, familiya, sharifi")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DropdownMenu, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_DropdownMenuTrigger, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_Button, {
                                                  size: "xs",
                                                  variant: "ghost"
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Bo&#39;lim`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Bo'lim")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_Button, {
                                                    size: "xs",
                                                    variant: "ghost"
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Bo'lim")
                                                    ]),
                                                    _: 1
                                                  })
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                          _push7(ssrRenderComponent(_component_DropdownMenuContent, null, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(ssrRenderComponent(_component_DropdownMenuLabel, null, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(`Filtrlash`);
                                                    } else {
                                                      return [
                                                        createTextVNode("Filtrlash")
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_DropdownMenuSeparator, null, null, _parent8, _scopeId7));
                                                _push8(ssrRenderComponent(_component_DropdownMenuRadioGroup, {
                                                  modelValue: unref(department),
                                                  "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                                }, {
                                                  default: withCtx((_8, _push9, _parent9, _scopeId8) => {
                                                    if (_push9) {
                                                      _push9(ssrRenderComponent(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                        default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                          if (_push10) {
                                                            _push10(`Barcha bo&#39;limlar`);
                                                          } else {
                                                            return [
                                                              createTextVNode("Barcha bo'limlar")
                                                            ];
                                                          }
                                                        }),
                                                        _: 1
                                                      }, _parent9, _scopeId8));
                                                      _push9(`<!--[-->`);
                                                      ssrRenderList(unref(departments), (d) => {
                                                        _push9(ssrRenderComponent(_component_DropdownMenuRadioItem, {
                                                          value: d.id
                                                        }, {
                                                          default: withCtx((_9, _push10, _parent10, _scopeId9) => {
                                                            if (_push10) {
                                                              _push10(`${ssrInterpolate(d.name)}`);
                                                            } else {
                                                              return [
                                                                createTextVNode(toDisplayString(d.name), 1)
                                                              ];
                                                            }
                                                          }),
                                                          _: 2
                                                        }, _parent9, _scopeId8));
                                                      });
                                                      _push9(`<!--]-->`);
                                                    } else {
                                                      return [
                                                        createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                          default: withCtx(() => [
                                                            createTextVNode("Barcha bo'limlar")
                                                          ]),
                                                          _: 1
                                                        }),
                                                        (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                          return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                            value: d.id
                                                          }, {
                                                            default: withCtx(() => [
                                                              createTextVNode(toDisplayString(d.name), 1)
                                                            ]),
                                                            _: 2
                                                          }, 1032, ["value"]);
                                                        }), 256))
                                                      ];
                                                    }
                                                  }),
                                                  _: 1
                                                }, _parent8, _scopeId7));
                                              } else {
                                                return [
                                                  createVNode(_component_DropdownMenuLabel, null, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Filtrlash")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  createVNode(_component_DropdownMenuSeparator),
                                                  createVNode(_component_DropdownMenuRadioGroup, {
                                                    modelValue: unref(department),
                                                    "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                                  }, {
                                                    default: withCtx(() => [
                                                      createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                        default: withCtx(() => [
                                                          createTextVNode("Barcha bo'limlar")
                                                        ]),
                                                        _: 1
                                                      }),
                                                      (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                        return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                          value: d.id
                                                        }, {
                                                          default: withCtx(() => [
                                                            createTextVNode(toDisplayString(d.name), 1)
                                                          ]),
                                                          _: 2
                                                        }, 1032, ["value"]);
                                                      }), 256))
                                                    ]),
                                                    _: 1
                                                  }, 8, ["modelValue", "onUpdate:modelValue"])
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_DropdownMenuTrigger, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_Button, {
                                                  size: "xs",
                                                  variant: "ghost"
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Bo'lim")
                                                  ]),
                                                  _: 1
                                                })
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_DropdownMenuContent, null, {
                                              default: withCtx(() => [
                                                createVNode(_component_DropdownMenuLabel, null, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Filtrlash")
                                                  ]),
                                                  _: 1
                                                }),
                                                createVNode(_component_DropdownMenuSeparator),
                                                createVNode(_component_DropdownMenuRadioGroup, {
                                                  modelValue: unref(department),
                                                  "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                                }, {
                                                  default: withCtx(() => [
                                                    createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                      default: withCtx(() => [
                                                        createTextVNode("Barcha bo'limlar")
                                                      ]),
                                                      _: 1
                                                    }),
                                                    (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                      return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                        value: d.id
                                                      }, {
                                                        default: withCtx(() => [
                                                          createTextVNode(toDisplayString(d.name), 1)
                                                        ]),
                                                        _: 2
                                                      }, 1032, ["value"]);
                                                    }), 256))
                                                  ]),
                                                  _: 1
                                                }, 8, ["modelValue", "onUpdate:modelValue"])
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DropdownMenu, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_DropdownMenuTrigger, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Button, {
                                                size: "xs",
                                                variant: "ghost"
                                              }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Bo'lim")
                                                ]),
                                                _: 1
                                              })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuContent, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_DropdownMenuLabel, null, {
                                                default: withCtx(() => [
                                                  createTextVNode("Filtrlash")
                                                ]),
                                                _: 1
                                              }),
                                              createVNode(_component_DropdownMenuSeparator),
                                              createVNode(_component_DropdownMenuRadioGroup, {
                                                modelValue: unref(department),
                                                "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                              }, {
                                                default: withCtx(() => [
                                                  createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                    default: withCtx(() => [
                                                      createTextVNode("Barcha bo'limlar")
                                                    ]),
                                                    _: 1
                                                  }),
                                                  (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                    return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                      value: d.id
                                                    }, {
                                                      default: withCtx(() => [
                                                        createTextVNode(toDisplayString(d.name), 1)
                                                      ]),
                                                      _: 2
                                                    }, 1032, ["value"]);
                                                  }), 256))
                                                ]),
                                                _: 1
                                              }, 8, ["modelValue", "onUpdate:modelValue"])
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Lavozimi`);
                                  } else {
                                    return [
                                      createTextVNode("Lavozimi")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Tel raqami`);
                                  } else {
                                    return [
                                      createTextVNode("Tel raqami")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Passport raqami`);
                                  } else {
                                    return [
                                      createTextVNode("Passport raqami")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`JShShR`);
                                  } else {
                                    return [
                                      createTextVNode("JShShR")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Rasmi`);
                                  } else {
                                    return [
                                      createTextVNode("Rasmi")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TableHead, { class: "w-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("#")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Ism, familiya, sharifi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenu, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_DropdownMenuTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Button, {
                                              size: "xs",
                                              variant: "ghost"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Bo'lim")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_DropdownMenuContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_DropdownMenuLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Filtrlash")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_DropdownMenuSeparator),
                                            createVNode(_component_DropdownMenuRadioGroup, {
                                              modelValue: unref(department),
                                              "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Barcha bo'limlar")
                                                  ]),
                                                  _: 1
                                                }),
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                  return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                    value: d.id
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(d.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 256))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Lavozimi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tel raqami")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Passport raqami")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("JShShR")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Rasmi")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(employees), (employee, index) => {
                                _push5(ssrRenderComponent(_component_TableRow, {
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(index + 1)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(index + 1), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(employee.first_name)} ${ssrInterpolate(employee.last_name)} ${ssrInterpolate(employee.middle_name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name) + " " + toDisplayString(employee.middle_name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(employee.department.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(employee.department.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(employee.position)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(employee.position), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(employee.phone)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(employee.phone), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(employee.passport_number)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(employee.passport_number), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(employee.passport_pinfl)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(employee.passport_pinfl), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`<img class="w-6 h-6 rounded border"${ssrRenderAttr("src", employee.image)} alt=""${_scopeId6}>`);
                                          } else {
                                            return [
                                              createVNode("img", {
                                                class: "w-6 h-6 rounded border",
                                                src: employee.image,
                                                alt: ""
                                              }, null, 8, ["src"])
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name) + " " + toDisplayString(employee.middle_name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(employee.department.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(employee.position), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(employee.phone), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(employee.passport_number), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(employee.passport_pinfl), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createVNode("img", {
                                              class: "w-6 h-6 rounded border",
                                              src: employee.image,
                                              alt: ""
                                            }, null, 8, ["src"])
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                              if (unref(isLoading)) {
                                _push5(`<!--[-->`);
                                ssrRenderList(10, (_5) => {
                                  _push5(ssrRenderComponent(_component_TableRow, null, {
                                    default: withCtx((_6, _push6, _parent6, _scopeId5) => {
                                      if (_push6) {
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-4 h-4" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-full h-4" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-full h-4" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-full h-4" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-full h-4" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-full h-4" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-full h-4" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                        _push6(ssrRenderComponent(_component_TableCell, null, {
                                          default: withCtx((_7, _push7, _parent7, _scopeId6) => {
                                            if (_push7) {
                                              _push7(ssrRenderComponent(_component_Skeleton, { class: "w-6 h-6" }, null, _parent7, _scopeId6));
                                            } else {
                                              return [
                                                createVNode(_component_Skeleton, { class: "w-6 h-6" })
                                              ];
                                            }
                                          }),
                                          _: 2
                                        }, _parent6, _scopeId5));
                                      } else {
                                        return [
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-full h-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-full h-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-full h-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-full h-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-full h-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-full h-4" })
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_TableCell, null, {
                                            default: withCtx(() => [
                                              createVNode(_component_Skeleton, { class: "w-6 h-6" })
                                            ]),
                                            _: 1
                                          })
                                        ];
                                      }
                                    }),
                                    _: 2
                                  }, _parent5, _scopeId4));
                                });
                                _push5(`<!--]-->`);
                              } else {
                                _push5(`<!---->`);
                              }
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
                                  return openBlock(), createBlock(_component_TableRow, {
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name) + " " + toDisplayString(employee.middle_name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.department.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.position), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.phone), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.passport_number), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.passport_pinfl), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            class: "w-6 h-6 rounded border",
                                            src: employee.image,
                                            alt: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 256)),
                                unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(10, (_5) => {
                                  return createVNode(_component_TableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-6 h-6" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  });
                                }), 64)) : createCommentVNode("", true)
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, { class: "w-4" }, {
                                default: withCtx(() => [
                                  createTextVNode("#")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Ism, familiya, sharifi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenu, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DropdownMenuTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            size: "xs",
                                            variant: "ghost"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Bo'lim")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_DropdownMenuLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Filtrlash")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuSeparator),
                                          createVNode(_component_DropdownMenuRadioGroup, {
                                            modelValue: unref(department),
                                            "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Barcha bo'limlar")
                                                ]),
                                                _: 1
                                              }),
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                  value: d.id
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(d.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 256))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Lavozimi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tel raqami")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Passport raqami")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("JShShR")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Rasmi")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
                                return openBlock(), createBlock(_component_TableRow, {
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name) + " " + toDisplayString(employee.middle_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.department.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.position), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.phone), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.passport_number), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.passport_pinfl), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          class: "w-6 h-6 rounded border",
                                          src: employee.image,
                                          alt: ""
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 256)),
                              unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(10, (_4) => {
                                return createVNode(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-6 h-6" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                });
                              }), 64)) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("div", { class: "flex flex-col md:flex-row justify-between" }, [
                        createVNode("p", { class: "text-2xl" }, "Xodimlar ro'yxati"),
                        createVNode("div", { class: "flex gap-3" }, [
                          createVNode(_component_Input, {
                            class: "w-full md:w-96",
                            placeholder: "Xodim qidirish"
                          }),
                          createVNode(_component_Button, {
                            onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-add" })
                          }, {
                            default: withCtx(() => [
                              createTextVNode("Xodim qo'shish")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ]),
                      createVNode("div", { class: "border rounded-md overflow-x-auto" }, [
                        createVNode(_component_Table, { class: "whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createVNode(_component_TableHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, { class: "w-4" }, {
                                  default: withCtx(() => [
                                    createTextVNode("#")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Ism, familiya, sharifi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DropdownMenu, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_DropdownMenuTrigger, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_Button, {
                                              size: "xs",
                                              variant: "ghost"
                                            }, {
                                              default: withCtx(() => [
                                                createTextVNode("Bo'lim")
                                              ]),
                                              _: 1
                                            })
                                          ]),
                                          _: 1
                                        }),
                                        createVNode(_component_DropdownMenuContent, null, {
                                          default: withCtx(() => [
                                            createVNode(_component_DropdownMenuLabel, null, {
                                              default: withCtx(() => [
                                                createTextVNode("Filtrlash")
                                              ]),
                                              _: 1
                                            }),
                                            createVNode(_component_DropdownMenuSeparator),
                                            createVNode(_component_DropdownMenuRadioGroup, {
                                              modelValue: unref(department),
                                              "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                            }, {
                                              default: withCtx(() => [
                                                createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                  default: withCtx(() => [
                                                    createTextVNode("Barcha bo'limlar")
                                                  ]),
                                                  _: 1
                                                }),
                                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                  return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                    value: d.id
                                                  }, {
                                                    default: withCtx(() => [
                                                      createTextVNode(toDisplayString(d.name), 1)
                                                    ]),
                                                    _: 2
                                                  }, 1032, ["value"]);
                                                }), 256))
                                              ]),
                                              _: 1
                                            }, 8, ["modelValue", "onUpdate:modelValue"])
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Lavozimi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Tel raqami")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Passport raqami")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("JShShR")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Rasmi")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableBody, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
                                  return openBlock(), createBlock(_component_TableRow, {
                                    onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                  }, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name) + " " + toDisplayString(employee.middle_name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.department.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.position), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.phone), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.passport_number), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(employee.passport_pinfl), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode("img", {
                                            class: "w-6 h-6 rounded border",
                                            src: employee.image,
                                            alt: ""
                                          }, null, 8, ["src"])
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1032, ["onClick"]);
                                }), 256)),
                                unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(10, (_3) => {
                                  return createVNode(_component_TableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-full h-4" })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Skeleton, { class: "w-6 h-6" })
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  });
                                }), 64)) : createCommentVNode("", true)
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TabsContent, { value: "departments" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col gap-3"${_scopeId2}><div class="flex flex-col md:flex-row justify-between"${_scopeId2}><p class="text-2xl"${_scopeId2}>Bo&#39;limlar ro&#39;yxati</p><div class="flex gap-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Dialog, {
                    open: unref(departmentModal),
                    "onUpdate:open": ($event) => isRef(departmentModal) ? departmentModal.value = $event : null
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_DialogTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_Button, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Bo&#39;lim qo&#39;shish`);
                                  } else {
                                    return [
                                      createTextVNode("Bo'lim qo'shish")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Bo'lim qo'shish")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_DialogContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_DialogHeader, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DialogTitle, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Yangi bo&#39;lim qo&#39;shish`);
                                        } else {
                                          return [
                                            createTextVNode("Yangi bo'lim qo'shish")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DialogTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Yangi bo'lim qo'shish")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(`<div${_scopeId4}>`);
                              _push5(ssrRenderComponent(_component_Label, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Nomi`);
                                  } else {
                                    return [
                                      createTextVNode("Nomi")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_Input, {
                                modelValue: unref(departmentName),
                                "onUpdate:modelValue": ($event) => isRef(departmentName) ? departmentName.value = $event : null
                              }, null, _parent5, _scopeId4));
                              _push5(`</div>`);
                              _push5(ssrRenderComponent(_component_DialogFooter, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(ssrRenderComponent(_component_DialogClose, null, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(ssrRenderComponent(_component_Button, { variant: "destructive" }, {
                                            default: withCtx((_7, _push8, _parent8, _scopeId7) => {
                                              if (_push8) {
                                                _push8(`Yopish`);
                                              } else {
                                                return [
                                                  createTextVNode("Yopish")
                                                ];
                                              }
                                            }),
                                            _: 1
                                          }, _parent7, _scopeId6));
                                        } else {
                                          return [
                                            createVNode(_component_Button, { variant: "destructive" }, {
                                              default: withCtx(() => [
                                                createTextVNode("Yopish")
                                              ]),
                                              _: 1
                                            })
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                    _push6(ssrRenderComponent(_component_Button, { onClick: addDepartment }, {
                                      default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                        if (_push7) {
                                          _push7(`Qo&#39;shish`);
                                        } else {
                                          return [
                                            createTextVNode("Qo'shish")
                                          ];
                                        }
                                      }),
                                      _: 1
                                    }, _parent6, _scopeId5));
                                  } else {
                                    return [
                                      createVNode(_component_DialogClose, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, { variant: "destructive" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yopish")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Button, { onClick: addDepartment }, {
                                        default: withCtx(() => [
                                          createTextVNode("Qo'shish")
                                        ]),
                                        _: 1
                                      })
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_DialogHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Yangi bo'lim qo'shish")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_Label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nomi")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    modelValue: unref(departmentName),
                                    "onUpdate:modelValue": ($event) => isRef(departmentName) ? departmentName.value = $event : null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_DialogFooter, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogClose, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, { variant: "destructive" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Yopish")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Button, { onClick: addDepartment }, {
                                      default: withCtx(() => [
                                        createTextVNode("Qo'shish")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_DialogTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_Button, null, {
                                default: withCtx(() => [
                                  createTextVNode("Bo'lim qo'shish")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_DialogContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_DialogHeader, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogTitle, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Yangi bo'lim qo'shish")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode("div", null, [
                                createVNode(_component_Label, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Nomi")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_Input, {
                                  modelValue: unref(departmentName),
                                  "onUpdate:modelValue": ($event) => isRef(departmentName) ? departmentName.value = $event : null
                                }, null, 8, ["modelValue", "onUpdate:modelValue"])
                              ]),
                              createVNode(_component_DialogFooter, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogClose, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_Button, { variant: "destructive" }, {
                                        default: withCtx(() => [
                                          createTextVNode("Yopish")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Button, { onClick: addDepartment }, {
                                    default: withCtx(() => [
                                      createTextVNode("Qo'shish")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="overflow-x-auto"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Table, { class: "whitespace-nowrap" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_TableHeader, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`#`);
                                  } else {
                                    return [
                                      createTextVNode("#")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Bo&#39;lim`);
                                  } else {
                                    return [
                                      createTextVNode("Bo'lim")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_TableHead, null, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Xodimlari soni`);
                                  } else {
                                    return [
                                      createTextVNode("Xodimlari soni")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("#")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Bo'lim")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Xodimlari soni")
                                  ]),
                                  _: 1
                                })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_TableBody, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(departments), (department2, index) => {
                                _push5(ssrRenderComponent(_component_TableRow, null, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(index + 1)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(index + 1), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(department2.name)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(department2.name), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                      _push6(ssrRenderComponent(_component_TableCell, null, {
                                        default: withCtx((_6, _push7, _parent7, _scopeId6) => {
                                          if (_push7) {
                                            _push7(`${ssrInterpolate(department2.employees)}`);
                                          } else {
                                            return [
                                              createTextVNode(toDisplayString(department2.employees), 1)
                                            ];
                                          }
                                        }),
                                        _: 2
                                      }, _parent6, _scopeId5));
                                    } else {
                                      return [
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(index + 1), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(department2.name), 1)
                                          ]),
                                          _: 2
                                        }, 1024),
                                        createVNode(_component_TableCell, null, {
                                          default: withCtx(() => [
                                            createTextVNode(toDisplayString(department2.employees), 1)
                                          ]),
                                          _: 2
                                        }, 1024)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2, index) => {
                                  return openBlock(), createBlock(_component_TableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(department2.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(department2.employees), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("#")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Bo'lim")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Xodimlari soni")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2, index) => {
                                return openBlock(), createBlock(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(department2.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(department2.employees), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col gap-3" }, [
                      createVNode("div", { class: "flex flex-col md:flex-row justify-between" }, [
                        createVNode("p", { class: "text-2xl" }, "Bo'limlar ro'yxati"),
                        createVNode("div", { class: "flex gap-3" }, [
                          createVNode(_component_Dialog, {
                            open: unref(departmentModal),
                            "onUpdate:open": ($event) => isRef(departmentModal) ? departmentModal.value = $event : null
                          }, {
                            default: withCtx(() => [
                              createVNode(_component_DialogTrigger, null, {
                                default: withCtx(() => [
                                  createVNode(_component_Button, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Bo'lim qo'shish")
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_DialogContent, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DialogHeader, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DialogTitle, null, {
                                        default: withCtx(() => [
                                          createTextVNode("Yangi bo'lim qo'shish")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  }),
                                  createVNode("div", null, [
                                    createVNode(_component_Label, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Nomi")
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Input, {
                                      modelValue: unref(departmentName),
                                      "onUpdate:modelValue": ($event) => isRef(departmentName) ? departmentName.value = $event : null
                                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                  ]),
                                  createVNode(_component_DialogFooter, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DialogClose, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, { variant: "destructive" }, {
                                            default: withCtx(() => [
                                              createTextVNode("Yopish")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_Button, { onClick: addDepartment }, {
                                        default: withCtx(() => [
                                          createTextVNode("Qo'shish")
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }, 8, ["open", "onUpdate:open"])
                        ])
                      ]),
                      createVNode("div", { class: "overflow-x-auto" }, [
                        createVNode(_component_Table, { class: "whitespace-nowrap" }, {
                          default: withCtx(() => [
                            createVNode(_component_TableHeader, null, {
                              default: withCtx(() => [
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("#")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Bo'lim")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_TableHead, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Xodimlari soni")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_TableBody, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2, index) => {
                                  return openBlock(), createBlock(_component_TableRow, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(index + 1), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(department2.name), 1)
                                        ]),
                                        _: 2
                                      }, 1024),
                                      createVNode(_component_TableCell, null, {
                                        default: withCtx(() => [
                                          createTextVNode(toDisplayString(department2.employees), 1)
                                        ]),
                                        _: 2
                                      }, 1024)
                                    ]),
                                    _: 2
                                  }, 1024);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        })
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_TabsList, null, {
                default: withCtx(() => [
                  createVNode(_component_TabsTrigger, { value: "employees" }, {
                    default: withCtx(() => [
                      createTextVNode("Xodimlar")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TabsTrigger, { value: "departments" }, {
                    default: withCtx(() => [
                      createTextVNode("Bo'limlar")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, { value: "employees" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row justify-between" }, [
                      createVNode("p", { class: "text-2xl" }, "Xodimlar ro'yxati"),
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode(_component_Input, {
                          class: "w-full md:w-96",
                          placeholder: "Xodim qidirish"
                        }),
                        createVNode(_component_Button, {
                          onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-add" })
                        }, {
                          default: withCtx(() => [
                            createTextVNode("Xodim qo'shish")
                          ]),
                          _: 1
                        }, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("div", { class: "border rounded-md overflow-x-auto" }, [
                      createVNode(_component_Table, { class: "whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, { class: "w-4" }, {
                                default: withCtx(() => [
                                  createTextVNode("#")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Ism, familiya, sharifi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createVNode(_component_DropdownMenu, null, {
                                    default: withCtx(() => [
                                      createVNode(_component_DropdownMenuTrigger, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_Button, {
                                            size: "xs",
                                            variant: "ghost"
                                          }, {
                                            default: withCtx(() => [
                                              createTextVNode("Bo'lim")
                                            ]),
                                            _: 1
                                          })
                                        ]),
                                        _: 1
                                      }),
                                      createVNode(_component_DropdownMenuContent, null, {
                                        default: withCtx(() => [
                                          createVNode(_component_DropdownMenuLabel, null, {
                                            default: withCtx(() => [
                                              createTextVNode("Filtrlash")
                                            ]),
                                            _: 1
                                          }),
                                          createVNode(_component_DropdownMenuSeparator),
                                          createVNode(_component_DropdownMenuRadioGroup, {
                                            modelValue: unref(department),
                                            "onUpdate:modelValue": ($event) => isRef(department) ? department.value = $event : null
                                          }, {
                                            default: withCtx(() => [
                                              createVNode(_component_DropdownMenuRadioItem, { value: "0" }, {
                                                default: withCtx(() => [
                                                  createTextVNode("Barcha bo'limlar")
                                                ]),
                                                _: 1
                                              }),
                                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (d) => {
                                                return openBlock(), createBlock(_component_DropdownMenuRadioItem, {
                                                  value: d.id
                                                }, {
                                                  default: withCtx(() => [
                                                    createTextVNode(toDisplayString(d.name), 1)
                                                  ]),
                                                  _: 2
                                                }, 1032, ["value"]);
                                              }), 256))
                                            ]),
                                            _: 1
                                          }, 8, ["modelValue", "onUpdate:modelValue"])
                                        ]),
                                        _: 1
                                      })
                                    ]),
                                    _: 1
                                  })
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Lavozimi")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Tel raqami")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Passport raqami")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("JShShR")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Rasmi")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
                                return openBlock(), createBlock(_component_TableRow, {
                                  onClick: ($event) => ("navigateTo" in _ctx ? _ctx.navigateTo : unref(navigateTo))({ name: "admin-employees-uuid", params: { uuid: employee.uuid } })
                                }, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name) + " " + toDisplayString(employee.middle_name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.department.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.position), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.phone), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.passport_number), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(employee.passport_pinfl), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode("img", {
                                          class: "w-6 h-6 rounded border",
                                          src: employee.image,
                                          alt: ""
                                        }, null, 8, ["src"])
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1032, ["onClick"]);
                              }), 256)),
                              unref(isLoading) ? (openBlock(), createBlock(Fragment, { key: 0 }, renderList(10, (_2) => {
                                return createVNode(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-full h-4" })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Skeleton, { class: "w-6 h-6" })
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                });
                              }), 64)) : createCommentVNode("", true)
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              }),
              createVNode(_component_TabsContent, { value: "departments" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col gap-3" }, [
                    createVNode("div", { class: "flex flex-col md:flex-row justify-between" }, [
                      createVNode("p", { class: "text-2xl" }, "Bo'limlar ro'yxati"),
                      createVNode("div", { class: "flex gap-3" }, [
                        createVNode(_component_Dialog, {
                          open: unref(departmentModal),
                          "onUpdate:open": ($event) => isRef(departmentModal) ? departmentModal.value = $event : null
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_DialogTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_Button, null, {
                                  default: withCtx(() => [
                                    createTextVNode("Bo'lim qo'shish")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_DialogContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_DialogHeader, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogTitle, null, {
                                      default: withCtx(() => [
                                        createTextVNode("Yangi bo'lim qo'shish")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                }),
                                createVNode("div", null, [
                                  createVNode(_component_Label, null, {
                                    default: withCtx(() => [
                                      createTextVNode("Nomi")
                                    ]),
                                    _: 1
                                  }),
                                  createVNode(_component_Input, {
                                    modelValue: unref(departmentName),
                                    "onUpdate:modelValue": ($event) => isRef(departmentName) ? departmentName.value = $event : null
                                  }, null, 8, ["modelValue", "onUpdate:modelValue"])
                                ]),
                                createVNode(_component_DialogFooter, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_DialogClose, null, {
                                      default: withCtx(() => [
                                        createVNode(_component_Button, { variant: "destructive" }, {
                                          default: withCtx(() => [
                                            createTextVNode("Yopish")
                                          ]),
                                          _: 1
                                        })
                                      ]),
                                      _: 1
                                    }),
                                    createVNode(_component_Button, { onClick: addDepartment }, {
                                      default: withCtx(() => [
                                        createTextVNode("Qo'shish")
                                      ]),
                                      _: 1
                                    })
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["open", "onUpdate:open"])
                      ])
                    ]),
                    createVNode("div", { class: "overflow-x-auto" }, [
                      createVNode(_component_Table, { class: "whitespace-nowrap" }, {
                        default: withCtx(() => [
                          createVNode(_component_TableHeader, null, {
                            default: withCtx(() => [
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("#")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Bo'lim")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_TableHead, null, {
                                default: withCtx(() => [
                                  createTextVNode("Xodimlari soni")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_TableBody, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department2, index) => {
                                return openBlock(), createBlock(_component_TableRow, null, {
                                  default: withCtx(() => [
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(index + 1), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(department2.name), 1)
                                      ]),
                                      _: 2
                                    }, 1024),
                                    createVNode(_component_TableCell, null, {
                                      default: withCtx(() => [
                                        createTextVNode(toDisplayString(department2.employees), 1)
                                      ]),
                                      _: 2
                                    }, 1024)
                                  ]),
                                  _: 2
                                }, 1024);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      })
                    ])
                  ])
                ]),
                _: 1
              })
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/employees/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-L2yztUrQ.mjs.map
