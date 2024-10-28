import { b as useRuntimeConfig } from './server.mjs';

function apify(url) {
  const config = useRuntimeConfig();
  return `${config.public.api}${url}`;
}

export { apify as a };
//# sourceMappingURL=useAPI-C-AfzH2x.mjs.map
