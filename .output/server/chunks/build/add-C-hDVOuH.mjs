import { _ as _sfc_main$3, a as _sfc_main$2, b as _sfc_main$1$1, c as _sfc_main$4 } from './CardContent-C0SSYmJG.mjs';
import { _ as _sfc_main$1$2, a as _sfc_main$5 } from './Input-Cj1luoh3.mjs';
import { _ as _sfc_main$6, a as _sfc_main$4$1, b as _sfc_main$5$1, c as _sfc_main$3$1, d as _sfc_main$2$1 } from './SelectScrollDownButton-DwTW1Yrq.mjs';
import { defineComponent, ref, mergeProps, withCtx, createTextVNode, createVNode, unref, withDirectives, toDisplayString, openBlock, createBlock, Fragment, renderList, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrGetDirectiveProps, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as apify } from './useAPI-C-AfzH2x.mjs';
import { vMaska } from 'maska/vue';
import { useUserMedia } from '@vueuse/core';
import { toast } from 'vue-sonner';
import { u as useHead, a as useRoute, n as navigateTo } from './server.mjs';
import { u as useAuth } from './useAuth-hQZ-v8Ol.mjs';
import { _ as _sfc_main$1 } from './Button-kc8BLKv4.mjs';
import './index-CmPE4-O1.mjs';
import 'clsx';
import 'tailwind-merge';
import 'class-variance-authority';
import 'radix-vue';
import '@radix-icons/vue';
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
  __name: "add",
  __ssrInlineRender: true,
  setup(__props) {
    useHead({
      title: "Xodim qo'shish"
    });
    useRoute();
    const { token } = useAuth();
    useUserMedia();
    const employee = ref({
      id: 0,
      uuid: "",
      first_name: "",
      last_name: "",
      middle_name: "",
      gender: "",
      nationality: "",
      birth_date: "",
      passport_number: "",
      passport_pinfl: "",
      passport_of_issue: "",
      state: "",
      province: "",
      district: "",
      address: "",
      department: {
        id: "1",
        name: "",
        employees: 0
      },
      position: "",
      specialist: "",
      scientific_title: "",
      academic_degree: "",
      email: "",
      phone: "",
      image: ""
    });
    const departments = ref();
    const isLoading = ref(false);
    const provincesList = ref([
      "Andijon",
      "Buxoro",
      "Farg'ona",
      "Jizzax",
      "Namangan",
      "Navoiy",
      "Qashqadaryo",
      "Qoraqalpog'iston Respublikasi",
      "Samarqand",
      "Sirdaryo",
      "Surxondaryo",
      "Toshkent",
      "Toshkent shahri",
      "Xorazm"
    ]);
    const countries = ref([
      {
        "name": "O'zbekiston",
        "flag": "\u{1F1FA}\u{1F1FF}"
      },
      {
        "name": "Rossiya",
        "flag": "\u{1F1F7}\u{1F1FA}"
      },
      {
        "name": "Qozog'iston",
        "flag": "\u{1F1F0}\u{1F1FF}"
      },
      {
        "name": "Tojikiston",
        "flag": "\u{1F1F9}\u{1F1EF}"
      }
    ]);
    const addEmployee = async () => {
      let image = (void 0).getElementById("image");
      isLoading.value = true;
      const form = new FormData();
      if (employee.value) {
        form.append("first_name", employee.value.first_name);
        form.append("last_name", employee.value.last_name);
        form.append("middle_name", employee.value.middle_name);
        form.append("gender", employee.value.gender);
        form.append("nationality", employee.value.nationality);
        form.append("birth_date", employee.value.birth_date);
        form.append("passport_number", employee.value.passport_number);
        form.append("passport_pinfl", employee.value.passport_pinfl);
        form.append("passport_of_issue", employee.value.passport_of_issue);
        form.append("state", employee.value.state || "");
        form.append("province", employee.value.province || "");
        form.append("district", employee.value.district || "");
        form.append("address", employee.value.address || "");
        form.append("phone", employee.value.phone || "");
        form.append("department", employee.value.department.id);
        form.append("position", employee.value.position);
        form.append("specialist", employee.value.specialist || "");
        form.append("scientific_title", employee.value.scientific_title || "");
        form.append("academic_degree", employee.value.academic_degree || "");
        if (image && image.files) {
          form.append("image", image.files[0]);
        }
      }
      let response = await $fetch(apify(`employees/create/`), {
        method: "POST",
        body: form,
        headers: {
          "Authorization": `Token ${token}`
        }
      });
      if (response.status === "success") {
        if (response.data) {
          navigateTo({ name: "admin-employees-uuid", params: { uuid: response.data } });
        }
      } else {
        toast("Ogohlantirish", {
          description: "Majburiy maydonlarni to'diring"
        });
      }
      console.log(form);
      isLoading.value = false;
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Button = _sfc_main$1;
      const _component_Card = _sfc_main$3;
      const _component_CardHeader = _sfc_main$2;
      const _component_CardTitle = _sfc_main$1$1;
      const _component_CardContent = _sfc_main$4;
      const _component_Label = _sfc_main$1$2;
      const _component_Input = _sfc_main$5;
      const _component_Select = _sfc_main$6;
      const _component_SelectTrigger = _sfc_main$4$1;
      const _component_SelectValue = _sfc_main$5$1;
      const _component_SelectContent = _sfc_main$3$1;
      const _component_SelectItem = _sfc_main$2$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col gap-5 p-5 md:p-10" }, _attrs))}><div class="flex items-center justify-between"><p class="text-2xl">Yangi xodim qo&#39;shish</p>`);
      _push(ssrRenderComponent(_component_Button, { onClick: addEmployee }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Saqlash`);
          } else {
            return [
              createTextVNode("Saqlash")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="flex flex-col gap-5"><div class="flex flex-col md:flex-row gap-5">`);
      _push(ssrRenderComponent(_component_Card, { class: "flex-1 bg-accent/10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Shaxsiy ma&#39;lumotlari`);
                      } else {
                        return [
                          createTextVNode("Shaxsiy ma'lumotlari")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Shaxsiy ma'lumotlari")
                      ]),
                      _: 1
                    })
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_CardContent, { class: "flex flex-col gap-5" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ismi`);
                      } else {
                        return [
                          createTextVNode("Ismi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).first_name,
                    "onUpdate:modelValue": ($event) => unref(employee).first_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Familiyasi`);
                      } else {
                        return [
                          createTextVNode("Familiyasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).last_name,
                    "onUpdate:modelValue": ($event) => unref(employee).last_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Sharifi`);
                      } else {
                        return [
                          createTextVNode("Sharifi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).middle_name,
                    "onUpdate:modelValue": ($event) => unref(employee).middle_name = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Jinsi`);
                      } else {
                        return [
                          createTextVNode("Jinsi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(employee).gender,
                    "onUpdate:modelValue": ($event) => unref(employee).gender = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Jinsini tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "Erkak" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Erkak`);
                                  } else {
                                    return [
                                      createTextVNode("Erkak")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                              _push5(ssrRenderComponent(_component_SelectItem, { value: "Ayol" }, {
                                default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                  if (_push6) {
                                    _push6(`Ayol`);
                                  } else {
                                    return [
                                      createTextVNode("Ayol")
                                    ];
                                  }
                                }),
                                _: 1
                              }, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectItem, { value: "Erkak" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Erkak")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "Ayol" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ayol")
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
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "Erkak" }, {
                                default: withCtx(() => [
                                  createTextVNode("Erkak")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "Ayol" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ayol")
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
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Millati`);
                      } else {
                        return [
                          createTextVNode("Millati")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).nationality,
                    "onUpdate:modelValue": ($event) => unref(employee).nationality = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tug&#39;ilgan sanasi`);
                      } else {
                        return [
                          createTextVNode("Tug'ilgan sanasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, mergeProps({
                    modelValue: unref(employee).birth_date,
                    "onUpdate:modelValue": ($event) => unref(employee).birth_date = $event
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), "##-##-####")), null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Passport raqami`);
                      } else {
                        return [
                          createTextVNode("Passport raqami")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, mergeProps({
                    "data-maska": "AA-#######",
                    "data-maska-tokens": "A:[a-zA-Z]",
                    modelValue: unref(employee).passport_number,
                    "onUpdate:modelValue": ($event) => unref(employee).passport_number = $event
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska))), null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`JShShR`);
                      } else {
                        return [
                          createTextVNode("JShShR")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, mergeProps({
                    modelValue: unref(employee).passport_pinfl,
                    "onUpdate:modelValue": ($event) => unref(employee).passport_pinfl = $event
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), "##############")), null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Passport amal qilish sanasi`);
                      } else {
                        return [
                          createTextVNode("Passport amal qilish sanasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, mergeProps({
                    "data-maska": "##-##-####",
                    modelValue: unref(employee).passport_of_issue,
                    "onUpdate:modelValue": ($event) => unref(employee).passport_of_issue = $event
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska))), null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Ismi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).first_name,
                          "onUpdate:modelValue": ($event) => unref(employee).first_name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Familiyasi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).last_name,
                          "onUpdate:modelValue": ($event) => unref(employee).last_name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Sharifi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).middle_name,
                          "onUpdate:modelValue": ($event) => unref(employee).middle_name = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Jinsi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Select, {
                          modelValue: unref(employee).gender,
                          "onUpdate:modelValue": ($event) => unref(employee).gender = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectContent, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectItem, { value: "Erkak" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Erkak")
                                  ]),
                                  _: 1
                                }),
                                createVNode(_component_SelectItem, { value: "Ayol" }, {
                                  default: withCtx(() => [
                                    createTextVNode("Ayol")
                                  ]),
                                  _: 1
                                })
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Millati")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).nationality,
                          "onUpdate:modelValue": ($event) => unref(employee).nationality = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Tug'ilgan sanasi")
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode(_component_Input, {
                          modelValue: unref(employee).birth_date,
                          "onUpdate:modelValue": ($event) => unref(employee).birth_date = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                          [unref(vMaska), "##-##-####"]
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Passport raqami")
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode(_component_Input, {
                          "data-maska": "AA-#######",
                          "data-maska-tokens": "A:[a-zA-Z]",
                          modelValue: unref(employee).passport_number,
                          "onUpdate:modelValue": ($event) => unref(employee).passport_number = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                          [unref(vMaska)]
                        ])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("JShShR")
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode(_component_Input, {
                          modelValue: unref(employee).passport_pinfl,
                          "onUpdate:modelValue": ($event) => unref(employee).passport_pinfl = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                          [unref(vMaska), "##############"]
                        ])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Passport amal qilish sanasi")
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode(_component_Input, {
                          "data-maska": "##-##-####",
                          modelValue: unref(employee).passport_of_issue,
                          "onUpdate:modelValue": ($event) => unref(employee).passport_of_issue = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                          [unref(vMaska)]
                        ])
                      ])
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
                      createTextVNode("Shaxsiy ma'lumotlari")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, { class: "flex flex-col gap-5" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Ismi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).first_name,
                        "onUpdate:modelValue": ($event) => unref(employee).first_name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Familiyasi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).last_name,
                        "onUpdate:modelValue": ($event) => unref(employee).last_name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Sharifi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).middle_name,
                        "onUpdate:modelValue": ($event) => unref(employee).middle_name = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Jinsi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(employee).gender,
                        "onUpdate:modelValue": ($event) => unref(employee).gender = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Jinsini tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectItem, { value: "Erkak" }, {
                                default: withCtx(() => [
                                  createTextVNode("Erkak")
                                ]),
                                _: 1
                              }),
                              createVNode(_component_SelectItem, { value: "Ayol" }, {
                                default: withCtx(() => [
                                  createTextVNode("Ayol")
                                ]),
                                _: 1
                              })
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Millati")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).nationality,
                        "onUpdate:modelValue": ($event) => unref(employee).nationality = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Tug'ilgan sanasi")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode(_component_Input, {
                        modelValue: unref(employee).birth_date,
                        "onUpdate:modelValue": ($event) => unref(employee).birth_date = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [unref(vMaska), "##-##-####"]
                      ])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Passport raqami")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode(_component_Input, {
                        "data-maska": "AA-#######",
                        "data-maska-tokens": "A:[a-zA-Z]",
                        modelValue: unref(employee).passport_number,
                        "onUpdate:modelValue": ($event) => unref(employee).passport_number = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [unref(vMaska)]
                      ])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("JShShR")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode(_component_Input, {
                        modelValue: unref(employee).passport_pinfl,
                        "onUpdate:modelValue": ($event) => unref(employee).passport_pinfl = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [unref(vMaska), "##############"]
                      ])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Passport amal qilish sanasi")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode(_component_Input, {
                        "data-maska": "##-##-####",
                        modelValue: unref(employee).passport_of_issue,
                        "onUpdate:modelValue": ($event) => unref(employee).passport_of_issue = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [unref(vMaska)]
                      ])
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
      _push(ssrRenderComponent(_component_Card, { class: "bg-accent/10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
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
                    createVNode(_component_CardTitle, null, {
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
            _push2(ssrRenderComponent(_component_CardContent, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="w-full md:w-56 flex flex-col gap-5"${_scopeId2}><img id="output" class="w-56 h-56 border rounded"${ssrRenderAttr("src", unref(employee).image)} alt=""${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Input, {
                    id: "image",
                    type: "file",
                    accept: "image/*"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div>`);
                } else {
                  return [
                    createVNode("div", { class: "w-full md:w-56 flex flex-col gap-5" }, [
                      createVNode("img", {
                        id: "output",
                        class: "w-56 h-56 border rounded",
                        src: unref(employee).image,
                        alt: ""
                      }, null, 8, ["src"]),
                      createVNode(_component_Input, {
                        id: "image",
                        type: "file",
                        accept: "image/*"
                      })
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
                      createTextVNode("Rasm")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "w-full md:w-56 flex flex-col gap-5" }, [
                    createVNode("img", {
                      id: "output",
                      class: "w-56 h-56 border rounded",
                      src: unref(employee).image,
                      alt: ""
                    }, null, 8, ["src"]),
                    createVNode(_component_Input, {
                      id: "image",
                      type: "file",
                      accept: "image/*"
                    })
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
      _push(ssrRenderComponent(_component_Card, { class: "bg-accent/10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Manzil`);
                      } else {
                        return [
                          createTextVNode("Manzil")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Manzil")
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
                if (_push3) {
                  _push3(`<div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Davlat`);
                      } else {
                        return [
                          createTextVNode("Davlat")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(employee).state,
                    "onUpdate:modelValue": ($event) => unref(employee).state = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Davlatni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(countries), (state) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  value: state.name
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(state.flag)} ${ssrInterpolate(state.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(state.flag) + " " + toDisplayString(state.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(countries), (state) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: state.name
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(state.flag) + " " + toDisplayString(state.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(countries), (state) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: state.name
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(state.flag) + " " + toDisplayString(state.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Viloyat`);
                      } else {
                        return [
                          createTextVNode("Viloyat")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(employee).province,
                    "onUpdate:modelValue": ($event) => unref(employee).province = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Viloyatni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(provincesList), (province) => {
                                _push5(ssrRenderComponent(_component_SelectItem, { value: province }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(province)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(province), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(provincesList), (province) => {
                                  return openBlock(), createBlock(_component_SelectItem, { value: province }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(province), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(provincesList), (province) => {
                                return openBlock(), createBlock(_component_SelectItem, { value: province }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(province), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Tuman`);
                      } else {
                        return [
                          createTextVNode("Tuman")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).district,
                    "onUpdate:modelValue": ($event) => unref(employee).district = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Manzil`);
                      } else {
                        return [
                          createTextVNode("Manzil")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).address,
                    "onUpdate:modelValue": ($event) => unref(employee).address = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Davlat")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Select, {
                          modelValue: unref(employee).state,
                          "onUpdate:modelValue": ($event) => unref(employee).state = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(countries), (state) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: state.name
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(state.flag) + " " + toDisplayString(state.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Viloyat")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Select, {
                          modelValue: unref(employee).province,
                          "onUpdate:modelValue": ($event) => unref(employee).province = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(provincesList), (province) => {
                                  return openBlock(), createBlock(_component_SelectItem, { value: province }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(province), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Tuman")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).district,
                          "onUpdate:modelValue": ($event) => unref(employee).district = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Manzil")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).address,
                          "onUpdate:modelValue": ($event) => unref(employee).address = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
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
                      createTextVNode("Manzil")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Davlat")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(employee).state,
                        "onUpdate:modelValue": ($event) => unref(employee).state = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Davlatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(countries), (state) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: state.name
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(state.flag) + " " + toDisplayString(state.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Viloyat")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(employee).province,
                        "onUpdate:modelValue": ($event) => unref(employee).province = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Viloyatni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(provincesList), (province) => {
                                return openBlock(), createBlock(_component_SelectItem, { value: province }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(province), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Tuman")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).district,
                        "onUpdate:modelValue": ($event) => unref(employee).district = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Manzil")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).address,
                        "onUpdate:modelValue": ($event) => unref(employee).address = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
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
      _push(ssrRenderComponent(_component_Card, { class: "bg-accent/10" }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(_component_CardHeader, null, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(ssrRenderComponent(_component_CardTitle, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Qo&#39;shimcha ma&#39;lumotlar`);
                      } else {
                        return [
                          createTextVNode("Qo'shimcha ma'lumotlar")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                } else {
                  return [
                    createVNode(_component_CardTitle, null, {
                      default: withCtx(() => [
                        createTextVNode("Qo'shimcha ma'lumotlar")
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
                if (_push3) {
                  _push3(`<div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Department`);
                      } else {
                        return [
                          createTextVNode("Department")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Select, {
                    modelValue: unref(employee).department.id,
                    "onUpdate:modelValue": ($event) => unref(employee).department.id = $event
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(ssrRenderComponent(_component_SelectTrigger, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(ssrRenderComponent(_component_SelectValue, { placeholder: "Bo'limni tanlang" }, null, _parent5, _scopeId4));
                            } else {
                              return [
                                createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                        _push4(ssrRenderComponent(_component_SelectContent, null, {
                          default: withCtx((_4, _push5, _parent5, _scopeId4) => {
                            if (_push5) {
                              _push5(`<!--[-->`);
                              ssrRenderList(unref(departments), (department) => {
                                _push5(ssrRenderComponent(_component_SelectItem, {
                                  value: department.id
                                }, {
                                  default: withCtx((_5, _push6, _parent6, _scopeId5) => {
                                    if (_push6) {
                                      _push6(`${ssrInterpolate(department.name)}`);
                                    } else {
                                      return [
                                        createTextVNode(toDisplayString(department.name), 1)
                                      ];
                                    }
                                  }),
                                  _: 2
                                }, _parent5, _scopeId4));
                              });
                              _push5(`<!--]-->`);
                            } else {
                              return [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: department.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(department.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ];
                            }
                          }),
                          _: 1
                        }, _parent4, _scopeId3));
                      } else {
                        return [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: department.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(department.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
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
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).position,
                    "onUpdate:modelValue": ($event) => unref(employee).position = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Mutaxasisligi`);
                      } else {
                        return [
                          createTextVNode("Mutaxasisligi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).specialist,
                    "onUpdate:modelValue": ($event) => unref(employee).specialist = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Ilmiy unvoni`);
                      } else {
                        return [
                          createTextVNode("Ilmiy unvoni")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).scientific_title,
                    "onUpdate:modelValue": ($event) => unref(employee).scientific_title = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex flex-col md:flex-row gap-5"${_scopeId2}><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Akademik darajasi`);
                      } else {
                        return [
                          createTextVNode("Akademik darajasi")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, {
                    modelValue: unref(employee).academic_degree,
                    "onUpdate:modelValue": ($event) => unref(employee).academic_degree = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Label, null, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(`Telefon raqami`);
                      } else {
                        return [
                          createTextVNode("Telefon raqami")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Input, mergeProps({
                    modelValue: unref(employee).phone,
                    "onUpdate:modelValue": ($event) => unref(employee).phone = $event
                  }, ssrGetDirectiveProps(_ctx, unref(vMaska), "+998 (##) - ### - ## - ##")), null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Department")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Select, {
                          modelValue: unref(employee).department.id,
                          "onUpdate:modelValue": ($event) => unref(employee).department.id = $event
                        }, {
                          default: withCtx(() => [
                            createVNode(_component_SelectTrigger, null, {
                              default: withCtx(() => [
                                createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
                              ]),
                              _: 1
                            }),
                            createVNode(_component_SelectContent, null, {
                              default: withCtx(() => [
                                (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                  return openBlock(), createBlock(_component_SelectItem, {
                                    value: department.id
                                  }, {
                                    default: withCtx(() => [
                                      createTextVNode(toDisplayString(department.name), 1)
                                    ]),
                                    _: 2
                                  }, 1032, ["value"]);
                                }), 256))
                              ]),
                              _: 1
                            })
                          ]),
                          _: 1
                        }, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Lavozimi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).position,
                          "onUpdate:modelValue": ($event) => unref(employee).position = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Mutaxasisligi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).specialist,
                          "onUpdate:modelValue": ($event) => unref(employee).specialist = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Ilmiy unvoni")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).scientific_title,
                          "onUpdate:modelValue": ($event) => unref(employee).scientific_title = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ])
                    ]),
                    createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Akademik darajasi")
                          ]),
                          _: 1
                        }),
                        createVNode(_component_Input, {
                          modelValue: unref(employee).academic_degree,
                          "onUpdate:modelValue": ($event) => unref(employee).academic_degree = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"])
                      ]),
                      createVNode("div", { class: "w-full" }, [
                        createVNode(_component_Label, null, {
                          default: withCtx(() => [
                            createTextVNode("Telefon raqami")
                          ]),
                          _: 1
                        }),
                        withDirectives(createVNode(_component_Input, {
                          modelValue: unref(employee).phone,
                          "onUpdate:modelValue": ($event) => unref(employee).phone = $event
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                          [unref(vMaska), "+998 (##) - ### - ## - ##"]
                        ])
                      ])
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
                      createTextVNode("Qo'shimcha ma'lumotlar")
                    ]),
                    _: 1
                  })
                ]),
                _: 1
              }),
              createVNode(_component_CardContent, null, {
                default: withCtx(() => [
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Department")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Select, {
                        modelValue: unref(employee).department.id,
                        "onUpdate:modelValue": ($event) => unref(employee).department.id = $event
                      }, {
                        default: withCtx(() => [
                          createVNode(_component_SelectTrigger, null, {
                            default: withCtx(() => [
                              createVNode(_component_SelectValue, { placeholder: "Bo'limni tanlang" })
                            ]),
                            _: 1
                          }),
                          createVNode(_component_SelectContent, null, {
                            default: withCtx(() => [
                              (openBlock(true), createBlock(Fragment, null, renderList(unref(departments), (department) => {
                                return openBlock(), createBlock(_component_SelectItem, {
                                  value: department.id
                                }, {
                                  default: withCtx(() => [
                                    createTextVNode(toDisplayString(department.name), 1)
                                  ]),
                                  _: 2
                                }, 1032, ["value"]);
                              }), 256))
                            ]),
                            _: 1
                          })
                        ]),
                        _: 1
                      }, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Lavozimi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).position,
                        "onUpdate:modelValue": ($event) => unref(employee).position = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Mutaxasisligi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).specialist,
                        "onUpdate:modelValue": ($event) => unref(employee).specialist = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Ilmiy unvoni")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).scientific_title,
                        "onUpdate:modelValue": ($event) => unref(employee).scientific_title = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ])
                  ]),
                  createVNode("div", { class: "flex flex-col md:flex-row gap-5" }, [
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Akademik darajasi")
                        ]),
                        _: 1
                      }),
                      createVNode(_component_Input, {
                        modelValue: unref(employee).academic_degree,
                        "onUpdate:modelValue": ($event) => unref(employee).academic_degree = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"])
                    ]),
                    createVNode("div", { class: "w-full" }, [
                      createVNode(_component_Label, null, {
                        default: withCtx(() => [
                          createTextVNode("Telefon raqami")
                        ]),
                        _: 1
                      }),
                      withDirectives(createVNode(_component_Input, {
                        modelValue: unref(employee).phone,
                        "onUpdate:modelValue": ($event) => unref(employee).phone = $event
                      }, null, 8, ["modelValue", "onUpdate:modelValue"]), [
                        [unref(vMaska), "+998 (##) - ### - ## - ##"]
                      ])
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
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/admin/employees/add.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=add-C-hDVOuH.mjs.map
