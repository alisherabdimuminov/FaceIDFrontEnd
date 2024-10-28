import { _ as _sfc_main$3$1, a as _sfc_main$2$1, b as _sfc_main$1$1, c as _sfc_main$5 } from './CardContent-C0SSYmJG.mjs';
import { _ as _sfc_main$5$1, a as _sfc_main$1$2, b as _sfc_main$2$2, c as _sfc_main$4$1, d as _sfc_main$6, e as _sfc_main$3$2 } from './TableRow-DFpoXaJz.mjs';
import { _ as _sfc_main$7 } from './Skeleton-Cl27xNs5.mjs';
import { useSSRContext, defineComponent, computed, ref, mergeProps, unref, withCtx, openBlock, createBlock, createCommentVNode, Fragment, renderList, renderSlot, createTextVNode, createVNode, toDisplayString, createApp } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrRenderSlot, ssrInterpolate, ssrRenderAttr } from 'vue/server-renderer';
import { LucideUsers, LucideLayers } from 'lucide-vue-next';
import { c as cn } from './index-CmPE4-O1.mjs';
import { CurveType, Line, Axis, omit } from '@unovis/ts';
import { VisXYContainer, VisLine, VisAxis, VisTooltip, VisCrosshair, VisBulletLegend } from '@unovis/vue';
import { useMounted } from '@vueuse/core';
import { u as useHead } from './server.mjs';
import { u as useAuth } from './useAuth-hQZ-v8Ol.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
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

const _sfc_main$4 = /* @__PURE__ */ defineComponent({
  __name: "ChartCrosshair",
  __ssrInlineRender: true,
  props: {
    colors: { default: () => [] },
    index: {},
    items: {},
    customTooltip: {}
  },
  setup(__props) {
    const props = __props;
    const wm = /* @__PURE__ */ new WeakMap();
    function template(d) {
      var _a;
      if (wm.has(d)) {
        return wm.get(d);
      } else {
        const componentDiv = (void 0).createElement("div");
        const omittedData = Object.entries(omit(d, [props.index])).map(([key, value]) => {
          const legendReference = props.items.find((i) => i.name === key);
          return { ...legendReference, value };
        });
        const TooltipComponent = (_a = props.customTooltip) != null ? _a : _sfc_main$2;
        createApp(TooltipComponent, { title: d[props.index].toString(), data: omittedData }).mount(componentDiv);
        wm.set(d, componentDiv.innerHTML);
        return componentDiv.innerHTML;
      }
    }
    function color(d, i) {
      var _a;
      return (_a = props.colors[i]) != null ? _a : "transparent";
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<!--[-->`);
      _push(ssrRenderComponent(unref(VisTooltip), {
        "horizontal-shift": 20,
        "vertical-shift": 20
      }, null, _parent));
      _push(ssrRenderComponent(unref(VisCrosshair), {
        template,
        color
      }, null, _parent));
      _push(`<!--]-->`);
    };
  }
});
const _sfc_setup$4 = _sfc_main$4.setup;
_sfc_main$4.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartCrosshair.vue");
  return _sfc_setup$4 ? _sfc_setup$4(props, ctx) : void 0;
};
const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "ChartLegend",
  __ssrInlineRender: true,
  props: {
    items: { default: () => [] }
  },
  emits: ["legendItemClick", "update:items"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const elRef = ref();
    function onLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
      const isBulletActive = !props.items[i].inactive;
      const isFilterApplied = props.items.some((i2) => i2.inactive);
      if (isFilterApplied && isBulletActive) {
        emits("update:items", props.items.map((item) => ({ ...item, inactive: false })));
      } else {
        emits("update:items", props.items.map((item) => item.name === d.name ? { ...d, inactive: false } : { ...item, inactive: true }));
      }
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        ref_key: "elRef",
        ref: elRef,
        class: "w-max"
      }, _attrs))}>`);
      _push(ssrRenderComponent(unref(VisBulletLegend), {
        items: _ctx.items,
        "on-legend-item-click": onLegendItemClick
      }, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartLegend.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "ChartTooltip",
  __ssrInlineRender: true,
  props: {
    title: {},
    data: {}
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      _push(ssrRenderComponent(unref(_sfc_main$3$1), mergeProps({ class: "text-sm" }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            if (_ctx.title) {
              _push2(ssrRenderComponent(unref(_sfc_main$2$1), { class: "p-3 border-b" }, {
                default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                  if (_push3) {
                    _push3(ssrRenderComponent(unref(_sfc_main$1$1), null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(`${ssrInterpolate(_ctx.title)}`);
                        } else {
                          return [
                            createTextVNode(toDisplayString(_ctx.title), 1)
                          ];
                        }
                      }),
                      _: 1
                    }, _parent3, _scopeId2));
                  } else {
                    return [
                      createVNode(unref(_sfc_main$1$1), null, {
                        default: withCtx(() => [
                          createTextVNode(toDisplayString(_ctx.title), 1)
                        ]),
                        _: 1
                      })
                    ];
                  }
                }),
                _: 1
              }, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(ssrRenderComponent(unref(_sfc_main$5), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(_ctx.data, (item, key) => {
                    _push3(`<div class="flex justify-between"${_scopeId2}><div class="flex items-center"${_scopeId2}><span class="w-2.5 h-2.5 mr-2"${_scopeId2}><svg width="100%" height="100%" viewBox="0 0 30 30"${_scopeId2}><path d=" M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0"${ssrRenderAttr("stroke", item.color)}${ssrRenderAttr("fill", item.color)} stroke-width="1"${_scopeId2}></path></svg></span><span${_scopeId2}>${ssrInterpolate(item.name)}</span></div><span class="font-semibold ml-4"${_scopeId2}>${ssrInterpolate(item.value)}</span></div>`);
                  });
                  _push3(`<!--]-->`);
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                      return openBlock(), createBlock("div", {
                        key,
                        class: "flex justify-between"
                      }, [
                        createVNode("div", { class: "flex items-center" }, [
                          createVNode("span", { class: "w-2.5 h-2.5 mr-2" }, [
                            (openBlock(), createBlock("svg", {
                              width: "100%",
                              height: "100%",
                              viewBox: "0 0 30 30"
                            }, [
                              createVNode("path", {
                                d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                                stroke: item.color,
                                fill: item.color,
                                "stroke-width": "1"
                              }, null, 8, ["stroke", "fill"])
                            ]))
                          ]),
                          createVNode("span", null, toDisplayString(item.name), 1)
                        ]),
                        createVNode("span", { class: "font-semibold ml-4" }, toDisplayString(item.value), 1)
                      ]);
                    }), 128))
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              _ctx.title ? (openBlock(), createBlock(unref(_sfc_main$2$1), {
                key: 0,
                class: "p-3 border-b"
              }, {
                default: withCtx(() => [
                  createVNode(unref(_sfc_main$1$1), null, {
                    default: withCtx(() => [
                      createTextVNode(toDisplayString(_ctx.title), 1)
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              })) : createCommentVNode("", true),
              createVNode(unref(_sfc_main$5), { class: "p-3 min-w-[180px] flex flex-col gap-1" }, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(_ctx.data, (item, key) => {
                    return openBlock(), createBlock("div", {
                      key,
                      class: "flex justify-between"
                    }, [
                      createVNode("div", { class: "flex items-center" }, [
                        createVNode("span", { class: "w-2.5 h-2.5 mr-2" }, [
                          (openBlock(), createBlock("svg", {
                            width: "100%",
                            height: "100%",
                            viewBox: "0 0 30 30"
                          }, [
                            createVNode("path", {
                              d: " M 15 15 m -14, 0 a 14,14 0 1,1 28,0 a 14,14 0 1,1 -28,0",
                              stroke: item.color,
                              fill: item.color,
                              "stroke-width": "1"
                            }, null, 8, ["stroke", "fill"])
                          ]))
                        ]),
                        createVNode("span", null, toDisplayString(item.name), 1)
                      ]),
                      createVNode("span", { class: "font-semibold ml-4" }, toDisplayString(item.value), 1)
                    ]);
                  }), 128))
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart/ChartTooltip.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
function defaultColors(count = 3) {
  const quotient = Math.floor(count / 2);
  const remainder = count % 2;
  const primaryCount = quotient + remainder;
  const secondaryCount = quotient;
  return [
    ...Array.from(new Array(primaryCount).keys()).map((i) => `hsl(var(--vis-primary-color) / ${1 - 1 / primaryCount * i})`),
    ...Array.from(new Array(secondaryCount).keys()).map((i) => `hsl(var(--vis-secondary-color) / ${1 - 1 / secondaryCount * i})`)
  ];
}
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "LineChart",
  __ssrInlineRender: true,
  props: {
    data: {},
    categories: {},
    index: {},
    colors: {},
    margin: { default: () => ({ top: 0, bottom: 0, left: 0, right: 0 }) },
    filterOpacity: { default: 0.2 },
    xFormatter: {},
    yFormatter: {},
    showXAxis: { type: Boolean, default: true },
    showYAxis: { type: Boolean, default: true },
    showTooltip: { type: Boolean, default: true },
    showLegend: { type: Boolean, default: true },
    showGridLine: { type: Boolean, default: true },
    customTooltip: {},
    curveType: { default: CurveType.MonotoneX }
  },
  emits: ["legendItemClick"],
  setup(__props, { emit: __emit }) {
    const props = __props;
    const emits = __emit;
    const index = computed(() => props.index);
    const colors = computed(() => {
      var _a;
      return ((_a = props.colors) == null ? void 0 : _a.length) ? props.colors : defaultColors(props.categories.length);
    });
    const legendItems = ref(props.categories.map((category, i) => ({
      name: category,
      color: colors.value[i],
      inactive: false
    })));
    const isMounted = useMounted();
    function handleLegendItemClick(d, i) {
      emits("legendItemClick", d, i);
    }
    return (_ctx, _push, _parent, _attrs) => {
      var _a;
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: unref(cn)("w-full h-[400px] flex flex-col items-end", (_a = _ctx.$attrs.class) != null ? _a : "")
      }, _attrs))}>`);
      if (_ctx.showLegend) {
        _push(ssrRenderComponent(unref(_sfc_main$3), {
          items: legendItems.value,
          "onUpdate:items": ($event) => legendItems.value = $event,
          onLegendItemClick: handleLegendItemClick
        }, null, _parent));
      } else {
        _push(`<!---->`);
      }
      _push(ssrRenderComponent(unref(VisXYContainer), {
        margin: { left: 20, right: 20 },
        data: _ctx.data,
        style: { height: unref(isMounted) ? "100%" : "auto" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          var _a2, _b;
          if (_push2) {
            if (_ctx.showTooltip) {
              _push2(ssrRenderComponent(unref(_sfc_main$4), {
                colors: colors.value,
                items: legendItems.value,
                index: index.value,
                "custom-tooltip": _ctx.customTooltip
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            _push2(`<!--[-->`);
            ssrRenderList(_ctx.categories, (category, i) => {
              var _a3;
              _push2(ssrRenderComponent(unref(VisLine), {
                x: (d, i2) => i2,
                y: (d) => d[category],
                "curve-type": _ctx.curveType,
                color: colors.value[i],
                attributes: {
                  [unref(Line).selectors.line]: {
                    opacity: ((_a3 = legendItems.value.find((item) => item.name === category)) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1
                  }
                }
              }, null, _parent2, _scopeId));
            });
            _push2(`<!--]-->`);
            if (_ctx.showXAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "x",
                "tick-format": (_a2 = _ctx.xFormatter) != null ? _a2 : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            if (_ctx.showYAxis) {
              _push2(ssrRenderComponent(unref(VisAxis), {
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, _parent2, _scopeId));
            } else {
              _push2(`<!---->`);
            }
            ssrRenderSlot(_ctx.$slots, "default", {}, null, _push2, _parent2, _scopeId);
          } else {
            return [
              _ctx.showTooltip ? (openBlock(), createBlock(unref(_sfc_main$4), {
                key: 0,
                colors: colors.value,
                items: legendItems.value,
                index: index.value,
                "custom-tooltip": _ctx.customTooltip
              }, null, 8, ["colors", "items", "index", "custom-tooltip"])) : createCommentVNode("", true),
              (openBlock(true), createBlock(Fragment, null, renderList(_ctx.categories, (category, i) => {
                var _a3;
                return openBlock(), createBlock(unref(VisLine), {
                  key: category,
                  x: (d, i2) => i2,
                  y: (d) => d[category],
                  "curve-type": _ctx.curveType,
                  color: colors.value[i],
                  attributes: {
                    [unref(Line).selectors.line]: {
                      opacity: ((_a3 = legendItems.value.find((item) => item.name === category)) == null ? void 0 : _a3.inactive) ? _ctx.filterOpacity : 1
                    }
                  }
                }, null, 8, ["x", "y", "curve-type", "color", "attributes"]);
              }), 128)),
              _ctx.showXAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 1,
                type: "x",
                "tick-format": (_b = _ctx.xFormatter) != null ? _b : (v) => {
                  var _a3;
                  return (_a3 = _ctx.data[v]) == null ? void 0 : _a3[index.value];
                },
                "grid-line": false,
                "tick-line": false,
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format"])) : createCommentVNode("", true),
              _ctx.showYAxis ? (openBlock(), createBlock(unref(VisAxis), {
                key: 2,
                type: "y",
                "tick-line": false,
                "tick-format": _ctx.yFormatter,
                "domain-line": false,
                "grid-line": _ctx.showGridLine,
                attributes: {
                  [unref(Axis).selectors.grid]: {
                    class: "text-muted"
                  }
                },
                "tick-text-color": "hsl(var(--vis-text-color))"
              }, null, 8, ["tick-format", "grid-line", "attributes"])) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "default")
            ];
          }
        }),
        _: 3
      }, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/ui/chart-line/LineChart.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Bosh sahifa"
    });
    useAuth();
    const isLoading = ref(false);
    const data = ref([
      {
        date: "15-10-2024",
        "Ishga kelgan xodimlar": 426
      },
      {
        date: "16-10-2024",
        "Ishga kelgan xodimlar": 406
      },
      {
        date: "17-10-2024",
        "Ishga kelgan xodimlar": 406
      },
      {
        date: "18-10-2024",
        "Ishga kelgan xodimlar": 406
      },
      {
        date: "19-10-2024",
        "Ishga kelgan xodimlar": 466
      },
      {
        date: "20-10-2024",
        "Ishga kelgan xodimlar": 567
      },
      {
        date: "21-10-2024",
        "Ishga kelgan xodimlar": 499
      },
      {
        date: "22-10-2024",
        "Ishga kelgan xodimlar": 534
      },
      {
        date: "23-10-2024",
        "Ishga kelgan xodimlar": 400
      },
      {
        date: "24-10-2024",
        "Ishga kelgan xodimlar": 478
      },
      {
        date: "25-10-2024",
        "Ishga kelgan xodimlar": 501
      }
    ]);
    const reports = ref();
    const employees = ref();
    const departments = ref();
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Card = _sfc_main$3$1;
      const _component_CardHeader = _sfc_main$2$1;
      const _component_CardTitle = _sfc_main$1$1;
      const _component_CardContent = _sfc_main$5;
      const _component_Table = _sfc_main$5$1;
      const _component_TableHeader = _sfc_main$1$2;
      const _component_TableHead = _sfc_main$2$2;
      const _component_TableBody = _sfc_main$4$1;
      const _component_TableRow = _sfc_main$6;
      const _component_TableCell = _sfc_main$3$2;
      const _component_Skeleton = _sfc_main$7;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5 p-5 md:p-10" }, _attrs))}><div class="flex flex-col md:flex-row gap-5">`);
      _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Xodimlar soni`);
                      } else {
                        return [
                          createTextVNode("Xodimlar soni")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Xodimlar soni")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><p${_scopeId2}>${ssrInterpolate((_a = unref(employees)) == null ? void 0 : _a.length)}</p>`);
                  _push3(ssrRenderComponent(unref(LucideUsers), null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", null, toDisplayString((_b = unref(employees)) == null ? void 0 : _b.length), 1),
                      createVNode(unref(LucideUsers))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Xodimlar soni")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", null, toDisplayString((_a = unref(employees)) == null ? void 0 : _a.length), 1),
                      createVNode(unref(LucideUsers))
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Card, { class: "w-full" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;limlar soni`);
                      } else {
                        return [
                          createTextVNode("Bo'limlar soni")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Bo'limlar soni")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                var _a, _b;
                if (_push3) {
                  _push3(`<div class="flex items-center justify-between"${_scopeId2}><p${_scopeId2}>${ssrInterpolate((_a = unref(departments)) == null ? void 0 : _a.length)}</p>`);
                  _push3(ssrRenderComponent(unref(LucideLayers), null, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", null, toDisplayString((_b = unref(departments)) == null ? void 0 : _b.length), 1),
                      createVNode(unref(LucideLayers))
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(_component_CardHeader, null, {
                default: withCtx(() => [
                  createVNode(_component_CardTitle, null, {
                    default: withCtx(() => [
                      createTextVNode("Bo'limlar soni")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => {
                  var _a;
                  return [
                    createVNode("div", { class: "flex items-center justify-between" }, [
                      createVNode("p", null, toDisplayString((_a = unref(departments)) == null ? void 0 : _a.length), 1),
                      createVNode(unref(LucideLayers))
                    ])
                  ];
                }),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col md:flex-row gap-5"><div class="w-full flex flex-col gap-3 overflow-x-auto"><p class="text-2xl">Tug&#39;ilgan kunlar</p><div class="w-full border rounded-md overflow-x-auto">`);
      _push(ssrRenderComponent(_component_Table, { class: "whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableHead, { class: "w-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#`);
                      } else {
                        return [
                          createTextVNode("#")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ism, familiya`);
                      } else {
                        return [
                          createTextVNode("Ism, familiya")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;lim`);
                      } else {
                        return [
                          createTextVNode("Bo'lim")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tug&#39;ilgan kuni`);
                      } else {
                        return [
                          createTextVNode("Tug'ilgan kuni")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                        createTextVNode("Ism, familiya")
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
                        createTextVNode("Tug'ilgan kuni")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(employees), (employee, index) => {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(index + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(employee.first_name)} ${ssrInterpolate(employee.last_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(employee.department.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(employee.department.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(employee.birth_date)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(employee.birth_date), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                                createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name), 1)
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
                                createTextVNode(toDisplayString(employee.birth_date), 1)
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  if (unref(isLoading)) {
                    _push3(`<!--[-->`);
                    ssrRenderList(10, (_3) => {
                      _push3(ssrRenderComponent(_component_TableRow, null, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
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
                              })
                            ];
                          }
                        }),
                        _: 2
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
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
                              createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name), 1)
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
                              createTextVNode(toDisplayString(employee.birth_date), 1)
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
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
                          })
                        ]),
                        _: 1
                      });
                    }), 64)) : createCommentVNode("", true)
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
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
                      createTextVNode("Ism, familiya")
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
                      createTextVNode("Tug'ilgan kuni")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(employees), (employee, index) => {
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
                            createTextVNode(toDisplayString(employee.first_name) + " " + toDisplayString(employee.last_name), 1)
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
                            createTextVNode(toDisplayString(employee.birth_date), 1)
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
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
      }, _parent));
      _push(`</div></div><div class="w-full flex flex-col gap-3 overflow-x-auto"><p class="text-2xl">Statistika</p><div class="w-full border rounded-md overflow-x-auto">`);
      _push(ssrRenderComponent(_sfc_main$1, {
        data: unref(data),
        index: "date",
        categories: ["Ishga kelgan xodimlar"]
      }, null, _parent));
      _push(`</div></div></div><div class="w-full flex flex-col gap-3"><p class="text-2xl">Bugungi hisobotlar</p><div class="border rounded-md overflow-x-auto">`);
      _push(ssrRenderComponent(_component_Table, { class: "whitespace-nowrap" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_TableHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_TableHead, { class: "w-4" }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`#`);
                      } else {
                        return [
                          createTextVNode("#")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ism, familiyasi`);
                      } else {
                        return [
                          createTextVNode("Ism, familiyasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bo&#39;limi`);
                      } else {
                        return [
                          createTextVNode("Bo'limi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Lavozimi`);
                      } else {
                        return [
                          createTextVNode("Lavozimi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tel raqami`);
                      } else {
                        return [
                          createTextVNode("Tel raqami")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Bino`);
                      } else {
                        return [
                          createTextVNode("Bino")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Vaqt`);
                      } else {
                        return [
                          createTextVNode("Vaqt")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Holati`);
                      } else {
                        return [
                          createTextVNode("Holati")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_TableHead, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Rasm`);
                      } else {
                        return [
                          createTextVNode("Rasm")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
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
                        createTextVNode("Ism, familiyasi")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Bo'limi")
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
                        createTextVNode("Bino")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Vaqt")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Holati")
                      ]),
                      _: 1
                    }),
                    createVNode(_component_TableHead, null, {
                      default: withCtx(() => [
                        createTextVNode("Rasm")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_TableBody, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<!--[-->`);
                  ssrRenderList(unref(reports), (report, index) => {
                    _push3(ssrRenderComponent(_component_TableRow, null, {
                      default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                        if (_push4) {
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(index + 1)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(index + 1), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(report.employee.first_name)} ${ssrInterpolate(report.employee.last_name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(report.employee.first_name) + " " + toDisplayString(report.employee.last_name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(report.employee.department.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(report.employee.department.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(report.employee.position)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(report.employee.position), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(report.employee.phone)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(report.employee.phone), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(report.area.name)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(report.area.name), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(report.created)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(report.created), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`${ssrInterpolate(report.status)}`);
                              } else {
                                return [
                                  createTextVNode(toDisplayString(report.status), 1)
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
                          _push4(ssrRenderComponent(_component_TableCell, null, {
                            default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                              if (_push5) {
                                _push5(`<img class="w-4 h-4 rounded"${ssrRenderAttr("src", report.image)} alt=""${_scopeId4}>`);
                              } else {
                                return [
                                  createVNode("img", {
                                    class: "w-4 h-4 rounded",
                                    src: report.image,
                                    alt: ""
                                  }, null, 8, ["src"])
                                ];
                              }
                            }),
                            _: 2
                          }, _parent4, _scopeId3));
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
                                createTextVNode(toDisplayString(report.employee.first_name) + " " + toDisplayString(report.employee.last_name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(report.employee.department.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(report.employee.position), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(report.employee.phone), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(report.area.name), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(report.created), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createTextVNode(toDisplayString(report.status), 1)
                              ]),
                              _: 2
                            }, 1024),
                            createVNode(_component_TableCell, null, {
                              default: withCtx(() => [
                                createVNode("img", {
                                  class: "w-4 h-4 rounded",
                                  src: report.image,
                                  alt: ""
                                }, null, 8, ["src"])
                              ]),
                              _: 2
                            }, 1024)
                          ];
                        }
                      }),
                      _: 2
                    }, _parent3, _scopeId2));
                  });
                  _push3(`<!--]-->`);
                  if (unref(isLoading)) {
                    _push3(`<!--[-->`);
                    ssrRenderList(10, (_3) => {
                      _push3(ssrRenderComponent(_component_TableRow, null, {
                        default: withCtx((_4, _push4, _parent4, _scopeId3) => {
                          if (_push4) {
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-4 h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-4 h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-full h-4" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-full h-4" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
                            _push4(ssrRenderComponent(_component_TableCell, null, {
                              default: withCtx((_5, _push5, _parent5, _scopeId4) => {
                                if (_push5) {
                                  _push5(ssrRenderComponent(_component_Skeleton, { class: "w-6 h-6" }, null, _parent5, _scopeId4));
                                } else {
                                  return [
                                    createVNode(_component_Skeleton, { class: "w-6 h-6" })
                                  ];
                                }
                              }),
                              _: 2
                            }, _parent4, _scopeId3));
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
                      }, _parent3, _scopeId2));
                    });
                    _push3(`<!--]-->`);
                  } else {
                    _push3(`<!---->`);
                  }
                } else {
                  return [
                    (openBlock(true), createBlock(Fragment, null, renderList(unref(reports), (report, index) => {
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
                              createTextVNode(toDisplayString(report.employee.first_name) + " " + toDisplayString(report.employee.last_name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(report.employee.department.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(report.employee.position), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(report.employee.phone), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(report.area.name), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(report.created), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createTextVNode(toDisplayString(report.status), 1)
                            ]),
                            _: 2
                          }, 1024),
                          createVNode(_component_TableCell, null, {
                            default: withCtx(() => [
                              createVNode("img", {
                                class: "w-4 h-4 rounded",
                                src: report.image,
                                alt: ""
                              }, null, 8, ["src"])
                            ]),
                            _: 2
                          }, 1024)
                        ]),
                        _: 2
                      }, 1024);
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
            }, _parent2, _scopeId));
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
                      createTextVNode("Ism, familiyasi")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Bo'limi")
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
                      createTextVNode("Bino")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Vaqt")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Holati")
                    ]),
                    _: 1
                  }),
                  createVNode(_component_TableHead, null, {
                    default: withCtx(() => [
                      createTextVNode("Rasm")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_TableBody, null, {
                default: withCtx(() => [
                  (openBlock(true), createBlock(Fragment, null, renderList(unref(reports), (report, index) => {
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
                            createTextVNode(toDisplayString(report.employee.first_name) + " " + toDisplayString(report.employee.last_name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(report.employee.department.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(report.employee.position), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(report.employee.phone), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(report.area.name), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(report.created), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createTextVNode(toDisplayString(report.status), 1)
                          ]),
                          _: 2
                        }, 1024),
                        createVNode(_component_TableCell, null, {
                          default: withCtx(() => [
                            createVNode("img", {
                              class: "w-4 h-4 rounded",
                              src: report.image,
                              alt: ""
                            }, null, 8, ["src"])
                          ]),
                          _: 2
                        }, 1024)
                      ]),
                      _: 2
                    }, 1024);
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
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Cq-KYUlR.mjs.map
