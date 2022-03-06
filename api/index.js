var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __markAsModule = (target) => __defProp(target, "__esModule", { value: true });
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __commonJS = (cb, mod) => function __require() {
  return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __reExport = (target, module2, copyDefault, desc) => {
  if (module2 && typeof module2 === "object" || typeof module2 === "function") {
    for (let key of __getOwnPropNames(module2))
      if (!__hasOwnProp.call(target, key) && (copyDefault || key !== "default"))
        __defProp(target, key, { get: () => module2[key], enumerable: !(desc = __getOwnPropDesc(module2, key)) || desc.enumerable });
  }
  return target;
};
var __toESM = (module2, isNodeMode) => {
  return __reExport(__markAsModule(__defProp(module2 != null ? __create(__getProtoOf(module2)) : {}, "default", !isNodeMode && module2 && module2.__esModule ? { get: () => module2.default, enumerable: true } : { value: module2, enumerable: true })), module2);
};
var __toCommonJS = /* @__PURE__ */ ((cache) => {
  return (module2, temp) => {
    return cache && cache.get(module2) || (temp = __reExport(__markAsModule({}), module2, 1), cache && cache.set(module2, temp), temp);
  };
})(typeof WeakMap !== "undefined" ? /* @__PURE__ */ new WeakMap() : 0);

// node_modules/@remix-run/dev/compiler/shims/react.ts
var React;
var init_react = __esm({
  "node_modules/@remix-run/dev/compiler/shims/react.ts"() {
    React = __toESM(require("react"));
  }
});

// node_modules/remix/index.js
var require_remix = __commonJS({
  "node_modules/remix/index.js"(exports) {
    "use strict";
    init_react();
    Object.defineProperty(exports, "__esModule", { value: true });
    var node = require("@remix-run/node");
    Object.defineProperty(exports, "createFileSessionStorage", {
      enumerable: true,
      get: function() {
        return node.createFileSessionStorage;
      }
    });
    Object.defineProperty(exports, "unstable_createFileUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createFileUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_createMemoryUploadHandler", {
      enumerable: true,
      get: function() {
        return node.unstable_createMemoryUploadHandler;
      }
    });
    Object.defineProperty(exports, "unstable_parseMultipartFormData", {
      enumerable: true,
      get: function() {
        return node.unstable_parseMultipartFormData;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var serverRuntime = require("@remix-run/server-runtime");
    Object.defineProperty(exports, "createCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookie;
      }
    });
    Object.defineProperty(exports, "createCookieSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createCookieSessionStorage;
      }
    });
    Object.defineProperty(exports, "createMemorySessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createMemorySessionStorage;
      }
    });
    Object.defineProperty(exports, "createSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSession;
      }
    });
    Object.defineProperty(exports, "createSessionStorage", {
      enumerable: true,
      get: function() {
        return serverRuntime.createSessionStorage;
      }
    });
    Object.defineProperty(exports, "isCookie", {
      enumerable: true,
      get: function() {
        return serverRuntime.isCookie;
      }
    });
    Object.defineProperty(exports, "isSession", {
      enumerable: true,
      get: function() {
        return serverRuntime.isSession;
      }
    });
    Object.defineProperty(exports, "json", {
      enumerable: true,
      get: function() {
        return serverRuntime.json;
      }
    });
    Object.defineProperty(exports, "redirect", {
      enumerable: true,
      get: function() {
        return serverRuntime.redirect;
      }
    });
    Object.defineProperty(exports, "__esModule", { value: true });
    var react = require("@remix-run/react");
    Object.defineProperty(exports, "Form", {
      enumerable: true,
      get: function() {
        return react.Form;
      }
    });
    Object.defineProperty(exports, "Link", {
      enumerable: true,
      get: function() {
        return react.Link;
      }
    });
    Object.defineProperty(exports, "Links", {
      enumerable: true,
      get: function() {
        return react.Links;
      }
    });
    Object.defineProperty(exports, "LiveReload", {
      enumerable: true,
      get: function() {
        return react.LiveReload;
      }
    });
    Object.defineProperty(exports, "Meta", {
      enumerable: true,
      get: function() {
        return react.Meta;
      }
    });
    Object.defineProperty(exports, "NavLink", {
      enumerable: true,
      get: function() {
        return react.NavLink;
      }
    });
    Object.defineProperty(exports, "Outlet", {
      enumerable: true,
      get: function() {
        return react.Outlet;
      }
    });
    Object.defineProperty(exports, "PrefetchPageLinks", {
      enumerable: true,
      get: function() {
        return react.PrefetchPageLinks;
      }
    });
    Object.defineProperty(exports, "RemixBrowser", {
      enumerable: true,
      get: function() {
        return react.RemixBrowser;
      }
    });
    Object.defineProperty(exports, "RemixServer", {
      enumerable: true,
      get: function() {
        return react.RemixServer;
      }
    });
    Object.defineProperty(exports, "Scripts", {
      enumerable: true,
      get: function() {
        return react.Scripts;
      }
    });
    Object.defineProperty(exports, "ScrollRestoration", {
      enumerable: true,
      get: function() {
        return react.ScrollRestoration;
      }
    });
    Object.defineProperty(exports, "useActionData", {
      enumerable: true,
      get: function() {
        return react.useActionData;
      }
    });
    Object.defineProperty(exports, "useBeforeUnload", {
      enumerable: true,
      get: function() {
        return react.useBeforeUnload;
      }
    });
    Object.defineProperty(exports, "useCatch", {
      enumerable: true,
      get: function() {
        return react.useCatch;
      }
    });
    Object.defineProperty(exports, "useFetcher", {
      enumerable: true,
      get: function() {
        return react.useFetcher;
      }
    });
    Object.defineProperty(exports, "useFetchers", {
      enumerable: true,
      get: function() {
        return react.useFetchers;
      }
    });
    Object.defineProperty(exports, "useFormAction", {
      enumerable: true,
      get: function() {
        return react.useFormAction;
      }
    });
    Object.defineProperty(exports, "useHref", {
      enumerable: true,
      get: function() {
        return react.useHref;
      }
    });
    Object.defineProperty(exports, "useLoaderData", {
      enumerable: true,
      get: function() {
        return react.useLoaderData;
      }
    });
    Object.defineProperty(exports, "useLocation", {
      enumerable: true,
      get: function() {
        return react.useLocation;
      }
    });
    Object.defineProperty(exports, "useMatches", {
      enumerable: true,
      get: function() {
        return react.useMatches;
      }
    });
    Object.defineProperty(exports, "useNavigate", {
      enumerable: true,
      get: function() {
        return react.useNavigate;
      }
    });
    Object.defineProperty(exports, "useNavigationType", {
      enumerable: true,
      get: function() {
        return react.useNavigationType;
      }
    });
    Object.defineProperty(exports, "useOutlet", {
      enumerable: true,
      get: function() {
        return react.useOutlet;
      }
    });
    Object.defineProperty(exports, "useOutletContext", {
      enumerable: true,
      get: function() {
        return react.useOutletContext;
      }
    });
    Object.defineProperty(exports, "useParams", {
      enumerable: true,
      get: function() {
        return react.useParams;
      }
    });
    Object.defineProperty(exports, "useResolvedPath", {
      enumerable: true,
      get: function() {
        return react.useResolvedPath;
      }
    });
    Object.defineProperty(exports, "useSearchParams", {
      enumerable: true,
      get: function() {
        return react.useSearchParams;
      }
    });
    Object.defineProperty(exports, "useSubmit", {
      enumerable: true,
      get: function() {
        return react.useSubmit;
      }
    });
    Object.defineProperty(exports, "useTransition", {
      enumerable: true,
      get: function() {
        return react.useTransition;
      }
    });
  }
});

// server.js
var server_exports = {};
__export(server_exports, {
  default: () => server_default
});
init_react();
var import_vercel = require("@remix-run/vercel");

// server-entry-module:@remix-run/dev/server-build
var server_build_exports = {};
__export(server_build_exports, {
  assets: () => assets_manifest_default,
  entry: () => entry,
  routes: () => routes
});
init_react();

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
init_react();
var import_server = require("react-dom/server");
var import_remix = __toESM(require_remix());
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  const markup = (0, import_server.renderToString)(/* @__PURE__ */ React.createElement(import_remix.RemixServer, {
    context: remixContext,
    url: request.url
  }));
  responseHeaders.set("Content-Type", "text/html");
  return new Response("<!DOCTYPE html>" + markup, {
    status: responseStatusCode,
    headers: responseHeaders
  });
}

// route:C:\dev\martinacostadev\app\root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  meta: () => meta
});
init_react();
var import_remix3 = __toESM(require_remix());

// app/styles/app.css
var app_default = "/build/_assets/app-G5HFI4K5.css";

// app/component/Menu/index.tsx
init_react();
var import_remix2 = __toESM(require_remix());
function Menu() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-row space-x-8 md:text-lg mt-12 md:mt-0"
  }, /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/",
    className: "hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white"
  }, "Inicio"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/blog",
    className: "hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white"
  }, "Blog"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/advices",
    className: "hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white"
  }, "Consejos"), /* @__PURE__ */ React.createElement(import_remix2.Link, {
    to: "/aboutme",
    className: "hover:underline hover:underline-offset-4 text-gray-300 font-bold hover:text-white"
  }, "Acerca de"));
}

// route:C:\dev\martinacostadev\app\root.tsx
function links() {
  return [{ rel: "stylesheet", href: app_default }];
}
var meta = () => {
  return { title: "Mart\xEDn Acosta" };
};
function App() {
  return /* @__PURE__ */ React.createElement("html", {
    lang: "es"
  }, /* @__PURE__ */ React.createElement("head", null, /* @__PURE__ */ React.createElement("meta", {
    charSet: "utf-8"
  }), /* @__PURE__ */ React.createElement("meta", {
    name: "viewport",
    content: "width=device-width,initial-scale=1"
  }), /* @__PURE__ */ React.createElement(import_remix3.Meta, null), /* @__PURE__ */ React.createElement(import_remix3.Links, null)), /* @__PURE__ */ React.createElement("body", {
    className: "w-full bg-gray-dark p-8 text-white"
  }, /* @__PURE__ */ React.createElement("header", {
    className: "mb-8"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "text-2xl font-medium mb-4"
  }, "Mart\xEDn Acosta"), /* @__PURE__ */ React.createElement(Menu, null)), /* @__PURE__ */ React.createElement(import_remix3.Outlet, null), /* @__PURE__ */ React.createElement(import_remix3.ScrollRestoration, null), /* @__PURE__ */ React.createElement(import_remix3.Scripts, null), /* @__PURE__ */ React.createElement(import_remix3.LiveReload, null)));
}

// route:C:\dev\martinacostadev\app\routes\blog\$slug.tsx
var slug_exports = {};
__export(slug_exports, {
  default: () => PostSlug,
  loader: () => loader
});
init_react();
var import_remix4 = __toESM(require_remix());
var import_tiny_invariant2 = __toESM(require("tiny-invariant"));

// app/post.ts
init_react();
var import_path = __toESM(require("path"));
var import_promises = __toESM(require("fs/promises"));
var import_front_matter = __toESM(require("front-matter"));
var import_tiny_invariant = __toESM(require("tiny-invariant"));
var import_marked = require("marked");
var postsPath = import_path.default.join(__dirname, "..", "posts");
function isValidPostAttributes(attributes) {
  return attributes == null ? void 0 : attributes.title;
}
async function getPosts() {
  const dir = await import_promises.default.readdir(postsPath);
  return Promise.all(dir.map(async (filename) => {
    const file = await import_promises.default.readFile(import_path.default.join(postsPath, filename));
    const { attributes } = (0, import_front_matter.default)(file.toString());
    (0, import_tiny_invariant.default)(isValidPostAttributes(attributes), `${filename} has bad meta data!`);
    return {
      slug: filename.replace(/\.md$/, ""),
      title: attributes.title
    };
  }));
}
async function getPost(slug) {
  const filepath = import_path.default.join(postsPath, slug + ".md");
  const file = await import_promises.default.readFile(filepath);
  const { attributes, body } = (0, import_front_matter.default)(file.toString());
  (0, import_tiny_invariant.default)(isValidPostAttributes(attributes), `Post ${filepath} is missing attributes`);
  const html = (0, import_marked.marked)(body);
  return { slug, html, title: attributes.title };
}

// route:C:\dev\martinacostadev\app\routes\blog\$slug.tsx
var loader = async ({
  params
}) => {
  (0, import_tiny_invariant2.default)(params.slug, "expected params.slug");
  return getPost(params.slug);
};
function PostSlug() {
  const post = (0, import_remix4.useLoaderData)();
  return /* @__PURE__ */ React.createElement(React.Fragment, null, /* @__PURE__ */ React.createElement("h3", {
    className: "text-3xl font-semibold tracking-wide leading-10 mb-6"
  }, post.title), /* @__PURE__ */ React.createElement("main", {
    dangerouslySetInnerHTML: { __html: post.html },
    className: "flex-auto"
  }));
}

// route:C:\dev\martinacostadev\app\routes\blog\index.tsx
var blog_exports = {};
__export(blog_exports, {
  default: () => Posts,
  loader: () => loader2
});
init_react();
var import_remix5 = __toESM(require_remix());
var loader2 = async () => {
  return getPosts();
};
function Posts() {
  const posts = (0, import_remix5.useLoaderData)();
  return /* @__PURE__ */ React.createElement("main", {
    className: "pt-6 md:pl-6"
  }, /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.title,
    className: "text-2xl md:text-3xl"
  }, /* @__PURE__ */ React.createElement(import_remix5.Link, {
    to: post.slug
  }, post.title)))));
}

// route:C:\dev\martinacostadev\app\routes\aboutme.tsx
var aboutme_exports = {};
__export(aboutme_exports, {
  default: () => AboutMe
});
init_react();
function AboutMe() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row w-full pt-6 md:pl-6 gap-16 lg:w-3/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-4 leading-tight text-2xl md:text-4xl font-semibold"
  }, "FrontEnd Developer React"), /* @__PURE__ */ React.createElement("div", {
    className: "w-80 text-xl md:text-2xl tracking-wide text-gray-400"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-6"
  }, "Trabajo en una empresa realizando productos webs y aplicaciones m\xF3viles."), /* @__PURE__ */ React.createElement("p", {
    className: "mb-6"
  }, "Mis hobbies son hacer side projects para practicar nuevas tecnolog\xEDas y adem\xE1s para abrir la mente."), /* @__PURE__ */ React.createElement("p", {
    className: "mb-6"
  }, "Me gusta ayudar a la comunidad as\xED aprendemos y crecemos juntos y juntas; tambi\xE9n pasear en moto, salir a caminar y hacer crossfit."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex md:flex-col md:w-1/2 gap-8"
  }, /* @__PURE__ */ React.createElement("a", {
    href: "https://www.twitter.com/martinacostadev"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./img/twitter.svg",
    className: "w-8 h-8"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.linkedin.com/in/martinacostadev/"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./img/linkedin.svg",
    className: "w-8 h-8"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://github.com/martinacostadev"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./img/github.svg",
    className: "w-8 h-8"
  })), /* @__PURE__ */ React.createElement("a", {
    href: "https://www.instagram.com/martinacostadev"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./img/instagram.svg",
    className: "w-8 h-8"
  }))));
}

// route:C:\dev\martinacostadev\app\routes\advices.tsx
var advices_exports = {};
__export(advices_exports, {
  default: () => Advices
});
init_react();
function Advices() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row w-full pt-6 md:pl-6 gap-16 lg:w-3/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-4 leading-tight text-2xl md:text-4xl font-semibold"
  }, "Pr\xF3ximamente...")));
}

// route:C:\dev\martinacostadev\app\routes\index.tsx
var routes_exports = {};
__export(routes_exports, {
  default: () => Index
});
init_react();
function Index() {
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex flex-col md:flex-row w-full pt-6 md:pl-6 gap-16 lg:w-3/4"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "md:w-1/2"
  }, /* @__PURE__ */ React.createElement("h3", {
    className: "mb-4 leading-tight text-2xl md:text-4xl font-semibold"
  }, "FrontEnd Developer React"), /* @__PURE__ */ React.createElement("div", {
    className: "w-80 text-xl md:text-2xl tracking-wide text-gray-400"
  }, /* @__PURE__ */ React.createElement("p", {
    className: "mb-6"
  }, "Trabajo en una empresa realizando productos webs y aplicaciones m\xF3viles."), /* @__PURE__ */ React.createElement("p", null, "Me gusta ayudar a la comunidad as\xED aprendemos y crecemos juntos y juntas."))), /* @__PURE__ */ React.createElement("div", {
    className: "flex md:w-1/2 lg:place-content-center"
  }, /* @__PURE__ */ React.createElement("img", {
    src: "./img/home.png"
  })));
}

// server-assets-manifest:@remix-run/dev/assets-manifest
init_react();
var assets_manifest_default = { "version": "787b9617", "entry": { "module": "/build/entry.client-TC22WBTB.js", "imports": ["/build/_shared/chunk-TOREBFSW.js", "/build/_shared/chunk-TOAMQMCD.js"] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "module": "/build/root-K5UTLLNP.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/aboutme": { "id": "routes/aboutme", "parentId": "root", "path": "aboutme", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/aboutme-N6HENSEA.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/advices": { "id": "routes/advices", "parentId": "root", "path": "advices", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/advices-YSY7MRYO.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/$slug": { "id": "routes/blog/$slug", "parentId": "root", "path": "blog/:slug", "index": void 0, "caseSensitive": void 0, "module": "/build/routes/blog/$slug-R7D6ZVUK.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/blog/index": { "id": "routes/blog/index", "parentId": "root", "path": "blog", "index": true, "caseSensitive": void 0, "module": "/build/routes/blog/index-BIPOG4ON.js", "imports": void 0, "hasAction": false, "hasLoader": true, "hasCatchBoundary": false, "hasErrorBoundary": false }, "routes/index": { "id": "routes/index", "parentId": "root", "path": void 0, "index": true, "caseSensitive": void 0, "module": "/build/routes/index-QE3XHED3.js", "imports": void 0, "hasAction": false, "hasLoader": false, "hasCatchBoundary": false, "hasErrorBoundary": false } }, "url": "/build/manifest-787B9617.js" };

// server-entry-module:@remix-run/dev/server-build
var entry = { module: entry_server_exports };
var routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/blog/$slug": {
    id: "routes/blog/$slug",
    parentId: "root",
    path: "blog/:slug",
    index: void 0,
    caseSensitive: void 0,
    module: slug_exports
  },
  "routes/blog/index": {
    id: "routes/blog/index",
    parentId: "root",
    path: "blog",
    index: true,
    caseSensitive: void 0,
    module: blog_exports
  },
  "routes/aboutme": {
    id: "routes/aboutme",
    parentId: "root",
    path: "aboutme",
    index: void 0,
    caseSensitive: void 0,
    module: aboutme_exports
  },
  "routes/advices": {
    id: "routes/advices",
    parentId: "root",
    path: "advices",
    index: void 0,
    caseSensitive: void 0,
    module: advices_exports
  },
  "routes/index": {
    id: "routes/index",
    parentId: "root",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: routes_exports
  }
};

// server.js
var server_default = (0, import_vercel.createRequestHandler)({ build: server_build_exports, mode: "production" });
module.exports = __toCommonJS(server_exports);
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
/**
 * @remix-run/node v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/react v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
/**
 * @remix-run/server-runtime v1.2.3
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */
