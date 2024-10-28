import { d as defineNuxtRouteMiddleware, e as executeAsync, n as navigateTo } from './server.mjs';
import { a as apify } from './useAPI-C-AfzH2x.mjs';
import { u as useAuth } from './useAuth-hQZ-v8Ol.mjs';
import 'vue';
import '../runtime.mjs';
import 'node:http';
import 'node:https';
import 'node:fs';
import 'node:path';
import 'node:url';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'devalue';
import 'vue/server-renderer';
import '@unhead/ssr';
import 'unhead';
import '@unhead/shared';
import 'vue-router';
import 'vue-the-mask';

const employee_is_exists = defineNuxtRouteMiddleware(async (to, from) => {
  let __temp, __restore;
  const { token } = useAuth();
  try {
    let response = ([__temp, __restore] = executeAsync(() => $fetch(apify(`employees/employee/${to.params.uuid}/`), {
      headers: {
        "Authorization": `Token ${token}`
      }
    })), __temp = await __temp, __restore(), __temp);
  } catch {
    return navigateTo({ name: "admin" });
  }
});

export { employee_is_exists as default };
//# sourceMappingURL=employee.is.exists-Ch0o_Un8.mjs.map
