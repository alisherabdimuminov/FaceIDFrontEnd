import { u as useAuth } from './useAuth-hQZ-v8Ol.mjs';
import { d as defineNuxtRouteMiddleware, n as navigateTo } from './server.mjs';
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

const is_auth = defineNuxtRouteMiddleware((to, from) => {
  const { token, logout } = useAuth();
  if (token === "") {
    logout();
    return navigateTo({ name: "admin-auth-login" });
  }
});

export { is_auth as default };
//# sourceMappingURL=is.auth-C2L-sNEk.mjs.map
