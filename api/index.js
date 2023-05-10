var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf, __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: !0 });
}, __copyProps = (to, from, except, desc) => {
  if (from && typeof from == "object" || typeof from == "function")
    for (let key of __getOwnPropNames(from))
      !__hasOwnProp.call(to, key) && key !== except && __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: !0 }) : target,
  mod
)), __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: !0 }), mod);

// <stdin>
var stdin_exports = {};
__export(stdin_exports, {
  assets: () => assets_manifest_default,
  assetsBuildDirectory: () => assetsBuildDirectory,
  entry: () => entry,
  future: () => future,
  publicPath: () => publicPath,
  routes: () => routes
});
module.exports = __toCommonJS(stdin_exports);

// app/entry.server.tsx
var entry_server_exports = {};
__export(entry_server_exports, {
  default: () => handleRequest
});
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_cssinjs = require("@ant-design/cssinjs"), import_antd_style = require("antd-style"), import_jsx_dev_runtime = require("react/jsx-dev-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, cache = (0, import_cssinjs.createCache)(), { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_antd_style.StyleProvider, { cache: import_antd_style.extractStaticStyle.cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_cssinjs.StyleProvider, { cache, children: /* @__PURE__ */ (0, import_jsx_dev_runtime.jsxDEV)(import_react.RemixServer, { context: remixContext, url: request.url }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 25,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 24,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/entry.server.tsx",
        lineNumber: 23,
        columnNumber: 7
      }, this),
      {
        onShellReady: () => {
          let styleText = (0, import_cssinjs.extractStyle)(cache), body = new import_stream.PassThrough({
            transform: (chunk, _, callback) => {
              let styles = (0, import_antd_style.extractStaticStyle)(chunk.toString()).map((item) => item.style);
              return chunk.toString().match(/__STYLES__/) && styleText && (chunk = chunk.toString().replace(/__STYLES__/, styleText + styles.join(""))), callback(null, chunk);
            }
          });
          responseHeaders.set("Content-Type", "text/html"), resolve(
            new import_node.Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode
            })
          ), pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = !0, console.error(error);
        }
      }
    );
    setTimeout(abort, ABORT_DELAY);
  });
}

// app/root.tsx
var root_exports = {};
__export(root_exports, {
  default: () => App,
  links: () => links,
  loader: () => loader,
  meta: () => meta
});
var import_react3 = require("@remix-run/react");

// app/components/icons.tsx
var import_icons = __toESM(require("@ant-design/icons")), import_bs = require("react-icons/bs"), import_jsx_dev_runtime2 = require("react/jsx-dev-runtime"), CreateIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsPlusSquare }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 45,
  columnNumber: 12
}, this), EditIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsPencilSquare }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 49,
  columnNumber: 12
}, this), ShowIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsEye }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 53,
  columnNumber: 12
}, this), SaveIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsSave }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 57,
  columnNumber: 12
}, this), DeleteIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTrash }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 61,
  columnNumber: 12
}, this), CloseIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsXSquare }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 65,
  columnNumber: 12
}, this), CalendarIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsCalendar3 }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 70,
  columnNumber: 12
}, this), PatientIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsPersonVcard }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 74,
  columnNumber: 12
}, this), TreatmentIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsClipboard2Plus }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 78,
  columnNumber: 12
}, this), SettingsIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsGearWide }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 82,
  columnNumber: 12
}, this), UserIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { ...props, component: import_bs.BsPerson }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 86,
  columnNumber: 12
}, this), MoreIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsThreeDotsVertical }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 90,
  columnNumber: 12
}, this), PrevIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsChevronLeft }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 99,
  columnNumber: 12
}, this), NextIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsChevronRight }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 103,
  columnNumber: 12
}, this), TodayIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsCircle }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 107,
  columnNumber: 12
}, this);
var UndoIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsArrowCounterclockwise }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 128,
  columnNumber: 12
}, this), RedoIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsArrowClockwise }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 132,
  columnNumber: 12
}, this), ParagraphIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTextParagraph }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 136,
  columnNumber: 12
}, this), H1Icon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTypeH1 }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 140,
  columnNumber: 12
}, this), H2Icon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTypeH2 }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 144,
  columnNumber: 12
}, this), BulletedListIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsListUl }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 148,
  columnNumber: 12
}, this), NumberedListIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsListOl }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 152,
  columnNumber: 12
}, this), QuoteIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsQuote }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 156,
  columnNumber: 12
}, this), BoldIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTypeBold }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 160,
  columnNumber: 12
}, this), ItalicIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTypeItalic }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 164,
  columnNumber: 12
}, this), UnderlineIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTypeUnderline }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 168,
  columnNumber: 12
}, this), StrikethroughIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsTypeStrikethrough }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 172,
  columnNumber: 12
}, this);
var AppointmentIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsCalendar3Event }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 184,
  columnNumber: 12
}, this), TaskIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsFileEarmarkCheck }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 189,
  columnNumber: 12
}, this), ReminderIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsWatch }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 193,
  columnNumber: 12
}, this), NoteIcon = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: import_bs.BsFileEarmarkText }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 197,
  columnNumber: 12
}, this), LogoSvg = () => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("svg", { width: "1em", height: "1em", version: "1.1", viewBox: "0 0 700 700", children: /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { children: [
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m404.2 655.18v-17h34v34h-34zm-71.333-37.667c-0.36667-0.36666-0.66667-18.817-0.66667-41v-40.333h82v82h-40.333c-22.183 0-40.633-0.3-41-0.66667zm-66.667-71.333v-21h42v42h-42zm-64-32.093c-17.496-1.1564-28.932-3.4557-45.5-9.1478-59.841-20.559-105.06-74.162-114.94-136.26-2.2655-14.234-2.8929-30.848-1.6351-43.299 4.2444-42.014 19.345-75.375 47.488-104.92 15.803-16.587 29.766-26.926 50.088-37.088 6.6567-3.3286 24.302-10.198 26.196-10.198 0.29525 0 0.24487 2.8125-0.11195 6.25s-0.71097 11.447-0.78699 17.8l-0.13822 11.55-8.4825 3.9029c-25.225 11.606-50.076 34.61-63.692 58.958-7.836 14.012-15.191 36.521-17.005 52.039-1.1858 10.147-0.68398 29.681 1.0138 39.466 1.9297 11.122 8.0195 30.136 12.517 39.082 9.9709 19.832 29.052 41.839 46.489 53.617 49.289 33.293 109.85 33.494 159.5 0.52833 4.675-3.1039 12.127-9.1223 16.56-13.374l8.0601-7.7309 23.81 23.872-3.465 3.6014c-1.9057 1.9808-7.065 6.6514-11.465 10.379-34.828 29.506-78.828 43.984-124.5 40.966zm279.5 0.47114c-31.61-2.3157-59.382-11.993-86.368-30.095-13.236-8.8786-21.325-16.505-91.446-86.225-24.648-24.507-45.997-46.545-47.442-48.974-3.0636-5.1476-3.4829-11.905-1.0291-16.584 0.86529-1.65 15.234-16.6 31.929-33.223l30.356-30.223 23.987 23.943-46.987 47.036 55 54.827c59.986 59.797 62.216 61.711 84.113 72.194 19.145 9.1656 37.892 13.283 60.387 13.262 16.178-0.0149 26.777-1.6504 41.722-6.4376 43.017-13.78 76.718-46.905 90.767-89.218 4.9603-14.939 6.5504-23.547 7.2089-39.025 2.6768-62.917-36.858-119.39-97.482-139.25-14.15-4.6353-26.702-6.4931-43.618-6.4558-36.706 0.081-67.272 12.313-96.192 38.494l-7.0932 6.4215-23.814-23.977 8.2969-7.9218c21.323-20.359 51.177-36.395 79.703-42.811 15.973-3.5929 23.69-4.434 40-4.3595 34.284 0.1567 62.569 7.9794 90.5 25.029 33.458 20.424 59.698 52.375 73.442 89.427 11.606 31.289 13.657 69.704 5.459 102.27-7.5877 30.142-24.105 58.919-46.612 81.209-23.23 23.006-45.607 35.76-80.288 45.762-11.82 3.4088-40.143 5.959-54.5 4.9072zm-141.5-18.378v-11h22v22h-22zm37.501-96.999-11.977-12.009 46.965-46.997-51.494-51.565c-61.746-61.831-65.66-65.207-87.494-75.468-12.353-5.8049-20.517-8.5184-32.627-10.844l-9.3733-1.8 0.15192-10.41c0.0836-5.7252 0.80212-13.11 1.5968-16.41l1.4449-6 5.4032 0.34294c7.9089 0.50198 26.193 5.363 38.057 10.118 12.534 5.0234 30.327 15.06 41.272 23.282 10.343 7.7689 130.27 127.05 132.18 131.48 1.8026 4.1663 1.7817 11.648-0.042 15.082-0.78881 1.4852-15.081 16.315-31.761 32.955l-30.327 30.255zm89.794-72.751c-1.2061-2.6125-5.8577-8.6929-10.337-13.512l-8.1439-8.7619 7.4744-7.9453c20.096-21.363 33.015-47.847 37.272-76.413l0.57856-3.8818 8.18 0.67197c8.0117 0.65814 24.162 3.7408 25.239 4.8173 1.0101 1.01-4.7049 26.078-8.0552 35.334-9.5088 26.269-21.733 45.755-41.208 65.691-4.7013 4.8125-8.6063 8.75-8.6777 8.75-0.0714 0-1.1167-2.1375-2.3228-4.75zm-237.81-4.5c-32.978-35.398-49.572-76.154-49.557-121.72 0.0158-47.905 17.269-89.857 50.949-123.89 24.094-24.343 54.37-40.754 89.12-48.307 9.1975-1.999 13.353-2.2856 33.5-2.31 19.929-0.02416 24.469 0.27052 34 2.2067 15.377 3.1237 27.962 7.3742 42.36 14.307 15.336 7.3842 29.375 16.833 41.735 27.965 16.876 15.198 30.622 33.533 40.264 54.029 4.9752 10.577 10.747 25.74 10.03 26.351-0.21415 0.18257-3.0894-0.0167-6.3894-0.44293-3.3-0.42618-11.302-0.81285-17.783-0.85926l-11.783-0.0844-4.4423-9.5712c-8.6139-18.559-26.681-40.52-43.485-52.857-34.082-25.022-77.224-33.459-118.02-23.08-26.53 6.7493-44.703 17.152-64.568 36.96-20.413 20.354-32.881 42.954-38.924 70.548-2.5954 11.852-3.1182 37.583-1.0188 50.139 4.7912 28.653 16.543 52.842 35.527 73.123l8.2019 8.7624-8.471 8.9015c-4.659 4.8958-9.47 10.965-10.691 13.488-1.221 2.5223-2.3659 4.586-2.5442 4.586-0.17829 0-3.7829-3.7125-8.0103-8.25z", display: "none" }, void 0, !1, {
    fileName: "app/components/icons.tsx",
    lineNumber: 205,
    columnNumber: 81
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { fill: "#60a5fa", stroke: "#60a5fa", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m229.33 320.12c-21.385-22.86-36.404-50.062-43.785-79.301-4.4114-17.475-5.5005-49.362-2.3681-69.339 5.6447-36 21.94-67.369 49.185-94.684 20.682-20.735 43.592-34.776 70.714-43.34 19.89-6.2805 24.623-6.9097 51.639-6.865 22.01 0.03636 26.685 0.40028 36.885 2.871 51.881 12.567 95.811 46.69 117.85 91.539 6.0665 12.344 12.035 27.492 11.114 28.208-0.26557 0.20666-7.9756 0.13268-17.133-0.1644l-16.65-0.54015-5.9013-11.571c-11.276-22.109-31.919-44.945-51.549-57.026-21.456-13.204-42.829-19.555-69.085-20.528-43.18-1.5999-78.774 12.928-108.28 44.194-17.34 18.377-28.267 38.062-34.594 62.323-2.6977 10.344-3.0744 14.38-3.1066 33.287-0.0328 19.237 0.29729 22.782 3.1158 33.468 6.6436 25.188 17.388 45.242 33.247 62.053l8.0792 8.5643-6.1527 6.0516c-3.384 3.3284-8.1561 8.9563-10.605 12.506-2.4486 3.5502-4.5732 6.4549-4.7214 6.4549s-3.7051-3.6728-7.9043-8.1617z" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 3786
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m341.19 496.11v-10.451h20.902v20.902h-20.902z", strokeWidth: "1.2295" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 4648
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m405.12 655.33v-15.984h31.967v31.967h-31.967z", strokeWidth: "1.2295" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 4726
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons.tsx",
    lineNumber: 205,
    columnNumber: 3751
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { fill: "#2563eb", stroke: "#2563eb", strokeWidth: "1.2295", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m192.42 512.56c-73.344-8.3941-136.27-68.018-149.64-141.79-2.8197-15.555-2.7869-45.635 0.06646-60.932 2.841-15.232 9.1219-33.919 15.97-47.513 14.74-29.264 41.735-57.497 70.194-73.415 9.0853-5.0817 30.261-14.317 32.828-14.317 1.1727 0 1.4735 27.284 0.34713 31.48-0.44672 1.6641-3.3977 3.8563-8.2755 6.1475-18.92 8.8874-42.627 28.373-54.717 44.975-10.818 14.854-18.647 32.527-23.855 53.848-3.889 15.919-3.5133 44.061 0.81248 60.864 4.1077 15.956 8.5867 27.756 14.009 36.907 22.134 37.356 55.072 61.238 96.73 70.134 13.106 2.7988 40.789 2.832 53.484 0.0641 27.601-6.0182 50-17.341 68.875-34.817l8.7746-8.124 22.555 22.695-9.5637 9.0881c-35.673 33.899-87.358 50.572-138.59 44.709z" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 4864
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m333.36 614.45c-0.40775-1.5215-0.74892-19.503-0.75815-39.959l-0.0168-37.193h81.148v79.918h-79.631z" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 5551
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m377.45 398.35-11.021-11.072 47.347-47.394-50.741-50.428c-50.764-50.45-61.548-60.553-72.658-68.069-12.206-8.257-34.161-17.004-49.608-19.765l-8.6806-1.5513 0.5651-11.205c0.3108-6.1629 1.1075-13.352 1.7705-15.975l1.2054-4.7693 6.5031 0.76431c20.979 2.4656 53.217 16.068 74.705 31.52 4.2316 3.043 36.289 34.027 71.238 68.852 68.223 67.982 65.73 65.04 63.785 75.25-0.42608 2.2367-10.469 13.395-30.707 34.119-16.541 16.937-30.661 30.795-31.378 30.795-0.71707 0-6.2633-4.9826-12.325-11.072z" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 5661
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons.tsx",
    lineNumber: 205,
    columnNumber: 4808
  }, this),
  /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("g", { strokeWidth: "1.2295", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m467.58 325.46c-1.0624-2.2278-4.6321-7.069-7.9328-10.758-10.464-11.696-10.317-9.9406-1.615-19.243 17.606-18.821 30.797-45.063 35.583-70.787l1.5483-8.3225 6.3113 0.72583c8.0636 0.92734 24.402 4.0921 25.189 4.8791 0.33113 0.33112-0.0527 4.1556-0.85301 8.4989-4.0655 22.064-13.94 46.277-26.565 65.14-6.5102 9.7269-27.082 33.917-28.844 33.917-0.48944 0-1.7591-1.8228-2.8215-4.0506z", fill: "#60a5fa", stroke: "#60a5fa" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 6185
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m466.14 512.08c-30.203-4.9244-60.318-18.91-84.337-39.166-5.7243-4.8274-36.212-34.505-67.75-65.949-50.933-50.782-57.482-57.746-58.599-62.308-0.69124-2.8248-0.96826-6.6454-0.61561-8.4902 0.43907-2.2969 10.443-13.274 31.737-34.823l31.096-31.469 11.149 11.046c6.1318 6.0755 11.008 11.446 10.835 11.934-0.17258 0.48851-10.411 11.112-22.752 23.607-12.341 12.495-22.439 23.239-22.439 23.874 0 2.2664 105.54 105.64 115.68 113.31 12.921 9.7694 31.663 18.841 47.426 22.955 14.658 3.8255 43.376 5.3046 58.184 2.9966 20.817-3.2446 46.846-14.554 63.952-27.788 9.4746-7.3297 24.411-23.105 30.675-32.4 17.945-26.624 26.672-61.045 23.466-92.557-3.4383-33.802-16.838-62.254-40.511-86.02-29.919-30.036-71.447-44.88-113.61-40.606-19.54 1.981-31.168 5.2858-48.18 13.694-13.465 6.655-18.491 10.136-39.055 27.049l-3.725 3.0637-21.97-23.341 8.3997-7.6849c23.545-21.541 53.862-36.91 85.731-43.461 16.207-3.3312 44.993-3.554 62.833-0.48626 33.723 5.7991 64.224 21.439 89.392 45.84 16.299 15.801 26.341 29.42 36.001 48.824 13.86 27.841 18.467 49.761 17.44 82.992-0.65254 21.12-2.1704 30.44-7.7099 47.336-13.774 42.015-47.293 81.256-85.943 100.62-13.673 6.8492-32.913 13.587-46.376 16.24-14.252 2.8092-46.539 3.4333-60.432 1.1682z", fill: "#60a5fa", stroke: "#60a5fa" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 6606
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m470.1 511.82c-26.753-3.5982-53.087-14.219-77.033-31.067-9.9712-7.016-95.425-89.792-120.66-116.88-17.144-18.402-19.404-22.544-15.905-29.152 0.93067-1.758 15.072-16.791 31.425-33.406l29.733-30.21 21.455 21.308-22.018 22.866c-12.11 12.576-22.221 23.813-22.469 24.971-0.30707 1.4342 12.037 14.416 38.73 40.731 74.648 73.593 82.739 80.396 107.73 90.584 17.59 7.1709 25.314 8.3847 53.787 8.452 24.199 0.0573 25.647-0.0772 36.27-3.3678 13.505-4.1831 33.317-13.488 43.628-20.49 9.549-6.4846 25.993-22.665 33.752-33.21 10.986-14.932 20.177-36.68 24.162-57.172 2.1637-11.128 2.1676-40.571 6e-3 -51.639-4.1903-21.468-12.508-40.637-24.805-57.168-32.497-43.687-84.126-64.502-138.61-55.883-23.062 3.6479-43.899 13.224-65.51 30.106-7.7079 6.0214-14.353 10.964-14.767 10.983-0.41398 0.0194-5.3101-4.7119-10.88-10.514l-10.128-10.549 2.8884-3.1087c5.3664-5.7756 22.498-18.935 32.759-25.163 17.86-10.84 37.029-18.241 59.518-22.978 15.531-3.2716 48.427-2.8436 65.817 0.85631 34.14 7.2639 64.248 24.381 89.681 50.984 23.416 24.493 40.235 57.449 45.353 88.866 2.2851 14.027 2.534 40.339 0.53525 56.579-2.484 20.182-13.084 47.303-26.135 66.865-24.522 36.759-57.3 60.78-99.7 73.068-19.272 5.5847-47.7 7.5461-68.61 4.7337z", fill: "#1e40af", stroke: "#1e40af" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 7853
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)("path", { d: "m267.42 546.52v-20.287h40.574v40.574h-40.574z", fill: "#1e40af", stroke: "#1e40af" }, void 0, !1, {
      fileName: "app/components/icons.tsx",
      lineNumber: 205,
      columnNumber: 9095
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/icons.tsx",
    lineNumber: 205,
    columnNumber: 6161
  }, this)
] }, void 0, !0, {
  fileName: "app/components/icons.tsx",
  lineNumber: 205,
  columnNumber: 78
}, this) }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 205,
  columnNumber: 12
}, this), LogoIcon = (props) => /* @__PURE__ */ (0, import_jsx_dev_runtime2.jsxDEV)(import_icons.default, { component: LogoSvg, ...props }, void 0, !1, {
  fileName: "app/components/icons.tsx",
  lineNumber: 208,
  columnNumber: 12
}, this);

// app/root.tsx
var import_remix_router = __toESM(require("@refinedev/remix-router")), import_antd2 = require("@refinedev/antd"), import_kbar = require("@refinedev/kbar");

// app/authProvider.ts
var import_js_cookie = __toESM(require("js-cookie")), cookie = __toESM(require("cookie"));

// app/constants.ts
var API_URL = "http://127.0.0.1:1337", TOKEN_KEY = "c23f6aa82dd15d424ff0f191a3c4da0f73e71f498e3bb3d81865adfb60454d67b2174b9a1c8de900c1e468ec56871da8d57ffdf438e7d4239fd546645aaca1a976c51270dc8aaf0cac30396f3ae4323a59c4abde01e757e5936790d392e1bbeb53d9d4f4956bfe270204d6962d7f5746b5c72fb5c94d25c42f7480040be95934";

// app/authProvider.ts
var import_strapi_v4 = require("@refinedev/strapi-v4"), import_axios = __toESM(require("axios")), axiosInstance = import_axios.default.create(), strapiAuthHelper = (0, import_strapi_v4.AuthHelper)(API_URL + "/api"), authProvider = {
  login: async ({ email, password }) => {
    let { data, status } = await strapiAuthHelper.login(
      email,
      password
    );
    return status === 200 ? (import_js_cookie.default.set(TOKEN_KEY, data.jwt, {
      path: "/",
      domain: window.location.hostname
    }), axiosInstance.defaults.headers.common.Authorization = `Bearer ${data.jwt}`, {
      success: !0,
      redirectTo: "/"
    }) : {
      success: !1,
      error: new Error("Invalid email or password")
    };
  },
  logout: async () => (import_js_cookie.default.remove(TOKEN_KEY, {
    path: "/",
    domain: window.location.hostname
  }), {
    success: !0,
    redirectTo: "/login"
  }),
  onError: async (error) => error && error.statusCode === 401 ? {
    error: new Error("Unauthorized"),
    logout: !0,
    redirectTo: "/login"
  } : {},
  check: async (request) => {
    let token;
    if (request)
      request.headers.get("Cookie") && (token = cookie.parse(
        request.headers.get("Cookie")
      )[TOKEN_KEY]);
    else {
      let parsedCookie = import_js_cookie.default.get(TOKEN_KEY);
      token = parsedCookie ? JSON.parse(parsedCookie) : void 0;
    }
    let { pathname } = new URL(request.url), query = pathname === "/" ? "" : `?to=${encodeURIComponent(pathname)}`;
    return token ? (axiosInstance.defaults.headers.common = {
      Authorization: `Bearer ${token}`
    }, {
      authenticated: !0
    }) : {
      authenticated: !1,
      error: new Error("Unauthorized"),
      logout: !0,
      redirectTo: `/login${query}`
    };
  },
  getPermissions: async () => null,
  getIdentity: async () => {
    let token = import_js_cookie.default.get(TOKEN_KEY);
    if (!token)
      return null;
    let { data, status } = await strapiAuthHelper.me(token);
    if (status === 200) {
      let { id, username, email } = data;
      return {
        id,
        username,
        email
      };
    }
    return null;
  }
};

// app/root.tsx
var import_localizedFormat = __toESM(require("dayjs/plugin/localizedFormat"));

// node_modules/@refinedev/antd/dist/reset.css
var reset_default = "/build/_assets/reset-KRKIGX7D.css";

// app/contexts/index.tsx
var import_react2 = require("react"), import_antd = require("antd"), import_nookies = require("nookies"), import_colors = require("@ant-design/colors"), import_es_ES = __toESM(require("antd/locale/es_ES")), import_jsx_dev_runtime3 = require("react/jsx-dev-runtime"), ColorModeContext = (0, import_react2.createContext)(
  {}
);
function ColorModeContextProvider({
  children,
  defaultMode = "light"
}) {
  let [isMounted, setIsMounted] = (0, import_react2.useState)(!1), [mode, setMode] = (0, import_react2.useState)(defaultMode), [color, setColor] = (0, import_react2.useState)((0, import_colors.generate)("#1890ff", {
    theme: defaultMode === "light" ? "default" : "dark"
  }));
  (0, import_react2.useEffect)(() => {
    setIsMounted(!0);
  }, []), (0, import_react2.useEffect)(() => {
    isMounted && setMode((0, import_nookies.parseCookies)().theme);
  }, [isMounted]), (0, import_react2.useEffect)(() => {
    setColor((0, import_colors.generate)("#1890ff", {
      theme: mode === "light" ? "default" : "dark"
    }));
  }, [mode]);
  let setColorMode = () => {
    let newMode = mode === "light" ? "dark" : "light";
    (0, import_nookies.setCookie)(null, "theme", newMode, {
      maxAge: 30 * 24 * 60 * 60,
      path: "/"
    }), setMode(newMode);
  }, { darkAlgorithm, defaultAlgorithm } = import_antd.theme;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
    ColorModeContext.Provider,
    {
      value: {
        setMode: setColorMode,
        mode
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime3.jsxDEV)(
        import_antd.ConfigProvider,
        {
          theme: {
            token: {
              colorPrimary: color[5]
            },
            components: {
              Layout: {
                colorBgHeader: mode === "light" ? "#fff" : color[0]
              },
              Menu: {
                colorBgMask: color[0]
              }
            }
          },
          locale: {
            ...import_es_ES.default
          },
          children
        },
        void 0,
        !1,
        {
          fileName: "app/contexts/index.tsx",
          lineNumber: 68,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/contexts/index.tsx",
      lineNumber: 62,
      columnNumber: 5
    },
    this
  );
}

// app/root.tsx
var import_strapi_v42 = require("@refinedev/strapi-v4"), import_node2 = require("@remix-run/node");
var import_timezone = __toESM(require("dayjs/plugin/timezone")), import_core = require("@refinedev/core"), cookie2 = __toESM(require("cookie")), import_dayjs = __toESM(require("dayjs")), import_es = require("dayjs/locale/es"), import_jsx_dev_runtime4 = require("react/jsx-dev-runtime");
import_dayjs.default.extend(import_localizedFormat.default);
import_dayjs.default.extend(import_timezone.default);
import_dayjs.default.locale("es");
var loader = async ({ request }) => {
  let parsedCookie = cookie2.parse(request.headers.get("Cookie") ?? ""), token = parsedCookie[TOKEN_KEY], mode = parsedCookie.theme;
  return (0, import_node2.json)({
    token,
    mode
  });
}, meta = () => [
  { title: "Dental Clinic" },
  { name: "viewport", content: "width=device-width, initial-scale=1" }
];
function App() {
  let { token, mode } = (0, import_react3.useLoaderData)();
  return token && (axiosInstance.defaults.headers.common = {
    Authorization: `Bearer ${token}`
  }), /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Meta, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 51,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Links, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this),
      typeof document > "u" ? "__STYLES__" : null
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 50,
      columnNumber: 7
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_kbar.RefineKbarProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(ColorModeContextProvider, { defaultMode: mode, children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_kbar.RefineKbarProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(
        import_core.Refine,
        {
          routerProvider: import_remix_router.default,
          authProvider,
          dataProvider: (0, import_strapi_v42.DataProvider)(API_URL + "/api", axiosInstance),
          notificationProvider: import_antd2.notificationProvider,
          resources: [
            {
              name: "apps",
              create: "/apps/create",
              list: "/apps",
              meta: {}
            },
            {
              name: "dc-events",
              list: "/calendar",
              create: "/calendar/create",
              edit: "/calendar/:id/edit",
              meta: {
                label: "Calendario",
                route: "calendar",
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(CalendarIcon, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 83,
                  columnNumber: 29
                }, this)
              }
            },
            {
              name: "dc-patients",
              list: "/patients",
              create: "/patients/create",
              edit: "/patients/:id/edit",
              show: "/patients/:id",
              meta: {
                label: "Pacientes",
                route: "patients",
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(PatientIcon, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 95,
                  columnNumber: 29
                }, this)
              }
            },
            {
              name: "dc-treatments",
              meta: {
                label: "Tratamientos",
                route: "treatments",
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(TreatmentIcon, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 103,
                  columnNumber: 29
                }, this)
              },
              list: "/treatments",
              create: "/treatments/create",
              edit: "/treatments/:id/edit",
              show: "/treatments/:id"
            },
            {
              name: "settings",
              meta: {
                label: "Configuraciones",
                icon: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(SettingsIcon, {}, void 0, !1, {
                  fileName: "app/root.tsx",
                  lineNumber: 114,
                  columnNumber: 29
                }, this)
              }
            },
            {
              name: "dc-doctors",
              meta: {
                label: "Doctores",
                route: "doctors",
                parent: "settings"
              },
              list: "/doctors",
              create: "/doctors/create",
              edit: "/doctors/:id/edit",
              show: "/doctors/:id"
            },
            {
              name: "dc-procedures",
              meta: {
                label: "Procedimientos",
                route: "procedures",
                parent: "settings"
              },
              list: "/procedures"
            }
          ],
          options: {
            syncWithLocation: !0,
            warnWhenUnsavedChanges: !0,
            mutationMode: "optimistic"
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_jsx_dev_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Outlet, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 146,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_remix_router.UnsavedChangesNotifier, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 147,
              columnNumber: 19
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_kbar.RefineKbar, {}, void 0, !1, {
              fileName: "app/root.tsx",
              lineNumber: 148,
              columnNumber: 19
            }, this)
          ] }, void 0, !0, {
            fileName: "app/root.tsx",
            lineNumber: 145,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/root.tsx",
          lineNumber: 61,
          columnNumber: 15
        },
        this
      ) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 60,
        columnNumber: 13
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 59,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 58,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.ScrollRestoration, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 154,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.Scripts, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 155,
        columnNumber: 9
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime4.jsxDEV)(import_react3.LiveReload, {}, void 0, !1, {
        fileName: "app/root.tsx",
        lineNumber: 156,
        columnNumber: 9
      }, this)
    ] }, void 0, !0, {
      fileName: "app/root.tsx",
      lineNumber: 57,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/root.tsx",
    lineNumber: 49,
    columnNumber: 10
  }, this);
}
function links() {
  return [{ rel: "stylesheet", href: reset_default }];
}

// app/routes/_apps.tsx
var apps_exports = {};
__export(apps_exports, {
  default: () => BaseLayout,
  loader: () => loader2
});
var import_node3 = require("@remix-run/node"), import_react4 = require("@remix-run/react");

// app/components/Layout/index.tsx
var import_antd7 = require("@refinedev/antd"), import_antd8 = require("antd");

// app/components/Layout/Header.tsx
var import_antd3 = require("antd"), import_core2 = require("@refinedev/core"), import_jsx_dev_runtime5 = require("react/jsx-dev-runtime"), { Text } = import_antd3.Typography, { useToken } = import_antd3.theme;
function ThemedHeaderV2(props) {
  let { token } = useToken(), authProvider2 = (0, import_core2.useActiveAuthProvider)(), { data: user } = (0, import_core2.useGetIdentity)({
    v3LegacyAuthProviderCompatible: Boolean(authProvider2 == null ? void 0 : authProvider2.isLegacy)
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(
    import_antd3.Layout.Header,
    {
      style: {
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Space, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Space, { size: "middle", children: [
        (user == null ? void 0 : user.name) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(Text, { strong: !0, children: user.name }, void 0, !1, {
          fileName: "app/components/Layout/Header.tsx",
          lineNumber: 26,
          columnNumber: 26
        }, this),
        (user == null ? void 0 : user.avatar) && /* @__PURE__ */ (0, import_jsx_dev_runtime5.jsxDEV)(import_antd3.Avatar, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name }, void 0, !1, {
          fileName: "app/components/Layout/Header.tsx",
          lineNumber: 27,
          columnNumber: 28
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout/Header.tsx",
        lineNumber: 25,
        columnNumber: 9
      }, this) }, void 0, !1, {
        fileName: "app/components/Layout/Header.tsx",
        lineNumber: 24,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Layout/Header.tsx",
      lineNumber: 19,
      columnNumber: 5
    },
    this
  );
}

// app/components/Layout/Sider.tsx
var import_core4 = require("@refinedev/core"), import_antd5 = require("@refinedev/antd");

// app/components/Layout/Title.tsx
var import_core3 = require("@refinedev/core"), import_antd4 = require("antd");
var import_jsx_dev_runtime6 = require("react/jsx-dev-runtime"), { useToken: useToken2 } = import_antd4.theme, defaultText = "CLOUDBIT";
function ThemedTitleV2({
  collapsed,
  text = defaultText,
  size = "large"
}) {
  let { token } = useToken2(), routerType = (0, import_core3.useRouterType)(), Link5 = (0, import_core3.useLink)(), { Link: LegacyLink } = (0, import_core3.useRouterContext)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(
    routerType === "legacy" ? LegacyLink : Link5,
    {
      to: "/",
      style: {
        display: "inline-block",
        textDecoration: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Space, { style: {
        display: "flex",
        justifyItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(LogoIcon, { style: {
          fontSize: collapsed ? "2.5rem" : "2rem"
        } }, void 0, !1, {
          fileName: "app/components/Layout/Title.tsx",
          lineNumber: 35,
          columnNumber: 11
        }, this),
        !collapsed && /* @__PURE__ */ (0, import_jsx_dev_runtime6.jsxDEV)(import_antd4.Typography.Title, { style: {
          fontSize: size === "large" ? 24 : 20,
          margin: 0,
          color: token.colorPrimary
        }, children: text }, void 0, !1, {
          fileName: "app/components/Layout/Title.tsx",
          lineNumber: 39,
          columnNumber: 11
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout/Title.tsx",
        lineNumber: 31,
        columnNumber: 7
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/Layout/Title.tsx",
      lineNumber: 24,
      columnNumber: 10
    },
    this
  );
}

// app/components/Layout/Sider.tsx
var import_icons4 = require("@ant-design/icons"), import_antd6 = require("antd"), import_jsx_dev_runtime7 = require("react/jsx-dev-runtime"), drawerButtonStyles = {
  borderTopLeftRadius: 0,
  borderBottomLeftRadius: 0,
  position: "fixed",
  top: 64,
  zIndex: 999
}, { SubMenu } = import_antd6.Menu, { useToken: useToken3 } = import_antd6.theme;
function ThemedSiderV2({
  Title: TitleFromProps,
  render,
  meta: meta2
}) {
  let { token } = useToken3(), {
    siderVisible,
    setSiderVisible,
    drawerSiderVisible,
    setDrawerSiderVisible
  } = (0, import_antd5.useSiderVisible)(), isExistAuthentication = (0, import_core4.useIsExistAuthentication)(), routerType = (0, import_core4.useRouterType)(), NewLink = (0, import_core4.useLink)(), { warnWhen, setWarnWhen } = (0, import_core4.useWarnAboutChange)(), { Link: LegacyLink } = (0, import_core4.useRouterContext)(), Link5 = routerType === "legacy" ? LegacyLink : NewLink, TitleFromContext = (0, import_core4.useTitle)(), translate = (0, import_core4.useTranslate)(), { menuItems, selectedKey, defaultOpenKeys } = (0, import_core4.useMenu)({ meta: meta2 }), breakpoint = import_antd6.Grid.useBreakpoint(), { hasDashboard } = (0, import_core4.useRefineContext)(), authProvider2 = (0, import_core4.useActiveAuthProvider)(), { mutate: mutateLogout } = (0, import_core4.useLogout)({
    v3LegacyAuthProviderCompatible: Boolean(authProvider2 == null ? void 0 : authProvider2.isLegacy)
  }), isMobile = typeof breakpoint.lg > "u" ? !1 : !breakpoint.lg, RenderToTitle = TitleFromProps ?? TitleFromContext ?? ThemedTitleV2, renderTreeView = (tree, selectedKey2) => tree.map((item) => {
    let {
      icon,
      label,
      route,
      key,
      name,
      children,
      parentName,
      meta: meta3,
      options
    } = item;
    if (children.length > 0)
      return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_core4.CanAccess,
        {
          resource: name.toLowerCase(),
          action: "list",
          params: {
            resource: item
          },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            SubMenu,
            {
              icon: icon ?? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons4.UnorderedListOutlined, {}, void 0, !1, {
                fileName: "app/components/Layout/Sider.tsx",
                lineNumber: 102,
                columnNumber: 29
              }, this),
              title: label,
              children: renderTreeView(children, selectedKey2)
            },
            item.key,
            !1,
            {
              fileName: "app/components/Layout/Sider.tsx",
              lineNumber: 100,
              columnNumber: 13
            },
            this
          )
        },
        item.key,
        !1,
        {
          fileName: "app/components/Layout/Sider.tsx",
          lineNumber: 92,
          columnNumber: 11
        },
        this
      );
    let isSelected = key === selectedKey2, isRoute = !((0, import_core4.pickNotDeprecated)(meta3 == null ? void 0 : meta3.parent, options == null ? void 0 : options.parent, parentName) !== void 0 && children.length === 0);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_core4.CanAccess,
      {
        resource: name.toLowerCase(),
        action: "list",
        params: {
          resource: item
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_antd6.Menu.Item,
          {
            icon: icon ?? (isRoute && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons4.UnorderedListOutlined, {}, void 0, !1, {
              fileName: "app/components/Layout/Sider.tsx",
              lineNumber: 127,
              columnNumber: 39
            }, this)),
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link5, { to: route ?? "", children: label }, void 0, !1, {
                fileName: "app/components/Layout/Sider.tsx",
                lineNumber: 129,
                columnNumber: 13
              }, this),
              !drawerSiderVisible && isSelected && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ant-menu-tree-arrow" }, void 0, !1, {
                fileName: "app/components/Layout/Sider.tsx",
                lineNumber: 131,
                columnNumber: 15
              }, this)
            ]
          },
          item.key,
          !0,
          {
            fileName: "app/components/Layout/Sider.tsx",
            lineNumber: 125,
            columnNumber: 11
          },
          this
        )
      },
      item.key,
      !1,
      {
        fileName: "app/components/Layout/Sider.tsx",
        lineNumber: 117,
        columnNumber: 9
      },
      this
    );
  }), handleLogout = () => {
    warnWhen ? window.confirm(
      translate(
        "warnWhenUnsavedChanges",
        "Are you sure you want to leave? You have unsaved changes."
      )
    ) && (setWarnWhen(!1), mutateLogout()) : mutateLogout();
  }, logout = isExistAuthentication && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_antd6.Menu.Item,
    {
      onClick: () => handleLogout(),
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons4.LogoutOutlined, {}, void 0, !1, {
        fileName: "app/components/Layout/Sider.tsx",
        lineNumber: 161,
        columnNumber: 13
      }, this),
      children: translate("buttons.logout", "Logout")
    },
    "logout",
    !1,
    {
      fileName: "app/components/Layout/Sider.tsx",
      lineNumber: 158,
      columnNumber: 5
    },
    this
  ), dashboard = hasDashboard ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Menu.Item, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons4.DashboardOutlined, {}, void 0, !1, {
    fileName: "app/components/Layout/Sider.tsx",
    lineNumber: 168,
    columnNumber: 38
  }, this), children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(Link5, { to: "/", children: translate("dashboard.title", "Dashboard") }, void 0, !1, {
      fileName: "app/components/Layout/Sider.tsx",
      lineNumber: 169,
      columnNumber: 7
    }, this),
    !drawerSiderVisible && selectedKey === "/" && /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)("div", { className: "ant-menu-tree-arrow" }, void 0, !1, {
      fileName: "app/components/Layout/Sider.tsx",
      lineNumber: 171,
      columnNumber: 9
    }, this)
  ] }, "dashboard", !0, {
    fileName: "app/components/Layout/Sider.tsx",
    lineNumber: 168,
    columnNumber: 5
  }, this) : null, items = renderTreeView(menuItems, selectedKey), renderSider = () => render ? render({
    dashboard,
    items,
    logout,
    collapsed: drawerSiderVisible
  }) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    dashboard,
    items,
    logout
  ] }, void 0, !0, {
    fileName: "app/components/Layout/Sider.tsx",
    lineNumber: 188,
    columnNumber: 7
  }, this), renderMenu = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_antd6.Menu,
    {
      selectedKeys: selectedKey ? [selectedKey] : [],
      defaultOpenKeys,
      mode: "inline",
      style: {
        marginTop: "8px",
        border: "none"
      },
      onClick: () => {
        setSiderVisible == null || setSiderVisible(!1), breakpoint.lg || setDrawerSiderVisible == null || setDrawerSiderVisible(!0);
      },
      children: renderSider()
    },
    void 0,
    !1,
    {
      fileName: "app/components/Layout/Sider.tsx",
      lineNumber: 199,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/Layout/Sider.tsx",
    lineNumber: 198,
    columnNumber: 7
  }, this), renderDrawerSider = () => /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_jsx_dev_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_antd6.Drawer,
      {
        open: siderVisible,
        onClose: () => setSiderVisible == null ? void 0 : setSiderVisible(!1),
        placement: "left",
        closable: !1,
        width: 200,
        bodyStyle: {
          padding: 0
        },
        maskClosable: !0,
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_antd6.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          import_antd6.Layout.Sider,
          {
            style: {
              height: "100vh",
              overflow: "hidden",
              backgroundColor: token.colorBgContainer,
              borderRight: `1px solid ${token.colorBgElevated}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
                "div",
                {
                  style: {
                    width: "200px",
                    padding: "0 16px",
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    height: "64px",
                    backgroundColor: token.colorBgElevated
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RenderToTitle, { collapsed: !1, size: "small" }, void 0, !1, {
                    fileName: "app/components/Layout/Sider.tsx",
                    lineNumber: 254,
                    columnNumber: 17
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/Layout/Sider.tsx",
                  lineNumber: 243,
                  columnNumber: 15
                },
                this
              ),
              renderMenu()
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/Layout/Sider.tsx",
            lineNumber: 235,
            columnNumber: 13
          },
          this
        ) }, void 0, !1, {
          fileName: "app/components/Layout/Sider.tsx",
          lineNumber: 234,
          columnNumber: 11
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/Sider.tsx",
        lineNumber: 223,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
      import_antd6.Button,
      {
        style: drawerButtonStyles,
        size: "large",
        onClick: () => setSiderVisible == null ? void 0 : setSiderVisible(!0),
        icon: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(import_icons4.BarsOutlined, {}, void 0, !1, {
          fileName: "app/components/Layout/Sider.tsx",
          lineNumber: 264,
          columnNumber: 17
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/Layout/Sider.tsx",
        lineNumber: 260,
        columnNumber: 9
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/Layout/Sider.tsx",
    lineNumber: 222,
    columnNumber: 7
  }, this);
  return isMobile ? renderDrawerSider() : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
    import_antd6.Layout.Sider,
    {
      style: {
        backgroundColor: token.colorBgContainer,
        borderRight: `1px solid ${token.colorBgElevated}`
      },
      collapsible: !0,
      collapsed: drawerSiderVisible,
      onCollapse: (collapsed) => setDrawerSiderVisible == null ? void 0 : setDrawerSiderVisible(collapsed),
      collapsedWidth: 80,
      breakpoint: "lg",
      trigger: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
        import_antd6.Button,
        {
          type: "text",
          style: {
            borderRadius: 0,
            height: "100%",
            width: "100%",
            backgroundColor: token.colorBgElevated
          },
          children: drawerSiderVisible ? /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_icons4.RightOutlined,
            {
              style: {
                color: token.colorPrimary
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout/Sider.tsx",
              lineNumber: 296,
              columnNumber: 13
            },
            this
          ) : /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
            import_icons4.LeftOutlined,
            {
              style: {
                color: token.colorPrimary
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/Layout/Sider.tsx",
              lineNumber: 302,
              columnNumber: 13
            },
            this
          )
        },
        void 0,
        !1,
        {
          fileName: "app/components/Layout/Sider.tsx",
          lineNumber: 286,
          columnNumber: 9
        },
        this
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(
          "div",
          {
            style: {
              width: drawerSiderVisible ? "80px" : "200px",
              padding: drawerSiderVisible ? "0" : "0 16px",
              display: "flex",
              justifyContent: drawerSiderVisible ? "center" : "flex-start",
              alignItems: "center",
              height: "64px",
              backgroundColor: token.colorBgElevated,
              fontSize: "14px"
            },
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime7.jsxDEV)(RenderToTitle, { collapsed: drawerSiderVisible }, void 0, !1, {
              fileName: "app/components/Layout/Sider.tsx",
              lineNumber: 323,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/Sider.tsx",
            lineNumber: 311,
            columnNumber: 7
          },
          this
        ),
        renderMenu()
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/Layout/Sider.tsx",
      lineNumber: 275,
      columnNumber: 5
    },
    this
  );
}

// app/components/Layout/index.tsx
var import_jsx_dev_runtime8 = require("react/jsx-dev-runtime");
function ThemedLayoutV2({
  children,
  Header,
  hasSider = !0,
  Sider,
  Title: Title2,
  Footer,
  OffLayoutArea
}) {
  let breakpoint = import_antd8.Grid.useBreakpoint(), SiderToRender = Sider ?? ThemedSiderV2, HeaderToRender = Header ?? ThemedHeaderV2, isSmall = typeof breakpoint.sm > "u" ? !0 : breakpoint.sm;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_antd7.ThemedLayoutContextProvider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_antd8.Layout, { hasSider, style: { minHeight: "100vh", display: "flex" }, children: [
    hasSider ? /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(SiderToRender, { Title: Title2 }, void 0, !1, {
      fileName: "app/components/Layout/index.tsx",
      lineNumber: 25,
      columnNumber: 20
    }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)("div", {}, void 0, !1, {
      fileName: "app/components/Layout/index.tsx",
      lineNumber: 25,
      columnNumber: 53
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_antd8.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(HeaderToRender, {}, void 0, !1, {
        fileName: "app/components/Layout/index.tsx",
        lineNumber: 27,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(import_antd8.Layout.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(
          "div",
          {
            style: {
              minHeight: 360,
              padding: isSmall ? 24 : 12
            },
            children
          },
          void 0,
          !1,
          {
            fileName: "app/components/Layout/index.tsx",
            lineNumber: 29,
            columnNumber: 13
          },
          this
        ),
        OffLayoutArea && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(OffLayoutArea, {}, void 0, !1, {
          fileName: "app/components/Layout/index.tsx",
          lineNumber: 37,
          columnNumber: 31
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/Layout/index.tsx",
        lineNumber: 28,
        columnNumber: 11
      }, this),
      Footer && /* @__PURE__ */ (0, import_jsx_dev_runtime8.jsxDEV)(Footer, {}, void 0, !1, {
        fileName: "app/components/Layout/index.tsx",
        lineNumber: 39,
        columnNumber: 22
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/Layout/index.tsx",
      lineNumber: 26,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/Layout/index.tsx",
    lineNumber: 24,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/Layout/index.tsx",
    lineNumber: 23,
    columnNumber: 5
  }, this);
}

// app/routes/_apps.tsx
var import_jsx_dev_runtime9 = require("react/jsx-dev-runtime");
function BaseLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(ThemedLayoutV2, { hasSider: !1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime9.jsxDEV)(import_react4.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_apps.tsx",
    lineNumber: 9,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_apps.tsx",
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
async function loader2({ request }) {
  let { authenticated, redirectTo } = await authProvider.check(request);
  if (!authenticated)
    throw (0, import_node3.redirect)(redirectTo ?? "/login");
  return {};
}

// app/routes/_apps.apps.tsx
var apps_apps_exports = {};
__export(apps_apps_exports, {
  default: () => AppPage
});
var import_antd11 = require("@refinedev/antd"), import_antd12 = require("antd"), import_react7 = require("@remix-run/react");

// app/components/buttons/DropdownActions.tsx
var import_core6 = require("@refinedev/core");
var import_antd10 = require("antd");

// app/components/buttons/DeleteButton.tsx
var import_core5 = require("@refinedev/core"), import_icons5 = require("@ant-design/icons"), import_antd9 = require("antd"), import_jsx_dev_runtime10 = require("react/jsx-dev-runtime");
function DeleteButton({
  resource: resourceNameFromProps,
  recordItemId,
  onSuccess,
  onCancel,
  mutationMode: mutationModeProp,
  children,
  successNotification,
  errorNotification,
  hideText = !1,
  accessControl,
  meta: meta2,
  dataProviderName,
  confirmTitle,
  confirmOkText,
  confirmCancelText,
  invalidates,
  ...rest
}) {
  let accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? !0, hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? !1, translate = (0, import_core5.useTranslate)(), { id, resource } = (0, import_core5.useResource)(
    resourceNameFromProps
  );
  console.log("resource", resource, id);
  let { mutationMode: mutationModeContext } = (0, import_core5.useMutationMode)(), mutationMode = mutationModeProp ?? mutationModeContext, { mutate, isLoading, variables } = (0, import_core5.useDelete)(), { data } = (0, import_core5.useCan)({
    resource: resource == null ? void 0 : resource.name,
    action: "delete",
    params: { id: recordItemId ?? id, resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  });
  return accessControlEnabled && hideIfUnauthorized && !(data != null && data.can) ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
    import_antd9.Popconfirm,
    {
      okText: confirmOkText ?? translate("buttons.delete", "Delete"),
      cancelText: confirmCancelText ?? translate("buttons.cancel", "Cancel"),
      okType: "danger",
      title: confirmTitle ?? translate("buttons.confirm", "Are you sure?"),
      okButtonProps: { disabled: isLoading },
      onCancel,
      open: !0,
      onConfirm: () => {
        (recordItemId ?? id) && (resource == null ? void 0 : resource.name) && mutate(
          {
            id: recordItemId ?? id ?? "",
            resource: resource == null ? void 0 : resource.name,
            mutationMode,
            successNotification,
            errorNotification,
            meta: meta2,
            dataProviderName,
            invalidates
          },
          {
            onSuccess: (value) => {
              onSuccess && onSuccess(value);
            }
          }
        );
      },
      disabled: typeof (rest == null ? void 0 : rest.disabled) < "u" ? rest.disabled : (data == null ? void 0 : data.can) === !1,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(
        import_antd9.Button,
        {
          danger: !0,
          loading: (recordItemId ?? id) === (variables == null ? void 0 : variables.id) && isLoading,
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime10.jsxDEV)(import_icons5.DeleteOutlined, {}, void 0, !1, {
            fileName: "app/components/buttons/DeleteButton.tsx",
            lineNumber: 114,
            columnNumber: 15
          }, this),
          disabled: (data == null ? void 0 : data.can) === !1,
          ...rest,
          children: !hideText && (children ?? translate("buttons.delete", "Delete"))
        },
        void 0,
        !1,
        {
          fileName: "app/components/buttons/DeleteButton.tsx",
          lineNumber: 111,
          columnNumber: 7
        },
        this
      )
    },
    "delete",
    !1,
    {
      fileName: "app/components/buttons/DeleteButton.tsx",
      lineNumber: 75,
      columnNumber: 5
    },
    this
  );
}

// app/components/buttons/DropdownActions.tsx
var import_react5 = require("@remix-run/react"), import_react6 = __toESM(require("react")), import_jsx_dev_runtime11 = require("react/jsx-dev-runtime");
function DropdownActions({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = !1,
  editItem,
  deleteItem,
  showItem,
  accessControl,
  meta: meta2,
  children,
  ...rest
}) {
  let accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? !0, translate = (0, import_core6.useTranslate)(), { editUrl: generateEditUrl, showUrl: generateShowUrl } = (0, import_core6.useNavigation)(), { id, resource } = (0, import_core6.useResource)(
    resourceNameFromProps
  ), { data: editData } = (0, import_core6.useCan)({
    resource: resource == null ? void 0 : resource.name,
    action: "edit",
    params: { id: recordItemId ?? id, resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  }), { data: showData } = (0, import_core6.useCan)({
    resource: resource == null ? void 0 : resource.name,
    action: "show",
    params: { id: recordItemId ?? id, resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  }), { data: deleteData } = (0, import_core6.useCan)({
    resource: resource == null ? void 0 : resource.name,
    action: "delete",
    params: { id: recordItemId ?? id, resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  }), showUrl = (typeof (showItem == null ? void 0 : showItem.url) == "function" ? showItem == null ? void 0 : showItem.url() : showItem == null ? void 0 : showItem.url) || (resource && (recordItemId || id) ? generateShowUrl(resource, recordItemId ?? id, meta2) : ""), createButtonDisabledTitle = (data) => data != null && data.can ? "" : data != null && data.reason ? data.reason : translate(
    "buttons.notAccessTitle",
    "You don't have permission to access"
  ), editUrl = (typeof (editItem == null ? void 0 : editItem.url) == "function" ? editItem.url() : editItem == null ? void 0 : editItem.url) || (resource && (recordItemId ?? id) ? generateEditUrl(resource, recordItemId ?? id, meta2) : ""), [confirmDelete, setConfirmDelete] = import_react6.default.useState(!1);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_jsx_dev_runtime11.Fragment, { children: [
    !confirmDelete && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      import_antd10.Dropdown,
      {
        menu: {
          items: [
            {
              key: "show",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react5.Link, { to: showUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd10.Space, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(ShowIcon, {}, void 0, !1, {
                  fileName: "app/components/buttons/DropdownActions.tsx",
                  lineNumber: 109,
                  columnNumber: 33
                }, this),
                !hideText && translate("buttons.show", "Ver")
              ] }, void 0, !0, {
                fileName: "app/components/buttons/DropdownActions.tsx",
                lineNumber: 108,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/buttons/DropdownActions.tsx",
                lineNumber: 107,
                columnNumber: 32
              }, this),
              title: createButtonDisabledTitle(showData),
              disabled: (showData == null ? void 0 : showData.can) === !1
            },
            {
              key: "edit",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_react5.Link, { to: editUrl, children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd10.Space, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(EditIcon, {}, void 0, !1, {
                  fileName: "app/components/buttons/DropdownActions.tsx",
                  lineNumber: 120,
                  columnNumber: 33
                }, this),
                !hideText && translate("buttons.edit", "Editar")
              ] }, void 0, !0, {
                fileName: "app/components/buttons/DropdownActions.tsx",
                lineNumber: 119,
                columnNumber: 29
              }, this) }, void 0, !1, {
                fileName: "app/components/buttons/DropdownActions.tsx",
                lineNumber: 118,
                columnNumber: 32
              }, this),
              title: createButtonDisabledTitle(editData),
              disabled: (editData == null ? void 0 : editData.can) === !1
            },
            {
              key: "delete",
              label: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd10.Space, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(DeleteIcon, {}, void 0, !1, {
                  fileName: "app/components/buttons/DropdownActions.tsx",
                  lineNumber: 130,
                  columnNumber: 29
                }, this),
                !hideText && translate("buttons.delete", "Eliminar")
              ] }, void 0, !0, {
                fileName: "app/components/buttons/DropdownActions.tsx",
                lineNumber: 129,
                columnNumber: 32
              }, this),
              title: createButtonDisabledTitle(deleteData),
              disabled: (deleteData == null ? void 0 : deleteData.can) === !1,
              onClick: () => setConfirmDelete(!0),
              danger: !0
            }
          ]
        },
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(import_antd10.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(MoreIcon, {}, void 0, !1, {
          fileName: "app/components/buttons/DropdownActions.tsx",
          lineNumber: 141,
          columnNumber: 39
        }, this) }, void 0, !1, {
          fileName: "app/components/buttons/DropdownActions.tsx",
          lineNumber: 141,
          columnNumber: 13
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/buttons/DropdownActions.tsx",
        lineNumber: 102,
        columnNumber: 29
      },
      this
    ),
    confirmDelete && /* @__PURE__ */ (0, import_jsx_dev_runtime11.jsxDEV)(
      DeleteButton,
      {
        hideText: !0,
        type: "link",
        resource: resourceNameFromProps,
        recordItemId,
        onCancel: () => setConfirmDelete(!1)
      },
      void 0,
      !1,
      {
        fileName: "app/components/buttons/DropdownActions.tsx",
        lineNumber: 143,
        columnNumber: 27
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/buttons/DropdownActions.tsx",
    lineNumber: 101,
    columnNumber: 12
  }, this);
}

// app/routes/_apps.apps.tsx
var import_jsx_dev_runtime12 = require("react/jsx-dev-runtime");
function AppPage() {
  var _a;
  let { queryResult, listProps } = (0, import_antd11.useSimpleList)({}), [searchParams, setSearchParams] = (0, import_react7.useSearchParams)(), getAppUrl = (appCode) => {
    let domain = window.location.host.split(".").slice(-2).join(".");
    return `${window.location.protocol}//${appCode}.${domain}`;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
    import_antd11.List,
    {
      title: "Mis aplicaciones",
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
          import_antd12.List,
          {
            ...listProps,
            grid: { gutter: 16, column: 4 },
            dataSource: (_a = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _a.data,
            renderItem: (item) => /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.List.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
              import_antd12.Card,
              {
                title: item.name,
                actions: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_antd12.Button, { type: "link", href: item.url, onClick: () => {
                  }, children: "Ir a app" }, void 0, !1, {
                    fileName: "app/routes/_apps.apps.tsx",
                    lineNumber: 31,
                    columnNumber: 25
                  }, this),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(
                    DropdownActions,
                    {
                      showItem: {
                        url: () => getAppUrl(item.code)
                      },
                      editItem: {
                        url: () => (searchParams.set("edit", item.id), `?${searchParams.toString()}`)
                      }
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/routes/_apps.apps.tsx",
                      lineNumber: 32,
                      columnNumber: 25
                    },
                    this
                  )
                ]
              },
              void 0,
              !1,
              {
                fileName: "app/routes/_apps.apps.tsx",
                lineNumber: 29,
                columnNumber: 17
              },
              this
            ) }, void 0, !1, {
              fileName: "app/routes/_apps.apps.tsx",
              lineNumber: 28,
              columnNumber: 33
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_apps.apps.tsx",
            lineNumber: 24,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime12.jsxDEV)(import_react7.Outlet, {}, void 0, !1, {
          fileName: "app/routes/_apps.apps.tsx",
          lineNumber: 50,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_apps.apps.tsx",
      lineNumber: 21,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_apps.apps.create.tsx
var apps_apps_create_exports = {};
__export(apps_apps_create_exports, {
  default: () => CreateApp
});
var import_antd16 = require("@refinedev/antd");

// app/components/apps/AppForm.tsx
var import_antd13 = require("antd"), import_jsx_dev_runtime13 = require("react/jsx-dev-runtime");
function AppForm({
  formProps
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime13.jsxDEV)(
    import_antd13.Form,
    {
      ...formProps,
      layout: "vertical"
    },
    void 0,
    !1,
    {
      fileName: "app/components/apps/AppForm.tsx",
      lineNumber: 11,
      columnNumber: 12
    },
    this
  );
}

// app/components/crud/CreateDrawer.tsx
var import_react8 = require("@remix-run/react"), import_antd15 = require("antd"), import_react9 = require("react");

// app/components/buttons/SaveButton.tsx
var import_core7 = require("@refinedev/core"), import_antd14 = require("antd");
var import_jsx_dev_runtime14 = require("react/jsx-dev-runtime");
function SaveButton({
  hideText = !1,
  children,
  ...rest
}) {
  let translate = (0, import_core7.useTranslate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(import_antd14.Button, { type: "primary", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime14.jsxDEV)(SaveIcon, {}, void 0, !1, {
    fileName: "app/components/buttons/SaveButton.tsx",
    lineNumber: 21,
    columnNumber: 34
  }, this), ...rest, children: !hideText && (children ?? translate("buttons.save", "Guardar")) }, void 0, !1, {
    fileName: "app/components/buttons/SaveButton.tsx",
    lineNumber: 21,
    columnNumber: 5
  }, this);
}

// app/components/crud/CreateDrawer.tsx
var import_jsx_dev_runtime15 = require("react/jsx-dev-runtime");
function CreateDrawer({
  children,
  back = !0,
  title,
  size = "large",
  open,
  onClose,
  saveButtonProps
}) {
  let [_open, setOpen] = (0, import_react9.useState)(!1);
  (0, import_react9.useEffect)(() => {
    setOpen(open);
  }, [open]);
  let navigate = (0, import_react8.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
    import_antd15.Drawer,
    {
      title,
      placement: "right",
      width: "100%",
      contentWrapperStyle: { maxWidth: size === "default" ? "40rem" : size === "large" ? "60rem" : size === "extraLarge" ? "80rem" : "100%" },
      mask: !1,
      open: _open,
      destroyOnClose: !0,
      onClose: () => {
        onClose == null || onClose(), back && navigate(-1);
      },
      footer: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_antd15.Space, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(
        SaveButton,
        {
          loading: saveButtonProps == null ? void 0 : saveButtonProps.disabled,
          ...saveButtonProps
        },
        void 0,
        !1,
        {
          fileName: "app/components/crud/CreateDrawer.tsx",
          lineNumber: 48,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/crud/CreateDrawer.tsx",
        lineNumber: 47,
        columnNumber: 17
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime15.jsxDEV)(import_antd15.Spin, { spinning: saveButtonProps == null ? void 0 : saveButtonProps.disabled, children }, void 0, !1, {
        fileName: "app/components/crud/CreateDrawer.tsx",
        lineNumber: 53,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/crud/CreateDrawer.tsx",
      lineNumber: 33,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_apps.apps.create.tsx
var import_jsx_dev_runtime16 = require("react/jsx-dev-runtime");
function CreateApp() {
  let { formProps, saveButtonProps } = (0, import_antd16.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(
    CreateDrawer,
    {
      open: !0,
      title: "Crear aplicaci\xF3n",
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime16.jsxDEV)(AppForm, { formProps }, void 0, !1, {
        fileName: "app/routes/_apps.apps.create.tsx",
        lineNumber: 18,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_apps.apps.create.tsx",
      lineNumber: 13,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/_apps.apps.create.tsx",
    lineNumber: 12,
    columnNumber: 12
  }, this);
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_dev_runtime17 = require("react/jsx-dev-runtime");
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime17.jsxDEV)(import_react10.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_auth.tsx",
    lineNumber: 8,
    columnNumber: 12
  }, this);
}
async function loader3({ request }) {
  let { authenticated, redirectTo } = await authProvider.check(request);
  if (authenticated)
    throw (0, import_node4.redirect)(redirectTo ?? "/");
  return {};
}

// app/routes/_auth.login.tsx
var auth_login_exports = {};
__export(auth_login_exports, {
  default: () => LoginPage
});

// app/components/auth/Login.tsx
var import_core8 = require("@refinedev/core"), import_antd17 = require("antd");
var import_jsx_dev_runtime18 = require("react/jsx-dev-runtime"), { useToken: useToken4 } = import_antd17.theme;
function Login({
  providers,
  registerLink,
  forgotPasswordLink,
  rememberMe,
  contentProps,
  wrapperProps,
  renderContent,
  formProps,
  title
}) {
  let { token } = useToken4(), [form] = import_antd17.Form.useForm(), translate = (0, import_core8.useTranslate)(), routerType = (0, import_core8.useRouterType)(), Link5 = (0, import_core8.useLink)(), { Link: LegacyLink } = (0, import_core8.useRouterContext)(), ActiveLink = routerType === "legacy" ? LegacyLink : Link5, authProvider2 = (0, import_core8.useActiveAuthProvider)(), { mutate: login, isLoading } = (0, import_core8.useLogin)({
    v3LegacyAuthProviderCompatible: Boolean(authProvider2 == null ? void 0 : authProvider2.isLegacy)
  }), screens = import_antd17.Grid.useBreakpoint(), PageTitle = title === !1 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      },
      children: title ?? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(ThemedTitleV2, { collapsed: !1 }, void 0, !1, {
        fileName: "app/components/auth/Login.tsx",
        lineNumber: 75,
        columnNumber: 19
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/auth/Login.tsx",
      lineNumber: 67,
      columnNumber: 7
    },
    this
  ), CardTitle = /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_antd17.Typography.Title,
    {
      level: 3,
      style: {
        color: token.colorPrimaryTextHover
      },
      children: translate("pages.login.title", "Iniciar sesi\xF3n")
    },
    void 0,
    !1,
    {
      fileName: "app/components/auth/Login.tsx",
      lineNumber: 80,
      columnNumber: 5
    },
    this
  ), renderProviders = () => providers && providers.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
    providers.map((provider) => /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_antd17.Button,
      {
        type: "default",
        block: !0,
        icon: provider.icon,
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "8px"
        },
        onClick: () => login({
          providerName: provider.name
        }),
        children: provider.label
      },
      provider.name,
      !1,
      {
        fileName: "app/components/auth/Login.tsx",
        lineNumber: 96,
        columnNumber: 15
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_antd17.Divider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
      import_antd17.Typography.Text,
      {
        style: {
          color: token.colorTextLabel
        },
        children: translate("pages.login.divider", "or")
      },
      void 0,
      !1,
      {
        fileName: "app/components/auth/Login.tsx",
        lineNumber: 119,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/auth/Login.tsx",
      lineNumber: 118,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/Login.tsx",
    lineNumber: 93,
    columnNumber: 9
  }, this) : null, CardContent = /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_antd17.Card,
    {
      title: CardTitle,
      style: {
        backgroundColor: token.colorBgElevated,
        maxWidth: "400px",
        margin: "0 auto"
      },
      ...contentProps ?? {},
      children: [
        renderProviders(),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_antd17.Form,
          {
            size: "large",
            layout: "vertical",
            form,
            onFinish: (values) => login(values),
            requiredMark: !1,
            initialValues: {
              remember: !1
            },
            ...formProps,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                import_antd17.Form.Item,
                {
                  name: "email",
                  label: translate("pages.login.fields.email", "Correo electr\xF3nico"),
                  rules: [
                    { required: !0 },
                    {
                      type: "email",
                      message: translate(
                        "pages.login.errors.validEmail",
                        "El correo electr\xF3nico no es v\xE1lido"
                      )
                    }
                  ],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                    import_antd17.Input,
                    {
                      placeholder: translate("pages.login.fields.email", "Correo electr\xF3nico")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/auth/Login.tsx",
                      lineNumber: 169,
                      columnNumber: 11
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/auth/Login.tsx",
                  lineNumber: 155,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                import_antd17.Form.Item,
                {
                  name: "password",
                  label: translate("pages.login.fields.password", "Contrase\xF1a"),
                  rules: [{ required: !0 }],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_antd17.Input, { type: "password", placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF" }, void 0, !1, {
                    fileName: "app/components/auth/Login.tsx",
                    lineNumber: 178,
                    columnNumber: 11
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/auth/Login.tsx",
                  lineNumber: 173,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "24px"
                  },
                  children: [
                    rememberMe ?? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_antd17.Form.Item, { name: "remember", valuePropName: "checked", noStyle: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                      import_antd17.Checkbox,
                      {
                        style: {
                          fontSize: "12px"
                        },
                        children: translate("pages.login.buttons.rememberMe", "Recuerdame")
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/auth/Login.tsx",
                        lineNumber: 189,
                        columnNumber: 15
                      },
                      this
                    ) }, void 0, !1, {
                      fileName: "app/components/auth/Login.tsx",
                      lineNumber: 188,
                      columnNumber: 13
                    }, this),
                    forgotPasswordLink ?? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                      ActiveLink,
                      {
                        style: {
                          color: token.colorPrimaryTextHover,
                          fontSize: "12px",
                          marginLeft: "auto"
                        },
                        to: "/forgot-password",
                        children: translate(
                          "pages.login.buttons.forgotPassword",
                          "\xBFOlvidaste tu contrase\xF1a?"
                        )
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/components/auth/Login.tsx",
                        lineNumber: 199,
                        columnNumber: 13
                      },
                      this
                    )
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/components/auth/Login.tsx",
                  lineNumber: 180,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_antd17.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
                import_antd17.Button,
                {
                  type: "primary",
                  htmlType: "submit",
                  loading: isLoading,
                  block: !0,
                  children: translate("pages.login.signin", "Iniciar sesi\xF3n")
                },
                void 0,
                !1,
                {
                  fileName: "app/components/auth/Login.tsx",
                  lineNumber: 215,
                  columnNumber: 11
                },
                this
              ) }, void 0, !1, {
                fileName: "app/components/auth/Login.tsx",
                lineNumber: 214,
                columnNumber: 9
              }, this)
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/auth/Login.tsx",
            lineNumber: 144,
            columnNumber: 7
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)("div", { style: { marginTop: 8 }, children: registerLink ?? /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_antd17.Typography.Text, { style: { fontSize: 12 }, children: [
          translate(
            "pages.login.buttons.noAccount",
            "\xBFNo tienes una cuenta?"
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
            ActiveLink,
            {
              to: "/register",
              style: {
                fontWeight: "bold",
                color: token.colorPrimaryTextHover
              },
              children: translate("pages.login.signup", "Registrate")
            },
            void 0,
            !1,
            {
              fileName: "app/components/auth/Login.tsx",
              lineNumber: 232,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/auth/Login.tsx",
          lineNumber: 227,
          columnNumber: 11
        }, this) }, void 0, !1, {
          fileName: "app/components/auth/Login.tsx",
          lineNumber: 225,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/auth/Login.tsx",
      lineNumber: 134,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_antd17.Layout, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
    import_antd17.Row,
    {
      justify: "center",
      align: "middle",
      style: {
        height: "100vh"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_antd17.Col, { style: {
          padding: "0 24px",
          minWidth: "30%"
        }, children: renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(import_jsx_dev_runtime18.Fragment, { children: [
          PageTitle,
          CardContent
        ] }, void 0, !0, {
          fileName: "app/components/auth/Login.tsx",
          lineNumber: 262,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/auth/Login.tsx",
          lineNumber: 255,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime18.jsxDEV)(
          import_antd17.Col,
          {
            flex: "auto",
            style: {
              display: screens.xs ? "none" : "block",
              height: "100vh",
              backgroundColor: token.colorPrimaryActive
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/Login.tsx",
            lineNumber: 268,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/auth/Login.tsx",
      lineNumber: 248,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/auth/Login.tsx",
    lineNumber: 247,
    columnNumber: 10
  }, this);
}

// app/routes/_auth.login.tsx
var import_jsx_dev_runtime19 = require("react/jsx-dev-runtime");
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime19.jsxDEV)(Login, {}, void 0, !1, {
    fileName: "app/routes/_auth.login.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/routes/_auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  default: () => LoginPage2
});

// app/components/auth/Register.tsx
var import_core9 = require("@refinedev/core"), import_antd18 = require("@refinedev/antd"), import_antd19 = require("antd"), import_jsx_dev_runtime20 = require("react/jsx-dev-runtime"), { Text: Text2, Title } = import_antd19.Typography, { useToken: useToken5 } = import_antd19.theme;
function RegisterPage({
  providers,
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title
}) {
  let { token } = useToken5(), [form] = import_antd19.Form.useForm(), translate = (0, import_core9.useTranslate)(), routerType = (0, import_core9.useRouterType)(), Link5 = (0, import_core9.useLink)(), { Link: LegacyLink } = (0, import_core9.useRouterContext)(), ActiveLink = routerType === "legacy" ? LegacyLink : Link5, authProvider2 = (0, import_core9.useActiveAuthProvider)(), { mutate: register, isLoading } = (0, import_core9.useRegister)(), screens = import_antd19.Grid.useBreakpoint(), PageTitle = title === !1 ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      },
      children: title ?? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd18.ThemedTitleV2, { collapsed: !1 }, void 0, !1, {
        fileName: "app/components/auth/Register.tsx",
        lineNumber: 72,
        columnNumber: 19
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/auth/Register.tsx",
      lineNumber: 64,
      columnNumber: 7
    },
    this
  ), CardTitle = /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    Title,
    {
      level: 3,
      style: {
        color: token.colorPrimaryTextHover
      },
      children: translate("pages.register.title", "Crea una cuenta")
    },
    void 0,
    !1,
    {
      fileName: "app/components/auth/Register.tsx",
      lineNumber: 77,
      columnNumber: 5
    },
    this
  ), renderProviders = () => providers && providers.length > 0 ? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
    providers.map((provider) => /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      import_antd19.Button,
      {
        type: "default",
        block: !0,
        icon: provider.icon,
        style: {
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginBottom: "8px"
        },
        onClick: () => register({
          providerName: provider.name
        }),
        children: provider.label
      },
      provider.name,
      !1,
      {
        fileName: "app/components/auth/Register.tsx",
        lineNumber: 93,
        columnNumber: 15
      },
      this
    )),
    /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd19.Divider, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
      Text2,
      {
        style: {
          color: token.colorTextLabel
        },
        children: translate("pages.login.divider", "o")
      },
      void 0,
      !1,
      {
        fileName: "app/components/auth/Register.tsx",
        lineNumber: 116,
        columnNumber: 13
      },
      this
    ) }, void 0, !1, {
      fileName: "app/components/auth/Register.tsx",
      lineNumber: 115,
      columnNumber: 11
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/auth/Register.tsx",
    lineNumber: 90,
    columnNumber: 9
  }, this) : null;
  console.log(register);
  let CardContent = /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_antd19.Card,
    {
      title: CardTitle,
      style: {
        backgroundColor: token.colorBgElevated,
        maxWidth: "400px",
        margin: "0 auto"
      },
      ...contentProps ?? {},
      children: [
        renderProviders(),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_antd19.Form,
          {
            layout: "vertical",
            form,
            onFinish: (values) => {
              let data = {
                ...values,
                username: values.email
              };
              register(data, {
                onSuccess: (data2) => {
                  console.log(data2);
                }
              });
            },
            requiredMark: !1,
            ...formProps,
            children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                import_antd19.Form.Item,
                {
                  name: "email",
                  label: translate("pages.register.email", "Correo electr\xF3nico"),
                  rules: [
                    { required: !0 },
                    {
                      type: "email",
                      message: translate(
                        "pages.register.errors.validEmail",
                        "El correo electr\xF3nico no es v\xE1lido"
                      )
                    }
                  ],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                    import_antd19.Input,
                    {
                      size: "large",
                      placeholder: translate("pages.register.fields.email", "Correo electr\xF3nico")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/auth/Register.tsx",
                      lineNumber: 172,
                      columnNumber: 11
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/auth/Register.tsx",
                  lineNumber: 158,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                import_antd19.Form.Item,
                {
                  name: "password",
                  label: translate("pages.register.fields.password", "Contrase\xF1a"),
                  rules: [{ required: !0 }],
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd19.Input, { type: "password", placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", size: "large" }, void 0, !1, {
                    fileName: "app/components/auth/Register.tsx",
                    lineNumber: 182,
                    columnNumber: 11
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/components/auth/Register.tsx",
                  lineNumber: 177,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "24px"
                  },
                  children: loginLink ?? /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                    Text2,
                    {
                      style: {
                        fontSize: 12,
                        marginLeft: "auto"
                      },
                      children: [
                        translate("pages.login.buttons.haveAccount", "\xBFTienes una cuenta?"),
                        " ",
                        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                          ActiveLink,
                          {
                            style: {
                              fontWeight: "bold",
                              color: token.colorPrimaryTextHover
                            },
                            to: "/login",
                            children: translate("pages.login.signin", "Iniciar sesi\xF3n")
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/components/auth/Register.tsx",
                            lineNumber: 199,
                            columnNumber: 15
                          },
                          this
                        )
                      ]
                    },
                    void 0,
                    !0,
                    {
                      fileName: "app/components/auth/Register.tsx",
                      lineNumber: 192,
                      columnNumber: 13
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/auth/Register.tsx",
                  lineNumber: 184,
                  columnNumber: 9
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                import_antd19.Form.Item,
                {
                  style: {
                    marginBottom: 0
                  },
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
                    import_antd19.Button,
                    {
                      type: "primary",
                      size: "large",
                      htmlType: "submit",
                      loading: isLoading,
                      block: !0,
                      children: translate("pages.register.buttons.submit", "Registrate")
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/auth/Register.tsx",
                      lineNumber: 217,
                      columnNumber: 11
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/auth/Register.tsx",
                  lineNumber: 212,
                  columnNumber: 9
                },
                this
              )
            ]
          },
          void 0,
          !0,
          {
            fileName: "app/components/auth/Register.tsx",
            lineNumber: 141,
            columnNumber: 7
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/auth/Register.tsx",
      lineNumber: 131,
      columnNumber: 5
    },
    this
  );
  return /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd19.Layout, { ...wrapperProps ?? {}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
    import_antd19.Row,
    {
      justify: "center",
      align: "middle",
      style: {
        height: "100vh"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_antd19.Col, { style: {
          padding: "0 24px",
          minWidth: "30%"
        }, children: renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(import_jsx_dev_runtime20.Fragment, { children: [
          PageTitle,
          CardContent
        ] }, void 0, !0, {
          fileName: "app/components/auth/Register.tsx",
          lineNumber: 247,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/auth/Register.tsx",
          lineNumber: 240,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime20.jsxDEV)(
          import_antd19.Col,
          {
            flex: "auto",
            style: {
              display: screens.xs ? "none" : "block",
              height: "100vh",
              backgroundColor: token.colorPrimaryActive
            }
          },
          void 0,
          !1,
          {
            fileName: "app/components/auth/Register.tsx",
            lineNumber: 253,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/auth/Register.tsx",
      lineNumber: 233,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/auth/Register.tsx",
    lineNumber: 232,
    columnNumber: 5
  }, this);
}

// app/routes/_auth.register.tsx
var import_jsx_dev_runtime21 = require("react/jsx-dev-runtime");
function LoginPage2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime21.jsxDEV)(RegisterPage, {}, void 0, !1, {
    fileName: "app/routes/_auth.register.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => BaseLayout2,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_jsx_dev_runtime22 = require("react/jsx-dev-runtime");
function BaseLayout2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(ThemedLayoutV2, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime22.jsxDEV)(import_react11.Outlet, {}, void 0, !1, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 11,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/routes/_layout.tsx",
    lineNumber: 10,
    columnNumber: 12
  }, this);
}
async function loader4({ request }) {
  let { authenticated, redirectTo } = await authProvider.check(request);
  if (!authenticated)
    throw (0, import_node5.redirect)(redirectTo ?? "/login");
  return {};
}

// app/routes/_layout.$.tsx
var layout_exports2 = {};
__export(layout_exports2, {
  default: () => Index
});
var import_antd20 = require("@refinedev/antd"), import_jsx_dev_runtime23 = require("react/jsx-dev-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime23.jsxDEV)(import_antd20.ErrorComponent, {}, void 0, !1, {
    fileName: "app/routes/_layout.$.tsx",
    lineNumber: 7,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.calendar.tsx
var layout_calendar_exports = {};
__export(layout_calendar_exports, {
  default: () => CalendarPage,
  links: () => links2
});

// app/components/calendar/CalendarComponents.tsx
var import_antd21 = require("antd"), import_dayjs2 = __toESM(require("dayjs"));
var import_react_big_calendar = require("react-big-calendar"), import_react12 = require("@remix-run/react"), import_react13 = require("react"), import_jsx_dev_runtime24 = require("react/jsx-dev-runtime"), CalendarComponents = {
  toolbar({ label, localizer: localizer2, onNavigate, onView, view, views }) {
    let { messages } = localizer2, [searchParams, setSearchParams] = (0, import_react12.useSearchParams)();
    return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Row, { justify: "space-between", align: "middle", style: { paddingBottom: "1rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Space.Compact, { children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Button, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(TodayIcon, {}, void 0, !1, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 15,
          columnNumber: 35
        }, this), onClick: () => onNavigate(import_react_big_calendar.Navigate.TODAY), title: messages.today }, void 0, !1, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 15,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Button, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(PrevIcon, {}, void 0, !1, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 16,
          columnNumber: 35
        }, this), onClick: () => onNavigate(import_react_big_calendar.Navigate.PREVIOUS), title: messages.next }, void 0, !1, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 16,
          columnNumber: 21
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Button, { icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(NextIcon, {}, void 0, !1, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 17,
          columnNumber: 35
        }, this), onClick: () => onNavigate(import_react_big_calendar.Navigate.NEXT), title: messages.previous }, void 0, !1, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 17,
          columnNumber: 21
        }, this)
      ] }, void 0, !0, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 14,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 13,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Typography.Text, { children: label }, void 0, !1, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 22,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 21,
        columnNumber: 13
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        import_antd21.Segmented,
        {
          value: view,
          onChange: (value) => {
            onView(value), searchParams.set("view", value), setSearchParams(searchParams);
          },
          options: views.map((view2) => ({
            value: view2,
            label: view2
          }))
        },
        void 0,
        !1,
        {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 25,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 24,
        columnNumber: 13
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/calendar/CalendarComponents.tsx",
      lineNumber: 12,
      columnNumber: 16
    }, this);
  },
  month: {
    header({ label, date }) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Tooltip, { title: (0, import_dayjs2.default)(date).format("dddd"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Typography.Title, { level: 5, children: label }, void 0, !1, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 43,
        columnNumber: 17
      }, this) }, void 0, !1, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 42,
        columnNumber: 20
      }, this);
    },
    dateHeader({ label, date, onDrillDown }) {
      return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Tooltip, { title: (0, import_dayjs2.default)(date).format("dddd, LL"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
        import_antd21.Button,
        {
          type: "text",
          onClick: onDrillDown,
          children: label
        },
        void 0,
        !1,
        {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 48,
          columnNumber: 17
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 47,
        columnNumber: 20
      }, this);
    }
  },
  event: ({ event }) => {
    let [open, setOpen] = (0, import_react13.useState)(!1);
    return /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
      import_antd21.Popover,
      {
        title: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Row, { justify: "end", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Col, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Space.Compact, { children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Button, { type: "link", size: "small", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(EditIcon, {}, void 0, !1, {
              fileName: "app/components/calendar/CalendarComponents.tsx",
              lineNumber: 61,
              columnNumber: 60
            }, this) }, void 0, !1, {
              fileName: "app/components/calendar/CalendarComponents.tsx",
              lineNumber: 61,
              columnNumber: 21
            }, this),
            /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Button, { type: "link", size: "small", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(DeleteIcon, {}, void 0, !1, {
              fileName: "app/components/calendar/CalendarComponents.tsx",
              lineNumber: 62,
              columnNumber: 60
            }, this), danger: !0 }, void 0, !1, {
              fileName: "app/components/calendar/CalendarComponents.tsx",
              lineNumber: 62,
              columnNumber: 21
            }, this)
          ] }, void 0, !0, {
            fileName: "app/components/calendar/CalendarComponents.tsx",
            lineNumber: 60,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/calendar/CalendarComponents.tsx",
            lineNumber: 59,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
            import_antd21.Button,
            {
              type: "text",
              size: "small",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(CloseIcon, {}, void 0, !1, {
                fileName: "app/components/calendar/CalendarComponents.tsx",
                lineNumber: 69,
                columnNumber: 27
              }, this),
              onClick: () => setOpen(!1)
            },
            void 0,
            !1,
            {
              fileName: "app/components/calendar/CalendarComponents.tsx",
              lineNumber: 66,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/calendar/CalendarComponents.tsx",
            lineNumber: 65,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 58,
          columnNumber: 32
        }, this),
        open,
        content: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)("div", {}, void 0, !1, {
          fileName: "app/components/calendar/CalendarComponents.tsx",
          lineNumber: 75,
          columnNumber: 22
        }, this),
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime24.jsxDEV)(
          "div",
          {
            onClick: () => setOpen(!0),
            style: {
              height: "100%"
            },
            children: event.title
          },
          void 0,
          !1,
          {
            fileName: "app/components/calendar/CalendarComponents.tsx",
            lineNumber: 79,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/calendar/CalendarComponents.tsx",
        lineNumber: 58,
        columnNumber: 16
      },
      this
    );
  }
}, CalendarComponents_default = CalendarComponents;

// app/routes/_layout.calendar.tsx
var import_react_big_calendar2 = require("react-big-calendar");

// app/components/calendar/Create.tsx
var import_antd33 = require("@refinedev/antd");

// app/components/calendar/Form.tsx
var import_antd32 = require("antd");

// app/components/controls/DatePicker.tsx
var import_antd22 = require("antd"), import_dayjs3 = __toESM(require("dayjs")), import_jsx_dev_runtime25 = require("react/jsx-dev-runtime");
function DatePicker({
  value,
  onChange,
  style,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime25.jsxDEV)(
    import_antd22.DatePicker,
    {
      ...props,
      showTime: !1,
      value: value ? (0, import_dayjs3.default)(value) : void 0,
      format: "dddd, DD MMMM YYYY",
      onChange: (value2) => onChange == null ? void 0 : onChange(value2 ? value2.format("YYYY-MM-DD") : void 0)
    },
    void 0,
    !1,
    {
      fileName: "app/components/controls/DatePicker.tsx",
      lineNumber: 17,
      columnNumber: 12
    },
    this
  );
}

// app/components/controls/TimePicker.tsx
var import_antd23 = require("antd"), import_dayjs4 = __toESM(require("dayjs")), import_jsx_dev_runtime26 = require("react/jsx-dev-runtime");
function TimePicker({
  value,
  onChange,
  style,
  ...props
}) {
  let format = "HH:mm:ss.SSS";
  return /* @__PURE__ */ (0, import_jsx_dev_runtime26.jsxDEV)(
    import_antd23.TimePicker,
    {
      ...props,
      value: value ? (0, import_dayjs4.default)(value, [format]) : void 0,
      format: "hh:mm a",
      onChange: (value2) => {
        onChange == null || onChange(value2 ? value2.format(format) : void 0);
      }
    },
    void 0,
    !1,
    {
      fileName: "app/components/controls/TimePicker.tsx",
      lineNumber: 20,
      columnNumber: 12
    },
    this
  );
}

// app/components/doctors/controls/SelectDoctor.tsx
var import_antd24 = require("antd"), import_antd25 = require("@refinedev/antd"), import_jsx_dev_runtime27 = require("react/jsx-dev-runtime");
function SelectDoctor({
  ...props
}) {
  var _a;
  let { selectProps: doctorSelectProps, queryResult } = (0, import_antd25.useSelect)({
    resource: "dc-doctors",
    debounce: 500,
    pagination: {
      mode: "server"
    },
    onSearch: (query) => [
      {
        operator: "or",
        value: [
          {
            field: "firstName",
            operator: "contains",
            value: query
          },
          {
            field: "lastName",
            operator: "contains",
            value: query
          }
        ]
      }
    ]
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime27.jsxDEV)(
    import_antd24.Select,
    {
      ...props,
      ...doctorSelectProps,
      options: (_a = queryResult.data) == null ? void 0 : _a.data.map((doctor) => ({
        label: `${doctor.firstName} ${doctor.lastName}`,
        value: doctor.id
      }))
    },
    void 0,
    !1,
    {
      fileName: "app/components/doctors/controls/SelectDoctor.tsx",
      lineNumber: 38,
      columnNumber: 12
    },
    this
  );
}

// app/components/patients/controls/SelectPatient.tsx
var import_antd26 = require("@refinedev/antd"), import_antd27 = require("antd"), import_jsx_dev_runtime28 = require("react/jsx-dev-runtime");
function SelectPatient({
  ...props
}) {
  var _a;
  let { selectProps: patientSelectProps, queryResult } = (0, import_antd26.useSelect)({
    resource: "dc-patients",
    debounce: 500,
    pagination: {
      mode: "server"
    },
    onSearch: (query) => [
      {
        operator: "or",
        value: [
          {
            field: "firstName",
            operator: "contains",
            value: query
          },
          {
            field: "lastName",
            operator: "contains",
            value: query
          }
        ]
      }
    ]
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime28.jsxDEV)(
    import_antd27.Select,
    {
      ...props,
      ...patientSelectProps,
      options: (_a = queryResult.data) == null ? void 0 : _a.data.map((patient) => ({
        label: `${patient.firstName} ${patient.lastName}`,
        value: patient.id
      }))
    },
    void 0,
    !1,
    {
      fileName: "app/components/patients/controls/SelectPatient.tsx",
      lineNumber: 38,
      columnNumber: 12
    },
    this
  );
}

// app/components/treatments/controls/SelectTreatment.tsx
var import_antd28 = require("antd"), import_antd29 = require("@refinedev/antd"), import_jsx_dev_runtime29 = require("react/jsx-dev-runtime");
function SelectTreatment({
  ...props
}) {
  var _a;
  let { selectProps: treatmentSelectProps, queryResult } = (0, import_antd29.useSelect)({
    resource: "dc-treatments",
    debounce: 500,
    pagination: {
      mode: "server"
    },
    onSearch: (query) => [
      {
        operator: "or",
        value: [
          {
            field: "name",
            operator: "contains",
            value: query
          }
        ]
      }
    ]
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime29.jsxDEV)(
    import_antd28.Select,
    {
      ...props,
      ...treatmentSelectProps,
      options: (_a = queryResult.data) == null ? void 0 : _a.data.map((treatment) => ({
        label: `${treatment.name}`,
        value: treatment.id
      }))
    },
    void 0,
    !1,
    {
      fileName: "app/components/treatments/controls/SelectTreatment.tsx",
      lineNumber: 34,
      columnNumber: 12
    },
    this
  );
}

// app/components/controls/RichEditor/theme.ts
var customTheme = {
  ltr: "ltr",
  rtl: "rtl",
  placeholder: "editor-placeholder",
  paragraph: "editor-paragraph",
  quote: "editor-quote",
  heading: {
    h1: "editor-heading-h1",
    h2: "editor-heading-h2",
    h3: "editor-heading-h3",
    h4: "editor-heading-h4",
    h5: "editor-heading-h5"
  },
  list: {
    nested: {
      listitem: "editor-nested-listitem"
    },
    ol: "editor-list-ol",
    ul: "editor-list-ul",
    listitem: "editor-listitem"
  },
  image: "editor-image",
  link: "editor-link",
  text: {
    bold: "editor-text-bold",
    italic: "editor-text-italic",
    overflowed: "editor-text-overflowed",
    hashtag: "editor-text-hashtag",
    underline: "editor-text-underline",
    strikethrough: "editor-text-strikethrough",
    underlineStrikethrough: "editor-text-underlineStrikethrough",
    code: "editor-text-code"
  },
  code: "editor-code",
  codeHighlight: {
    atrule: "editor-tokenAttr",
    attr: "editor-tokenAttr",
    boolean: "editor-tokenProperty",
    builtin: "editor-tokenSelector",
    cdata: "editor-tokenComment",
    char: "editor-tokenSelector",
    class: "editor-tokenFunction",
    "class-name": "editor-tokenFunction",
    comment: "editor-tokenComment",
    constant: "editor-tokenProperty",
    deleted: "editor-tokenProperty",
    doctype: "editor-tokenComment",
    entity: "editor-tokenOperator",
    function: "editor-tokenFunction",
    important: "editor-tokenVariable",
    inserted: "editor-tokenSelector",
    keyword: "editor-tokenAttr",
    namespace: "editor-tokenVariable",
    number: "editor-tokenProperty",
    operator: "editor-tokenOperator",
    prolog: "editor-tokenComment",
    property: "editor-tokenProperty",
    punctuation: "editor-tokenPunctuation",
    regex: "editor-tokenVariable",
    selector: "editor-tokenSelector",
    string: "editor-tokenSelector",
    symbol: "editor-tokenProperty",
    tag: "editor-tokenProperty",
    url: "editor-tokenOperator",
    variable: "editor-tokenVariable"
  }
}, theme_default = customTheme;

// app/components/controls/RichEditor/index.tsx
var import_LexicalComposer = require("@lexical/react/LexicalComposer"), import_LexicalRichTextPlugin = require("@lexical/react/LexicalRichTextPlugin"), import_LexicalContentEditable = require("@lexical/react/LexicalContentEditable"), import_LexicalHistoryPlugin = require("@lexical/react/LexicalHistoryPlugin"), import_LexicalOnChangePlugin = require("@lexical/react/LexicalOnChangePlugin"), import_LexicalErrorBoundary = __toESM(require("@lexical/react/LexicalErrorBoundary"));

// app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx
var import_LexicalComposerContext = require("@lexical/react/LexicalComposerContext"), import_react14 = require("react"), import_lexical = require("lexical"), import_link = require("@lexical/link"), import_selection = require("@lexical/selection"), import_utils = require("@lexical/utils"), import_list = require("@lexical/list"), import_rich_text = require("@lexical/rich-text"), import_code = require("@lexical/code"), import_antd30 = require("antd");
var import_jsx_dev_runtime30 = require("react/jsx-dev-runtime"), LowPriority = 1, supportedBlockTypes = /* @__PURE__ */ new Set([
  "paragraph",
  "quote",
  "code",
  "h1",
  "h2",
  "ul",
  "ol"
]), blockTypeToBlockName = {
  code: {
    name: "Code Block"
  },
  h1: {
    name: "Large Heading",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(H1Icon, {}, void 0, !1, {
      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
      lineNumber: 63,
      columnNumber: 11
    }, this)
  },
  h2: {
    name: "Medium Heading",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(H2Icon, {}, void 0, !1, {
      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
      lineNumber: 67,
      columnNumber: 11
    }, this)
  },
  h3: {
    name: "Small Heading"
  },
  h4: {
    name: "Tiny Heading"
  },
  h5: {
    name: "Tiny Heading"
  },
  ol: {
    name: "Numbered List",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(NumberedListIcon, {}, void 0, !1, {
      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
      lineNumber: 80,
      columnNumber: 11
    }, this)
  },
  paragraph: {
    name: "Paragraph",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ParagraphIcon, {}, void 0, !1, {
      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
      lineNumber: 84,
      columnNumber: 11
    }, this)
  },
  quote: {
    name: "Quote",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(QuoteIcon, {}, void 0, !1, {
      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
      lineNumber: 88,
      columnNumber: 11
    }, this)
  },
  ul: {
    name: "Bulleted List",
    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(BulletedListIcon, {}, void 0, !1, {
      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
      lineNumber: 92,
      columnNumber: 11
    }, this)
  }
};
function getSelectedNode(selection) {
  let anchor = selection.anchor, focus = selection.focus, anchorNode = selection.anchor.getNode(), focusNode = selection.focus.getNode();
  return anchorNode === focusNode ? anchorNode : selection.isBackward() ? (0, import_selection.$isAtNodeEnd)(focus) ? anchorNode : focusNode : (0, import_selection.$isAtNodeEnd)(anchor) ? focusNode : anchorNode;
}
function ToolbarPlugin() {
  let [editor] = (0, import_LexicalComposerContext.useLexicalComposerContext)(), toolbarRef = (0, import_react14.useRef)(null), [canUndo, setCanUndo] = (0, import_react14.useState)(!1), [canRedo, setCanRedo] = (0, import_react14.useState)(!1), [blockType, setBlockType] = (0, import_react14.useState)("paragraph"), [selectedElementKey, setSelectedElementKey] = (0, import_react14.useState)(null), [showBlockOptionsDropDown, setShowBlockOptionsDropDown] = (0, import_react14.useState)(
    !1
  ), [isLink, setIsLink] = (0, import_react14.useState)(!1), [isBold, setIsBold] = (0, import_react14.useState)(!1), [isItalic, setIsItalic] = (0, import_react14.useState)(!1), [isUnderline, setIsUnderline] = (0, import_react14.useState)(!1), [isStrikethrough, setIsStrikethrough] = (0, import_react14.useState)(!1), updateToolbar = (0, import_react14.useCallback)(() => {
    let selection = (0, import_lexical.$getSelection)();
    if ((0, import_lexical.$isRangeSelection)(selection)) {
      let anchorNode = selection.anchor.getNode(), element = anchorNode.getKey() === "root" ? anchorNode : anchorNode.getTopLevelElementOrThrow(), elementKey = element.getKey();
      if (editor.getElementByKey(elementKey) !== null)
        if (setSelectedElementKey(elementKey), (0, import_list.$isListNode)(element)) {
          let parentList = (0, import_utils.$getNearestNodeOfType)(anchorNode, import_list.ListNode), type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          let type = (0, import_rich_text.$isHeadingNode)(element) ? element.getTag() : element.getType();
          setBlockType(type);
        }
      setIsBold(selection.hasFormat("bold")), setIsItalic(selection.hasFormat("italic")), setIsUnderline(selection.hasFormat("underline")), setIsStrikethrough(selection.hasFormat("strikethrough"));
      let node = getSelectedNode(selection), parent = node.getParent();
      (0, import_link.$isLinkNode)(parent) || (0, import_link.$isLinkNode)(node) ? setIsLink(!0) : setIsLink(!1);
    }
  }, [editor]);
  (0, import_react14.useEffect)(() => (0, import_utils.mergeRegister)(
    editor.registerUpdateListener(({ editorState }) => {
      editorState.read(() => {
        updateToolbar();
      });
    }),
    editor.registerCommand(
      import_lexical.SELECTION_CHANGE_COMMAND,
      (_payload, newEditor) => (updateToolbar(), !1),
      LowPriority
    ),
    editor.registerCommand(
      import_lexical.CAN_UNDO_COMMAND,
      (payload) => (setCanUndo(payload), !1),
      LowPriority
    ),
    editor.registerCommand(
      import_lexical.CAN_REDO_COMMAND,
      (payload) => (setCanRedo(payload), !1),
      LowPriority
    )
  ), [editor, updateToolbar]);
  let formatParagraph = () => {
    blockType !== "paragraph" && editor.update(() => {
      let selection = (0, import_lexical.$getSelection)();
      (0, import_lexical.$isRangeSelection)(selection) && (0, import_selection.$wrapNodes)(selection, () => (0, import_lexical.$createParagraphNode)());
    }), setShowBlockOptionsDropDown(!1);
  }, formatLargeHeading = () => {
    blockType !== "h1" && editor.update(() => {
      let selection = (0, import_lexical.$getSelection)();
      (0, import_lexical.$isRangeSelection)(selection) && (0, import_selection.$wrapNodes)(selection, () => (0, import_rich_text.$createHeadingNode)("h1"));
    }), setShowBlockOptionsDropDown(!1);
  }, formatSmallHeading = () => {
    blockType !== "h2" && editor.update(() => {
      let selection = (0, import_lexical.$getSelection)();
      (0, import_lexical.$isRangeSelection)(selection) && (0, import_selection.$wrapNodes)(selection, () => (0, import_rich_text.$createHeadingNode)("h2"));
    }), setShowBlockOptionsDropDown(!1);
  }, formatBulletList = () => {
    blockType !== "ul" ? editor.dispatchCommand(import_list.INSERT_UNORDERED_LIST_COMMAND) : editor.dispatchCommand(import_list.REMOVE_LIST_COMMAND), setShowBlockOptionsDropDown(!1);
  }, formatNumberedList = () => {
    blockType !== "ol" ? editor.dispatchCommand(import_list.INSERT_ORDERED_LIST_COMMAND) : editor.dispatchCommand(import_list.REMOVE_LIST_COMMAND), setShowBlockOptionsDropDown(!1);
  }, formatQuote = () => {
    blockType !== "quote" && editor.update(() => {
      let selection = (0, import_lexical.$getSelection)();
      (0, import_lexical.$isRangeSelection)(selection) && (0, import_selection.$wrapNodes)(selection, () => (0, import_rich_text.$createQuoteNode)());
    }), setShowBlockOptionsDropDown(!1);
  }, formatCode = () => {
    blockType !== "code" && editor.update(() => {
      let selection = (0, import_lexical.$getSelection)();
      (0, import_lexical.$isRangeSelection)(selection) && (0, import_selection.$wrapNodes)(selection, () => (0, import_code.$createCodeNode)());
    }), setShowBlockOptionsDropDown(!1);
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
    "div",
    {
      className: "toolbar",
      ref: toolbarRef,
      style: {
        display: "flex"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space.Compact, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_antd30.Button,
            {
              disabled: !canUndo,
              type: "text",
              onClick: () => {
                editor.dispatchCommand(import_lexical.UNDO_COMMAND);
              },
              className: "toolbar-item spaced",
              "aria-label": "Undo",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(UndoIcon, {}, void 0, !1, {
                fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                lineNumber: 317,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
              lineNumber: 309,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_antd30.Button,
            {
              disabled: !canRedo,
              type: "text",
              onClick: () => {
                editor.dispatchCommand(import_lexical.REDO_COMMAND);
              },
              className: "toolbar-item",
              "aria-label": "Redo",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(RedoIcon, {}, void 0, !1, {
                fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                lineNumber: 327,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
              lineNumber: 319,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
          lineNumber: 308,
          columnNumber: 7
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Divider, { type: "vertical" }, void 0, !1, {
          fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
          lineNumber: 330,
          columnNumber: 7
        }, this),
        supportedBlockTypes.has(blockType) && /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_jsx_dev_runtime30.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_antd30.Dropdown,
            {
              menu: {
                items: [
                  {
                    key: "paragraph",
                    label: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space, { children: [
                      blockTypeToBlockName.paragraph.icon,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: blockTypeToBlockName.paragraph.name }, void 0, !1, {
                        fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                        lineNumber: 340,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                      lineNumber: 338,
                      columnNumber: 26
                    }, this),
                    onClick: formatParagraph
                  },
                  {
                    key: "h1",
                    label: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space, { children: [
                      blockTypeToBlockName.h1.icon,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: blockTypeToBlockName.h1.name }, void 0, !1, {
                        fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                        lineNumber: 348,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                      lineNumber: 346,
                      columnNumber: 26
                    }, this)
                  },
                  {
                    key: "h2",
                    label: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space, { children: [
                      blockTypeToBlockName.h2.icon,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: blockTypeToBlockName.h2.name }, void 0, !1, {
                        fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                        lineNumber: 355,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                      lineNumber: 353,
                      columnNumber: 26
                    }, this)
                  },
                  {
                    key: "ul",
                    label: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space, { children: [
                      blockTypeToBlockName.ul.icon,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: blockTypeToBlockName.ul.name }, void 0, !1, {
                        fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                        lineNumber: 362,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                      lineNumber: 360,
                      columnNumber: 26
                    }, this)
                  },
                  {
                    key: "ol",
                    label: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space, { children: [
                      blockTypeToBlockName.ol.icon,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: blockTypeToBlockName.ol.name }, void 0, !1, {
                        fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                        lineNumber: 369,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                      lineNumber: 367,
                      columnNumber: 26
                    }, this)
                  },
                  {
                    key: "quote",
                    label: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space, { children: [
                      blockTypeToBlockName.quote.icon,
                      /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)("span", { children: blockTypeToBlockName.quote.name }, void 0, !1, {
                        fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                        lineNumber: 376,
                        columnNumber: 21
                      }, this)
                    ] }, void 0, !0, {
                      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                      lineNumber: 374,
                      columnNumber: 26
                    }, this)
                  }
                ]
              },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
                import_antd30.Button,
                {
                  className: "toolbar-item block-controls",
                  onClick: () => setShowBlockOptionsDropDown(!showBlockOptionsDropDown),
                  type: "text",
                  "aria-label": "Formatting Options",
                  icon: blockTypeToBlockName[blockType].icon,
                  children: blockTypeToBlockName[blockType].name
                },
                void 0,
                !1,
                {
                  fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                  lineNumber: 382,
                  columnNumber: 13
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
              lineNumber: 333,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Divider, { type: "vertical" }, void 0, !1, {
            fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
            lineNumber: 394,
            columnNumber: 11
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
          lineNumber: 332,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(import_antd30.Space.Compact, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "bold");
              },
              className: "toolbar-item spaced " + (isBold ? "active" : ""),
              "aria-label": "Format Bold",
              type: isBold ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(BoldIcon, {}, void 0, !1, {
                fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                lineNumber: 405,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
              lineNumber: 398,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "italic");
              },
              className: "toolbar-item spaced " + (isItalic ? "active" : ""),
              "aria-label": "Format Italics",
              type: isItalic ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(ItalicIcon, {}, void 0, !1, {
                fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                lineNumber: 414,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
              lineNumber: 407,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "underline");
              },
              className: "toolbar-item spaced " + (isUnderline ? "active" : ""),
              "aria-label": "Format Underline",
              type: isUnderline ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(UnderlineIcon, {}, void 0, !1, {
                fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                lineNumber: 423,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
              lineNumber: 416,
              columnNumber: 11
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "strikethrough");
              },
              className: "toolbar-item spaced " + (isStrikethrough ? "active" : ""),
              "aria-label": "Format Strikethrough",
              type: isStrikethrough ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_dev_runtime30.jsxDEV)(StrikethroughIcon, {}, void 0, !1, {
                fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
                lineNumber: 434,
                columnNumber: 19
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
              lineNumber: 425,
              columnNumber: 11
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
          lineNumber: 397,
          columnNumber: 7
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/controls/RichEditor/plugins/ToolbarPlugin.tsx",
      lineNumber: 303,
      columnNumber: 5
    },
    this
  );
}

// app/components/controls/RichEditor/index.tsx
var import_rich_text2 = require("@lexical/rich-text"), import_table = require("@lexical/table"), import_list3 = require("@lexical/list"), import_code2 = require("@lexical/code"), import_link2 = require("@lexical/link"), import_LexicalLinkPlugin = require("@lexical/react/LexicalLinkPlugin"), import_LexicalListPlugin = require("@lexical/react/LexicalListPlugin"), import_LexicalMarkdownShortcutPlugin = require("@lexical/react/LexicalMarkdownShortcutPlugin"), import_markdown = require("@lexical/markdown"), import_html = require("@lexical/html"), import_text = require("@lexical/text");

// app/components/controls/RichEditor/plugins/ListMaxIndentLevelPlugin.tsx
var import_list2 = require("@lexical/list"), import_LexicalComposerContext2 = require("@lexical/react/LexicalComposerContext"), import_lexical2 = require("lexical"), import_react15 = require("react");
function getElementNodesInSelection(selection) {
  let nodesInSelection = selection.getNodes();
  return nodesInSelection.length === 0 ? /* @__PURE__ */ new Set([
    selection.anchor.getNode().getParentOrThrow(),
    selection.focus.getNode().getParentOrThrow()
  ]) : new Set(
    nodesInSelection.map((n) => (0, import_lexical2.$isElementNode)(n) ? n : n.getParentOrThrow())
  );
}
function isIndentPermitted(maxDepth) {
  let selection = (0, import_lexical2.$getSelection)();
  if (!(0, import_lexical2.$isRangeSelection)(selection))
    return !1;
  let elementNodesInSelection = getElementNodesInSelection(selection), totalDepth = 0;
  for (let elementNode of elementNodesInSelection)
    if ((0, import_list2.$isListNode)(elementNode))
      totalDepth = Math.max((0, import_list2.$getListDepth)(elementNode) + 1, totalDepth);
    else if ((0, import_list2.$isListItemNode)(elementNode)) {
      let parent = elementNode.getParent();
      if (!(0, import_list2.$isListNode)(parent))
        throw new Error(
          "ListMaxIndentLevelPlugin: A ListItemNode must have a ListNode for a parent."
        );
      totalDepth = Math.max((0, import_list2.$getListDepth)(parent) + 1, totalDepth);
    }
  return totalDepth <= maxDepth;
}
function ListMaxIndentLevelPlugin({ maxDepth }) {
  let [editor] = (0, import_LexicalComposerContext2.useLexicalComposerContext)();
  return (0, import_react15.useEffect)(() => editor.registerCommand(
    import_lexical2.INDENT_CONTENT_COMMAND,
    () => !isIndentPermitted(maxDepth ?? 7),
    import_lexical2.COMMAND_PRIORITY_HIGH
  ), [editor, maxDepth]), null;
}

// app/components/controls/RichEditor/plugins/AutoLinkPlugin.tsx
var import_LexicalAutoLinkPlugin = require("@lexical/react/LexicalAutoLinkPlugin"), import_jsx_dev_runtime31 = require("react/jsx-dev-runtime"), URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, EMAIL_MATCHER = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/, MATCHERS = [
  (text) => {
    let match = URL_MATCHER.exec(text);
    return match && {
      index: match.index,
      length: match[0].length,
      text: match[0],
      url: match[0]
    };
  },
  (text) => {
    let match = EMAIL_MATCHER.exec(text);
    return match && {
      index: match.index,
      length: match[0].length,
      text: match[0],
      url: `mailto:${match[0]}`
    };
  }
];
function PlaygroundAutoLinkPlugin() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime31.jsxDEV)(import_LexicalAutoLinkPlugin.AutoLinkPlugin, { matchers: MATCHERS }, void 0, !1, {
    fileName: "app/components/controls/RichEditor/plugins/AutoLinkPlugin.tsx",
    lineNumber: 33,
    columnNumber: 10
  }, this);
}

// app/components/controls/RichEditor/index.tsx
var import_antd31 = require("antd"), import_lexical3 = require("lexical"), import_jsx_dev_runtime32 = require("react/jsx-dev-runtime");
function Placeholder({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
    import_antd31.Typography.Text,
    {
      type: "secondary",
      style: {
        position: "absolute",
        top: 0,
        padding: "0.5rem",
        overflow: "hidden",
        textOverflow: "ellipsis",
        userSelect: "none",
        pointerEvents: "none"
      },
      children: children || "Start typing here..."
    },
    void 0,
    !1,
    {
      fileName: "app/components/controls/RichEditor/index.tsx",
      lineNumber: 30,
      columnNumber: 10
    },
    this
  );
}
var editorConfig = {
  theme: theme_default,
  onError(error) {
    throw error;
  },
  nodes: [
    import_rich_text2.HeadingNode,
    import_list3.ListNode,
    import_list3.ListItemNode,
    import_rich_text2.QuoteNode,
    import_code2.CodeNode,
    import_code2.CodeHighlightNode,
    import_table.TableNode,
    import_table.TableCellNode,
    import_table.TableRowNode,
    import_link2.AutoLinkNode,
    import_link2.LinkNode
  ]
};
function RichEditor({
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_LexicalComposer.LexicalComposer, { initialConfig: {
    ...editorConfig,
    editorState: value == null ? void 0 : value.json
  }, children: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ToolbarPlugin, {}, void 0, !1, {
      fileName: "app/components/controls/RichEditor/index.tsx",
      lineNumber: 88,
      columnNumber: 9
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)("div", { style: {
      position: "relative"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(
        import_LexicalRichTextPlugin.RichTextPlugin,
        {
          contentEditable: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_LexicalContentEditable.ContentEditable, { style: {
            padding: "0.5rem",
            userSelect: "text",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            outline: 0,
            tabSize: 1
          } }, void 0, !1, {
            fileName: "app/components/controls/RichEditor/index.tsx",
            lineNumber: 93,
            columnNumber: 30
          }, this),
          placeholder: /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(Placeholder, {}, void 0, !1, {
            fileName: "app/components/controls/RichEditor/index.tsx",
            lineNumber: 101,
            columnNumber: 26
          }, this),
          ErrorBoundary: import_LexicalErrorBoundary.default
        },
        void 0,
        !1,
        {
          fileName: "app/components/controls/RichEditor/index.tsx",
          lineNumber: 92,
          columnNumber: 11
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_LexicalOnChangePlugin.OnChangePlugin, { onChange: (editorState, editor) => {
        editorState.read(() => {
          let root = (0, import_lexical3.$getRoot)(), selection = (0, import_lexical3.$getSelection)(), json2 = JSON.stringify(editorState), text = (0, import_text.$rootTextContent)(), html = (0, import_html.$generateHtmlFromNodes)(editor, null);
          onChange == null || onChange({
            json: json2,
            text,
            html
          });
        });
      } }, void 0, !1, {
        fileName: "app/components/controls/RichEditor/index.tsx",
        lineNumber: 104,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_LexicalHistoryPlugin.HistoryPlugin, {}, void 0, !1, {
        fileName: "app/components/controls/RichEditor/index.tsx",
        lineNumber: 120,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_LexicalListPlugin.ListPlugin, {}, void 0, !1, {
        fileName: "app/components/controls/RichEditor/index.tsx",
        lineNumber: 121,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_LexicalLinkPlugin.LinkPlugin, {}, void 0, !1, {
        fileName: "app/components/controls/RichEditor/index.tsx",
        lineNumber: 122,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(PlaygroundAutoLinkPlugin, {}, void 0, !1, {
        fileName: "app/components/controls/RichEditor/index.tsx",
        lineNumber: 123,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(ListMaxIndentLevelPlugin, { maxDepth: 7 }, void 0, !1, {
        fileName: "app/components/controls/RichEditor/index.tsx",
        lineNumber: 124,
        columnNumber: 11
      }, this),
      /* @__PURE__ */ (0, import_jsx_dev_runtime32.jsxDEV)(import_LexicalMarkdownShortcutPlugin.MarkdownShortcutPlugin, { transformers: import_markdown.TRANSFORMERS }, void 0, !1, {
        fileName: "app/components/controls/RichEditor/index.tsx",
        lineNumber: 125,
        columnNumber: 11
      }, this)
    ] }, void 0, !0, {
      fileName: "app/components/controls/RichEditor/index.tsx",
      lineNumber: 89,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/components/controls/RichEditor/index.tsx",
    lineNumber: 87,
    columnNumber: 7
  }, this) }, void 0, !1, {
    fileName: "app/components/controls/RichEditor/index.tsx",
    lineNumber: 83,
    columnNumber: 5
  }, this);
}

// app/components/calendar/Form.tsx
var import_jsx_dev_runtime33 = require("react/jsx-dev-runtime");
function EventForm({
  ...props
}) {
  return console.log(props), /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
    import_antd32.Form,
    {
      layout: "vertical",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_antd32.Form.Item,
          {
            name: "title",
            rules: [{ required: !0, message: "Por favor ingrese un t\xEDtulo" }],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_antd32.Input, { size: "large", placeholder: "Agregar un titulo" }, void 0, !1, {
              fileName: "app/components/calendar/Form.tsx",
              lineNumber: 24,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/calendar/Form.tsx",
            lineNumber: 20,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_antd32.Form.Item,
          {
            name: "type",
            rules: [{ required: !0, message: "Por favor seleccione un tipo" }],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_antd32.Segmented,
              {
                block: !0,
                size: "large",
                options: [
                  { label: "Cita", value: "appt" },
                  { label: "Tarea", value: "task" },
                  { label: "Recordatorio", value: "rem" }
                ]
              },
              void 0,
              !1,
              {
                fileName: "app/components/calendar/Form.tsx",
                lineNumber: 30,
                columnNumber: 13
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/calendar/Form.tsx",
            lineNumber: 26,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_antd32.Form.Item, { label: "Horario", required: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_antd32.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_antd32.Form.Item,
            {
              name: "date",
              noStyle: !0,
              rules: [{ required: !0, message: "Por favor seleccione una fecha" }],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(DatePicker, { style: { width: "50%" } }, void 0, !1, {
                fileName: "app/components/calendar/Form.tsx",
                lineNumber: 47,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/calendar/Form.tsx",
              lineNumber: 42,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_antd32.Form.Item,
            {
              name: "time",
              noStyle: !0,
              rules: [{ required: !0, message: "Por favor seleccione una hora" }],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(TimePicker, { style: { width: "30%" } }, void 0, !1, {
                fileName: "app/components/calendar/Form.tsx",
                lineNumber: 54,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/calendar/Form.tsx",
              lineNumber: 49,
              columnNumber: 17
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_antd32.Form.Item,
            {
              name: "duration",
              rules: [{ required: !0, message: "Por favor seleccione una duraci\xF3n" }],
              noStyle: !0,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
                import_antd32.AutoComplete,
                {
                  placeholder: "Duraci\xF3n",
                  style: { width: "20%" },
                  tagRender: ({ label }) => /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_antd32.Tag, { children: label }, void 0, !1, {
                    fileName: "app/components/calendar/Form.tsx",
                    lineNumber: 65,
                    columnNumber: 51
                  }, this),
                  options: [
                    { label: "15 minutos", value: "15" },
                    { label: "30 minutos", value: "30" },
                    { label: "45 minutos", value: "45" },
                    { label: "1 hora", value: "60" },
                    { label: "1 hora 15 minutos", value: "75" },
                    { label: "1 hora 30 minutos", value: "90" },
                    { label: "1 hora 45 minutos", value: "105" },
                    { label: "2 horas", value: "120" }
                  ]
                },
                void 0,
                !1,
                {
                  fileName: "app/components/calendar/Form.tsx",
                  lineNumber: 62,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/components/calendar/Form.tsx",
              lineNumber: 57,
              columnNumber: 17
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/calendar/Form.tsx",
          lineNumber: 41,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/calendar/Form.tsx",
          lineNumber: 40,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_antd32.Collapse, { defaultActiveKey: ["1"], ghost: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_antd32.Collapse.Panel, { header: "Relacionado con", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(import_antd32.Space.Compact, { block: !0, children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_antd32.Form.Item,
              {
                name: "doctor",
                label: "Doctor",
                style: { width: "50%" },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SelectDoctor, {}, void 0, !1, {
                  fileName: "app/components/calendar/Form.tsx",
                  lineNumber: 88,
                  columnNumber: 25
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/calendar/Form.tsx",
                lineNumber: 83,
                columnNumber: 21
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
              import_antd32.Form.Item,
              {
                name: "patient",
                label: "Paciente",
                style: { width: "50%" },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SelectPatient, {}, void 0, !1, {
                  fileName: "app/components/calendar/Form.tsx",
                  lineNumber: 95,
                  columnNumber: 25
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/calendar/Form.tsx",
                lineNumber: 90,
                columnNumber: 21
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/calendar/Form.tsx",
            lineNumber: 82,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
            import_antd32.Form.Item,
            {
              name: "treatment",
              label: "Tratamiento",
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(SelectTreatment, {}, void 0, !1, {
                fileName: "app/components/calendar/Form.tsx",
                lineNumber: 102,
                columnNumber: 21
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/calendar/Form.tsx",
              lineNumber: 98,
              columnNumber: 17
            },
            this
          )
        ] }, "1", !0, {
          fileName: "app/components/calendar/Form.tsx",
          lineNumber: 81,
          columnNumber: 13
        }, this) }, void 0, !1, {
          fileName: "app/components/calendar/Form.tsx",
          lineNumber: 80,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(
          import_antd32.Form.Item,
          {
            name: "description",
            label: "Descripci\xF3n",
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime33.jsxDEV)(RichEditor, {}, void 0, !1, {
              fileName: "app/components/calendar/Form.tsx",
              lineNumber: 110,
              columnNumber: 13
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/calendar/Form.tsx",
            lineNumber: 106,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/calendar/Form.tsx",
      lineNumber: 16,
      columnNumber: 12
    },
    this
  );
}

// app/components/calendar/Create.tsx
var import_jsx_dev_runtime34 = require("react/jsx-dev-runtime");
function EventCreate({
  open,
  onClose,
  initialValues
}) {
  let { formProps, saveButtonProps } = (0, import_antd33.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
    CreateDrawer,
    {
      open,
      back: !1,
      onClose,
      size: "default",
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime34.jsxDEV)(
        EventForm,
        {
          ...formProps,
          initialValues
        },
        void 0,
        !1,
        {
          fileName: "app/components/calendar/Create.tsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/calendar/Create.tsx",
      lineNumber: 21,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/calendar/Create.tsx",
    lineNumber: 20,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.calendar.tsx
var import_react16 = require("@remix-run/react");

// app/styles/calendar.css
var calendar_default = "/build/_assets/calendar-NXQKFYIY.css";

// app/routes/_layout.calendar.tsx
var import_react_big_calendar3 = require("react-big-calendar"), import_antd34 = require("@refinedev/antd"), import_react17 = require("react"), import_dayjs5 = __toESM(require("dayjs"));

// app/components/calendar/styles.ts
var import_antd_style2 = require("antd-style"), useStylesCalendar = (0, import_antd_style2.createStyles)(({ token }) => ({
  calendar: {
    ".rbc-event": {
      backgroundColor: token.colorPrimaryText,
      borderColor: token.colorPrimaryBorder,
      color: token.colorWhite,
      "&.rbc-selected": {
        backgroundColor: token.colorPrimaryTextActive,
        borderColor: token.colorPrimaryBorderHover
      },
      "&:hover": {
        backgroundColor: token.colorPrimaryTextHover,
        borderColor: token.colorPrimaryBorderHover
      }
    },
    ".rbc-button-link": {
      color: token.colorTextLabel
    },
    ".rbc-day-bg.rbc-off-range-bg": {
      backgroundColor: token.colorFill
    },
    ".rbc-today": {
      backgroundColor: token.colorPrimaryBg
    },
    ".rbc-day-bg + .rbc-day-bg": {
      borderLeft: `1px solid ${token.colorBorder}`
    },
    ".rbc-month-row + .rbc-month-row": {
      borderTop: `1px solid ${token.colorBorder}`
    },
    ".rbc-month-view, .rbc-time-view": {
      border: `1px solid ${token.colorBorder}`
    },
    ".rbc-header + .rbc-header": {
      borderLeft: `1px solid ${token.colorBorder}`
    },
    ".rbc-header": {
      backgroundColor: token.colorPrimaryBg,
      color: token.colorPrimaryText,
      borderBottom: `2px solid ${token.colorBorder}`
    },
    ".rbc-time-content": {
      borderTop: `2px solid ${token.colorBorder}`
    },
    ".rbc-time-header-content": {
      borderLeft: `1px solid ${token.colorBorder}`
    },
    ".rbc-time-header.rbc-overflowing": {
      borderRight: `1px solid ${token.colorBorder}`
    },
    ".rbc-time-content > * + * > *": {
      borderLeft: `1px solid ${token.colorBorder}`
    },
    ".rbc-timeslot-group": {
      borderBottom: `1px solid ${token.colorBorder}`
    },
    ".rbc-day-slot .rbc-time-slot": {
      borderTop: `1px solid ${token.colorBorder}`
    },
    ".rbc-current-time-indicator": {
      backgroundColor: token.colorPrimary,
      height: "1.5px"
    },
    ".rbc-agenda-empty": {
      color: token.colorTextLabel
    }
  }
}));

// app/routes/_layout.calendar.tsx
var import_antd35 = require("antd"), import_jsx_dev_runtime35 = require("react/jsx-dev-runtime"), localizer = (0, import_react_big_calendar2.dayjsLocalizer)(import_dayjs5.default), resourceMap = [
  { resourceId: "appt", resourceTitle: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_antd35.Space, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(AppointmentIcon, {}, void 0, !1, {
      fileName: "app/routes/_layout.calendar.tsx",
      lineNumber: 19,
      columnNumber: 49
    }, this),
    "Citas"
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.calendar.tsx",
    lineNumber: 19,
    columnNumber: 42
  }, this) },
  { resourceId: "task", resourceTitle: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_antd35.Space, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TaskIcon, {}, void 0, !1, {
      fileName: "app/routes/_layout.calendar.tsx",
      lineNumber: 20,
      columnNumber: 49
    }, this),
    "Tareas"
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.calendar.tsx",
    lineNumber: 20,
    columnNumber: 42
  }, this) },
  { resourceId: "rem", resourceTitle: /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(import_antd35.Space, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ReminderIcon, {}, void 0, !1, {
      fileName: "app/routes/_layout.calendar.tsx",
      lineNumber: 21,
      columnNumber: 48
    }, this),
    "Recordatorios"
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.calendar.tsx",
    lineNumber: 21,
    columnNumber: 41
  }, this) }
];
function CalendarPage() {
  let { tableQueryResult: queryResult } = (0, import_antd34.useTable)({
    syncWithLocation: !1
  }), [searchParams, setSearchParams] = (0, import_react16.useSearchParams)(), { styles, cx } = useStylesCalendar(), [isCreateOpen, setIsCreateOpen] = (0, import_react17.useState)(!1), [initialValues, setInitialValues] = (0, import_react17.useState)({}), { components } = (0, import_react17.useMemo)(() => ({
    components: CalendarComponents_default
  }), []), events = (0, import_react17.useMemo)(() => {
    var _a, _b;
    return (_b = (_a = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _a.data) == null ? void 0 : _b.map((event) => {
      let start = (0, import_dayjs5.default)(`${event.date} ${event.time}`), end = start.add(event.duration, "minute"), icon = /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(AppointmentIcon, {}, void 0, !1, {
        fileName: "app/routes/_layout.calendar.tsx",
        lineNumber: 44,
        columnNumber: 24
      }, this);
      return event.type === "task" ? icon = /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(TaskIcon, {}, void 0, !1, {
        fileName: "app/routes/_layout.calendar.tsx",
        lineNumber: 46,
        columnNumber: 24
      }, this) : event.type === "rem" && (icon = /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(ReminderIcon, {}, void 0, !1, {
        fileName: "app/routes/_layout.calendar.tsx",
        lineNumber: 48,
        columnNumber: 24
      }, this)), {
        id: event.id,
        title: event.title,
        start: start.toDate(),
        end: end.toDate(),
        resourceId: event.type ? event.type : "appt",
        icon,
        data: event
      };
    });
  }, [queryResult]);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      import_react_big_calendar3.Calendar,
      {
        className: cx(styles.calendar),
        events,
        components,
        localizer,
        style: { height: "calc(100vh - 128px)" },
        defaultView: searchParams.get("view") || "week",
        onSelectSlot: (slotInfo, ...props) => {
          setIsCreateOpen(!0), setInitialValues({
            date: (0, import_dayjs5.default)(slotInfo.start).format("YYYY-MM-DD"),
            time: (0, import_dayjs5.default)(slotInfo.start).format("HH:mm:ss.SSS"),
            duration: (0, import_dayjs5.default)(slotInfo.end).diff((0, import_dayjs5.default)(slotInfo.start), "minute"),
            type: slotInfo.resourceId ? slotInfo.resourceId : "appt"
          });
        },
        resourceIdAccessor: "resourceId",
        resources: searchParams.get("view") !== "week" ? resourceMap : void 0,
        resourceTitleAccessor: "resourceTitle",
        selectable: !0,
        popup: !1,
        onView: (view) => {
          console.log(view);
        }
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.calendar.tsx",
        lineNumber: 64,
        columnNumber: 9
      },
      this
    ),
    isCreateOpen && /* @__PURE__ */ (0, import_jsx_dev_runtime35.jsxDEV)(
      EventCreate,
      {
        open: isCreateOpen,
        onClose: () => setIsCreateOpen(!1),
        initialValues
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.calendar.tsx",
        lineNumber: 90,
        columnNumber: 13
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.calendar.tsx",
    lineNumber: 63,
    columnNumber: 12
  }, this);
}
function links2() {
  return [{ rel: "stylesheet", href: calendar_default }];
}

// app/routes/_layout.doctors.tsx
var layout_doctors_exports = {};
__export(layout_doctors_exports, {
  default: () => Patients
});
var import_antd37 = require("@refinedev/antd");

// app/components/buttons/ShowLink.tsx
var import_core10 = require("@refinedev/core"), import_antd36 = require("antd"), import_react18 = require("@remix-run/react"), import_jsx_dev_runtime36 = require("react/jsx-dev-runtime");
function ShowLink({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = !1,
  accessControl,
  meta: meta2,
  children,
  onClick,
  ...rest
}) {
  let accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? !0, hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? !1, { showUrl: generateShowUrl } = (0, import_core10.useNavigation)(), translate = (0, import_core10.useTranslate)(), { id, resource } = (0, import_core10.useResource)(
    resourceNameFromProps
  ), { data } = (0, import_core10.useCan)({
    resource: resource == null ? void 0 : resource.name,
    action: "show",
    params: { id: recordItemId ?? id, resource },
    queryOptions: {
      enabled: accessControlEnabled
    }
  }), createButtonDisabledTitle = () => data != null && data.can ? "" : data != null && data.reason ? data.reason : translate(
    "buttons.notAccessTitle",
    "You don't have permission to access"
  ), showUrl = resource && (recordItemId || id) ? generateShowUrl(resource, recordItemId ?? id, meta2) : "";
  return accessControlEnabled && hideIfUnauthorized && !(data != null && data.can) ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_antd36.Tooltip, { title: createButtonDisabledTitle(), children: [
    (data == null ? void 0 : data.can) && /* @__PURE__ */ (0, import_jsx_dev_runtime36.jsxDEV)(import_react18.Link, { to: showUrl, children: children ?? translate("buttons.show", "Show") }, void 0, !1, {
      fileName: "app/components/buttons/ShowLink.tsx",
      lineNumber: 70,
      columnNumber: 19
    }, this),
    !(data != null && data.can) && (children ?? translate("buttons.show", "Show"))
  ] }, void 0, !0, {
    fileName: "app/components/buttons/ShowLink.tsx",
    lineNumber: 69,
    columnNumber: 10
  }, this);
}

// app/routes/_layout.doctors.tsx
var import_react19 = require("@remix-run/react"), import_antd38 = require("antd"), import_dayjs6 = __toESM(require("dayjs")), import_jsx_dev_runtime37 = require("react/jsx-dev-runtime");
function Patients() {
  let { tableProps } = (0, import_antd37.useTable)({});
  return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_antd37.List, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(
      import_antd38.Table,
      {
        ...tableProps,
        rowKey: "id",
        columns: [
          {
            title: "Name",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(ShowLink, { recordItemId: record.id, children: [
              record.firstName,
              " ",
              record.lastName
            ] }, void 0, !0, {
              fileName: "app/routes/_layout.doctors.tsx",
              lineNumber: 20,
              columnNumber: 44
            }, this)
          },
          {
            title: "Correo electr\xF3nico",
            dataIndex: "email"
          },
          {
            title: "Tel\xE9fono",
            dataIndex: "phone"
          },
          {
            title: "edad",
            dataIndex: "birthDate",
            render: (_, record) => {
              if (!record.birthDate)
                return "-";
              let birthDate = (0, import_dayjs6.default)(record.birthDate), age = (0, import_dayjs6.default)().diff(birthDate, "year");
              return /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_antd38.Tooltip, { title: birthDate.format("LL"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)("span", { children: age }, void 0, !1, {
                fileName: "app/routes/_layout.doctors.tsx",
                lineNumber: 40,
                columnNumber: 73
              }, this) }, void 0, !1, {
                fileName: "app/routes/_layout.doctors.tsx",
                lineNumber: 40,
                columnNumber: 33
              }, this);
            }
          },
          {
            dataIndex: "actions",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(DropdownActions, { recordItemId: record.id }, void 0, !1, {
              fileName: "app/routes/_layout.doctors.tsx",
              lineNumber: 45,
              columnNumber: 44
            }, this)
          }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.doctors.tsx",
        lineNumber: 15,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime37.jsxDEV)(import_react19.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_layout.doctors.tsx",
      lineNumber: 49,
      columnNumber: 9
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.doctors.tsx",
    lineNumber: 14,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.doctors.create.tsx
var layout_doctors_create_exports = {};
__export(layout_doctors_create_exports, {
  default: () => Patients2
});

// app/components/doctors/form.tsx
var import_antd39 = require("@refinedev/antd"), import_antd40 = require("antd"), import_dayjs7 = __toESM(require("dayjs")), import_jsx_dev_runtime38 = require("react/jsx-dev-runtime");
function DoctorForm({ formProps }) {
  let { selectProps: countrySelectProps } = (0, import_antd39.useSelect)({
    resource: "countries",
    optionLabel: "name",
    optionValue: "id",
    pagination: {
      mode: "server"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Form, { ...formProps, layout: "vertical", children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Form.Item, { label: "Nombre", required: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input.Group, { compact: !0, style: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          name: ["firstName"],
          noStyle: !0,
          rules: [
            {
              required: !0
            }
          ],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input, { placeholder: "Nombres" }, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 30,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 21,
          columnNumber: 13
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          name: ["lastName"],
          noStyle: !0,
          rules: [
            {
              required: !0
            }
          ],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input, { placeholder: "Apellidos" }, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 41,
            columnNumber: 17
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 32,
          columnNumber: 13
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/doctors/form.tsx",
      lineNumber: 20,
      columnNumber: 9
    }, this) }, void 0, !1, {
      fileName: "app/components/doctors/form.tsx",
      lineNumber: 19,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Space.Compact, { block: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          label: "Fecha de nacimiento",
          name: ["birthDate"],
          style: { width: "50%" },
          getValueProps: (value) => ({
            value: value ? (0, import_dayjs7.default)(value) : void 0
          }),
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.DatePicker, { style: { width: "100%" } }, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 54,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 46,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          label: "Sexo",
          name: ["sex"],
          style: { width: "50%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Select, { placeholder: "Seleccionar", options: [
            { label: "Masculino", value: "M" },
            { label: "Femenino", value: "F" }
          ] }, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 61,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 56,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/doctors/form.tsx",
      lineNumber: 45,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      import_antd40.Form.Item,
      {
        label: "Documento de identidad",
        name: ["idCardNumber"],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input, {}, void 0, !1, {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 71,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/doctors/form.tsx",
        lineNumber: 67,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Space.Compact, { block: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          label: "Correo electr\xF3nico",
          name: ["email"],
          rules: [{ type: "email" }],
          style: { width: "60%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input, {}, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 80,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          label: "Tel\xE9fono",
          name: ["phone"],
          style: { width: "40%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input, {}, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 82,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/doctors/form.tsx",
      lineNumber: 73,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Divider, { children: "Direci\xF3n" }, void 0, !1, {
      fileName: "app/components/doctors/form.tsx",
      lineNumber: 90,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      import_antd40.Form.Item,
      {
        label: "Pais",
        name: ["country", "id"],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
          import_antd40.Select,
          {
            placeholder: "Selecione um pa\xEDs",
            ...countrySelectProps
          },
          void 0,
          !1,
          {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 95,
            columnNumber: 9
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/components/doctors/form.tsx",
        lineNumber: 91,
        columnNumber: 5
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Space.Compact, { block: !0, children: [
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          label: "Estado",
          name: ["state"],
          style: { width: "50%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input, {}, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 106,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 101,
          columnNumber: 9
        },
        this
      ),
      /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
        import_antd40.Form.Item,
        {
          label: "Ciudad",
          name: ["city"],
          style: { width: "50%" },
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input, {}, void 0, !1, {
            fileName: "app/components/doctors/form.tsx",
            lineNumber: 113,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 108,
          columnNumber: 9
        },
        this
      )
    ] }, void 0, !0, {
      fileName: "app/components/doctors/form.tsx",
      lineNumber: 100,
      columnNumber: 5
    }, this),
    /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(
      import_antd40.Form.Item,
      {
        label: "Direcci\xF3n",
        name: ["address"],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime38.jsxDEV)(import_antd40.Input.TextArea, {}, void 0, !1, {
          fileName: "app/components/doctors/form.tsx",
          lineNumber: 120,
          columnNumber: 9
        }, this)
      },
      void 0,
      !1,
      {
        fileName: "app/components/doctors/form.tsx",
        lineNumber: 116,
        columnNumber: 5
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/doctors/form.tsx",
    lineNumber: 18,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.doctors.create.tsx
var import_antd41 = require("@refinedev/antd"), import_jsx_dev_runtime39 = require("react/jsx-dev-runtime");
function Patients2() {
  let { formProps, saveButtonProps } = (0, import_antd41.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(
    CreateDrawer,
    {
      open: !0,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime39.jsxDEV)(DoctorForm, { formProps }, void 0, !1, {
        fileName: "app/routes/_layout.doctors.create.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_layout.doctors.create.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/_layout.doctors.create.tsx",
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.patients.tsx
var layout_patients_exports = {};
__export(layout_patients_exports, {
  default: () => Patients3
});
var import_react26 = require("@remix-run/react");

// app/components/buttons/RefreshButton.tsx
var import_core11 = require("@refinedev/core"), import_icons11 = require("@ant-design/icons"), import_antd42 = require("antd"), import_jsx_dev_runtime40 = require("react/jsx-dev-runtime");
function RefreshButton({
  resource: resourceNameFromProps,
  recordItemId,
  hideText = !1,
  meta: meta2,
  metaData,
  dataProviderName,
  children,
  onClick,
  ...rest
}) {
  let translate = (0, import_core11.useTranslate)(), { resource, id } = (0, import_core11.useResource)(
    resourceNameFromProps
  ), { refetch, isFetching } = (0, import_core11.useOne)({
    resource: resource == null ? void 0 : resource.name,
    id: recordItemId ?? id,
    queryOptions: {
      enabled: !1
    },
    meta: (0, import_core11.pickNotDeprecated)(meta2, metaData),
    metaData: (0, import_core11.pickNotDeprecated)(meta2, metaData),
    liveMode: "off",
    dataProviderName
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(
    import_antd42.Button,
    {
      onClick: (e) => onClick ? onClick(e) : refetch(),
      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime40.jsxDEV)(import_icons11.RedoOutlined, { spin: isFetching }, void 0, !1, {
        fileName: "app/components/buttons/RefreshButton.tsx",
        lineNumber: 51,
        columnNumber: 13
      }, this),
      ...rest,
      children: !hideText && (children ?? translate("buttons.refresh", "Refresh"))
    },
    void 0,
    !1,
    {
      fileName: "app/components/buttons/RefreshButton.tsx",
      lineNumber: 48,
      columnNumber: 5
    },
    this
  );
}

// app/components/buttons/CreateButton.tsx
var import_core12 = require("@refinedev/core"), import_antd43 = require("antd");
var import_jsx_dev_runtime41 = require("react/jsx-dev-runtime");
function CreateButton({
  resource: resourceNameFromProps,
  hideText = !1,
  accessControl,
  meta: meta2,
  children,
  onClick,
  ...rest
}) {
  let accessControlEnabled = (accessControl == null ? void 0 : accessControl.enabled) ?? !0, hideIfUnauthorized = (accessControl == null ? void 0 : accessControl.hideIfUnauthorized) ?? !1, translate = (0, import_core12.useTranslate)(), routerType = (0, import_core12.useRouterType)(), Link5 = (0, import_core12.useLink)(), { Link: LegacyLink } = (0, import_core12.useRouterContext)(), ActiveLink = routerType === "legacy" ? LegacyLink : Link5, { createUrl: generateCreateUrl } = (0, import_core12.useNavigation)(), { resource } = (0, import_core12.useResource)(
    resourceNameFromProps
  ), { data } = (0, import_core12.useCan)({
    resource: resource == null ? void 0 : resource.name,
    action: "create",
    queryOptions: {
      enabled: accessControlEnabled
    },
    params: {
      resource
    }
  }), createButtonDisabledTitle = () => data != null && data.can ? "" : data != null && data.reason ? data.reason : translate(
    "buttons.notAccessTitle",
    "You don't have permission to access"
  ), createUrl = resource ? generateCreateUrl(resource, meta2) : "";
  return accessControlEnabled && hideIfUnauthorized && !(data != null && data.can) ? null : /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
    ActiveLink,
    {
      to: createUrl,
      replace: !1,
      onClick: (e) => {
        if ((data == null ? void 0 : data.can) === !1) {
          e.preventDefault();
          return;
        }
        onClick && (e.preventDefault(), onClick(e));
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(
        import_antd43.Button,
        {
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime41.jsxDEV)(CreateIcon, {}, void 0, !1, {
            fileName: "app/components/buttons/CreateButton.tsx",
            lineNumber: 89,
            columnNumber: 15
          }, this),
          disabled: (data == null ? void 0 : data.can) === !1,
          title: createButtonDisabledTitle(),
          ...rest,
          children: !hideText && (children ?? translate("buttons.create", "Create"))
        },
        void 0,
        !1,
        {
          fileName: "app/components/buttons/CreateButton.tsx",
          lineNumber: 88,
          columnNumber: 7
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/buttons/CreateButton.tsx",
      lineNumber: 74,
      columnNumber: 5
    },
    this
  );
}

// app/components/patients/Edit.tsx
var import_antd50 = require("@refinedev/antd");

// app/components/patients/form.tsx
var import_strapi_v43 = require("@refinedev/strapi-v4"), import_antd47 = require("antd");

// app/components/controls/UploadAvatar.tsx
var import_icons13 = require("@ant-design/icons");
var import_react20 = require("@remix-run/react"), import_core13 = require("@refinedev/core"), import_react21 = require("react"), import_antd44 = require("antd"), import_antd_style3 = require("antd-style"), import_antd45 = require("@refinedev/antd"), import_react22 = require("react"), import_jsx_dev_runtime42 = require("react/jsx-dev-runtime"), useStyles = (0, import_antd_style3.createStyles)(({ token }) => ({
  upload: {
    position: "relative",
    display: "inline-block",
    "> .ant-upload": {
      paddingLeft: "1rem",
      paddingRight: "1rem"
    },
    "&:hover .uploadIcon": {
      display: "block"
    }
  },
  uploadIcon: {
    position: "absolute",
    top: "calc(50% - 20px)",
    left: "calc(50% - 20px)",
    color: "white",
    fontSize: 40,
    display: "none"
  },
  spin: {
    position: "absolute",
    top: "calc(50% - 20px)",
    left: "calc(50% - 20px)",
    "> .ant-spin-dot": {
      fontSize: 40
    }
  },
  avatar: {}
}));
function UploadAvatar({
  value,
  onChange,
  size = 156
}) {
  let { styles, cx } = useStyles(), [isLoading, setIsLoading] = (0, import_react21.useState)(!1), [image, setImage] = (0, import_react21.useState)(), API_URL2 = (0, import_core13.useApiUrl)(), [rootLoaderData] = (0, import_react20.useMatches)(), { token } = (rootLoaderData == null ? void 0 : rootLoaderData.data) || {};
  token && (axiosInstance.defaults.headers.common = {
    Authorization: `Bearer ${token}`
  });
  let fileUploadState = (0, import_antd45.useFileUploadState)();
  return (0, import_react22.useEffect)(() => {
    if ((value == null ? void 0 : value.provider) == "local") {
      let url = new URL(`${API_URL2}/..${value.url}`);
      setImage({
        url: url.href
      });
    }
  }, []), /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
    import_antd44.Upload.Dragger,
    {
      listType: "picture-card",
      className: styles.upload,
      showUploadList: !1,
      customRequest: async (options) => {
        setIsLoading(!0);
        let { file, onSuccess, onError } = options, formData = new FormData();
        formData.append("files", file);
        let reader = new FileReader();
        reader.readAsDataURL(file), reader.onload = () => {
          setImage({
            url: reader.result
          });
        };
        try {
          let response = await axiosInstance.post(
            `${API_URL2}/upload`,
            formData,
            {
              headers: {
                "Content-Type": "multipart/form-data"
              }
            }
          );
          onSuccess(response.data, file);
        } catch (error) {
          onError(error);
        }
        setIsLoading(!1);
      },
      onChange: async (info) => {
        var _a;
        onChange == null || onChange(info), (_a = fileUploadState.onChange) == null || _a.call(fileUploadState, info);
      },
      onRemove: async (file) => {
        let { id } = file.response[0];
        try {
          await axiosInstance.delete(`${API_URL2}/upload/files/${id}`);
        } catch {
        }
      },
      multiple: !1,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          import_antd44.Avatar,
          {
            src: image == null ? void 0 : image.url,
            size
          },
          void 0,
          !1,
          {
            fileName: "app/components/controls/UploadAvatar.tsx",
            lineNumber: 122,
            columnNumber: 9
          },
          this
        ),
        isLoading && /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(
          import_antd44.Spin,
          {
            className: styles.spin,
            indicator: /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_icons13.LoadingOutlined, { spin: !0 }, void 0, !1, {
              fileName: "app/components/controls/UploadAvatar.tsx",
              lineNumber: 129,
              columnNumber: 24
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/controls/UploadAvatar.tsx",
            lineNumber: 127,
            columnNumber: 23
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime42.jsxDEV)(import_icons13.UploadOutlined, { className: cx(styles.uploadIcon, "uploadIcon") }, void 0, !1, {
          fileName: "app/components/controls/UploadAvatar.tsx",
          lineNumber: 130,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/controls/UploadAvatar.tsx",
      lineNumber: 75,
      columnNumber: 12
    },
    this
  );
}

// app/components/patients/form.tsx
var import_antd48 = require("@refinedev/antd"), import_dayjs8 = __toESM(require("dayjs"));

// app/components/controls/SelectSex.tsx
var import_antd46 = require("antd"), import_jsx_dev_runtime43 = require("react/jsx-dev-runtime");
function SelectSex({
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime43.jsxDEV)(
    import_antd46.Select,
    {
      value,
      onChange,
      style: { width: "100%" },
      options: [
        { label: "Masculino", value: "M" },
        { label: "Femenino", value: "F" }
      ]
    },
    void 0,
    !1,
    {
      fileName: "app/components/controls/SelectSex.tsx",
      lineNumber: 13,
      columnNumber: 12
    },
    this
  );
}

// app/components/patients/form.tsx
var import_jsx_dev_runtime44 = require("react/jsx-dev-runtime");
function PatientsForm({ formProps }) {
  let { selectProps: countrySelectProps } = (0, import_antd48.useSelect)({
    resource: "countries",
    optionLabel: "name",
    optionValue: "id",
    pagination: {
      mode: "server"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
    import_antd47.Form,
    {
      ...formProps,
      layout: "vertical",
      onFinish: async (values) => {
        var _a;
        (_a = formProps.onFinish) == null || _a.call(
          formProps,
          (0, import_strapi_v43.mediaUploadMapper)(values)
        );
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Form.Item, { label: "Nombre", required: !0, children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_antd47.Form.Item,
            {
              name: ["firstName"],
              noStyle: !0,
              rules: [
                {
                  required: !0
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input, { size: "large", placeholder: "Nombres" }, void 0, !1, {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 43,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 34,
              columnNumber: 13
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_antd47.Form.Item,
            {
              name: ["lastName"],
              noStyle: !0,
              rules: [
                {
                  required: !0
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input, { size: "large", placeholder: "Apellidos" }, void 0, !1, {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 54,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 45,
              columnNumber: 13
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/patients/form.tsx",
          lineNumber: 33,
          columnNumber: 9
        }, this) }, void 0, !1, {
          fileName: "app/components/patients/form.tsx",
          lineNumber: 32,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Row, { gutter: 24, align: "middle", children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Col, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_antd47.Form.Item,
            {
              name: "avatar",
              noStyle: !0,
              rules: [
                {
                  required: !0
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(UploadAvatar, {}, void 0, !1, {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 69,
                columnNumber: 17
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 60,
              columnNumber: 13
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/patients/form.tsx",
            lineNumber: 59,
            columnNumber: 9
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Col, { flex: "auto", children: [
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
              import_antd47.Form.Item,
              {
                label: "Documento de identidad",
                name: ["idCardNumber"],
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input, {}, void 0, !1, {
                  fileName: "app/components/patients/form.tsx",
                  lineNumber: 77,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 73,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
              import_antd47.Form.Item,
              {
                label: "Fecha de nacimiento",
                name: ["birthDate"],
                getValueProps: (value) => ({
                  value: value ? (0, import_dayjs8.default)(value) : void 0
                }),
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(DatePicker, {}, void 0, !1, {
                  fileName: "app/components/patients/form.tsx",
                  lineNumber: 86,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 79,
                columnNumber: 13
              },
              this
            ),
            /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
              import_antd47.Form.Item,
              {
                label: "Sexo",
                style: { width: "50%" },
                children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(SelectSex, {}, void 0, !1, {
                  fileName: "app/components/patients/form.tsx",
                  lineNumber: 92,
                  columnNumber: 17
                }, this)
              },
              void 0,
              !1,
              {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 88,
                columnNumber: 13
              },
              this
            )
          ] }, void 0, !0, {
            fileName: "app/components/patients/form.tsx",
            lineNumber: 72,
            columnNumber: 9
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/patients/form.tsx",
          lineNumber: 58,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_antd47.Form.Item,
            {
              label: "Correo electr\xF3nico",
              name: ["email"],
              rules: [{ type: "email" }],
              style: { width: "60%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input, {}, void 0, !1, {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 103,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 97,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_antd47.Form.Item,
            {
              label: "Tel\xE9fono",
              name: ["phone"],
              style: { width: "40%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input, {}, void 0, !1, {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 110,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 105,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/patients/form.tsx",
          lineNumber: 96,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Divider, { children: "Direci\xF3n" }, void 0, !1, {
          fileName: "app/components/patients/form.tsx",
          lineNumber: 113,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          import_antd47.Form.Item,
          {
            label: "Pais",
            name: ["country", "id"],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
              import_antd47.Select,
              {
                placeholder: "Selecione um pa\xEDs",
                ...countrySelectProps
              },
              void 0,
              !1,
              {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 118,
                columnNumber: 9
              },
              this
            )
          },
          void 0,
          !1,
          {
            fileName: "app/components/patients/form.tsx",
            lineNumber: 114,
            columnNumber: 5
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_antd47.Form.Item,
            {
              label: "Estado",
              name: ["state"],
              style: { width: "50%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input, {}, void 0, !1, {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 129,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 124,
              columnNumber: 9
            },
            this
          ),
          /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
            import_antd47.Form.Item,
            {
              label: "Ciudad",
              name: ["city"],
              style: { width: "50%" },
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input, {}, void 0, !1, {
                fileName: "app/components/patients/form.tsx",
                lineNumber: 136,
                columnNumber: 13
              }, this)
            },
            void 0,
            !1,
            {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 131,
              columnNumber: 9
            },
            this
          )
        ] }, void 0, !0, {
          fileName: "app/components/patients/form.tsx",
          lineNumber: 123,
          columnNumber: 5
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(
          import_antd47.Form.Item,
          {
            label: "Direcci\xF3n",
            name: ["address"],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime44.jsxDEV)(import_antd47.Input.TextArea, {}, void 0, !1, {
              fileName: "app/components/patients/form.tsx",
              lineNumber: 143,
              columnNumber: 9
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/patients/form.tsx",
            lineNumber: 139,
            columnNumber: 5
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/patients/form.tsx",
      lineNumber: 23,
      columnNumber: 12
    },
    this
  );
}

// app/components/crud/EditDrawer.tsx
var import_react23 = require("@remix-run/react"), import_react24 = require("react"), import_antd49 = require("antd");
var import_jsx_dev_runtime45 = require("react/jsx-dev-runtime");
function EditDrawer({
  children,
  back = !0,
  title,
  size = "large",
  open,
  onClose,
  saveButtonProps
}) {
  let [_open, setOpen] = (0, import_react24.useState)(!1);
  (0, import_react24.useEffect)(() => {
    setOpen(open);
  }, [open]);
  let navigate = (0, import_react23.useNavigate)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
    import_antd49.Drawer,
    {
      title,
      placement: "right",
      width: "100%",
      contentWrapperStyle: { maxWidth: size === "default" ? "40rem" : size === "large" ? "60rem" : size === "extraLarge" ? "80rem" : "100%" },
      mask: !1,
      open: _open,
      destroyOnClose: !0,
      onClose: () => {
        back && navigate(-1), onClose == null || onClose();
      },
      footer: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_antd49.Space, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(
        SaveButton,
        {
          loading: saveButtonProps == null ? void 0 : saveButtonProps.disabled,
          ...saveButtonProps
        },
        void 0,
        !1,
        {
          fileName: "app/components/crud/EditDrawer.tsx",
          lineNumber: 47,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/components/crud/EditDrawer.tsx",
        lineNumber: 46,
        columnNumber: 17
      }, this),
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime45.jsxDEV)(import_antd49.Spin, { spinning: saveButtonProps == null ? void 0 : saveButtonProps.disabled, children }, void 0, !1, {
        fileName: "app/components/crud/EditDrawer.tsx",
        lineNumber: 52,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/crud/EditDrawer.tsx",
      lineNumber: 32,
      columnNumber: 12
    },
    this
  );
}

// app/components/patients/Edit.tsx
var import_react25 = require("@remix-run/react"), import_jsx_dev_runtime46 = require("react/jsx-dev-runtime");
function PatientEdit({
  open,
  id,
  redirect: redirect5
}) {
  let [searchParams] = (0, import_react25.useSearchParams)(), { formProps, saveButtonProps } = (0, import_antd50.useForm)({
    action: "edit",
    id,
    redirect: redirect5,
    meta: {
      populate: ["avatar"]
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(
    EditDrawer,
    {
      open,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime46.jsxDEV)(PatientsForm, { formProps }, void 0, !1, {
        fileName: "app/components/patients/Edit.tsx",
        lineNumber: 30,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/patients/Edit.tsx",
      lineNumber: 26,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/patients/Edit.tsx",
    lineNumber: 25,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.patients.tsx
var import_antd51 = require("@refinedev/antd"), import_antd52 = require("antd"), import_dayjs9 = __toESM(require("dayjs")), import_jsx_dev_runtime47 = require("react/jsx-dev-runtime");
function Patients3() {
  let { tableProps } = (0, import_antd51.useTable)({}), [searchParams, setSearchParams] = (0, import_react26.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      import_antd51.List,
      {
        headerButtons: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(CreateButton, {}, "create", !1, {
            fileName: "app/routes/_layout.patients.tsx",
            lineNumber: 19,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(RefreshButton, {}, "refresh", !1, {
            fileName: "app/routes/_layout.patients.tsx",
            lineNumber: 20,
            columnNumber: 17
          }, this)
        ],
        children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
          import_antd52.Table,
          {
            ...tableProps,
            rowKey: "id",
            columns: [
              {
                title: "Name",
                render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react26.Link, { to: `/patients/${record.id}`, children: [
                  record.firstName,
                  " ",
                  record.lastName
                ] }, void 0, !0, {
                  fileName: "app/routes/_layout.patients.tsx",
                  lineNumber: 28,
                  columnNumber: 48
                }, this)
              },
              {
                title: "Correo electr\xF3nico",
                dataIndex: "email"
              },
              {
                title: "Tel\xE9fono",
                dataIndex: "phone"
              },
              {
                title: "edad",
                dataIndex: "birthDate",
                render: (_, record) => {
                  if (!record.birthDate)
                    return "-";
                  let birthDate = (0, import_dayjs9.default)(record.birthDate), age = (0, import_dayjs9.default)().diff(birthDate, "year");
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_antd52.Tooltip, { title: birthDate.format("LL"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)("span", { children: age }, void 0, !1, {
                    fileName: "app/routes/_layout.patients.tsx",
                    lineNumber: 48,
                    columnNumber: 77
                  }, this) }, void 0, !1, {
                    fileName: "app/routes/_layout.patients.tsx",
                    lineNumber: 48,
                    columnNumber: 37
                  }, this);
                }
              },
              {
                dataIndex: "actions",
                render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
                  DropdownActions,
                  {
                    recordItemId: record.id,
                    editItem: {
                      url: () => (searchParams.set("edit", record.id), `?${searchParams.toString()}`)
                    }
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_layout.patients.tsx",
                    lineNumber: 53,
                    columnNumber: 48
                  },
                  this
                )
              }
            ]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.patients.tsx",
            lineNumber: 23,
            columnNumber: 13
          },
          this
        )
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.patients.tsx",
        lineNumber: 17,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(import_react26.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_layout.patients.tsx",
      lineNumber: 66,
      columnNumber: 9
    }, this),
    !!searchParams.get("edit") && /* @__PURE__ */ (0, import_jsx_dev_runtime47.jsxDEV)(
      PatientEdit,
      {
        open: !0,
        id: searchParams.get("edit"),
        redirect: "show"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.patients.tsx",
        lineNumber: 68,
        columnNumber: 43
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.patients.tsx",
    lineNumber: 16,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.patients.create.tsx
var layout_patients_create_exports = {};
__export(layout_patients_create_exports, {
  default: () => Patients4
});
var import_antd53 = require("@refinedev/antd"), import_jsx_dev_runtime48 = require("react/jsx-dev-runtime");
function Patients4() {
  let { formProps, saveButtonProps } = (0, import_antd53.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(
    CreateDrawer,
    {
      open: !0,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime48.jsxDEV)(PatientsForm, { formProps }, void 0, !1, {
        fileName: "app/routes/_layout.patients.create.tsx",
        lineNumber: 16,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_layout.patients.create.tsx",
      lineNumber: 12,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/routes/_layout.patients.create.tsx",
    lineNumber: 11,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.patients_.$id.tsx
var layout_patients_id_exports = {};
__export(layout_patients_id_exports, {
  default: () => EditPage
});
var import_antd64 = require("antd"), import_react31 = require("@remix-run/react");

// app/components/patients/TreatmentsTable.tsx
var import_antd54 = require("@refinedev/antd"), import_antd55 = require("antd"), import_react27 = require("@remix-run/react"), import_jsx_dev_runtime49 = require("react/jsx-dev-runtime");
function TreatmentTable({
  patientId
}) {
  let { tableProps } = (0, import_antd54.useTable)({
    resource: "dc-treatments",
    meta: {
      populate: ["doctor", "patient"]
    },
    syncWithLocation: !1,
    filters: {
      initial: [
        {
          field: "patient.id",
          operator: "eq",
          value: patientId
        }
      ]
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(
    import_antd55.Table,
    {
      ...tableProps,
      rowKey: "id",
      columns: [
        {
          title: "Nombre",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime49.jsxDEV)(import_react27.Link, { to: `${record.id}`, children: record.name }, void 0, !1, {
            fileName: "app/components/patients/TreatmentsTable.tsx",
            lineNumber: 32,
            columnNumber: 40
          }, this)
        },
        {
          title: "Doctor",
          render: (_, record) => {
            var _a, _b;
            return ((_a = record == null ? void 0 : record.doctor) == null ? void 0 : _a.firstName) + " " + ((_b = record == null ? void 0 : record.doctor) == null ? void 0 : _b.lastName);
          }
        }
      ]
    },
    void 0,
    !1,
    {
      fileName: "app/components/patients/TreatmentsTable.tsx",
      lineNumber: 27,
      columnNumber: 12
    },
    this
  );
}

// app/components/crud/Show.tsx
var import_core14 = require("@refinedev/core"), import_antd56 = require("@refinedev/antd"), import_antd57 = require("antd"), import_jsx_dev_runtime50 = require("react/jsx-dev-runtime"), Show = ({
  title,
  canEdit,
  canDelete,
  isLoading = !1,
  children,
  resource: resourceFromProps,
  recordItemId,
  dataProviderName,
  breadcrumb: breadcrumbFromProps,
  contentProps,
  headerProps,
  wrapperProps,
  headerButtons,
  footerButtons,
  footerButtonProps,
  headerButtonProps,
  goBack: goBackFromProps = !1
}) => {
  var _a, _b, _c;
  let translate = (0, import_core14.useTranslate)(), { options: { breadcrumb: globalBreadcrumb } = {} } = (0, import_core14.useRefineContext)(), routerType = (0, import_core14.useRouterType)(), back = (0, import_core14.useBack)(), go = (0, import_core14.useGo)(), { goBack, list: legacyGoList } = (0, import_core14.useNavigation)(), { resource, action, id: idFromParams } = (0, import_core14.useResource)(resourceFromProps), goListPath = (0, import_core14.useToPath)({
    resource,
    action: "list"
  }), id = recordItemId ?? idFromParams, breadcrumb = typeof breadcrumbFromProps > "u" ? globalBreadcrumb : breadcrumbFromProps, isDeleteButtonVisible = canDelete ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.canDelete) ?? (resource == null ? void 0 : resource.canDelete), isEditButtonVisible = canEdit ?? (resource == null ? void 0 : resource.canEdit) ?? !!(resource != null && resource.edit), defaultHeaderButtons = /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: [
    !recordItemId && /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      import_antd56.ListButton,
      {
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name)
      },
      void 0,
      !1,
      {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 78,
        columnNumber: 9
      },
      this
    ),
    isEditButtonVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      import_antd56.EditButton,
      {
        ...isLoading ? { disabled: !0 } : {},
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
        recordItemId: id
      },
      void 0,
      !1,
      {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 87,
        columnNumber: 9
      },
      this
    ),
    isDeleteButtonVisible && /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      import_antd56.DeleteButton,
      {
        ...isLoading ? { disabled: !0 } : {},
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
        recordItemId: id,
        onSuccess: () => {
          routerType === "legacy" ? legacyGoList((resource == null ? void 0 : resource.route) ?? (resource == null ? void 0 : resource.name) ?? "") : go({ to: goListPath });
        },
        dataProviderName
      },
      void 0,
      !1,
      {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 98,
        columnNumber: 9
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
      import_antd56.RefreshButton,
      {
        ...isLoading ? { disabled: !0 } : {},
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
        recordItemId: id,
        dataProviderName
      },
      void 0,
      !1,
      {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 116,
        columnNumber: 7
      },
      this
    )
  ] }, void 0, !0, {
    fileName: "app/components/crud/Show.tsx",
    lineNumber: 76,
    columnNumber: 5
  }, this);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { ...wrapperProps ?? {}, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(
    import_antd56.PageHeader,
    {
      ghost: !1,
      backIcon: goBackFromProps,
      onBack: action !== "list" && typeof action < "u" ? routerType === "legacy" ? goBack : back : void 0,
      title: title ?? translate(
        `${resource == null ? void 0 : resource.name}.titles.show`,
        `Show ${(0, import_core14.userFriendlyResourceName)(
          ((_b = resource == null ? void 0 : resource.meta) == null ? void 0 : _b.label) ?? ((_c = resource == null ? void 0 : resource.options) == null ? void 0 : _c.label) ?? (resource == null ? void 0 : resource.label) ?? (resource == null ? void 0 : resource.name),
          "singular"
        )}`
      ),
      extra: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_antd57.Space, { wrap: !0, ...headerButtonProps ?? {}, children: headerButtons ? typeof headerButtons == "function" ? headerButtons({
        defaultButtons: defaultHeaderButtons
      }) : headerButtons : defaultHeaderButtons }, "extra-buttons", !1, {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 155,
        columnNumber: 11
      }, this),
      breadcrumb: typeof breadcrumb < "u" ? /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_jsx_dev_runtime50.Fragment, { children: breadcrumb }, void 0, !1, {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 167,
        columnNumber: 13
      }, this) ?? void 0 : /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_antd56.Breadcrumb, {}, void 0, !1, {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 169,
        columnNumber: 13
      }, this),
      ...headerProps ?? {},
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)(import_antd57.Spin, { spinning: isLoading, children: /* @__PURE__ */ (0, import_jsx_dev_runtime50.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }, children }, void 0, !1, {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 175,
        columnNumber: 11
      }, this) }, void 0, !1, {
        fileName: "app/components/crud/Show.tsx",
        lineNumber: 174,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/crud/Show.tsx",
      lineNumber: 131,
      columnNumber: 7
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/crud/Show.tsx",
    lineNumber: 130,
    columnNumber: 5
  }, this);
};

// app/routes/_layout.patients_.$id.tsx
var import_core16 = require("@refinedev/core"), import_dayjs10 = __toESM(require("dayjs"));

// app/components/notes/NoteCreate.tsx
var import_antd59 = require("@refinedev/antd");

// app/components/notes/NoteForm.tsx
var import_antd58 = require("antd");
var import_jsx_dev_runtime51 = require("react/jsx-dev-runtime");
function NoteForm({
  formProps,
  patient
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
    import_antd58.Form,
    {
      ...formProps,
      layout: "vertical",
      onFinish: (values) => {
        patient && (values.patient = patient), formProps == null || formProps.onFinish(values);
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(
        import_antd58.Form.Item,
        {
          name: ["note"],
          noStyle: !0,
          rules: [{ required: !0 }],
          children: /* @__PURE__ */ (0, import_jsx_dev_runtime51.jsxDEV)(RichEditor, {}, void 0, !1, {
            fileName: "app/components/notes/NoteForm.tsx",
            lineNumber: 30,
            columnNumber: 13
          }, this)
        },
        void 0,
        !1,
        {
          fileName: "app/components/notes/NoteForm.tsx",
          lineNumber: 25,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/notes/NoteForm.tsx",
      lineNumber: 20,
      columnNumber: 12
    },
    this
  );
}

// app/components/notes/NoteCreate.tsx
var import_jsx_dev_runtime52 = require("react/jsx-dev-runtime");
function NoteCreate({
  open,
  patient,
  onClose,
  onSuccess
}) {
  let { formProps, saveButtonProps } = (0, import_antd59.useForm)({
    action: "create",
    redirect: !1,
    resource: "dc-notes",
    onMutationSuccess(data, variables, context) {
      onSuccess == null || onSuccess();
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
    CreateDrawer,
    {
      open,
      size: "default",
      title: "Crear nota",
      onClose,
      back: !1,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime52.jsxDEV)(
        NoteForm,
        {
          formProps,
          patient
        },
        void 0,
        !1,
        {
          fileName: "app/components/notes/NoteCreate.tsx",
          lineNumber: 40,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/notes/NoteCreate.tsx",
      lineNumber: 32,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/notes/NoteCreate.tsx",
    lineNumber: 31,
    columnNumber: 12
  }, this);
}

// app/components/notes/NoteList.tsx
var import_antd60 = require("antd"), import_antd61 = require("@refinedev/antd"), import_react28 = require("react"), import_react29 = require("@remix-run/react");
var import_jsx_dev_runtime53 = require("react/jsx-dev-runtime");
function NoteList({
  patient
}) {
  var _a;
  let { tableQueryResult, setFilters, tableProps } = (0, import_antd61.useTable)({
    resource: "dc-notes",
    meta: {
      populate: ["note"]
    },
    sorters: {
      initial: [{
        field: "id",
        order: "desc"
      }]
    },
    syncWithLocation: !1
  }), [searchParams, setSearchParams] = (0, import_react29.useSearchParams)();
  return (0, import_react28.useEffect)(() => {
    patient && setFilters([{
      field: "patient[id]",
      operator: "eq",
      value: patient
    }]);
  }, [patient]), /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
    import_antd60.Table,
    {
      ...tableProps,
      dataSource: (_a = tableQueryResult.data) == null ? void 0 : _a.data,
      rowKey: "id",
      columns: [
        {
          title: "Nota",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { dangerouslySetInnerHTML: { __html: record.note.html } }, void 0, !1, {
            fileName: "app/components/notes/NoteList.tsx",
            lineNumber: 45,
            columnNumber: 40
          }, this)
        },
        {
          title: "Fecha",
          dataIndex: "updatedAt",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("span", { children: new Date(record.createdAt).toLocaleDateString() }, void 0, !1, {
            fileName: "app/components/notes/NoteList.tsx",
            lineNumber: 50,
            columnNumber: 40
          }, this)
        },
        {
          dataIndex: "actions",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime53.jsxDEV)(
            DropdownActions,
            {
              resource: "dc-notes",
              recordItemId: record.id,
              showItem: {
                hide: !1
              },
              editItem: {
                url: () => (searchParams.set("note", record.id), `?${searchParams.toString()}`)
              }
            },
            void 0,
            !1,
            {
              fileName: "app/components/notes/NoteList.tsx",
              lineNumber: 55,
              columnNumber: 21
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/notes/NoteList.tsx",
            lineNumber: 54,
            columnNumber: 40
          }, this)
        }
      ]
    },
    void 0,
    !1,
    {
      fileName: "app/components/notes/NoteList.tsx",
      lineNumber: 38,
      columnNumber: 12
    },
    this
  );
}

// app/components/fields/AvatarField.tsx
var import_antd62 = require("antd"), import_react30 = require("react");
var import_core15 = require("@refinedev/core"), import_jsx_dev_runtime54 = require("react/jsx-dev-runtime");
function AvatarField({
  value,
  size
}) {
  let [urlImage, setUrlImage] = (0, import_react30.useState)(null), API_URL2 = (0, import_core15.useApiUrl)();
  return (0, import_react30.useEffect)(() => {
    if ((value == null ? void 0 : value.provider) == "local") {
      let url = new URL(`${API_URL2}/..${value.url}`);
      setUrlImage(url.href);
    }
  }, [value]), /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(import_antd62.Avatar, { src: urlImage, size, icon: !urlImage && /* @__PURE__ */ (0, import_jsx_dev_runtime54.jsxDEV)(UserIcon, {}, void 0, !1, {
    fileName: "app/components/fields/AvatarField.tsx",
    lineNumber: 27,
    columnNumber: 22
  }, this) }, void 0, !1, {
    fileName: "app/components/fields/AvatarField.tsx",
    lineNumber: 26,
    columnNumber: 12
  }, this);
}

// app/components/notes/NoteEdit.tsx
var import_antd63 = require("@refinedev/antd");
var import_jsx_dev_runtime55 = require("react/jsx-dev-runtime");
function NoteEdit({
  open,
  onClose,
  onSuccess,
  noteId
}) {
  let { formProps, saveButtonProps } = (0, import_antd63.useForm)({
    action: "edit",
    redirect: !1,
    resource: "dc-notes",
    id: noteId,
    meta: {
      populate: ["note"]
    },
    onMutationSuccess(data, variables, context) {
      onSuccess == null || onSuccess();
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
    EditDrawer,
    {
      open,
      size: "default",
      title: "Editar nota",
      onClose,
      back: !1,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime55.jsxDEV)(
        NoteForm,
        {
          formProps
        },
        void 0,
        !1,
        {
          fileName: "app/components/notes/NoteEdit.tsx",
          lineNumber: 41,
          columnNumber: 13
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/notes/NoteEdit.tsx",
      lineNumber: 33,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/notes/NoteEdit.tsx",
    lineNumber: 32,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.patients_.$id.tsx
var import_jsx_dev_runtime56 = require("react/jsx-dev-runtime");
function EditPage() {
  let { id } = (0, import_react31.useParams)(), { queryResult } = (0, import_core16.useShow)({
    meta: {
      populate: ["avatar"]
    }
  }), { data, isLoading } = queryResult, [searchParams, setSearchParams] = (0, import_react31.useSearchParams)(), patient = (data == null ? void 0 : data.data) || {}, tabItems = [
    {
      key: "info",
      label: "Informaci\xF3n",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { children: "Informaci\xF3n" }, void 0, !1, {
        fileName: "app/routes/_layout.patients_.$id.tsx",
        lineNumber: 34,
        columnNumber: 23
      }, this)
    },
    {
      key: "treatments",
      label: "Tratamientos",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(TreatmentTable, { patientId: id }, void 0, !1, {
        fileName: "app/routes/_layout.patients_.$id.tsx",
        lineNumber: 39,
        columnNumber: 23
      }, this)
    },
    {
      key: "notes",
      label: "Notas",
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(NoteList, { patient: id }, void 0, !1, {
        fileName: "app/routes/_layout.patients_.$id.tsx",
        lineNumber: 44,
        columnNumber: 23
      }, this)
    }
  ], handlerCreate = (type) => {
    searchParams.set(type, "create"), setSearchParams(searchParams);
  }, createOrEditNote = () => {
    let closeHandler = () => {
      searchParams.delete("note"), setSearchParams(searchParams);
    }, successHandler = () => {
      searchParams.delete("note"), searchParams.set("tab", "notes"), setSearchParams(searchParams);
    };
    return searchParams.get("note") === "create" ? /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      NoteCreate,
      {
        open: !0,
        onClose: closeHandler,
        onSuccess: successHandler,
        patient: id
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.patients_.$id.tsx",
        lineNumber: 66,
        columnNumber: 20
      },
      this
    ) : searchParams.get("note") ? /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
      NoteEdit,
      {
        open: !0,
        onClose: closeHandler,
        onSuccess: successHandler,
        noteId: searchParams.get("note")
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.patients_.$id.tsx",
        lineNumber: 73,
        columnNumber: 20
      },
      this
    ) : null;
  };
  return /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
    Show,
    {
      isLoading,
      goBack: !1,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
          import_antd64.Card,
          {
            actions: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
                import_antd64.Typography.Text,
                {
                  strong: !0,
                  style: { cursor: "auto" },
                  children: "Crear"
                },
                "0",
                !1,
                {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 95,
                  columnNumber: 21
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(TreatmentIcon, {}, void 0, !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 101,
                columnNumber: 55
              }, this), children: "tratamiento" }, "1", !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 101,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(AppointmentIcon, {}, void 0, !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 104,
                columnNumber: 55
              }, this), children: "Cita" }, "2", !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 104,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(TaskIcon, {}, void 0, !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 107,
                columnNumber: 55
              }, this), children: "Tarea" }, "3", !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 107,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
                import_antd64.Button,
                {
                  type: "link",
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(NoteIcon, {}, void 0, !1, {
                    fileName: "app/routes/_layout.patients_.$id.tsx",
                    lineNumber: 113,
                    columnNumber: 31
                  }, this),
                  onClick: () => handlerCreate("note"),
                  children: "Nota"
                },
                "4",
                !1,
                {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 110,
                  columnNumber: 21
                },
                this
              )
            ],
            children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Space, { style: {
              display: "flex",
              alignItems: "initial"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(AvatarField, { value: patient == null ? void 0 : patient.avatar, size: 128 }, void 0, !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 124,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Divider, { type: "vertical", style: { height: "100%" } }, void 0, !1, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 125,
                columnNumber: 21
              }, this),
              /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Descriptions, { column: 2, children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Descriptions.Item, { label: "Edad", children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Space, { children: [
                  (patient == null ? void 0 : patient.birthDate) && (0, import_dayjs10.default)().diff((0, import_dayjs10.default)(patient.birthDate), "year"),
                  (patient == null ? void 0 : patient.birthDate) && " a\xF1os",
                  (patient == null ? void 0 : patient.birthDate) && (0, import_dayjs10.default)(patient.birthDate).format("LL")
                ] }, void 0, !0, {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 128,
                  columnNumber: 29
                }, this) }, void 0, !1, {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 127,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Descriptions.Item, { label: "Sexo", children: [
                  (patient == null ? void 0 : patient.sex) === "M" && "Masculino",
                  (patient == null ? void 0 : patient.sex) === "F" && "Femenino"
                ] }, void 0, !0, {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 134,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Descriptions.Item, { span: 2, label: "Documento de Identidad", children: patient == null ? void 0 : patient.idCardNumber }, void 0, !1, {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 138,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Descriptions.Item, { label: "Tel\xE9fono", children: patient == null ? void 0 : patient.phone }, void 0, !1, {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 141,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Descriptions.Item, { label: "Correo Electr\xF3nico", children: patient == null ? void 0 : patient.email }, void 0, !1, {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 144,
                  columnNumber: 25
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_antd64.Descriptions.Item, { span: 2, label: "Direcci\xF3n", children: patient == null ? void 0 : patient.address }, void 0, !1, {
                  fileName: "app/routes/_layout.patients_.$id.tsx",
                  lineNumber: 147,
                  columnNumber: 25
                }, this)
              ] }, void 0, !0, {
                fileName: "app/routes/_layout.patients_.$id.tsx",
                lineNumber: 126,
                columnNumber: 21
              }, this)
            ] }, void 0, !0, {
              fileName: "app/routes/_layout.patients_.$id.tsx",
              lineNumber: 120,
              columnNumber: 17
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.patients_.$id.tsx",
            lineNumber: 93,
            columnNumber: 13
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(
          import_antd64.Tabs,
          {
            animated: !0,
            items: tabItems,
            activeKey: (searchParams == null ? void 0 : searchParams.get("tab")) || "info",
            onChange: (key) => {
              searchParams.set("tab", key), setSearchParams(searchParams);
            }
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.patients_.$id.tsx",
            lineNumber: 154,
            columnNumber: 17
          },
          this
        ) }, void 0, !1, {
          fileName: "app/routes/_layout.patients_.$id.tsx",
          lineNumber: 153,
          columnNumber: 13
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime56.jsxDEV)(import_react31.Outlet, {}, void 0, !1, {
          fileName: "app/routes/_layout.patients_.$id.tsx",
          lineNumber: 165,
          columnNumber: 17
        }, this) }, void 0, !1, {
          fileName: "app/routes/_layout.patients_.$id.tsx",
          lineNumber: 164,
          columnNumber: 13
        }, this),
        createOrEditNote()
      ] }, void 0, !0, {
        fileName: "app/routes/_layout.patients_.$id.tsx",
        lineNumber: 88,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_layout.patients_.$id.tsx",
      lineNumber: 84,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_layout.patients_.$id.edit.tsx
var layout_patients_id_edit_exports = {};
__export(layout_patients_id_edit_exports, {
  default: () => EditPage2
});
var import_jsx_dev_runtime57 = require("react/jsx-dev-runtime");
function EditPage2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime57.jsxDEV)(PatientEdit, { open: !0, redirect: "show" }, void 0, !1, {
    fileName: "app/routes/_layout.patients_.$id.edit.tsx",
    lineNumber: 4,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.procedures.tsx
var layout_procedures_exports = {};
__export(layout_procedures_exports, {
  default: () => Page
});
var import_antd66 = require("antd");

// app/components/procedures/LoadButton.tsx
var Icons = __toESM(require("@ant-design/icons")), import_core17 = require("@refinedev/core"), import_antd65 = require("antd");
var import_jsx_dev_runtime58 = require("react/jsx-dev-runtime");
function LoadProcedures({
  onSuccess
}) {
  let { mutate, isLoading } = (0, import_core17.useCustomMutation)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
    import_antd65.Popconfirm,
    {
      title: "\xBFEst\xE1 seguro de cargar o actualizar los procedimientos?",
      description: "Se actualizar\xE1n los procedimientos existentes y se cargar\xE1n los nuevos",
      onConfirm: () => {
        mutate({
          url: `${API_URL}/api/dc-procedures/load`,
          method: "post",
          values: {},
          successNotification: (data, values, resource) => ({
            message: "Procedimientos cargados correctamente",
            type: "success"
          })
        }, {
          onSuccess
        });
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(
        import_antd65.Button,
        {
          loading: isLoading,
          icon: /* @__PURE__ */ (0, import_jsx_dev_runtime58.jsxDEV)(Icons.UploadOutlined, {}, void 0, !1, {
            fileName: "app/components/procedures/LoadButton.tsx",
            lineNumber: 37,
            columnNumber: 19
          }, this),
          children: "Cargar"
        },
        void 0,
        !1,
        {
          fileName: "app/components/procedures/LoadButton.tsx",
          lineNumber: 35,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/procedures/LoadButton.tsx",
      lineNumber: 30,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_layout.procedures.tsx
var import_antd67 = require("@refinedev/antd");
var import_jsx_dev_runtime59 = require("react/jsx-dev-runtime");
function Page() {
  let {
    tableProps,
    formProps,
    tableQueryResult,
    isEditing,
    setId: setEditId,
    saveButtonProps,
    cancelButtonProps,
    editButtonProps
  } = (0, import_antd67.useEditableTable)({
    syncWithLocation: !0
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
    import_antd67.List,
    {
      headerButtons: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(LoadProcedures, { onSuccess: tableQueryResult == null ? void 0 : tableQueryResult.refetch }, "load", !1, {
          fileName: "app/routes/_layout.procedures.tsx",
          lineNumber: 24,
          columnNumber: 13
        }, this)
      ],
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_antd66.Form, { ...formProps, disabled: saveButtonProps.disabled, children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
        import_antd66.Table,
        {
          ...tableProps,
          rowKey: "id",
          columns: [
            {
              title: "C\xF3digo",
              dataIndex: "code"
            },
            {
              title: "Nombre",
              dataIndex: "name"
            },
            {
              title: "Categor\xEDa",
              dataIndex: "category"
            },
            {
              title: "Precio",
              dataIndex: "price",
              render: (_, record) => isEditing(record.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                import_antd66.Form.Item,
                {
                  name: "price",
                  noStyle: !0,
                  children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_antd66.InputNumber, { prefix: "$" }, void 0, !1, {
                    fileName: "app/routes/_layout.procedures.tsx",
                    lineNumber: 52,
                    columnNumber: 37
                  }, this)
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_layout.procedures.tsx",
                  lineNumber: 48,
                  columnNumber: 41
                },
                this
              ) : record.price
            },
            {
              dataIndex: "actions",
              render: (_, record) => isEditing(record.id) ? /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_antd66.Space.Compact, { children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                  SaveButton,
                  {
                    hideText: !0,
                    type: "link",
                    ...saveButtonProps
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_layout.procedures.tsx",
                    lineNumber: 63,
                    columnNumber: 37
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                  import_antd66.Button,
                  {
                    danger: !0,
                    type: "link",
                    icon: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(CloseIcon, {}, void 0, !1, {
                      fileName: "app/routes/_layout.procedures.tsx",
                      lineNumber: 70,
                      columnNumber: 47
                    }, this),
                    ...cancelButtonProps
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/routes/_layout.procedures.tsx",
                    lineNumber: 67,
                    columnNumber: 37
                  },
                  this
                )
              ] }, void 0, !0, {
                fileName: "app/routes/_layout.procedures.tsx",
                lineNumber: 62,
                columnNumber: 40
              }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(import_antd66.Space.Compact, { children: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(
                import_antd66.Button,
                {
                  ...editButtonProps(record.id),
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime59.jsxDEV)(EditIcon, {}, void 0, !1, {
                    fileName: "app/routes/_layout.procedures.tsx",
                    lineNumber: 77,
                    columnNumber: 43
                  }, this),
                  type: "link"
                },
                void 0,
                !1,
                {
                  fileName: "app/routes/_layout.procedures.tsx",
                  lineNumber: 75,
                  columnNumber: 33
                },
                this
              ) }, void 0, !1, {
                fileName: "app/routes/_layout.procedures.tsx",
                lineNumber: 74,
                columnNumber: 36
              }, this)
            }
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/routes/_layout.procedures.tsx",
          lineNumber: 28,
          columnNumber: 13
        },
        this
      ) }, void 0, !1, {
        fileName: "app/routes/_layout.procedures.tsx",
        lineNumber: 27,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_layout.procedures.tsx",
      lineNumber: 22,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_layout.treatments.tsx
var layout_treatments_exports = {};
__export(layout_treatments_exports, {
  default: () => Page2
});

// app/components/treatments/fields/HeaderStatusField.tsx
var import_antd68 = require("antd");

// app/components/treatments/constants.ts
var TREATMENT_TYPES_ENUM = {
  planned: "planned",
  accepted: "accepted",
  in_progress: "in_progress",
  finished: "finished",
  canceled: "canceled"
}, TREATMENT_STATUS = [
  {
    value: TREATMENT_TYPES_ENUM.planned,
    label: "Planeado",
    color: "blue",
    headerHelp: "El tratamiento est\xE1 planeado, a la espera de ser aceptado por el paciente"
  },
  {
    value: TREATMENT_TYPES_ENUM.accepted,
    label: "Aceptado",
    color: "green",
    headerHelp: "Algunos de los procedimientos del tratamiento han sido aceptados"
  },
  {
    value: TREATMENT_TYPES_ENUM.in_progress,
    label: "En progreso",
    color: "orange",
    headerHelp: "Algunos de los procedimientos del tratamiento est\xE1n en progreso"
  },
  {
    value: TREATMENT_TYPES_ENUM.finished,
    label: "Finalizado",
    color: "red",
    headerHelp: "Todos los procedimientos del tratamiento han sido finalizados"
  },
  {
    value: TREATMENT_TYPES_ENUM.canceled,
    label: "Cancelado",
    color: "gray",
    headerHelp: "Todos los procedimientos del tratamiento han sido cancelados"
  }
];

// app/components/treatments/fields/HeaderStatusField.tsx
var import_jsx_dev_runtime60 = require("react/jsx-dev-runtime");
function HeaderStatusField({
  value
}) {
  let status = TREATMENT_STATUS.find((status2) => status2.value === value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(import_antd68.Tooltip, { title: status == null ? void 0 : status.headerHelp, children: /* @__PURE__ */ (0, import_jsx_dev_runtime60.jsxDEV)(
    import_antd68.Tag,
    {
      color: status == null ? void 0 : status.color,
      children: status == null ? void 0 : status.label
    },
    void 0,
    !1,
    {
      fileName: "app/components/treatments/fields/HeaderStatusField.tsx",
      lineNumber: 18,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/treatments/fields/HeaderStatusField.tsx",
    lineNumber: 17,
    columnNumber: 12
  }, this);
}

// app/components/treatments/Edit.tsx
var import_antd75 = require("@refinedev/antd");

// app/components/treatments/form.tsx
var import_antd73 = require("antd");

// app/components/treatments/controls/HeaderStatusControl.tsx
var import_react32 = require("react");
var import_jsx_dev_runtime61 = require("react/jsx-dev-runtime");
function HeaderStatusControl({
  items,
  value,
  onChange
}) {
  return (0, import_react32.useEffect)(() => {
    if (items) {
      let statusValue = TREATMENT_TYPES_ENUM.planned;
      items.every((item) => item.status === TREATMENT_TYPES_ENUM.canceled) ? statusValue = TREATMENT_TYPES_ENUM.canceled : items.every((item) => item.status === TREATMENT_TYPES_ENUM.finished) ? statusValue = TREATMENT_TYPES_ENUM.finished : items.some((item) => item.status === TREATMENT_TYPES_ENUM.in_progress) ? statusValue = TREATMENT_TYPES_ENUM.in_progress : items.some((item) => item.status === TREATMENT_TYPES_ENUM.accepted) && (statusValue = TREATMENT_TYPES_ENUM.accepted), onChange == null || onChange(statusValue);
    }
  }, [items]), /* @__PURE__ */ (0, import_jsx_dev_runtime61.jsxDEV)(HeaderStatusField, { value }, void 0, !1, {
    fileName: "app/components/treatments/controls/HeaderStatusControl.tsx",
    lineNumber: 41,
    columnNumber: 12
  }, this);
}

// app/components/treatments/ProceduresList.tsx
var import_antd69 = require("@refinedev/antd"), Icons2 = __toESM(require("@ant-design/icons")), import_antd70 = require("antd"), import_react33 = require("@remix-run/react"), import_react34 = require("react"), import_usehooks_ts = require("usehooks-ts"), import_jsx_dev_runtime62 = require("react/jsx-dev-runtime"), RESOURCE = "dc-procedures";
function ProceduresTable({
  onAdd,
  open,
  onClose
}) {
  let [searchParams, setSearchParams] = (0, import_react33.useSearchParams)(), [query, setQuery] = (0, import_react34.useState)(""), debouncedQuery = (0, import_usehooks_ts.useDebounce)(query, 200), {
    tableProps,
    tableQueryResult,
    setFilters: setTableFilters
  } = (0, import_antd69.useTable)({
    resource: RESOURCE,
    syncWithLocation: !1
  });
  return (0, import_react34.useEffect)(() => {
    setTableFilters([
      {
        operator: "or",
        value: [
          {
            field: "name",
            operator: "contains",
            value: query
          },
          {
            field: "code",
            operator: "startswith",
            value: query
          }
        ]
      }
    ]);
  }, [debouncedQuery]), /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
    import_antd70.Drawer,
    {
      open,
      size: "large",
      title: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
        import_antd70.Input,
        {
          size: "large",
          value: query,
          suffix: (tableQueryResult == null ? void 0 : tableQueryResult.isLoading) || (tableQueryResult == null ? void 0 : tableQueryResult.isRefetching) ? /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(import_antd70.Spin, { indicator: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Icons2.LoadingOutlined, {}, void 0, !1, {
            fileName: "app/components/treatments/ProceduresList.tsx",
            lineNumber: 60,
            columnNumber: 102
          }, this) }, void 0, !1, {
            fileName: "app/components/treatments/ProceduresList.tsx",
            lineNumber: 60,
            columnNumber: 85
          }, this) : /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Icons2.SearchOutlined, {}, void 0, !1, {
            fileName: "app/components/treatments/ProceduresList.tsx",
            lineNumber: 61,
            columnNumber: 17
          }, this),
          onChange: (e) => {
            setQuery(e.target.value);
          },
          placeholder: "Buscar procedimiento..."
        },
        void 0,
        !1,
        {
          fileName: "app/components/treatments/ProceduresList.tsx",
          lineNumber: 56,
          columnNumber: 13
        },
        this
      ),
      mask: !1,
      onClose: () => {
        onClose();
      },
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
        import_antd70.Table,
        {
          ...tableProps,
          rowKey: "id",
          columns: [
            {
              render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(
                import_antd70.Button,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_dev_runtime62.jsxDEV)(Icons2.PlusOutlined, {}, void 0, !1, {
                    fileName: "app/components/treatments/ProceduresList.tsx",
                    lineNumber: 80,
                    columnNumber: 35
                  }, this),
                  type: "text",
                  onClick: () => {
                    onAdd(record);
                  },
                  children: "Agregar"
                },
                void 0,
                !1,
                {
                  fileName: "app/components/treatments/ProceduresList.tsx",
                  lineNumber: 79,
                  columnNumber: 32
                },
                this
              )
            },
            {
              title: "C\xF3digo",
              dataIndex: "code"
            },
            {
              title: "Nombre",
              dataIndex: "name"
            },
            {
              title: "Categor\xEDa",
              dataIndex: "category"
            },
            {
              title: "Precio",
              dataIndex: "price",
              render: (_, record) => `$ ${record.price}`
            }
          ]
        },
        void 0,
        !1,
        {
          fileName: "app/components/treatments/ProceduresList.tsx",
          lineNumber: 74,
          columnNumber: 9
        },
        this
      )
    },
    void 0,
    !1,
    {
      fileName: "app/components/treatments/ProceduresList.tsx",
      lineNumber: 52,
      columnNumber: 12
    },
    this
  );
}

// app/components/treatments/form.tsx
var import_antd74 = require("@refinedev/antd");

// app/components/treatments/ItemsTable.tsx
var import_antd71 = require("antd"), import_jsx_dev_runtime63 = require("react/jsx-dev-runtime");
function ItemsTable({
  dataSource,
  columns,
  footer,
  size = "small"
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(
    import_antd71.Table,
    {
      size,
      dataSource: dataSource == null ? void 0 : dataSource.map((item, index) => ({ key: index, ...item })),
      pagination: !1,
      summary: (currentData) => {
        let total = Math.round((currentData == null ? void 0 : currentData.reduce((acc, item) => acc + item.total, 0)) * 100) / 100;
        return /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_antd71.Table.Summary.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_antd71.Table.Summary.Cell, { index: 0, colSpan: 3 }, void 0, !1, {
            fileName: "app/components/treatments/ItemsTable.tsx",
            lineNumber: 25,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_antd71.Table.Summary.Cell, { index: 1, children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_antd71.Typography.Title, { level: 5, style: { textAlign: "right" }, children: "Total" }, void 0, !1, {
            fileName: "app/components/treatments/ItemsTable.tsx",
            lineNumber: 27,
            columnNumber: 17
          }, this) }, void 0, !1, {
            fileName: "app/components/treatments/ItemsTable.tsx",
            lineNumber: 26,
            columnNumber: 17
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_antd71.Table.Summary.Cell, { index: 2, children: /* @__PURE__ */ (0, import_jsx_dev_runtime63.jsxDEV)(import_antd71.Typography.Title, { level: 5, children: total | 0 }, void 0, !1, {
            fileName: "app/components/treatments/ItemsTable.tsx",
            lineNumber: 32,
            columnNumber: 21
          }, this) }, void 0, !1, {
            fileName: "app/components/treatments/ItemsTable.tsx",
            lineNumber: 31,
            columnNumber: 17
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/treatments/ItemsTable.tsx",
          lineNumber: 24,
          columnNumber: 20
        }, this);
      },
      columns,
      footer
    },
    void 0,
    !1,
    {
      fileName: "app/components/treatments/ItemsTable.tsx",
      lineNumber: 17,
      columnNumber: 12
    },
    this
  );
}

// app/components/treatments/form.tsx
var import_react35 = require("react"), import_dayjs11 = __toESM(require("dayjs"));

// app/components/treatments/controls/StatusSelectControl.tsx
var import_antd72 = require("antd"), import_jsx_dev_runtime64 = require("react/jsx-dev-runtime"), TagSelect = ({
  value
}) => {
  let status = TREATMENT_STATUS.find((status2) => status2.value === value);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
    import_antd72.Tag,
    {
      style: {
        marginRight: 3,
        lineHeight: "2em"
      },
      color: status == null ? void 0 : status.color,
      children: status == null ? void 0 : status.label
    },
    void 0,
    !1,
    {
      fileName: "app/components/treatments/controls/StatusSelectControl.tsx",
      lineNumber: 11,
      columnNumber: 12
    },
    this
  );
};
function StatusSelectControl({
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(
    import_antd72.Select,
    {
      value,
      onChange: (value2) => onChange == null ? void 0 : onChange(value2),
      defaultValue: "planned",
      placeholder: "Selecciona un estado",
      bordered: !1,
      options: [
        { label: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(TagSelect, { value: TREATMENT_TYPES_ENUM.planned }, void 0, !1, {
          fileName: "app/components/treatments/controls/StatusSelectControl.tsx",
          lineNumber: 37,
          columnNumber: 22
        }, this), value: TREATMENT_TYPES_ENUM.planned },
        { label: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(TagSelect, { value: TREATMENT_TYPES_ENUM.accepted }, void 0, !1, {
          fileName: "app/components/treatments/controls/StatusSelectControl.tsx",
          lineNumber: 38,
          columnNumber: 22
        }, this), value: TREATMENT_TYPES_ENUM.accepted },
        { label: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(TagSelect, { value: TREATMENT_TYPES_ENUM.in_progress }, void 0, !1, {
          fileName: "app/components/treatments/controls/StatusSelectControl.tsx",
          lineNumber: 39,
          columnNumber: 22
        }, this), value: TREATMENT_TYPES_ENUM.in_progress },
        { label: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(TagSelect, { value: TREATMENT_TYPES_ENUM.finished }, void 0, !1, {
          fileName: "app/components/treatments/controls/StatusSelectControl.tsx",
          lineNumber: 40,
          columnNumber: 22
        }, this), value: TREATMENT_TYPES_ENUM.finished },
        { label: /* @__PURE__ */ (0, import_jsx_dev_runtime64.jsxDEV)(TagSelect, { value: TREATMENT_TYPES_ENUM.canceled }, void 0, !1, {
          fileName: "app/components/treatments/controls/StatusSelectControl.tsx",
          lineNumber: 41,
          columnNumber: 22
        }, this), value: TREATMENT_TYPES_ENUM.canceled }
      ]
    },
    void 0,
    !1,
    {
      fileName: "app/components/treatments/controls/StatusSelectControl.tsx",
      lineNumber: 30,
      columnNumber: 12
    },
    this
  );
}

// app/components/treatments/form.tsx
var import_jsx_dev_runtime65 = require("react/jsx-dev-runtime");
function TreatmentForm({
  formProps
}) {
  var _a, _b, _c, _d;
  let { selectProps: patientsSelectProps, queryResult: patientsQueryResult } = (0, import_antd74.useSelect)({
    resource: "dc-patients",
    pagination: {
      mode: "server"
    }
  }), { selectProps: doctorsSelectProps, queryResult: doctorsQueryResult } = (0, import_antd74.useSelect)({
    resource: "dc-doctors",
    pagination: {
      mode: "server"
    }
  }), [addProcedureOpen, setAddProcedureOpen] = (0, import_react35.useState)(!1), items = import_antd73.Form.useWatch("items", formProps.form);
  return /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
    import_antd73.Form,
    {
      ...formProps,
      layout: "vertical",
      style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Row, { gutter: 16, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Col, { span: 16, children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
            import_antd73.Card,
            {
              bordered: !1,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                  import_antd73.Form.Item,
                  {
                    label: "Nombre",
                    rules: [{ required: !0, message: "Por favor ingrese el nombre del tratamiento" }],
                    name: ["name"],
                    children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Input, {}, void 0, !1, {
                      fileName: "app/components/treatments/form.tsx",
                      lineNumber: 52,
                      columnNumber: 25
                    }, this)
                  },
                  void 0,
                  !1,
                  {
                    fileName: "app/components/treatments/form.tsx",
                    lineNumber: 47,
                    columnNumber: 21
                  },
                  this
                ),
                /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Space.Compact, { block: !0, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                    import_antd73.Form.Item,
                    {
                      style: { flex: "-0 1 50%" },
                      label: "Doctor",
                      rules: [{ required: !0, message: "Por favor seleccione un doctor" }],
                      name: ["doctor", "id"],
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                        import_antd73.Select,
                        {
                          placeholder: "Selecione um doctor",
                          ...doctorsSelectProps,
                          options: (_b = (_a = doctorsQueryResult == null ? void 0 : doctorsQueryResult.data) == null ? void 0 : _a.data) == null ? void 0 : _b.map((doctor) => ({
                            label: doctor.firstName + " " + doctor.lastName,
                            value: doctor.id
                          }))
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 60,
                          columnNumber: 29
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/treatments/form.tsx",
                      lineNumber: 55,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                    import_antd73.Form.Item,
                    {
                      style: { flex: "-0 1 50%" },
                      label: "Paciente",
                      rules: [{ required: !0, message: "Por favor seleccione un paciente" }],
                      name: ["patient", "id"],
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                        import_antd73.Select,
                        {
                          placeholder: "Selecione um paciente",
                          ...patientsSelectProps,
                          options: (_d = (_c = patientsQueryResult == null ? void 0 : patientsQueryResult.data) == null ? void 0 : _c.data) == null ? void 0 : _d.map((patient) => ({
                            label: patient.firstName + " " + patient.lastName,
                            value: patient.id
                          }))
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 75,
                          columnNumber: 29
                        },
                        this
                      )
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/treatments/form.tsx",
                      lineNumber: 69,
                      columnNumber: 25
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/treatments/form.tsx",
                  lineNumber: 54,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/treatments/form.tsx",
              lineNumber: 44,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/treatments/form.tsx",
            lineNumber: 43,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Col, { span: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
            import_antd73.Card,
            {
              bordered: !1,
              children: [
                /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Form.Item, { label: "Estado", name: ["status"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(HeaderStatusControl, { items }, void 0, !1, {
                  fileName: "app/components/treatments/form.tsx",
                  lineNumber: 92,
                  columnNumber: 25
                }, this) }, void 0, !1, {
                  fileName: "app/components/treatments/form.tsx",
                  lineNumber: 91,
                  columnNumber: 21
                }, this),
                /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Space.Compact, { block: !0, children: [
                  /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                    import_antd73.Form.Item,
                    {
                      label: "Fecha de inicio",
                      name: ["startDate"],
                      style: { flex: "-0 1 50%" },
                      getValueProps: (value) => ({
                        value: value ? (0, import_dayjs11.default)(value) : void 0
                      }),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.DatePicker, {}, void 0, !1, {
                        fileName: "app/components/treatments/form.tsx",
                        lineNumber: 103,
                        columnNumber: 29
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/treatments/form.tsx",
                      lineNumber: 95,
                      columnNumber: 25
                    },
                    this
                  ),
                  /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                    import_antd73.Form.Item,
                    {
                      label: "Fecha de finalizaci\xF3n",
                      name: ["endDate"],
                      style: { flex: "-0 1 50%" },
                      getValueProps: (value) => ({
                        value: value ? (0, import_dayjs11.default)(value) : void 0
                      }),
                      children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.DatePicker, {}, void 0, !1, {
                        fileName: "app/components/treatments/form.tsx",
                        lineNumber: 113,
                        columnNumber: 29
                      }, this)
                    },
                    void 0,
                    !1,
                    {
                      fileName: "app/components/treatments/form.tsx",
                      lineNumber: 105,
                      columnNumber: 25
                    },
                    this
                  )
                ] }, void 0, !0, {
                  fileName: "app/components/treatments/form.tsx",
                  lineNumber: 94,
                  columnNumber: 21
                }, this)
              ]
            },
            void 0,
            !0,
            {
              fileName: "app/components/treatments/form.tsx",
              lineNumber: 88,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/components/treatments/form.tsx",
            lineNumber: 87,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/components/treatments/form.tsx",
          lineNumber: 42,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
          import_antd73.Form.List,
          {
            name: "items",
            children: (fields, { add, remove }) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_jsx_dev_runtime65.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                ProceduresTable,
                {
                  open: addProcedureOpen,
                  onClose: () => setAddProcedureOpen(!1),
                  onAdd: (procedure) => {
                    add({
                      code: procedure.code,
                      name: procedure.name,
                      quantity: 1,
                      priceBase: procedure.price,
                      price: procedure.price,
                      discount: 0,
                      total: procedure.price,
                      procedure: procedure.id
                    });
                  }
                },
                void 0,
                !1,
                {
                  fileName: "app/components/treatments/form.tsx",
                  lineNumber: 123,
                  columnNumber: 17
                },
                this
              ),
              /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                ItemsTable,
                {
                  dataSource: items,
                  columns: [
                    {
                      title: "C\xF3digo",
                      dataIndex: "code",
                      rowScope: "row",
                      fixed: "left"
                    },
                    {
                      title: "Nombre",
                      dataIndex: "name",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "name"],
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Input.TextArea, { autoSize: !0 }, void 0, !1, {
                            fileName: "app/components/treatments/form.tsx",
                            lineNumber: 154,
                            columnNumber: 33
                          }, this)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 150,
                          columnNumber: 72
                        },
                        this
                      )
                    },
                    {
                      title: "Estado",
                      dataIndex: "status",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "status"],
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(StatusSelectControl, {}, void 0, !1, {
                            fileName: "app/components/treatments/form.tsx",
                            lineNumber: 164,
                            columnNumber: 33
                          }, this)
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 160,
                          columnNumber: 72
                        },
                        this
                      )
                    },
                    {
                      title: "Cantidad",
                      dataIndex: "quantity",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "quantity"],
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                            import_antd73.InputNumber,
                            {
                              placeholder: "0",
                              onChange: (value) => {
                                var _a2;
                                (_a2 = formProps.form) == null || _a2.setFieldValue(["items", index, "total"], value * record.price);
                              }
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/treatments/form.tsx",
                              lineNumber: 174,
                              columnNumber: 33
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 170,
                          columnNumber: 72
                        },
                        this
                      )
                    },
                    {
                      title: "Precio / Descuento / Precio final",
                      dataIndex: "price",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Space.Compact, { children: [
                        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Form.Item, { noStyle: !0, name: [index, "priceBase"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                          import_antd73.InputNumber,
                          {
                            prefix: "$",
                            placeholder: "0.00",
                            precision: 2,
                            onChange: (value) => {
                              var _a2, _b2, _c2;
                              let price = Math.round(value * record.quantity * 100) / 100;
                              (_a2 = formProps.form) == null || _a2.setFieldValue(["items", index, "price"], price);
                              let quantity = (_b2 = formProps.form) == null ? void 0 : _b2.getFieldValue(["items", index, "quantity"]);
                              (_c2 = formProps.form) == null || _c2.setFieldValue(["items", index, "total"], quantity * price);
                            }
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/components/treatments/form.tsx",
                            lineNumber: 187,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 186,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Form.Item, { noStyle: !0, name: [index, "discount"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                          import_antd73.InputNumber,
                          {
                            prefix: "%",
                            placeholder: "0.00",
                            style: {
                              borderRadius: 0,
                              marginLeft: -3.5
                            },
                            onChange: (value) => {
                              var _a2, _b2, _c2;
                              let price = Math.round(record.priceBase * record.quantity * (100 - value) / 100 * 100) / 100;
                              (_a2 = formProps.form) == null || _a2.setFieldValue(["items", index, "price"], price);
                              let quantity = (_b2 = formProps.form) == null ? void 0 : _b2.getFieldValue(["items", index, "quantity"]);
                              (_c2 = formProps.form) == null || _c2.setFieldValue(["items", index, "total"], quantity * price);
                            }
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/components/treatments/form.tsx",
                            lineNumber: 202,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 201,
                          columnNumber: 33
                        }, this),
                        /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(import_antd73.Form.Item, { noStyle: !0, name: [index, "price"], children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                          import_antd73.InputNumber,
                          {
                            prefix: "$",
                            placeholder: "0.00",
                            style: {
                              borderTopLeftRadius: 0,
                              borderBottomLeftRadius: 0
                            },
                            onChange: (value) => {
                              var _a2, _b2, _c2;
                              let discount = Math.round((100 - value * 100 / record.priceBase) * 100) / 100;
                              (_a2 = formProps.form) == null || _a2.setFieldValue(["items", index, "discount"], discount);
                              let quantity = (_b2 = formProps.form) == null ? void 0 : _b2.getFieldValue(["items", index, "quantity"]);
                              (_c2 = formProps.form) == null || _c2.setFieldValue(["items", index, "total"], quantity * value);
                            }
                          },
                          void 0,
                          !1,
                          {
                            fileName: "app/components/treatments/form.tsx",
                            lineNumber: 220,
                            columnNumber: 37
                          },
                          this
                        ) }, void 0, !1, {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 219,
                          columnNumber: 33
                        }, this)
                      ] }, void 0, !0, {
                        fileName: "app/components/treatments/form.tsx",
                        lineNumber: 185,
                        columnNumber: 72
                      }, this)
                    },
                    {
                      title: "Total",
                      dataIndex: "total",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "total"],
                          children: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                            import_antd73.InputNumber,
                            {
                              disabled: !0,
                              prefix: "$",
                              placeholder: "0.00"
                            },
                            void 0,
                            !1,
                            {
                              fileName: "app/components/treatments/form.tsx",
                              lineNumber: 246,
                              columnNumber: 33
                            },
                            this
                          )
                        },
                        void 0,
                        !1,
                        {
                          fileName: "app/components/treatments/form.tsx",
                          lineNumber: 242,
                          columnNumber: 77
                        },
                        this
                      ),
                      fixed: "right"
                    }
                  ],
                  footer: () => /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(
                    import_antd73.Button,
                    {
                      type: "dashed",
                      block: !0,
                      icon: /* @__PURE__ */ (0, import_jsx_dev_runtime65.jsxDEV)(CreateIcon, {}, void 0, !1, {
                        fileName: "app/components/treatments/form.tsx",
                        lineNumber: 258,
                        columnNumber: 31
                      }, this),
                      onClick: () => setAddProcedureOpen(!0),
                      children: "Agregar procedimiento"
                    },
                    "1",
                    !1,
                    {
                      fileName: "app/components/treatments/form.tsx",
                      lineNumber: 255,
                      columnNumber: 35
                    },
                    this
                  )
                },
                void 0,
                !1,
                {
                  fileName: "app/components/treatments/form.tsx",
                  lineNumber: 138,
                  columnNumber: 17
                },
                this
              )
            ] }, void 0, !0, {
              fileName: "app/components/treatments/form.tsx",
              lineNumber: 122,
              columnNumber: 43
            }, this)
          },
          void 0,
          !1,
          {
            fileName: "app/components/treatments/form.tsx",
            lineNumber: 119,
            columnNumber: 9
          },
          this
        )
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/components/treatments/form.tsx",
      lineNumber: 33,
      columnNumber: 12
    },
    this
  );
}

// app/components/treatments/Edit.tsx
var import_jsx_dev_runtime66 = require("react/jsx-dev-runtime"), RESOURCE2 = "dc-treatments";
function TreatmentEdit({
  open,
  redirect: redirect5,
  resourceItemId
}) {
  let { formProps, saveButtonProps } = (0, import_antd75.useForm)({
    action: "edit",
    resource: RESOURCE2,
    id: resourceItemId,
    redirect: redirect5,
    meta: {
      populate: ["doctor", "patient", "items"]
    }
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)("div", { children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(
    CreateDrawer,
    {
      open,
      size: "extraLarge",
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime66.jsxDEV)(TreatmentForm, { formProps }, void 0, !1, {
        fileName: "app/components/treatments/Edit.tsx",
        lineNumber: 34,
        columnNumber: 13
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/components/treatments/Edit.tsx",
      lineNumber: 29,
      columnNumber: 9
    },
    this
  ) }, void 0, !1, {
    fileName: "app/components/treatments/Edit.tsx",
    lineNumber: 28,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.treatments.tsx
var import_react36 = require("@remix-run/react"), import_antd76 = require("@refinedev/antd"), import_antd77 = require("antd"), import_jsx_dev_runtime67 = require("react/jsx-dev-runtime");
function Page2() {
  let { tableProps } = (0, import_antd76.useTable)({
    sorters: {
      initial: [
        { field: "id", order: "desc" }
      ]
    },
    meta: {
      populate: ["doctor", "patient"]
    }
  }), [searchParams] = (0, import_react36.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(import_antd76.List, { children: [
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
      import_antd77.Table,
      {
        ...tableProps,
        rowKey: "id",
        columns: [
          {
            title: "Nombre",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(ShowLink, { recordItemId: record == null ? void 0 : record.id, children: record.name }, void 0, !1, {
              fileName: "app/routes/_layout.treatments.tsx",
              lineNumber: 30,
              columnNumber: 15
            }, this)
          },
          {
            title: "Estado",
            dataIndex: "status",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(HeaderStatusField, { value: record == null ? void 0 : record.status }, void 0, !1, {
              fileName: "app/routes/_layout.treatments.tsx",
              lineNumber: 36,
              columnNumber: 36
            }, this)
          },
          {
            title: "Paciente",
            render: (_, record) => {
              var _a, _b;
              return ((_a = record == null ? void 0 : record.patient) == null ? void 0 : _a.firstName) + " " + ((_b = record == null ? void 0 : record.patient) == null ? void 0 : _b.lastName);
            }
          },
          {
            title: "Doctor",
            render: (_, record) => {
              var _a, _b;
              return record != null && record.doctor ? ((_a = record == null ? void 0 : record.doctor) == null ? void 0 : _a.firstName) + " " + ((_b = record == null ? void 0 : record.doctor) == null ? void 0 : _b.lastName) : "No asignado";
            }
          },
          {
            dataIndex: "actions",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(DropdownActions, { recordItemId: record == null ? void 0 : record.id }, void 0, !1, {
              fileName: "app/routes/_layout.treatments.tsx",
              lineNumber: 57,
              columnNumber: 15
            }, this)
          }
        ]
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.treatments.tsx",
        lineNumber: 23,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(
      TreatmentEdit,
      {
        resourceItemId: searchParams.get("edit"),
        open: !!searchParams.get("edit"),
        redirect: "list"
      },
      void 0,
      !1,
      {
        fileName: "app/routes/_layout.treatments.tsx",
        lineNumber: 62,
        columnNumber: 7
      },
      this
    ),
    /* @__PURE__ */ (0, import_jsx_dev_runtime67.jsxDEV)(import_react36.Outlet, {}, void 0, !1, {
      fileName: "app/routes/_layout.treatments.tsx",
      lineNumber: 67,
      columnNumber: 7
    }, this)
  ] }, void 0, !0, {
    fileName: "app/routes/_layout.treatments.tsx",
    lineNumber: 22,
    columnNumber: 5
  }, this);
}

// app/routes/_layout.treatments.create.tsx
var layout_treatments_create_exports = {};
__export(layout_treatments_create_exports, {
  default: () => Treatments
});
var import_antd78 = require("@refinedev/antd");
var import_jsx_dev_runtime68 = require("react/jsx-dev-runtime");
function Treatments() {
  let { formProps, saveButtonProps } = (0, import_antd78.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(
    CreateDrawer,
    {
      open: !0,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_dev_runtime68.jsxDEV)(TreatmentForm, { formProps }, void 0, !1, {
        fileName: "app/routes/_layout.treatments.create.tsx",
        lineNumber: 16,
        columnNumber: 9
      }, this)
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_layout.treatments.create.tsx",
      lineNumber: 12,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_layout.treatments_.$id.tsx
var layout_treatments_id_exports = {};
__export(layout_treatments_id_exports, {
  default: () => EditPage3
});
var import_antd80 = require("antd"), import_react37 = require("@remix-run/react"), import_core18 = require("@refinedev/core");

// app/components/fields/DateField.tsx
var import_antd79 = require("antd"), import_dayjs12 = __toESM(require("dayjs")), import_localizedFormat2 = __toESM(require("dayjs/plugin/localizedFormat")), import_jsx_dev_runtime69 = require("react/jsx-dev-runtime");
import_dayjs12.default.extend(import_localizedFormat2.default);
var defaultLocale = import_dayjs12.default.locale();
function DateField({
  value,
  locales,
  format: dateFormat = "L",
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(import_antd79.Tooltip, { title: (0, import_dayjs12.default)(value).locale(locales || defaultLocale).format("LLLL"), children: /* @__PURE__ */ (0, import_jsx_dev_runtime69.jsxDEV)(import_antd79.Typography.Text, { ...rest, children: (0, import_dayjs12.default)(value).locale(locales || defaultLocale).format(dateFormat) }, void 0, !1, {
    fileName: "app/components/fields/DateField.tsx",
    lineNumber: 24,
    columnNumber: 9
  }, this) }, void 0, !1, {
    fileName: "app/components/fields/DateField.tsx",
    lineNumber: 23,
    columnNumber: 12
  }, this);
}

// app/routes/_layout.treatments_.$id.tsx
var import_jsx_dev_runtime70 = require("react/jsx-dev-runtime");
function EditPage3() {
  var _a, _b, _c, _d, _e;
  let { queryResult } = (0, import_core18.useShow)({
    meta: {
      populate: ["doctor", "patient", "items"]
    }
  }), treatment = (_a = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _a.data;
  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
    Show,
    {
      isLoading: queryResult == null ? void 0 : queryResult.isLoading,
      children: [
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Row, { gutter: 16, children: [
          /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Col, { span: 16, children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
            import_antd80.Card,
            {
              bordered: !1,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
                import_antd80.Descriptions,
                {
                  layout: "vertical",
                  column: 2,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Descriptions.Item, { label: "Nombre", span: 2, children: treatment == null ? void 0 : treatment.name }, void 0, !1, {
                      fileName: "app/routes/_layout.treatments_.$id.tsx",
                      lineNumber: 34,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Descriptions.Item, { label: "Doctor", children: [
                      (_b = treatment == null ? void 0 : treatment.doctor) == null ? void 0 : _b.firstName,
                      " ",
                      (_c = treatment == null ? void 0 : treatment.doctor) == null ? void 0 : _c.lastName
                    ] }, void 0, !0, {
                      fileName: "app/routes/_layout.treatments_.$id.tsx",
                      lineNumber: 35,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Descriptions.Item, { label: "Paciente", children: [
                      (_d = treatment == null ? void 0 : treatment.patient) == null ? void 0 : _d.firstName,
                      " ",
                      (_e = treatment == null ? void 0 : treatment.patient) == null ? void 0 : _e.lastName
                    ] }, void 0, !0, {
                      fileName: "app/routes/_layout.treatments_.$id.tsx",
                      lineNumber: 36,
                      columnNumber: 25
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_layout.treatments_.$id.tsx",
                  lineNumber: 30,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_layout.treatments_.$id.tsx",
              lineNumber: 27,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_layout.treatments_.$id.tsx",
            lineNumber: 26,
            columnNumber: 13
          }, this),
          /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Col, { span: 8, children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
            import_antd80.Card,
            {
              bordered: !1,
              children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
                import_antd80.Descriptions,
                {
                  layout: "vertical",
                  column: 2,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
                      import_antd80.Descriptions.Item,
                      {
                        label: "Estado",
                        span: 2,
                        children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(HeaderStatusControl, { value: treatment == null ? void 0 : treatment.status }, void 0, !1, {
                          fileName: "app/routes/_layout.treatments_.$id.tsx",
                          lineNumber: 52,
                          columnNumber: 29
                        }, this)
                      },
                      void 0,
                      !1,
                      {
                        fileName: "app/routes/_layout.treatments_.$id.tsx",
                        lineNumber: 48,
                        columnNumber: 25
                      },
                      this
                    ),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Descriptions.Item, { label: "Fecha de creaci\xF3n", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(DateField, { value: treatment == null ? void 0 : treatment.createdAt }, void 0, !1, {
                      fileName: "app/routes/_layout.treatments_.$id.tsx",
                      lineNumber: 55,
                      columnNumber: 29
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/_layout.treatments_.$id.tsx",
                      lineNumber: 54,
                      columnNumber: 25
                    }, this),
                    /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Descriptions.Item, { label: "Fecha de actualizaci\xF3n", children: /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(DateField, { value: treatment == null ? void 0 : treatment.createdAt }, void 0, !1, {
                      fileName: "app/routes/_layout.treatments_.$id.tsx",
                      lineNumber: 58,
                      columnNumber: 29
                    }, this) }, void 0, !1, {
                      fileName: "app/routes/_layout.treatments_.$id.tsx",
                      lineNumber: 57,
                      columnNumber: 25
                    }, this)
                  ]
                },
                void 0,
                !0,
                {
                  fileName: "app/routes/_layout.treatments_.$id.tsx",
                  lineNumber: 44,
                  columnNumber: 21
                },
                this
              )
            },
            void 0,
            !1,
            {
              fileName: "app/routes/_layout.treatments_.$id.tsx",
              lineNumber: 41,
              columnNumber: 17
            },
            this
          ) }, void 0, !1, {
            fileName: "app/routes/_layout.treatments_.$id.tsx",
            lineNumber: 40,
            columnNumber: 13
          }, this)
        ] }, void 0, !0, {
          fileName: "app/routes/_layout.treatments_.$id.tsx",
          lineNumber: 25,
          columnNumber: 9
        }, this),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(
          ItemsTable,
          {
            dataSource: treatment == null ? void 0 : treatment.items,
            size: "large",
            columns: [
              {
                title: "C\xF3digo",
                dataIndex: "code",
                rowScope: "row",
                fixed: "left"
              },
              {
                title: "Nombre",
                dataIndex: "name"
              },
              {
                title: "Estado",
                dataIndex: "status",
                render: (_, record) => {
                  let status = TREATMENT_STATUS.find((status2) => status2.value === record.status);
                  return /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_antd80.Tag, { color: status == null ? void 0 : status.color, children: status == null ? void 0 : status.label }, void 0, !1, {
                    fileName: "app/routes/_layout.treatments_.$id.tsx",
                    lineNumber: 83,
                    columnNumber: 32
                  }, this);
                }
              },
              {
                title: "Cantidad",
                dataIndex: "quantity"
              },
              {
                title: "Precio / Descuento / Precio final",
                dataIndex: "price"
              },
              {
                title: "Total",
                dataIndex: "total"
              }
            ]
          },
          void 0,
          !1,
          {
            fileName: "app/routes/_layout.treatments_.$id.tsx",
            lineNumber: 64,
            columnNumber: 9
          },
          this
        ),
        /* @__PURE__ */ (0, import_jsx_dev_runtime70.jsxDEV)(import_react37.Outlet, {}, void 0, !1, {
          fileName: "app/routes/_layout.treatments_.$id.tsx",
          lineNumber: 100,
          columnNumber: 9
        }, this)
      ]
    },
    void 0,
    !0,
    {
      fileName: "app/routes/_layout.treatments_.$id.tsx",
      lineNumber: 22,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_layout.treatments_.$id.edit.tsx
var layout_treatments_id_edit_exports = {};
__export(layout_treatments_id_edit_exports, {
  default: () => Patients5
});
var import_jsx_dev_runtime71 = require("react/jsx-dev-runtime");
function Patients5() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime71.jsxDEV)(
    TreatmentEdit,
    {
      open: !0,
      redirect: "show"
    },
    void 0,
    !1,
    {
      fileName: "app/routes/_layout.treatments_.$id.edit.tsx",
      lineNumber: 4,
      columnNumber: 12
    },
    this
  );
}

// app/routes/_layout._index.tsx
var layout_index_exports = {};
__export(layout_index_exports, {
  default: () => Index2,
  loader: () => loader5
});
var import_remix_router2 = require("@refinedev/remix-router"), import_node6 = require("@remix-run/node");
var import_jsx_dev_runtime72 = require("react/jsx-dev-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_dev_runtime72.jsxDEV)(import_remix_router2.NavigateToResource, { resource: "products" }, void 0, !1, {
    fileName: "app/routes/_layout._index.tsx",
    lineNumber: 13,
    columnNumber: 12
  }, this);
}
async function loader5({ request }) {
  let { authenticated, redirectTo } = await authProvider.check(request);
  if (!authenticated)
    throw (0, import_node6.redirect)(redirectTo ?? "/login");
  return {};
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "4269f4b4", entry: { module: "/build/entry.client-MIPOAG4B.js", imports: ["/build/_shared/chunk-Z3FKYRHQ.js", "/build/_shared/chunk-AAUB3VJJ.js", "/build/_shared/chunk-SXVCOPFL.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-MC5245WV.js", imports: ["/build/_shared/chunk-S3KZDA2I.js", "/build/_shared/chunk-25GCUGQX.js", "/build/_shared/chunk-3PP2XFET.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_apps": { id: "routes/_apps", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_apps-MIKPGR5R.js", imports: ["/build/_shared/chunk-FWP43RFX.js", "/build/_shared/chunk-G2NHGESR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_apps.apps": { id: "routes/_apps.apps", parentId: "routes/_apps", path: "apps", index: void 0, caseSensitive: void 0, module: "/build/routes/_apps.apps-6NQXARNC.js", imports: ["/build/_shared/chunk-RYUJL3ZR.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_apps.apps.create": { id: "routes/_apps.apps.create", parentId: "routes/_apps.apps", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_apps.apps.create-CTTSXJOR.js", imports: ["/build/_shared/chunk-FCLAUPAQ.js", "/build/_shared/chunk-ESIZUYZA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-RMAVJSQJ.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "routes/_auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-VM2ZWP5X.js", imports: ["/build/_shared/chunk-G2NHGESR.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.register": { id: "routes/_auth.register", parentId: "routes/_auth", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.register-FUG5XQTO.js", imports: ["/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-4DGCY4CN.js", imports: ["/build/_shared/chunk-FWP43RFX.js", "/build/_shared/chunk-G2NHGESR.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.$": { id: "routes/_layout.$", parentId: "routes/_layout", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.$-F22OV6AR.js", imports: ["/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout._index": { id: "routes/_layout._index", parentId: "routes/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_layout._index-2JRHNKR4.js", imports: ["/build/_shared/chunk-S3KZDA2I.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.calendar": { id: "routes/_layout.calendar", parentId: "routes/_layout", path: "calendar", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.calendar-GWYCOMKQ.js", imports: ["/build/_shared/chunk-B46A3QGN.js", "/build/_shared/chunk-VDVY6QK7.js", "/build/_shared/chunk-FCLAUPAQ.js", "/build/_shared/chunk-ESIZUYZA.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.doctors": { id: "routes/_layout.doctors", parentId: "routes/_layout", path: "doctors", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.doctors-ALTXRTCR.js", imports: ["/build/_shared/chunk-RJBVN35E.js", "/build/_shared/chunk-RYUJL3ZR.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.doctors.create": { id: "routes/_layout.doctors.create", parentId: "routes/_layout.doctors", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.doctors.create-ESXN3J4N.js", imports: ["/build/_shared/chunk-FCLAUPAQ.js", "/build/_shared/chunk-ESIZUYZA.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients": { id: "routes/_layout.patients", parentId: "routes/_layout", path: "patients", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients-QGTHNLNX.js", imports: ["/build/_shared/chunk-UU4MNXDV.js", "/build/_shared/chunk-BOWJ34R6.js", "/build/_shared/chunk-B46A3QGN.js", "/build/_shared/chunk-YVON52LQ.js", "/build/_shared/chunk-25GCUGQX.js", "/build/_shared/chunk-3PP2XFET.js", "/build/_shared/chunk-RYUJL3ZR.js", "/build/_shared/chunk-ESIZUYZA.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients.create": { id: "routes/_layout.patients.create", parentId: "routes/_layout.patients", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients.create-ZE24JYKV.js", imports: ["/build/_shared/chunk-FCLAUPAQ.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients_.$id": { id: "routes/_layout.patients_.$id", parentId: "routes/_layout", path: "patients/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients_.$id-KX3A56EV.js", imports: ["/build/_shared/chunk-SG6G33CI.js", "/build/_shared/chunk-VDVY6QK7.js", "/build/_shared/chunk-YVON52LQ.js", "/build/_shared/chunk-RYUJL3ZR.js", "/build/_shared/chunk-FCLAUPAQ.js", "/build/_shared/chunk-ESIZUYZA.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients_.$id.edit": { id: "routes/_layout.patients_.$id.edit", parentId: "routes/_layout.patients_.$id", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients_.$id.edit-S7Z4ZMAD.js", imports: ["/build/_shared/chunk-UU4MNXDV.js", "/build/_shared/chunk-BOWJ34R6.js", "/build/_shared/chunk-B46A3QGN.js", "/build/_shared/chunk-25GCUGQX.js", "/build/_shared/chunk-3PP2XFET.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.procedures": { id: "routes/_layout.procedures", parentId: "routes/_layout", path: "procedures", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.procedures-QO7M6QPU.js", imports: ["/build/_shared/chunk-3PP2XFET.js", "/build/_shared/chunk-ESIZUYZA.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments": { id: "routes/_layout.treatments", parentId: "routes/_layout", path: "treatments", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments-46SPD4XG.js", imports: ["/build/_shared/chunk-NUJE5ZII.js", "/build/_shared/chunk-S4PLKFQF.js", "/build/_shared/chunk-TQYIPUTV.js", "/build/_shared/chunk-RJBVN35E.js", "/build/_shared/chunk-RYUJL3ZR.js", "/build/_shared/chunk-FCLAUPAQ.js", "/build/_shared/chunk-ESIZUYZA.js", "/build/_shared/chunk-42V7ATAM.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments.create": { id: "routes/_layout.treatments.create", parentId: "routes/_layout.treatments", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments.create-7KQ5AGYJ.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments_.$id": { id: "routes/_layout.treatments_.$id", parentId: "routes/_layout", path: "treatments/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments_.$id-ZCOWTZ5T.js", imports: ["/build/_shared/chunk-TQYIPUTV.js", "/build/_shared/chunk-SG6G33CI.js", "/build/_shared/chunk-2PIAA6S4.js", "/build/_shared/chunk-I2QWIXQL.js", "/build/_shared/chunk-MSYOSMY6.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments_.$id.edit": { id: "routes/_layout.treatments_.$id.edit", parentId: "routes/_layout.treatments_.$id", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments_.$id.edit-X3JZMYUO.js", imports: ["/build/_shared/chunk-NUJE5ZII.js", "/build/_shared/chunk-S4PLKFQF.js", "/build/_shared/chunk-FCLAUPAQ.js", "/build/_shared/chunk-ESIZUYZA.js", "/build/_shared/chunk-42V7ATAM.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-4269F4B4.js" };

// server-entry-module:@remix-run/dev/server-build
var assetsBuildDirectory = "public\\build", future = { unstable_cssModules: !1, unstable_cssSideEffectImports: !1, unstable_dev: !1, unstable_postcss: !1, unstable_tailwind: !1, unstable_vanillaExtract: !1, v2_errorBoundary: !0, v2_meta: !0, v2_routeConvention: !0 }, publicPath = "/build/", entry = { module: entry_server_exports }, routes = {
  root: {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: root_exports
  },
  "routes/_apps": {
    id: "routes/_apps",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: apps_exports
  },
  "routes/_apps.apps": {
    id: "routes/_apps.apps",
    parentId: "routes/_apps",
    path: "apps",
    index: void 0,
    caseSensitive: void 0,
    module: apps_apps_exports
  },
  "routes/_apps.apps.create": {
    id: "routes/_apps.apps.create",
    parentId: "routes/_apps.apps",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: apps_apps_create_exports
  },
  "routes/_auth": {
    id: "routes/_auth",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: auth_exports
  },
  "routes/_auth.login": {
    id: "routes/_auth.login",
    parentId: "routes/_auth",
    path: "login",
    index: void 0,
    caseSensitive: void 0,
    module: auth_login_exports
  },
  "routes/_auth.register": {
    id: "routes/_auth.register",
    parentId: "routes/_auth",
    path: "register",
    index: void 0,
    caseSensitive: void 0,
    module: auth_register_exports
  },
  "routes/_layout": {
    id: "routes/_layout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports
  },
  "routes/_layout.$": {
    id: "routes/_layout.$",
    parentId: "routes/_layout",
    path: "*",
    index: void 0,
    caseSensitive: void 0,
    module: layout_exports2
  },
  "routes/_layout.calendar": {
    id: "routes/_layout.calendar",
    parentId: "routes/_layout",
    path: "calendar",
    index: void 0,
    caseSensitive: void 0,
    module: layout_calendar_exports
  },
  "routes/_layout.doctors": {
    id: "routes/_layout.doctors",
    parentId: "routes/_layout",
    path: "doctors",
    index: void 0,
    caseSensitive: void 0,
    module: layout_doctors_exports
  },
  "routes/_layout.doctors.create": {
    id: "routes/_layout.doctors.create",
    parentId: "routes/_layout.doctors",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: layout_doctors_create_exports
  },
  "routes/_layout.patients": {
    id: "routes/_layout.patients",
    parentId: "routes/_layout",
    path: "patients",
    index: void 0,
    caseSensitive: void 0,
    module: layout_patients_exports
  },
  "routes/_layout.patients.create": {
    id: "routes/_layout.patients.create",
    parentId: "routes/_layout.patients",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: layout_patients_create_exports
  },
  "routes/_layout.patients_.$id": {
    id: "routes/_layout.patients_.$id",
    parentId: "routes/_layout",
    path: "patients/:id",
    index: void 0,
    caseSensitive: void 0,
    module: layout_patients_id_exports
  },
  "routes/_layout.patients_.$id.edit": {
    id: "routes/_layout.patients_.$id.edit",
    parentId: "routes/_layout.patients_.$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: layout_patients_id_edit_exports
  },
  "routes/_layout.procedures": {
    id: "routes/_layout.procedures",
    parentId: "routes/_layout",
    path: "procedures",
    index: void 0,
    caseSensitive: void 0,
    module: layout_procedures_exports
  },
  "routes/_layout.treatments": {
    id: "routes/_layout.treatments",
    parentId: "routes/_layout",
    path: "treatments",
    index: void 0,
    caseSensitive: void 0,
    module: layout_treatments_exports
  },
  "routes/_layout.treatments.create": {
    id: "routes/_layout.treatments.create",
    parentId: "routes/_layout.treatments",
    path: "create",
    index: void 0,
    caseSensitive: void 0,
    module: layout_treatments_create_exports
  },
  "routes/_layout.treatments_.$id": {
    id: "routes/_layout.treatments_.$id",
    parentId: "routes/_layout",
    path: "treatments/:id",
    index: void 0,
    caseSensitive: void 0,
    module: layout_treatments_id_exports
  },
  "routes/_layout.treatments_.$id.edit": {
    id: "routes/_layout.treatments_.$id.edit",
    parentId: "routes/_layout.treatments_.$id",
    path: "edit",
    index: void 0,
    caseSensitive: void 0,
    module: layout_treatments_id_edit_exports
  },
  "routes/_layout._index": {
    id: "routes/_layout._index",
    parentId: "routes/_layout",
    path: void 0,
    index: !0,
    caseSensitive: void 0,
    module: layout_index_exports
  }
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  assets,
  assetsBuildDirectory,
  entry,
  future,
  publicPath,
  routes
});
//# sourceMappingURL=index.js.map
