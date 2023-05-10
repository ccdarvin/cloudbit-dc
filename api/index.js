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
var import_stream = require("stream"), import_node = require("@remix-run/node"), import_react = require("@remix-run/react"), import_server = require("react-dom/server"), import_cssinjs = require("@ant-design/cssinjs"), import_antd_style = require("antd-style"), import_jsx_runtime = require("react/jsx-runtime"), ABORT_DELAY = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, remixContext) {
  return new Promise((resolve, reject) => {
    let didError = !1, cache = (0, import_cssinjs.createCache)(), { pipe, abort } = (0, import_server.renderToPipeableStream)(
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_antd_style.StyleProvider, { cache: import_antd_style.extractStaticStyle.cache, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_cssinjs.StyleProvider, { cache, children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_react.RemixServer, { context: remixContext, url: request.url }) }) }),
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
var import_icons = __toESM(require("@ant-design/icons")), import_bs = require("react-icons/bs"), import_jsx_runtime2 = require("react/jsx-runtime"), CreateIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsPlusSquare }), EditIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsPencilSquare }), ShowIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsEye }), SaveIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsSave }), DeleteIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTrash }), CloseIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsXSquare }), CalendarIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsCalendar3 }), PatientIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsPersonVcard }), TreatmentIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsClipboard2Plus }), SettingsIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsGearWide }), UserIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { ...props, component: import_bs.BsPerson }), MoreIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsThreeDotsVertical }), PrevIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsChevronLeft }), NextIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsChevronRight }), TodayIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsCircle });
var UndoIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsArrowCounterclockwise }), RedoIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsArrowClockwise }), ParagraphIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTextParagraph }), H1Icon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTypeH1 }), H2Icon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTypeH2 }), BulletedListIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsListUl }), NumberedListIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsListOl }), QuoteIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsQuote }), BoldIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTypeBold }), ItalicIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTypeItalic }), UnderlineIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTypeUnderline }), StrikethroughIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsTypeStrikethrough });
var AppointmentIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsCalendar3Event }), TaskIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsFileEarmarkCheck }), ReminderIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsWatch }), NoteIcon = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: import_bs.BsFileEarmarkText }), LogoSvg = () => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("svg", { width: "1em", height: "1em", version: "1.1", viewBox: "0 0 700 700", children: /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { children: [
  /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m404.2 655.18v-17h34v34h-34zm-71.333-37.667c-0.36667-0.36666-0.66667-18.817-0.66667-41v-40.333h82v82h-40.333c-22.183 0-40.633-0.3-41-0.66667zm-66.667-71.333v-21h42v42h-42zm-64-32.093c-17.496-1.1564-28.932-3.4557-45.5-9.1478-59.841-20.559-105.06-74.162-114.94-136.26-2.2655-14.234-2.8929-30.848-1.6351-43.299 4.2444-42.014 19.345-75.375 47.488-104.92 15.803-16.587 29.766-26.926 50.088-37.088 6.6567-3.3286 24.302-10.198 26.196-10.198 0.29525 0 0.24487 2.8125-0.11195 6.25s-0.71097 11.447-0.78699 17.8l-0.13822 11.55-8.4825 3.9029c-25.225 11.606-50.076 34.61-63.692 58.958-7.836 14.012-15.191 36.521-17.005 52.039-1.1858 10.147-0.68398 29.681 1.0138 39.466 1.9297 11.122 8.0195 30.136 12.517 39.082 9.9709 19.832 29.052 41.839 46.489 53.617 49.289 33.293 109.85 33.494 159.5 0.52833 4.675-3.1039 12.127-9.1223 16.56-13.374l8.0601-7.7309 23.81 23.872-3.465 3.6014c-1.9057 1.9808-7.065 6.6514-11.465 10.379-34.828 29.506-78.828 43.984-124.5 40.966zm279.5 0.47114c-31.61-2.3157-59.382-11.993-86.368-30.095-13.236-8.8786-21.325-16.505-91.446-86.225-24.648-24.507-45.997-46.545-47.442-48.974-3.0636-5.1476-3.4829-11.905-1.0291-16.584 0.86529-1.65 15.234-16.6 31.929-33.223l30.356-30.223 23.987 23.943-46.987 47.036 55 54.827c59.986 59.797 62.216 61.711 84.113 72.194 19.145 9.1656 37.892 13.283 60.387 13.262 16.178-0.0149 26.777-1.6504 41.722-6.4376 43.017-13.78 76.718-46.905 90.767-89.218 4.9603-14.939 6.5504-23.547 7.2089-39.025 2.6768-62.917-36.858-119.39-97.482-139.25-14.15-4.6353-26.702-6.4931-43.618-6.4558-36.706 0.081-67.272 12.313-96.192 38.494l-7.0932 6.4215-23.814-23.977 8.2969-7.9218c21.323-20.359 51.177-36.395 79.703-42.811 15.973-3.5929 23.69-4.434 40-4.3595 34.284 0.1567 62.569 7.9794 90.5 25.029 33.458 20.424 59.698 52.375 73.442 89.427 11.606 31.289 13.657 69.704 5.459 102.27-7.5877 30.142-24.105 58.919-46.612 81.209-23.23 23.006-45.607 35.76-80.288 45.762-11.82 3.4088-40.143 5.959-54.5 4.9072zm-141.5-18.378v-11h22v22h-22zm37.501-96.999-11.977-12.009 46.965-46.997-51.494-51.565c-61.746-61.831-65.66-65.207-87.494-75.468-12.353-5.8049-20.517-8.5184-32.627-10.844l-9.3733-1.8 0.15192-10.41c0.0836-5.7252 0.80212-13.11 1.5968-16.41l1.4449-6 5.4032 0.34294c7.9089 0.50198 26.193 5.363 38.057 10.118 12.534 5.0234 30.327 15.06 41.272 23.282 10.343 7.7689 130.27 127.05 132.18 131.48 1.8026 4.1663 1.7817 11.648-0.042 15.082-0.78881 1.4852-15.081 16.315-31.761 32.955l-30.327 30.255zm89.794-72.751c-1.2061-2.6125-5.8577-8.6929-10.337-13.512l-8.1439-8.7619 7.4744-7.9453c20.096-21.363 33.015-47.847 37.272-76.413l0.57856-3.8818 8.18 0.67197c8.0117 0.65814 24.162 3.7408 25.239 4.8173 1.0101 1.01-4.7049 26.078-8.0552 35.334-9.5088 26.269-21.733 45.755-41.208 65.691-4.7013 4.8125-8.6063 8.75-8.6777 8.75-0.0714 0-1.1167-2.1375-2.3228-4.75zm-237.81-4.5c-32.978-35.398-49.572-76.154-49.557-121.72 0.0158-47.905 17.269-89.857 50.949-123.89 24.094-24.343 54.37-40.754 89.12-48.307 9.1975-1.999 13.353-2.2856 33.5-2.31 19.929-0.02416 24.469 0.27052 34 2.2067 15.377 3.1237 27.962 7.3742 42.36 14.307 15.336 7.3842 29.375 16.833 41.735 27.965 16.876 15.198 30.622 33.533 40.264 54.029 4.9752 10.577 10.747 25.74 10.03 26.351-0.21415 0.18257-3.0894-0.0167-6.3894-0.44293-3.3-0.42618-11.302-0.81285-17.783-0.85926l-11.783-0.0844-4.4423-9.5712c-8.6139-18.559-26.681-40.52-43.485-52.857-34.082-25.022-77.224-33.459-118.02-23.08-26.53 6.7493-44.703 17.152-64.568 36.96-20.413 20.354-32.881 42.954-38.924 70.548-2.5954 11.852-3.1182 37.583-1.0188 50.139 4.7912 28.653 16.543 52.842 35.527 73.123l8.2019 8.7624-8.471 8.9015c-4.659 4.8958-9.47 10.965-10.691 13.488-1.221 2.5223-2.3659 4.586-2.5442 4.586-0.17829 0-3.7829-3.7125-8.0103-8.25z", display: "none" }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fill: "#60a5fa", stroke: "#60a5fa", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m229.33 320.12c-21.385-22.86-36.404-50.062-43.785-79.301-4.4114-17.475-5.5005-49.362-2.3681-69.339 5.6447-36 21.94-67.369 49.185-94.684 20.682-20.735 43.592-34.776 70.714-43.34 19.89-6.2805 24.623-6.9097 51.639-6.865 22.01 0.03636 26.685 0.40028 36.885 2.871 51.881 12.567 95.811 46.69 117.85 91.539 6.0665 12.344 12.035 27.492 11.114 28.208-0.26557 0.20666-7.9756 0.13268-17.133-0.1644l-16.65-0.54015-5.9013-11.571c-11.276-22.109-31.919-44.945-51.549-57.026-21.456-13.204-42.829-19.555-69.085-20.528-43.18-1.5999-78.774 12.928-108.28 44.194-17.34 18.377-28.267 38.062-34.594 62.323-2.6977 10.344-3.0744 14.38-3.1066 33.287-0.0328 19.237 0.29729 22.782 3.1158 33.468 6.6436 25.188 17.388 45.242 33.247 62.053l8.0792 8.5643-6.1527 6.0516c-3.384 3.3284-8.1561 8.9563-10.605 12.506-2.4486 3.5502-4.5732 6.4549-4.7214 6.4549s-3.7051-3.6728-7.9043-8.1617z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m341.19 496.11v-10.451h20.902v20.902h-20.902z", strokeWidth: "1.2295" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m405.12 655.33v-15.984h31.967v31.967h-31.967z", strokeWidth: "1.2295" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { fill: "#2563eb", stroke: "#2563eb", strokeWidth: "1.2295", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m192.42 512.56c-73.344-8.3941-136.27-68.018-149.64-141.79-2.8197-15.555-2.7869-45.635 0.06646-60.932 2.841-15.232 9.1219-33.919 15.97-47.513 14.74-29.264 41.735-57.497 70.194-73.415 9.0853-5.0817 30.261-14.317 32.828-14.317 1.1727 0 1.4735 27.284 0.34713 31.48-0.44672 1.6641-3.3977 3.8563-8.2755 6.1475-18.92 8.8874-42.627 28.373-54.717 44.975-10.818 14.854-18.647 32.527-23.855 53.848-3.889 15.919-3.5133 44.061 0.81248 60.864 4.1077 15.956 8.5867 27.756 14.009 36.907 22.134 37.356 55.072 61.238 96.73 70.134 13.106 2.7988 40.789 2.832 53.484 0.0641 27.601-6.0182 50-17.341 68.875-34.817l8.7746-8.124 22.555 22.695-9.5637 9.0881c-35.673 33.899-87.358 50.572-138.59 44.709z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m333.36 614.45c-0.40775-1.5215-0.74892-19.503-0.75815-39.959l-0.0168-37.193h81.148v79.918h-79.631z" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m377.45 398.35-11.021-11.072 47.347-47.394-50.741-50.428c-50.764-50.45-61.548-60.553-72.658-68.069-12.206-8.257-34.161-17.004-49.608-19.765l-8.6806-1.5513 0.5651-11.205c0.3108-6.1629 1.1075-13.352 1.7705-15.975l1.2054-4.7693 6.5031 0.76431c20.979 2.4656 53.217 16.068 74.705 31.52 4.2316 3.043 36.289 34.027 71.238 68.852 68.223 67.982 65.73 65.04 63.785 75.25-0.42608 2.2367-10.469 13.395-30.707 34.119-16.541 16.937-30.661 30.795-31.378 30.795-0.71707 0-6.2633-4.9826-12.325-11.072z" })
  ] }),
  /* @__PURE__ */ (0, import_jsx_runtime2.jsxs)("g", { strokeWidth: "1.2295", children: [
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m467.58 325.46c-1.0624-2.2278-4.6321-7.069-7.9328-10.758-10.464-11.696-10.317-9.9406-1.615-19.243 17.606-18.821 30.797-45.063 35.583-70.787l1.5483-8.3225 6.3113 0.72583c8.0636 0.92734 24.402 4.0921 25.189 4.8791 0.33113 0.33112-0.0527 4.1556-0.85301 8.4989-4.0655 22.064-13.94 46.277-26.565 65.14-6.5102 9.7269-27.082 33.917-28.844 33.917-0.48944 0-1.7591-1.8228-2.8215-4.0506z", fill: "#60a5fa", stroke: "#60a5fa" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m466.14 512.08c-30.203-4.9244-60.318-18.91-84.337-39.166-5.7243-4.8274-36.212-34.505-67.75-65.949-50.933-50.782-57.482-57.746-58.599-62.308-0.69124-2.8248-0.96826-6.6454-0.61561-8.4902 0.43907-2.2969 10.443-13.274 31.737-34.823l31.096-31.469 11.149 11.046c6.1318 6.0755 11.008 11.446 10.835 11.934-0.17258 0.48851-10.411 11.112-22.752 23.607-12.341 12.495-22.439 23.239-22.439 23.874 0 2.2664 105.54 105.64 115.68 113.31 12.921 9.7694 31.663 18.841 47.426 22.955 14.658 3.8255 43.376 5.3046 58.184 2.9966 20.817-3.2446 46.846-14.554 63.952-27.788 9.4746-7.3297 24.411-23.105 30.675-32.4 17.945-26.624 26.672-61.045 23.466-92.557-3.4383-33.802-16.838-62.254-40.511-86.02-29.919-30.036-71.447-44.88-113.61-40.606-19.54 1.981-31.168 5.2858-48.18 13.694-13.465 6.655-18.491 10.136-39.055 27.049l-3.725 3.0637-21.97-23.341 8.3997-7.6849c23.545-21.541 53.862-36.91 85.731-43.461 16.207-3.3312 44.993-3.554 62.833-0.48626 33.723 5.7991 64.224 21.439 89.392 45.84 16.299 15.801 26.341 29.42 36.001 48.824 13.86 27.841 18.467 49.761 17.44 82.992-0.65254 21.12-2.1704 30.44-7.7099 47.336-13.774 42.015-47.293 81.256-85.943 100.62-13.673 6.8492-32.913 13.587-46.376 16.24-14.252 2.8092-46.539 3.4333-60.432 1.1682z", fill: "#60a5fa", stroke: "#60a5fa" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m470.1 511.82c-26.753-3.5982-53.087-14.219-77.033-31.067-9.9712-7.016-95.425-89.792-120.66-116.88-17.144-18.402-19.404-22.544-15.905-29.152 0.93067-1.758 15.072-16.791 31.425-33.406l29.733-30.21 21.455 21.308-22.018 22.866c-12.11 12.576-22.221 23.813-22.469 24.971-0.30707 1.4342 12.037 14.416 38.73 40.731 74.648 73.593 82.739 80.396 107.73 90.584 17.59 7.1709 25.314 8.3847 53.787 8.452 24.199 0.0573 25.647-0.0772 36.27-3.3678 13.505-4.1831 33.317-13.488 43.628-20.49 9.549-6.4846 25.993-22.665 33.752-33.21 10.986-14.932 20.177-36.68 24.162-57.172 2.1637-11.128 2.1676-40.571 6e-3 -51.639-4.1903-21.468-12.508-40.637-24.805-57.168-32.497-43.687-84.126-64.502-138.61-55.883-23.062 3.6479-43.899 13.224-65.51 30.106-7.7079 6.0214-14.353 10.964-14.767 10.983-0.41398 0.0194-5.3101-4.7119-10.88-10.514l-10.128-10.549 2.8884-3.1087c5.3664-5.7756 22.498-18.935 32.759-25.163 17.86-10.84 37.029-18.241 59.518-22.978 15.531-3.2716 48.427-2.8436 65.817 0.85631 34.14 7.2639 64.248 24.381 89.681 50.984 23.416 24.493 40.235 57.449 45.353 88.866 2.2851 14.027 2.534 40.339 0.53525 56.579-2.484 20.182-13.084 47.303-26.135 66.865-24.522 36.759-57.3 60.78-99.7 73.068-19.272 5.5847-47.7 7.5461-68.61 4.7337z", fill: "#1e40af", stroke: "#1e40af" }),
    /* @__PURE__ */ (0, import_jsx_runtime2.jsx)("path", { d: "m267.42 546.52v-20.287h40.574v40.574h-40.574z", fill: "#1e40af", stroke: "#1e40af" })
  ] })
] }) }), LogoIcon = (props) => /* @__PURE__ */ (0, import_jsx_runtime2.jsx)(import_icons.default, { component: LogoSvg, ...props });

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
var reset_default = "/build/_assets/reset-X4VXYJQH.css";

// app/contexts/index.tsx
var import_react2 = require("react"), import_antd = require("antd"), import_nookies = require("nookies"), import_colors = require("@ant-design/colors"), import_es_ES = __toESM(require("antd/locale/es_ES")), import_jsx_runtime3 = require("react/jsx-runtime"), ColorModeContext = (0, import_react2.createContext)(
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
  return /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
    ColorModeContext.Provider,
    {
      value: {
        setMode: setColorMode,
        mode
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime3.jsx)(
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
        }
      )
    }
  );
}

// app/root.tsx
var import_strapi_v42 = require("@refinedev/strapi-v4"), import_node2 = require("@remix-run/node");
var import_timezone = __toESM(require("dayjs/plugin/timezone")), import_core = require("@refinedev/core"), cookie2 = __toESM(require("cookie")), import_dayjs = __toESM(require("dayjs")), import_es = require("dayjs/locale/es"), import_jsx_runtime4 = require("react/jsx-runtime");
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
  }), /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("html", { lang: "es", children: [
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("head", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Meta, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Links, {}),
      typeof document > "u" ? "__STYLES__" : null
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)("body", { children: [
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_kbar.RefineKbarProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(ColorModeContextProvider, { defaultMode: mode, children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_kbar.RefineKbarProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(
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
                icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(CalendarIcon, {})
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
                icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(PatientIcon, {})
              }
            },
            {
              name: "dc-treatments",
              meta: {
                label: "Tratamientos",
                route: "treatments",
                icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(TreatmentIcon, {})
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
                icon: /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(SettingsIcon, {})
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
          children: /* @__PURE__ */ (0, import_jsx_runtime4.jsxs)(import_jsx_runtime4.Fragment, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Outlet, {}),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_remix_router.UnsavedChangesNotifier, {}),
            /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_kbar.RefineKbar, {})
          ] })
        }
      ) }) }) }),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.ScrollRestoration, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.Scripts, {}),
      /* @__PURE__ */ (0, import_jsx_runtime4.jsx)(import_react3.LiveReload, {})
    ] })
  ] });
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
var import_antd3 = require("antd"), import_core2 = require("@refinedev/core"), import_jsx_runtime5 = require("react/jsx-runtime"), { Text } = import_antd3.Typography, { useToken } = import_antd3.theme;
function ThemedHeaderV2(props) {
  let { token } = useToken(), authProvider2 = (0, import_core2.useActiveAuthProvider)(), { data: user } = (0, import_core2.useGetIdentity)({
    v3LegacyAuthProviderCompatible: Boolean(authProvider2 == null ? void 0 : authProvider2.isLegacy)
  });
  return /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(
    import_antd3.Layout.Header,
    {
      style: {
        backgroundColor: "transparent"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd3.Space, { children: /* @__PURE__ */ (0, import_jsx_runtime5.jsxs)(import_antd3.Space, { size: "middle", children: [
        (user == null ? void 0 : user.name) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(Text, { strong: !0, children: user.name }),
        (user == null ? void 0 : user.avatar) && /* @__PURE__ */ (0, import_jsx_runtime5.jsx)(import_antd3.Avatar, { src: user == null ? void 0 : user.avatar, alt: user == null ? void 0 : user.name })
      ] }) })
    }
  );
}

// app/components/Layout/Sider.tsx
var import_core4 = require("@refinedev/core"), import_antd5 = require("@refinedev/antd");

// app/components/layout/Title.tsx
var import_core3 = require("@refinedev/core"), import_antd4 = require("antd");
var import_jsx_runtime6 = require("react/jsx-runtime"), { useToken: useToken2 } = import_antd4.theme, defaultText = "CLOUDBIT";
function ThemedTitleV2({
  collapsed,
  text = defaultText,
  size = "large"
}) {
  let { token } = useToken2(), routerType = (0, import_core3.useRouterType)(), Link5 = (0, import_core3.useLink)(), { Link: LegacyLink } = (0, import_core3.useRouterContext)();
  return /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(
    routerType === "legacy" ? LegacyLink : Link5,
    {
      to: "/",
      style: {
        display: "inline-block",
        textDecoration: "none"
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime6.jsxs)(import_antd4.Space, { style: {
        display: "flex",
        justifyItems: "center"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(LogoIcon, { style: {
          fontSize: collapsed ? "2.5rem" : "2rem"
        } }),
        !collapsed && /* @__PURE__ */ (0, import_jsx_runtime6.jsx)(import_antd4.Typography.Title, { style: {
          fontSize: size === "large" ? 24 : 20,
          margin: 0,
          color: token.colorPrimary
        }, children: text })
      ] })
    }
  );
}

// app/components/Layout/Sider.tsx
var import_icons4 = require("@ant-design/icons"), import_antd6 = require("antd"), import_jsx_runtime7 = require("react/jsx-runtime"), drawerButtonStyles = {
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
      return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_core4.CanAccess,
        {
          resource: name.toLowerCase(),
          action: "list",
          params: {
            resource: item
          },
          children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            SubMenu,
            {
              icon: icon ?? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons4.UnorderedListOutlined, {}),
              title: label,
              children: renderTreeView(children, selectedKey2)
            },
            item.key
          )
        },
        item.key
      );
    let isSelected = key === selectedKey2, isRoute = !((0, import_core4.pickNotDeprecated)(meta3 == null ? void 0 : meta3.parent, options == null ? void 0 : options.parent, parentName) !== void 0 && children.length === 0);
    return /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_core4.CanAccess,
      {
        resource: name.toLowerCase(),
        action: "list",
        params: {
          resource: item
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_antd6.Menu.Item,
          {
            icon: icon ?? (isRoute && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons4.UnorderedListOutlined, {})),
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Link5, { to: route ?? "", children: label }),
              !drawerSiderVisible && isSelected && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "ant-menu-tree-arrow" })
            ]
          },
          item.key
        )
      },
      item.key
    );
  }), handleLogout = () => {
    warnWhen ? window.confirm(
      translate(
        "warnWhenUnsavedChanges",
        "Are you sure you want to leave? You have unsaved changes."
      )
    ) && (setWarnWhen(!1), mutateLogout()) : mutateLogout();
  }, logout = isExistAuthentication && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
    import_antd6.Menu.Item,
    {
      onClick: () => handleLogout(),
      icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons4.LogoutOutlined, {}),
      children: translate("buttons.logout", "Logout")
    },
    "logout"
  ), dashboard = hasDashboard ? /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_antd6.Menu.Item, { icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons4.DashboardOutlined, {}), children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(Link5, { to: "/", children: translate("dashboard.title", "Dashboard") }),
    !drawerSiderVisible && selectedKey === "/" && /* @__PURE__ */ (0, import_jsx_runtime7.jsx)("div", { className: "ant-menu-tree-arrow" })
  ] }, "dashboard") : null, items = renderTreeView(menuItems, selectedKey), renderSider = () => render ? render({
    dashboard,
    items,
    logout,
    collapsed: drawerSiderVisible
  }) : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    dashboard,
    items,
    logout
  ] }), renderMenu = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_jsx_runtime7.Fragment, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
    }
  ) }), renderDrawerSider = () => /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(import_jsx_runtime7.Fragment, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
        children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_antd6.Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
          import_antd6.Layout.Sider,
          {
            style: {
              height: "100vh",
              overflow: "hidden",
              backgroundColor: token.colorBgContainer,
              borderRight: `1px solid ${token.colorBgElevated}`
            },
            children: [
              /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
                  children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RenderToTitle, { collapsed: !1, size: "small" })
                }
              ),
              renderMenu()
            ]
          }
        ) })
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
      import_antd6.Button,
      {
        style: drawerButtonStyles,
        size: "large",
        onClick: () => setSiderVisible == null ? void 0 : setSiderVisible(!0),
        icon: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(import_icons4.BarsOutlined, {})
      }
    )
  ] });
  return isMobile ? renderDrawerSider() : /* @__PURE__ */ (0, import_jsx_runtime7.jsxs)(
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
      trigger: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
        import_antd6.Button,
        {
          type: "text",
          style: {
            borderRadius: 0,
            height: "100%",
            width: "100%",
            backgroundColor: token.colorBgElevated
          },
          children: drawerSiderVisible ? /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_icons4.RightOutlined,
            {
              style: {
                color: token.colorPrimary
              }
            }
          ) : /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
            import_icons4.LeftOutlined,
            {
              style: {
                color: token.colorPrimary
              }
            }
          )
        }
      ),
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(
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
            children: /* @__PURE__ */ (0, import_jsx_runtime7.jsx)(RenderToTitle, { collapsed: drawerSiderVisible })
          }
        ),
        renderMenu()
      ]
    }
  );
}

// app/components/Layout/index.tsx
var import_jsx_runtime8 = require("react/jsx-runtime");
function ThemedLayoutV2({
  children,
  Header,
  hasSider = !0,
  Sider,
  Title: Title3,
  Footer,
  OffLayoutArea
}) {
  let breakpoint = import_antd8.Grid.useBreakpoint(), SiderToRender = Sider ?? ThemedSiderV2, HeaderToRender = Header ?? ThemedHeaderV2, isSmall = typeof breakpoint.sm > "u" ? !0 : breakpoint.sm;
  return /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(import_antd7.ThemedLayoutContextProvider, { children: /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_antd8.Layout, { hasSider, style: { minHeight: "100vh", display: "flex" }, children: [
    hasSider ? /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(SiderToRender, { Title: Title3 }) : /* @__PURE__ */ (0, import_jsx_runtime8.jsx)("div", {}),
    /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_antd8.Layout, { children: [
      /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(HeaderToRender, {}),
      /* @__PURE__ */ (0, import_jsx_runtime8.jsxs)(import_antd8.Layout.Content, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(
          "div",
          {
            style: {
              minHeight: 360,
              padding: isSmall ? 24 : 12
            },
            children
          }
        ),
        OffLayoutArea && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(OffLayoutArea, {})
      ] }),
      Footer && /* @__PURE__ */ (0, import_jsx_runtime8.jsx)(Footer, {})
    ] })
  ] }) });
}

// app/routes/_apps.tsx
var import_jsx_runtime9 = require("react/jsx-runtime");
function BaseLayout() {
  return /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(ThemedLayoutV2, { hasSider: !1, children: /* @__PURE__ */ (0, import_jsx_runtime9.jsx)(import_react4.Outlet, {}) });
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
var import_antd11 = require("@refinedev/antd"), import_antd12 = require("antd");

// app/components/buttons/DropdownActions.tsx
var import_core6 = require("@refinedev/core");
var import_antd10 = require("antd");

// app/components/buttons/DeleteButton.tsx
var import_core5 = require("@refinedev/core"), import_icons5 = require("@ant-design/icons"), import_antd9 = require("antd"), import_jsx_runtime10 = require("react/jsx-runtime");
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
  return accessControlEnabled && hideIfUnauthorized && !(data != null && data.can) ? null : /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(
        import_antd9.Button,
        {
          danger: !0,
          loading: (recordItemId ?? id) === (variables == null ? void 0 : variables.id) && isLoading,
          icon: /* @__PURE__ */ (0, import_jsx_runtime10.jsx)(import_icons5.DeleteOutlined, {}),
          disabled: (data == null ? void 0 : data.can) === !1,
          ...rest,
          children: !hideText && (children ?? translate("buttons.delete", "Delete"))
        }
      )
    },
    "delete"
  );
}

// app/components/buttons/DropdownActions.tsx
var import_react5 = require("@remix-run/react"), import_react6 = __toESM(require("react")), import_jsx_runtime11 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_jsx_runtime11.Fragment, { children: [
    !confirmDelete && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      import_antd10.Dropdown,
      {
        menu: {
          items: [
            {
              key: "show",
              label: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react5.Link, { to: showUrl, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_antd10.Space, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(ShowIcon, {}),
                !hideText && translate("buttons.show", "Ver")
              ] }) }),
              title: createButtonDisabledTitle(showData),
              disabled: (showData == null ? void 0 : showData.can) === !1
            },
            {
              key: "edit",
              label: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_react5.Link, { to: editUrl, children: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_antd10.Space, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(EditIcon, {}),
                !hideText && translate("buttons.edit", "Editar")
              ] }) }),
              title: createButtonDisabledTitle(editData),
              disabled: (editData == null ? void 0 : editData.can) === !1
            },
            {
              key: "delete",
              label: /* @__PURE__ */ (0, import_jsx_runtime11.jsxs)(import_antd10.Space, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(DeleteIcon, {}),
                !hideText && translate("buttons.delete", "Eliminar")
              ] }),
              title: createButtonDisabledTitle(deleteData),
              disabled: (deleteData == null ? void 0 : deleteData.can) === !1,
              onClick: () => setConfirmDelete(!0),
              danger: !0
            }
          ]
        },
        children: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(import_antd10.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(MoreIcon, {}) })
      }
    ),
    confirmDelete && /* @__PURE__ */ (0, import_jsx_runtime11.jsx)(
      DeleteButton,
      {
        hideText: !0,
        type: "link",
        resource: resourceNameFromProps,
        recordItemId,
        onCancel: () => setConfirmDelete(!1)
      }
    )
  ] });
}

// app/routes/_apps.apps.tsx
var import_react7 = require("@remix-run/react"), import_jsx_runtime12 = require("react/jsx-runtime");
function AppPage() {
  var _a;
  let { queryResult, listProps } = (0, import_antd11.useSimpleList)({}), [searchParams, setSearchParams] = (0, import_react7.useSearchParams)(), getAppUrl = (appCode) => {
    let domain = window.location.host.split(".").slice(-2).join(".");
    return `${window.location.protocol}//${appCode}.${domain}`;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime12.jsxs)(
    import_antd11.List,
    {
      title: "Mis aplicaciones",
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
          import_antd12.List,
          {
            ...listProps,
            grid: { gutter: 16, column: 4 },
            dataSource: (_a = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _a.data,
            renderItem: (item) => /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_antd12.List.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
              import_antd12.Card,
              {
                title: item.name,
                actions: [
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_antd12.Button, { type: "link", href: item.url, onClick: () => {
                  }, children: "Ir a app" }),
                  /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(
                    DropdownActions,
                    {
                      showItem: {
                        url: () => getAppUrl(item.code)
                      },
                      editItem: {
                        url: () => (searchParams.set("edit", item.id), `?${searchParams.toString()}`)
                      }
                    }
                  )
                ]
              }
            ) })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime12.jsx)(import_react7.Outlet, {})
      ]
    }
  );
}

// app/routes/_apps.apps.create.tsx
var apps_apps_create_exports = {};
__export(apps_apps_create_exports, {
  default: () => CreateApp
});
var import_antd16 = require("@refinedev/antd");

// app/components/apps/AppForm.tsx
var import_antd13 = require("antd"), import_jsx_runtime13 = require("react/jsx-runtime");
function AppForm({
  formProps
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime13.jsx)(
    import_antd13.Form,
    {
      ...formProps,
      layout: "vertical"
    }
  );
}

// app/components/crud/CreateDrawer.tsx
var import_react8 = require("@remix-run/react"), import_antd15 = require("antd"), import_react9 = require("react");

// app/components/buttons/SaveButton.tsx
var import_core7 = require("@refinedev/core"), import_antd14 = require("antd");
var import_jsx_runtime14 = require("react/jsx-runtime");
function SaveButton({
  hideText = !1,
  children,
  ...rest
}) {
  let translate = (0, import_core7.useTranslate)();
  return /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(import_antd14.Button, { type: "primary", icon: /* @__PURE__ */ (0, import_jsx_runtime14.jsx)(SaveIcon, {}), ...rest, children: !hideText && (children ?? translate("buttons.save", "Guardar")) });
}

// app/components/crud/CreateDrawer.tsx
var import_jsx_runtime15 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
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
      footer: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_antd15.Space, { children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(
        SaveButton,
        {
          loading: saveButtonProps == null ? void 0 : saveButtonProps.disabled,
          ...saveButtonProps
        }
      ) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime15.jsx)(import_antd15.Spin, { spinning: saveButtonProps == null ? void 0 : saveButtonProps.disabled, children })
    }
  );
}

// app/routes/_apps.apps.create.tsx
var import_jsx_runtime16 = require("react/jsx-runtime");
function CreateApp() {
  let { formProps, saveButtonProps } = (0, import_antd16.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime16.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(
    CreateDrawer,
    {
      open: !0,
      title: "Crear aplicaci\xF3n",
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime16.jsx)(AppForm, { formProps })
    }
  ) });
}

// app/routes/_auth.tsx
var auth_exports = {};
__export(auth_exports, {
  default: () => AuthLayout,
  loader: () => loader3
});
var import_node4 = require("@remix-run/node"), import_react10 = require("@remix-run/react");
var import_jsx_runtime17 = require("react/jsx-runtime");
function AuthLayout() {
  return /* @__PURE__ */ (0, import_jsx_runtime17.jsx)(import_react10.Outlet, {});
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
var import_core8 = require("@refinedev/core");
var import_antd17 = require("antd"), import_jsx_runtime18 = require("react/jsx-runtime"), { Text: Text2, Title } = import_antd17.Typography, { useToken: useToken4 } = import_antd17.theme;
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
  }), screens = import_antd17.Grid.useBreakpoint(), PageTitle = title === !1 ? null : /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      },
      children: title ?? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(ThemedTitleV2, { collapsed: !1 })
    }
  ), CardTitle = /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
    Title,
    {
      level: 3,
      style: {
        color: token.colorPrimaryTextHover
      },
      children: translate("pages.login.title", "Iniciar sesi\xF3n")
    }
  ), renderProviders = () => providers && providers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
    providers.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
      provider.name
    )),
    /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_antd17.Divider, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
      Text2,
      {
        style: {
          color: token.colorTextLabel
        },
        children: translate("pages.login.divider", "or")
      }
    ) })
  ] }) : null, CardContent = /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                    import_antd17.Input,
                    {
                      placeholder: translate("pages.login.fields.email", "Correo electr\xF3nico")
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                import_antd17.Form.Item,
                {
                  name: "password",
                  label: translate("pages.login.fields.password", "Contrase\xF1a"),
                  rules: [{ required: !0 }],
                  children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_antd17.Input, { type: "password", placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "24px"
                  },
                  children: [
                    rememberMe ?? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_antd17.Form.Item, { name: "remember", valuePropName: "checked", noStyle: !0, children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                      import_antd17.Checkbox,
                      {
                        style: {
                          fontSize: "12px"
                        },
                        children: translate("pages.login.buttons.rememberMe", "Recuerdame")
                      }
                    ) }),
                    forgotPasswordLink ?? /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
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
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_antd17.Form.Item, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
                import_antd17.Button,
                {
                  type: "primary",
                  htmlType: "submit",
                  loading: isLoading,
                  block: !0,
                  children: translate("pages.login.signin", "Iniciar sesi\xF3n")
                }
              ) })
            ]
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)("div", { style: { marginTop: 8 }, children: registerLink ?? /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(Text2, { style: { fontSize: 12 }, children: [
          translate(
            "pages.login.buttons.noAccount",
            "\xBFNo tienes una cuenta?"
          ),
          " ",
          /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
            ActiveLink,
            {
              to: "/register",
              style: {
                fontWeight: "bold",
                color: token.colorPrimaryTextHover
              },
              children: translate("pages.login.signup", "Registrate")
            }
          )
        ] }) })
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_antd17.Layout, { children: /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(
    import_antd17.Row,
    {
      justify: "center",
      align: "middle",
      style: {
        height: "100vh"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(import_antd17.Col, { style: {
          padding: "0 24px",
          minWidth: "30%"
        }, children: renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ (0, import_jsx_runtime18.jsxs)(import_jsx_runtime18.Fragment, { children: [
          PageTitle,
          CardContent
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime18.jsx)(
          import_antd17.Col,
          {
            flex: "auto",
            style: {
              display: screens.xs ? "none" : "block",
              height: "100vh",
              backgroundColor: token.colorPrimaryActive
            }
          }
        )
      ]
    }
  ) });
}

// app/routes/_auth.login.tsx
var import_jsx_runtime19 = require("react/jsx-runtime");
function LoginPage() {
  return /* @__PURE__ */ (0, import_jsx_runtime19.jsx)(Login, {});
}

// app/routes/_auth.register.tsx
var auth_register_exports = {};
__export(auth_register_exports, {
  default: () => LoginPage2
});

// app/components/auth/Register.tsx
var import_core9 = require("@refinedev/core"), import_antd18 = require("@refinedev/antd"), import_antd19 = require("antd"), import_jsx_runtime20 = require("react/jsx-runtime"), { Text: Text3, Title: Title2 } = import_antd19.Typography, { useToken: useToken5 } = import_antd19.theme;
function RegisterPage({
  providers,
  loginLink,
  wrapperProps,
  contentProps,
  renderContent,
  formProps,
  title
}) {
  let { token } = useToken5(), [form] = import_antd19.Form.useForm(), translate = (0, import_core9.useTranslate)(), routerType = (0, import_core9.useRouterType)(), Link5 = (0, import_core9.useLink)(), { Link: LegacyLink } = (0, import_core9.useRouterContext)(), ActiveLink = routerType === "legacy" ? LegacyLink : Link5, authProvider2 = (0, import_core9.useActiveAuthProvider)(), { mutate: register, isLoading } = (0, import_core9.useRegister)(), screens = import_antd19.Grid.useBreakpoint(), PageTitle = title === !1 ? null : /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    "div",
    {
      style: {
        display: "flex",
        justifyContent: "center",
        marginBottom: "32px",
        fontSize: "20px"
      },
      children: title ?? /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_antd18.ThemedTitleV2, { collapsed: !1 })
    }
  ), CardTitle = /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
    Title2,
    {
      level: 3,
      style: {
        color: token.colorPrimaryTextHover
      },
      children: translate("pages.register.title", "Crea una cuenta")
    }
  ), renderProviders = () => providers && providers.length > 0 ? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
    providers.map((provider) => /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
      provider.name
    )),
    /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_antd19.Divider, { children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
      Text3,
      {
        style: {
          color: token.colorTextLabel
        },
        children: translate("pages.login.divider", "o")
      }
    ) })
  ] }) : null;
  console.log(register);
  let CardContent = /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
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
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
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
                  children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_antd19.Input,
                    {
                      size: "large",
                      placeholder: translate("pages.register.fields.email", "Correo electr\xF3nico")
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                import_antd19.Form.Item,
                {
                  name: "password",
                  label: translate("pages.register.fields.password", "Contrase\xF1a"),
                  rules: [{ required: !0 }],
                  children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_antd19.Input, { type: "password", placeholder: "\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF\u25CF", size: "large" })
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                "div",
                {
                  style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "24px"
                  },
                  children: loginLink ?? /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
                    Text3,
                    {
                      style: {
                        fontSize: 12,
                        marginLeft: "auto"
                      },
                      children: [
                        translate("pages.login.buttons.haveAccount", "\xBFTienes una cuenta?"),
                        " ",
                        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                          ActiveLink,
                          {
                            style: {
                              fontWeight: "bold",
                              color: token.colorPrimaryTextHover
                            },
                            to: "/login",
                            children: translate("pages.login.signin", "Iniciar sesi\xF3n")
                          }
                        )
                      ]
                    }
                  )
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                import_antd19.Form.Item,
                {
                  style: {
                    marginBottom: 0
                  },
                  children: /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
                    import_antd19.Button,
                    {
                      type: "primary",
                      size: "large",
                      htmlType: "submit",
                      loading: isLoading,
                      block: !0,
                      children: translate("pages.register.buttons.submit", "Registrate")
                    }
                  )
                }
              )
            ]
          }
        )
      ]
    }
  );
  return /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_antd19.Layout, { ...wrapperProps ?? {}, children: /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(
    import_antd19.Row,
    {
      justify: "center",
      align: "middle",
      style: {
        height: "100vh"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(import_antd19.Col, { style: {
          padding: "0 24px",
          minWidth: "30%"
        }, children: renderContent ? renderContent(CardContent, PageTitle) : /* @__PURE__ */ (0, import_jsx_runtime20.jsxs)(import_jsx_runtime20.Fragment, { children: [
          PageTitle,
          CardContent
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime20.jsx)(
          import_antd19.Col,
          {
            flex: "auto",
            style: {
              display: screens.xs ? "none" : "block",
              height: "100vh",
              backgroundColor: token.colorPrimaryActive
            }
          }
        )
      ]
    }
  ) });
}

// app/routes/_auth.register.tsx
var import_jsx_runtime21 = require("react/jsx-runtime");
function LoginPage2() {
  return /* @__PURE__ */ (0, import_jsx_runtime21.jsx)(RegisterPage, {});
}

// app/routes/_layout.tsx
var layout_exports = {};
__export(layout_exports, {
  default: () => BaseLayout2,
  loader: () => loader4
});
var import_node5 = require("@remix-run/node"), import_react11 = require("@remix-run/react"), import_jsx_runtime22 = require("react/jsx-runtime");
function BaseLayout2() {
  return /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(ThemedLayoutV2, { children: /* @__PURE__ */ (0, import_jsx_runtime22.jsx)(import_react11.Outlet, {}) });
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
var import_antd20 = require("@refinedev/antd"), import_jsx_runtime23 = require("react/jsx-runtime");
function Index() {
  return /* @__PURE__ */ (0, import_jsx_runtime23.jsx)(import_antd20.ErrorComponent, {});
}

// app/routes/_layout.calendar.tsx
var layout_calendar_exports = {};
__export(layout_calendar_exports, {
  default: () => CalendarPage,
  links: () => links2
});

// app/components/calendar/CalendarComponents.tsx
var import_antd21 = require("antd"), import_dayjs2 = __toESM(require("dayjs"));
var import_react_big_calendar = require("react-big-calendar"), import_react12 = require("@remix-run/react"), import_react13 = require("react"), import_jsx_runtime24 = require("react/jsx-runtime"), CalendarComponents = {
  toolbar({ label, localizer: localizer2, onNavigate, onView, view, views }) {
    let { messages } = localizer2, [searchParams, setSearchParams] = (0, import_react12.useSearchParams)();
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_antd21.Row, { justify: "space-between", align: "middle", style: { paddingBottom: "1rem" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_antd21.Space.Compact, { children: [
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Button, { icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(TodayIcon, {}), onClick: () => onNavigate(import_react_big_calendar.Navigate.TODAY), title: messages.today }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Button, { icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(PrevIcon, {}), onClick: () => onNavigate(import_react_big_calendar.Navigate.PREVIOUS), title: messages.next }),
        /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Button, { icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(NextIcon, {}), onClick: () => onNavigate(import_react_big_calendar.Navigate.NEXT), title: messages.previous })
      ] }) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Typography.Text, { children: label }) }),
      /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
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
        }
      ) })
    ] });
  },
  month: {
    header({ label, date }) {
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Tooltip, { title: (0, import_dayjs2.default)(date).format("dddd"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Typography.Title, { level: 5, children: label }) });
    },
    dateHeader({ label, date, onDrillDown }) {
      return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Tooltip, { title: (0, import_dayjs2.default)(date).format("dddd, LL"), children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
        import_antd21.Button,
        {
          type: "text",
          onClick: onDrillDown,
          children: label
        }
      ) });
    }
  },
  event: ({ event }) => {
    let [open, setOpen] = (0, import_react13.useState)(!1);
    return /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
      import_antd21.Popover,
      {
        title: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_antd21.Row, { justify: "end", children: [
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Col, { flex: "auto", children: /* @__PURE__ */ (0, import_jsx_runtime24.jsxs)(import_antd21.Space.Compact, { children: [
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Button, { type: "link", size: "small", icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(EditIcon, {}) }),
            /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Button, { type: "link", size: "small", icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(DeleteIcon, {}), danger: !0 })
          ] }) }),
          /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(import_antd21.Col, { children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
            import_antd21.Button,
            {
              type: "text",
              size: "small",
              icon: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(CloseIcon, {}),
              onClick: () => setOpen(!1)
            }
          ) })
        ] }),
        open,
        content: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)("div", {}),
        children: /* @__PURE__ */ (0, import_jsx_runtime24.jsx)(
          "div",
          {
            onClick: () => setOpen(!0),
            style: {
              height: "100%"
            },
            children: event.title
          }
        )
      }
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
var import_antd22 = require("antd"), import_dayjs3 = __toESM(require("dayjs")), import_jsx_runtime25 = require("react/jsx-runtime");
function DatePicker({
  value,
  onChange,
  style,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime25.jsx)(
    import_antd22.DatePicker,
    {
      ...props,
      showTime: !1,
      value: value ? (0, import_dayjs3.default)(value) : void 0,
      format: "dddd, DD MMMM YYYY",
      onChange: (value2) => onChange == null ? void 0 : onChange(value2 ? value2.format("YYYY-MM-DD") : void 0)
    }
  );
}

// app/components/controls/TimePicker.tsx
var import_antd23 = require("antd"), import_dayjs4 = __toESM(require("dayjs")), import_jsx_runtime26 = require("react/jsx-runtime");
function TimePicker({
  value,
  onChange,
  style,
  ...props
}) {
  let format = "HH:mm:ss.SSS";
  return /* @__PURE__ */ (0, import_jsx_runtime26.jsx)(
    import_antd23.TimePicker,
    {
      ...props,
      value: value ? (0, import_dayjs4.default)(value, [format]) : void 0,
      format: "hh:mm a",
      onChange: (value2) => {
        onChange == null || onChange(value2 ? value2.format(format) : void 0);
      }
    }
  );
}

// app/components/doctors/controls/SelectDoctor.tsx
var import_antd24 = require("antd"), import_antd25 = require("@refinedev/antd"), import_jsx_runtime27 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime27.jsx)(
    import_antd24.Select,
    {
      ...props,
      ...doctorSelectProps,
      options: (_a = queryResult.data) == null ? void 0 : _a.data.map((doctor) => ({
        label: `${doctor.firstName} ${doctor.lastName}`,
        value: doctor.id
      }))
    }
  );
}

// app/components/patients/controls/SelectPatient.tsx
var import_antd26 = require("@refinedev/antd"), import_antd27 = require("antd"), import_jsx_runtime28 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime28.jsx)(
    import_antd27.Select,
    {
      ...props,
      ...patientSelectProps,
      options: (_a = queryResult.data) == null ? void 0 : _a.data.map((patient) => ({
        label: `${patient.firstName} ${patient.lastName}`,
        value: patient.id
      }))
    }
  );
}

// app/components/treatments/controls/SelectTreatment.tsx
var import_antd28 = require("antd"), import_antd29 = require("@refinedev/antd"), import_jsx_runtime29 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime29.jsx)(
    import_antd28.Select,
    {
      ...props,
      ...treatmentSelectProps,
      options: (_a = queryResult.data) == null ? void 0 : _a.data.map((treatment) => ({
        label: `${treatment.name}`,
        value: treatment.id
      }))
    }
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
var import_jsx_runtime30 = require("react/jsx-runtime"), LowPriority = 1, supportedBlockTypes = /* @__PURE__ */ new Set([
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
    icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(H1Icon, {})
  },
  h2: {
    name: "Medium Heading",
    icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(H2Icon, {})
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
    icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(NumberedListIcon, {})
  },
  paragraph: {
    name: "Paragraph",
    icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ParagraphIcon, {})
  },
  quote: {
    name: "Quote",
    icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(QuoteIcon, {})
  },
  ul: {
    name: "Bulleted List",
    icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(BulletedListIcon, {})
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
  return /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(
    "div",
    {
      className: "toolbar",
      ref: toolbarRef,
      style: {
        display: "flex"
      },
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space.Compact, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_antd30.Button,
            {
              disabled: !canUndo,
              type: "text",
              onClick: () => {
                editor.dispatchCommand(import_lexical.UNDO_COMMAND);
              },
              className: "toolbar-item spaced",
              "aria-label": "Undo",
              icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(UndoIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_antd30.Button,
            {
              disabled: !canRedo,
              type: "text",
              onClick: () => {
                editor.dispatchCommand(import_lexical.REDO_COMMAND);
              },
              className: "toolbar-item",
              "aria-label": "Redo",
              icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(RedoIcon, {})
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_antd30.Divider, { type: "vertical" }),
        supportedBlockTypes.has(blockType) && /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_jsx_runtime30.Fragment, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_antd30.Dropdown,
            {
              menu: {
                items: [
                  {
                    key: "paragraph",
                    label: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space, { children: [
                      blockTypeToBlockName.paragraph.icon,
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: blockTypeToBlockName.paragraph.name })
                    ] }),
                    onClick: formatParagraph
                  },
                  {
                    key: "h1",
                    label: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space, { children: [
                      blockTypeToBlockName.h1.icon,
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: blockTypeToBlockName.h1.name })
                    ] })
                  },
                  {
                    key: "h2",
                    label: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space, { children: [
                      blockTypeToBlockName.h2.icon,
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: blockTypeToBlockName.h2.name })
                    ] })
                  },
                  {
                    key: "ul",
                    label: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space, { children: [
                      blockTypeToBlockName.ul.icon,
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: blockTypeToBlockName.ul.name })
                    ] })
                  },
                  {
                    key: "ol",
                    label: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space, { children: [
                      blockTypeToBlockName.ol.icon,
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: blockTypeToBlockName.ol.name })
                    ] })
                  },
                  {
                    key: "quote",
                    label: /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space, { children: [
                      blockTypeToBlockName.quote.icon,
                      /* @__PURE__ */ (0, import_jsx_runtime30.jsx)("span", { children: blockTypeToBlockName.quote.name })
                    ] })
                  }
                ]
              },
              children: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
                import_antd30.Button,
                {
                  className: "toolbar-item block-controls",
                  onClick: () => setShowBlockOptionsDropDown(!showBlockOptionsDropDown),
                  type: "text",
                  "aria-label": "Formatting Options",
                  icon: blockTypeToBlockName[blockType].icon,
                  children: blockTypeToBlockName[blockType].name
                }
              )
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(import_antd30.Divider, { type: "vertical" })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime30.jsxs)(import_antd30.Space.Compact, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "bold");
              },
              className: "toolbar-item spaced " + (isBold ? "active" : ""),
              "aria-label": "Format Bold",
              type: isBold ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(BoldIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "italic");
              },
              className: "toolbar-item spaced " + (isItalic ? "active" : ""),
              "aria-label": "Format Italics",
              type: isItalic ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(ItalicIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "underline");
              },
              className: "toolbar-item spaced " + (isUnderline ? "active" : ""),
              "aria-label": "Format Underline",
              type: isUnderline ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(UnderlineIcon, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(
            import_antd30.Button,
            {
              onClick: () => {
                editor.dispatchCommand(import_lexical.FORMAT_TEXT_COMMAND, "strikethrough");
              },
              className: "toolbar-item spaced " + (isStrikethrough ? "active" : ""),
              "aria-label": "Format Strikethrough",
              type: isStrikethrough ? "link" : "text",
              icon: /* @__PURE__ */ (0, import_jsx_runtime30.jsx)(StrikethroughIcon, {})
            }
          )
        ] })
      ]
    }
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
var import_LexicalAutoLinkPlugin = require("@lexical/react/LexicalAutoLinkPlugin"), import_jsx_runtime31 = require("react/jsx-runtime"), URL_MATCHER = /((https?:\/\/(www\.)?)|(www\.))[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)/, EMAIL_MATCHER = /(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/, MATCHERS = [
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
  return /* @__PURE__ */ (0, import_jsx_runtime31.jsx)(import_LexicalAutoLinkPlugin.AutoLinkPlugin, { matchers: MATCHERS });
}

// app/components/controls/RichEditor/index.tsx
var import_antd31 = require("antd"), import_lexical3 = require("lexical"), import_jsx_runtime32 = require("react/jsx-runtime");
function Placeholder({
  children
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
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
    }
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
  return /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_LexicalComposer.LexicalComposer, { initialConfig: {
    ...editorConfig,
    editorState: value == null ? void 0 : value.json
  }, children: /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ToolbarPlugin, {}),
    /* @__PURE__ */ (0, import_jsx_runtime32.jsxs)("div", { style: {
      position: "relative"
    }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(
        import_LexicalRichTextPlugin.RichTextPlugin,
        {
          contentEditable: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_LexicalContentEditable.ContentEditable, { style: {
            padding: "0.5rem",
            userSelect: "text",
            whiteSpace: "pre-wrap",
            wordBreak: "break-word",
            outline: 0,
            tabSize: 1
          } }),
          placeholder: /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(Placeholder, {}),
          ErrorBoundary: import_LexicalErrorBoundary.default
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_LexicalOnChangePlugin.OnChangePlugin, { onChange: (editorState, editor) => {
        editorState.read(() => {
          let root = (0, import_lexical3.$getRoot)(), selection = (0, import_lexical3.$getSelection)(), json2 = JSON.stringify(editorState), text = (0, import_text.$rootTextContent)(), html = (0, import_html.$generateHtmlFromNodes)(editor, null);
          onChange == null || onChange({
            json: json2,
            text,
            html
          });
        });
      } }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_LexicalHistoryPlugin.HistoryPlugin, {}),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_LexicalListPlugin.ListPlugin, {}),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_LexicalLinkPlugin.LinkPlugin, {}),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(PlaygroundAutoLinkPlugin, {}),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(ListMaxIndentLevelPlugin, { maxDepth: 7 }),
      /* @__PURE__ */ (0, import_jsx_runtime32.jsx)(import_LexicalMarkdownShortcutPlugin.MarkdownShortcutPlugin, { transformers: import_markdown.TRANSFORMERS })
    ] })
  ] }) });
}

// app/components/calendar/Form.tsx
var import_jsx_runtime33 = require("react/jsx-runtime");
function EventForm({
  ...props
}) {
  return console.log(props), /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(
    import_antd32.Form,
    {
      layout: "vertical",
      ...props,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_antd32.Form.Item,
          {
            name: "title",
            rules: [{ required: !0, message: "Por favor ingrese un t\xEDtulo" }],
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_antd32.Input, { size: "large", placeholder: "Agregar un titulo" })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_antd32.Form.Item,
          {
            name: "type",
            rules: [{ required: !0, message: "Por favor seleccione un tipo" }],
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              import_antd32.Segmented,
              {
                block: !0,
                size: "large",
                options: [
                  { label: "Cita", value: "appt" },
                  { label: "Tarea", value: "task" },
                  { label: "Recordatorio", value: "rem" }
                ]
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_antd32.Form.Item, { label: "Horario", required: !0, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_antd32.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            import_antd32.Form.Item,
            {
              name: "date",
              noStyle: !0,
              rules: [{ required: !0, message: "Por favor seleccione una fecha" }],
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(DatePicker, { style: { width: "50%" } })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            import_antd32.Form.Item,
            {
              name: "time",
              noStyle: !0,
              rules: [{ required: !0, message: "Por favor seleccione una hora" }],
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(TimePicker, { style: { width: "30%" } })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            import_antd32.Form.Item,
            {
              name: "duration",
              rules: [{ required: !0, message: "Por favor seleccione una duraci\xF3n" }],
              noStyle: !0,
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
                import_antd32.AutoComplete,
                {
                  placeholder: "Duraci\xF3n",
                  style: { width: "20%" },
                  tagRender: ({ label }) => /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_antd32.Tag, { children: label }),
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
                }
              )
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(import_antd32.Collapse, { defaultActiveKey: ["1"], ghost: !0, children: /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_antd32.Collapse.Panel, { header: "Relacionado con", children: [
          /* @__PURE__ */ (0, import_jsx_runtime33.jsxs)(import_antd32.Space.Compact, { block: !0, children: [
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              import_antd32.Form.Item,
              {
                name: "doctor",
                label: "Doctor",
                style: { width: "50%" },
                children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SelectDoctor, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
              import_antd32.Form.Item,
              {
                name: "patient",
                label: "Paciente",
                style: { width: "50%" },
                children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SelectPatient, {})
              }
            )
          ] }),
          /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
            import_antd32.Form.Item,
            {
              name: "treatment",
              label: "Tratamiento",
              children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(SelectTreatment, {})
            }
          )
        ] }, "1") }),
        /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(
          import_antd32.Form.Item,
          {
            name: "description",
            label: "Descripci\xF3n",
            children: /* @__PURE__ */ (0, import_jsx_runtime33.jsx)(RichEditor, {})
          }
        )
      ]
    }
  );
}

// app/components/calendar/Create.tsx
var import_jsx_runtime34 = require("react/jsx-runtime");
function EventCreate({
  open,
  onClose,
  initialValues
}) {
  let { formProps, saveButtonProps } = (0, import_antd33.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime34.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
    CreateDrawer,
    {
      open,
      back: !1,
      onClose,
      size: "default",
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime34.jsx)(
        EventForm,
        {
          ...formProps,
          initialValues
        }
      )
    }
  ) });
}

// app/routes/_layout.calendar.tsx
var import_react16 = require("@remix-run/react");

// app/styles/calendar.css
var calendar_default = "/build/_assets/calendar-ZU3O2A75.css";

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
var import_antd35 = require("antd"), import_jsx_runtime35 = require("react/jsx-runtime"), localizer = (0, import_react_big_calendar2.dayjsLocalizer)(import_dayjs5.default), resourceMap = [
  { resourceId: "appt", resourceTitle: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_antd35.Space, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(AppointmentIcon, {}),
    "Citas"
  ] }) },
  { resourceId: "task", resourceTitle: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_antd35.Space, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TaskIcon, {}),
    "Tareas"
  ] }) },
  { resourceId: "rem", resourceTitle: /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)(import_antd35.Space, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ReminderIcon, {}),
    "Recordatorios"
  ] }) }
];
function CalendarPage() {
  let { tableQueryResult: queryResult } = (0, import_antd34.useTable)({
    syncWithLocation: !1
  }), [searchParams, setSearchParams] = (0, import_react16.useSearchParams)(), { styles, cx } = useStylesCalendar(), [isCreateOpen, setIsCreateOpen] = (0, import_react17.useState)(!1), [initialValues, setInitialValues] = (0, import_react17.useState)({}), { components } = (0, import_react17.useMemo)(() => ({
    components: CalendarComponents_default
  }), []), events = (0, import_react17.useMemo)(() => {
    var _a, _b;
    return (_b = (_a = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _a.data) == null ? void 0 : _b.map((event) => {
      let start = (0, import_dayjs5.default)(`${event.date} ${event.time}`), end = start.add(event.duration, "minute"), icon = /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(AppointmentIcon, {});
      return event.type === "task" ? icon = /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(TaskIcon, {}) : event.type === "rem" && (icon = /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(ReminderIcon, {})), {
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
  return /* @__PURE__ */ (0, import_jsx_runtime35.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
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
      }
    ),
    isCreateOpen && /* @__PURE__ */ (0, import_jsx_runtime35.jsx)(
      EventCreate,
      {
        open: isCreateOpen,
        onClose: () => setIsCreateOpen(!1),
        initialValues
      }
    )
  ] });
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
var import_core10 = require("@refinedev/core"), import_antd36 = require("antd"), import_react18 = require("@remix-run/react"), import_jsx_runtime36 = require("react/jsx-runtime");
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
  return accessControlEnabled && hideIfUnauthorized && !(data != null && data.can) ? null : /* @__PURE__ */ (0, import_jsx_runtime36.jsxs)(import_antd36.Tooltip, { title: createButtonDisabledTitle(), children: [
    (data == null ? void 0 : data.can) && /* @__PURE__ */ (0, import_jsx_runtime36.jsx)(import_react18.Link, { to: showUrl, children: children ?? translate("buttons.show", "Show") }),
    !(data != null && data.can) && (children ?? translate("buttons.show", "Show"))
  ] });
}

// app/routes/_layout.doctors.tsx
var import_react19 = require("@remix-run/react"), import_antd38 = require("antd"), import_dayjs6 = __toESM(require("dayjs")), import_jsx_runtime37 = require("react/jsx-runtime");
function Patients() {
  let { tableProps } = (0, import_antd37.useTable)({});
  return /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(import_antd37.List, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(
      import_antd38.Table,
      {
        ...tableProps,
        rowKey: "id",
        columns: [
          {
            title: "Name",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime37.jsxs)(ShowLink, { recordItemId: record.id, children: [
              record.firstName,
              " ",
              record.lastName
            ] })
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
              return /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_antd38.Tooltip, { title: birthDate.format("LL"), children: /* @__PURE__ */ (0, import_jsx_runtime37.jsx)("span", { children: age }) });
            }
          },
          {
            dataIndex: "actions",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(DropdownActions, { recordItemId: record.id })
          }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime37.jsx)(import_react19.Outlet, {})
  ] });
}

// app/routes/_layout.doctors.create.tsx
var layout_doctors_create_exports = {};
__export(layout_doctors_create_exports, {
  default: () => Patients2
});

// app/components/doctors/form.tsx
var import_antd39 = require("@refinedev/antd"), import_antd40 = require("antd"), import_dayjs7 = __toESM(require("dayjs")), import_jsx_runtime38 = require("react/jsx-runtime");
function DoctorForm({ formProps }) {
  let { selectProps: countrySelectProps } = (0, import_antd39.useSelect)({
    resource: "countries",
    optionLabel: "name",
    optionValue: "id",
    pagination: {
      mode: "server"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_antd40.Form, { ...formProps, layout: "vertical", children: [
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Form.Item, { label: "Nombre", required: !0, children: /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_antd40.Input.Group, { compact: !0, style: { display: "flex" }, children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          name: ["firstName"],
          noStyle: !0,
          rules: [
            {
              required: !0
            }
          ],
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input, { placeholder: "Nombres" })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          name: ["lastName"],
          noStyle: !0,
          rules: [
            {
              required: !0
            }
          ],
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input, { placeholder: "Apellidos" })
        }
      )
    ] }) }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_antd40.Space.Compact, { block: !0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          label: "Fecha de nacimiento",
          name: ["birthDate"],
          style: { width: "50%" },
          getValueProps: (value) => ({
            value: value ? (0, import_dayjs7.default)(value) : void 0
          }),
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.DatePicker, { style: { width: "100%" } })
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          label: "Sexo",
          name: ["sex"],
          style: { width: "50%" },
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Select, { placeholder: "Seleccionar", options: [
            { label: "Masculino", value: "M" },
            { label: "Femenino", value: "F" }
          ] })
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      import_antd40.Form.Item,
      {
        label: "Documento de identidad",
        name: ["idCardNumber"],
        children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input, {})
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_antd40.Space.Compact, { block: !0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          label: "Correo electr\xF3nico",
          name: ["email"],
          rules: [{ type: "email" }],
          style: { width: "60%" },
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          label: "Tel\xE9fono",
          name: ["phone"],
          style: { width: "40%" },
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input, {})
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Divider, { children: "Direci\xF3n" }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      import_antd40.Form.Item,
      {
        label: "Pais",
        name: ["country", "id"],
        children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
          import_antd40.Select,
          {
            placeholder: "Selecione um pa\xEDs",
            ...countrySelectProps
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsxs)(import_antd40.Space.Compact, { block: !0, children: [
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          label: "Estado",
          name: ["state"],
          style: { width: "50%" },
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input, {})
        }
      ),
      /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
        import_antd40.Form.Item,
        {
          label: "Ciudad",
          name: ["city"],
          style: { width: "50%" },
          children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input, {})
        }
      )
    ] }),
    /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(
      import_antd40.Form.Item,
      {
        label: "Direcci\xF3n",
        name: ["address"],
        children: /* @__PURE__ */ (0, import_jsx_runtime38.jsx)(import_antd40.Input.TextArea, {})
      }
    )
  ] });
}

// app/routes/_layout.doctors.create.tsx
var import_antd41 = require("@refinedev/antd"), import_jsx_runtime39 = require("react/jsx-runtime");
function Patients2() {
  let { formProps, saveButtonProps } = (0, import_antd41.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime39.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(
    CreateDrawer,
    {
      open: !0,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime39.jsx)(DoctorForm, { formProps })
    }
  ) });
}

// app/routes/_layout.patients.tsx
var layout_patients_exports = {};
__export(layout_patients_exports, {
  default: () => Patients3
});
var import_react26 = require("@remix-run/react");

// app/components/buttons/RefreshButton.tsx
var import_core11 = require("@refinedev/core"), import_icons11 = require("@ant-design/icons"), import_antd42 = require("antd"), import_jsx_runtime40 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(
    import_antd42.Button,
    {
      onClick: (e) => onClick ? onClick(e) : refetch(),
      icon: /* @__PURE__ */ (0, import_jsx_runtime40.jsx)(import_icons11.RedoOutlined, { spin: isFetching }),
      ...rest,
      children: !hideText && (children ?? translate("buttons.refresh", "Refresh"))
    }
  );
}

// app/components/buttons/CreateButton.tsx
var import_core12 = require("@refinedev/core"), import_antd43 = require("antd");
var import_jsx_runtime41 = require("react/jsx-runtime");
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
  return accessControlEnabled && hideIfUnauthorized && !(data != null && data.can) ? null : /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(
        import_antd43.Button,
        {
          icon: /* @__PURE__ */ (0, import_jsx_runtime41.jsx)(CreateIcon, {}),
          disabled: (data == null ? void 0 : data.can) === !1,
          title: createButtonDisabledTitle(),
          ...rest,
          children: !hideText && (children ?? translate("buttons.create", "Create"))
        }
      )
    }
  );
}

// app/components/patients/Edit.tsx
var import_antd50 = require("@refinedev/antd");

// app/components/patients/form.tsx
var import_strapi_v43 = require("@refinedev/strapi-v4"), import_antd47 = require("antd");

// app/components/controls/UploadAvatar.tsx
var import_icons13 = require("@ant-design/icons");
var import_react20 = require("@remix-run/react"), import_core13 = require("@refinedev/core"), import_react21 = require("react"), import_antd44 = require("antd"), import_antd_style3 = require("antd-style"), import_antd45 = require("@refinedev/antd"), import_react22 = require("react"), import_jsx_runtime42 = require("react/jsx-runtime"), useStyles = (0, import_antd_style3.createStyles)(({ token }) => ({
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
  }, []), /* @__PURE__ */ (0, import_jsx_runtime42.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          import_antd44.Avatar,
          {
            src: image == null ? void 0 : image.url,
            size
          }
        ),
        isLoading && /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(
          import_antd44.Spin,
          {
            className: styles.spin,
            indicator: /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_icons13.LoadingOutlined, { spin: !0 })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime42.jsx)(import_icons13.UploadOutlined, { className: cx(styles.uploadIcon, "uploadIcon") })
      ]
    }
  );
}

// app/components/patients/form.tsx
var import_antd48 = require("@refinedev/antd"), import_dayjs8 = __toESM(require("dayjs"));

// app/components/controls/SelectSex.tsx
var import_antd46 = require("antd"), import_jsx_runtime43 = require("react/jsx-runtime");
function SelectSex({
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime43.jsx)(
    import_antd46.Select,
    {
      value,
      onChange,
      style: { width: "100%" },
      options: [
        { label: "Masculino", value: "M" },
        { label: "Femenino", value: "F" }
      ]
    }
  );
}

// app/components/patients/form.tsx
var import_jsx_runtime44 = require("react/jsx-runtime");
function PatientsForm({ formProps }) {
  let { selectProps: countrySelectProps } = (0, import_antd48.useSelect)({
    resource: "countries",
    optionLabel: "name",
    optionValue: "id",
    pagination: {
      mode: "server"
    }
  });
  return /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Form.Item, { label: "Nombre", required: !0, children: /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_antd47.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_antd47.Form.Item,
            {
              name: ["firstName"],
              noStyle: !0,
              rules: [
                {
                  required: !0
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input, { size: "large", placeholder: "Nombres" })
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_antd47.Form.Item,
            {
              name: ["lastName"],
              noStyle: !0,
              rules: [
                {
                  required: !0
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input, { size: "large", placeholder: "Apellidos" })
            }
          )
        ] }) }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_antd47.Row, { gutter: 24, align: "middle", children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Col, { flex: "none", children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_antd47.Form.Item,
            {
              name: "avatar",
              noStyle: !0,
              rules: [
                {
                  required: !0
                }
              ],
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(UploadAvatar, {})
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_antd47.Col, { flex: "auto", children: [
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              import_antd47.Form.Item,
              {
                label: "Documento de identidad",
                name: ["idCardNumber"],
                children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              import_antd47.Form.Item,
              {
                label: "Fecha de nacimiento",
                name: ["birthDate"],
                getValueProps: (value) => ({
                  value: value ? (0, import_dayjs8.default)(value) : void 0
                }),
                children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(DatePicker, {})
              }
            ),
            /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              import_antd47.Form.Item,
              {
                label: "Sexo",
                style: { width: "50%" },
                children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(SelectSex, {})
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_antd47.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_antd47.Form.Item,
            {
              label: "Correo electr\xF3nico",
              name: ["email"],
              rules: [{ type: "email" }],
              style: { width: "60%" },
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_antd47.Form.Item,
            {
              label: "Tel\xE9fono",
              name: ["phone"],
              style: { width: "40%" },
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input, {})
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Divider, { children: "Direci\xF3n" }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          import_antd47.Form.Item,
          {
            label: "Pais",
            name: ["country", "id"],
            children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
              import_antd47.Select,
              {
                placeholder: "Selecione um pa\xEDs",
                ...countrySelectProps
              }
            )
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsxs)(import_antd47.Space.Compact, { block: !0, children: [
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_antd47.Form.Item,
            {
              label: "Estado",
              name: ["state"],
              style: { width: "50%" },
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input, {})
            }
          ),
          /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
            import_antd47.Form.Item,
            {
              label: "Ciudad",
              name: ["city"],
              style: { width: "50%" },
              children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input, {})
            }
          )
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(
          import_antd47.Form.Item,
          {
            label: "Direcci\xF3n",
            name: ["address"],
            children: /* @__PURE__ */ (0, import_jsx_runtime44.jsx)(import_antd47.Input.TextArea, {})
          }
        )
      ]
    }
  );
}

// app/components/crud/EditDrawer.tsx
var import_react23 = require("@remix-run/react"), import_react24 = require("react"), import_antd49 = require("antd");
var import_jsx_runtime45 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
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
      footer: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_antd49.Space, { children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(
        SaveButton,
        {
          loading: saveButtonProps == null ? void 0 : saveButtonProps.disabled,
          ...saveButtonProps
        }
      ) }),
      children: /* @__PURE__ */ (0, import_jsx_runtime45.jsx)(import_antd49.Spin, { spinning: saveButtonProps == null ? void 0 : saveButtonProps.disabled, children })
    }
  );
}

// app/components/patients/Edit.tsx
var import_react25 = require("@remix-run/react"), import_jsx_runtime46 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime46.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(
    EditDrawer,
    {
      open,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime46.jsx)(PatientsForm, { formProps })
    }
  ) });
}

// app/routes/_layout.patients.tsx
var import_antd51 = require("@refinedev/antd"), import_antd52 = require("antd"), import_dayjs9 = __toESM(require("dayjs")), import_jsx_runtime47 = require("react/jsx-runtime");
function Patients3() {
  let { tableProps } = (0, import_antd51.useTable)({}), [searchParams, setSearchParams] = (0, import_react26.useSearchParams)();
  return /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)("div", { children: [
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      import_antd51.List,
      {
        headerButtons: [
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(CreateButton, {}, "create"),
          /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(RefreshButton, {}, "refresh")
        ],
        children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
          import_antd52.Table,
          {
            ...tableProps,
            rowKey: "id",
            columns: [
              {
                title: "Name",
                render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime47.jsxs)(import_react26.Link, { to: `/patients/${record.id}`, children: [
                  record.firstName,
                  " ",
                  record.lastName
                ] })
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
                  return /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_antd52.Tooltip, { title: birthDate.format("LL"), children: /* @__PURE__ */ (0, import_jsx_runtime47.jsx)("span", { children: age }) });
                }
              },
              {
                dataIndex: "actions",
                render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
                  DropdownActions,
                  {
                    recordItemId: record.id,
                    editItem: {
                      url: () => (searchParams.set("edit", record.id), `?${searchParams.toString()}`)
                    }
                  }
                )
              }
            ]
          }
        )
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(import_react26.Outlet, {}),
    !!searchParams.get("edit") && /* @__PURE__ */ (0, import_jsx_runtime47.jsx)(
      PatientEdit,
      {
        open: !0,
        id: searchParams.get("edit"),
        redirect: "show"
      }
    )
  ] });
}

// app/routes/_layout.patients.create.tsx
var layout_patients_create_exports = {};
__export(layout_patients_create_exports, {
  default: () => Patients4
});
var import_antd53 = require("@refinedev/antd"), import_jsx_runtime48 = require("react/jsx-runtime");
function Patients4() {
  let { formProps, saveButtonProps } = (0, import_antd53.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime48.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(
    CreateDrawer,
    {
      open: !0,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime48.jsx)(PatientsForm, { formProps })
    }
  ) });
}

// app/routes/_layout.patients_.$id.tsx
var layout_patients_id_exports = {};
__export(layout_patients_id_exports, {
  default: () => EditPage
});
var import_antd64 = require("antd"), import_react31 = require("@remix-run/react");

// app/components/patients/TreatmentsTable.tsx
var import_antd54 = require("@refinedev/antd"), import_antd55 = require("antd"), import_react27 = require("@remix-run/react"), import_jsx_runtime49 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(
    import_antd55.Table,
    {
      ...tableProps,
      rowKey: "id",
      columns: [
        {
          title: "Nombre",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime49.jsx)(import_react27.Link, { to: `${record.id}`, children: record.name })
        },
        {
          title: "Doctor",
          render: (_, record) => {
            var _a, _b;
            return ((_a = record == null ? void 0 : record.doctor) == null ? void 0 : _a.firstName) + " " + ((_b = record == null ? void 0 : record.doctor) == null ? void 0 : _b.lastName);
          }
        }
      ]
    }
  );
}

// app/components/crud/Show.tsx
var import_core14 = require("@refinedev/core"), import_antd56 = require("@refinedev/antd"), import_antd57 = require("antd"), import_jsx_runtime50 = require("react/jsx-runtime"), Show = ({
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
  }), id = recordItemId ?? idFromParams, breadcrumb = typeof breadcrumbFromProps > "u" ? globalBreadcrumb : breadcrumbFromProps, isDeleteButtonVisible = canDelete ?? ((_a = resource == null ? void 0 : resource.meta) == null ? void 0 : _a.canDelete) ?? (resource == null ? void 0 : resource.canDelete), isEditButtonVisible = canEdit ?? (resource == null ? void 0 : resource.canEdit) ?? !!(resource != null && resource.edit), defaultHeaderButtons = /* @__PURE__ */ (0, import_jsx_runtime50.jsxs)(import_jsx_runtime50.Fragment, { children: [
    !recordItemId && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      import_antd56.ListButton,
      {
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name)
      }
    ),
    isEditButtonVisible && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      import_antd56.EditButton,
      {
        ...isLoading ? { disabled: !0 } : {},
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
        recordItemId: id
      }
    ),
    isDeleteButtonVisible && /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      import_antd56.DeleteButton,
      {
        ...isLoading ? { disabled: !0 } : {},
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
        recordItemId: id,
        onSuccess: () => {
          routerType === "legacy" ? legacyGoList((resource == null ? void 0 : resource.route) ?? (resource == null ? void 0 : resource.name) ?? "") : go({ to: goListPath });
        },
        dataProviderName
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
      import_antd56.RefreshButton,
      {
        ...isLoading ? { disabled: !0 } : {},
        resource: routerType === "legacy" ? resource == null ? void 0 : resource.route : (resource == null ? void 0 : resource.identifier) ?? (resource == null ? void 0 : resource.name),
        recordItemId: id,
        dataProviderName
      }
    )
  ] });
  return /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { ...wrapperProps ?? {}, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(
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
      extra: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_antd57.Space, { wrap: !0, ...headerButtonProps ?? {}, children: headerButtons ? typeof headerButtons == "function" ? headerButtons({
        defaultButtons: defaultHeaderButtons
      }) : headerButtons : defaultHeaderButtons }, "extra-buttons"),
      breadcrumb: typeof breadcrumb < "u" ? /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_jsx_runtime50.Fragment, { children: breadcrumb }) ?? void 0 : /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_antd56.Breadcrumb, {}),
      ...headerProps ?? {},
      children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)(import_antd57.Spin, { spinning: isLoading, children: /* @__PURE__ */ (0, import_jsx_runtime50.jsx)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }, children }) })
    }
  ) });
};

// app/routes/_layout.patients_.$id.tsx
var import_core16 = require("@refinedev/core"), import_dayjs10 = __toESM(require("dayjs"));

// app/components/notes/NoteCreate.tsx
var import_antd59 = require("@refinedev/antd");

// app/components/notes/NoteForm.tsx
var import_antd58 = require("antd");
var import_jsx_runtime51 = require("react/jsx-runtime");
function NoteForm({
  formProps,
  patient
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
    import_antd58.Form,
    {
      ...formProps,
      layout: "vertical",
      onFinish: (values) => {
        patient && (values.patient = patient), formProps == null || formProps.onFinish(values);
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(
        import_antd58.Form.Item,
        {
          name: ["note"],
          noStyle: !0,
          rules: [{ required: !0 }],
          children: /* @__PURE__ */ (0, import_jsx_runtime51.jsx)(RichEditor, {})
        }
      )
    }
  );
}

// app/components/notes/NoteCreate.tsx
var import_jsx_runtime52 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime52.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
    CreateDrawer,
    {
      open,
      size: "default",
      title: "Crear nota",
      onClose,
      back: !1,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime52.jsx)(
        NoteForm,
        {
          formProps,
          patient
        }
      )
    }
  ) });
}

// app/components/notes/NoteList.tsx
var import_antd60 = require("antd"), import_antd61 = require("@refinedev/antd"), import_react28 = require("react"), import_react29 = require("@remix-run/react");
var import_jsx_runtime53 = require("react/jsx-runtime");
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
  }, [patient]), /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
    import_antd60.Table,
    {
      ...tableProps,
      dataSource: (_a = tableQueryResult.data) == null ? void 0 : _a.data,
      rowKey: "id",
      columns: [
        {
          title: "Nota",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { dangerouslySetInnerHTML: { __html: record.note.html } })
        },
        {
          title: "Fecha",
          dataIndex: "updatedAt",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("span", { children: new Date(record.createdAt).toLocaleDateString() })
        },
        {
          dataIndex: "actions",
          render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime53.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime53.jsx)(
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
            }
          ) })
        }
      ]
    }
  );
}

// app/components/fields/AvatarField.tsx
var import_antd62 = require("antd"), import_react30 = require("react");
var import_core15 = require("@refinedev/core"), import_jsx_runtime54 = require("react/jsx-runtime");
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
  }, [value]), /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(import_antd62.Avatar, { src: urlImage, size, icon: !urlImage && /* @__PURE__ */ (0, import_jsx_runtime54.jsx)(UserIcon, {}) });
}

// app/components/notes/NoteEdit.tsx
var import_antd63 = require("@refinedev/antd");
var import_jsx_runtime55 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime55.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
    EditDrawer,
    {
      open,
      size: "default",
      title: "Editar nota",
      onClose,
      back: !1,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime55.jsx)(
        NoteForm,
        {
          formProps
        }
      )
    }
  ) });
}

// app/routes/_layout.patients_.$id.tsx
var import_jsx_runtime56 = require("react/jsx-runtime");
function EditPage() {
  let { id } = (0, import_react31.useParams)(), { queryResult } = (0, import_core16.useShow)({
    meta: {
      populate: ["avatar"]
    }
  }), { data, isLoading } = queryResult, [searchParams, setSearchParams] = (0, import_react31.useSearchParams)(), patient = (data == null ? void 0 : data.data) || {}, tabItems = [
    {
      key: "info",
      label: "Informaci\xF3n",
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: "Informaci\xF3n" })
    },
    {
      key: "treatments",
      label: "Tratamientos",
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(TreatmentTable, { patientId: id })
    },
    {
      key: "notes",
      label: "Notas",
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(NoteList, { patient: id })
    }
  ], handlerCreate = (type) => {
    searchParams.set(type, "create"), setSearchParams(searchParams);
  }, createOrEditNote = () => {
    let closeHandler = () => {
      searchParams.delete("note"), setSearchParams(searchParams);
    }, successHandler = () => {
      searchParams.delete("note"), searchParams.set("tab", "notes"), setSearchParams(searchParams);
    };
    return searchParams.get("note") === "create" ? /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      NoteCreate,
      {
        open: !0,
        onClose: closeHandler,
        onSuccess: successHandler,
        patient: id
      }
    ) : searchParams.get("note") ? /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
      NoteEdit,
      {
        open: !0,
        onClose: closeHandler,
        onSuccess: successHandler,
        noteId: searchParams.get("note")
      }
    ) : null;
  };
  return /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
    Show,
    {
      isLoading,
      goBack: !1,
      children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)("div", { style: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem"
      }, children: [
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          import_antd64.Card,
          {
            actions: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
                import_antd64.Typography.Text,
                {
                  strong: !0,
                  style: { cursor: "auto" },
                  children: "Crear"
                },
                "0"
              ),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(TreatmentIcon, {}), children: "tratamiento" }, "1"),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(AppointmentIcon, {}), children: "Cita" }, "2"),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Button, { type: "link", icon: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(TaskIcon, {}), children: "Tarea" }, "3"),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
                import_antd64.Button,
                {
                  type: "link",
                  icon: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(NoteIcon, {}),
                  onClick: () => handlerCreate("note"),
                  children: "Nota"
                },
                "4"
              )
            ],
            children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_antd64.Space, { style: {
              display: "flex",
              alignItems: "initial"
            }, children: [
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(AvatarField, { value: patient == null ? void 0 : patient.avatar, size: 128 }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Divider, { type: "vertical", style: { height: "100%" } }),
              /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_antd64.Descriptions, { column: 2, children: [
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Descriptions.Item, { label: "Edad", children: /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_antd64.Space, { children: [
                  (patient == null ? void 0 : patient.birthDate) && (0, import_dayjs10.default)().diff((0, import_dayjs10.default)(patient.birthDate), "year"),
                  (patient == null ? void 0 : patient.birthDate) && " a\xF1os",
                  (patient == null ? void 0 : patient.birthDate) && (0, import_dayjs10.default)(patient.birthDate).format("LL")
                ] }) }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsxs)(import_antd64.Descriptions.Item, { label: "Sexo", children: [
                  (patient == null ? void 0 : patient.sex) === "M" && "Masculino",
                  (patient == null ? void 0 : patient.sex) === "F" && "Femenino"
                ] }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Descriptions.Item, { span: 2, label: "Documento de Identidad", children: patient == null ? void 0 : patient.idCardNumber }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Descriptions.Item, { label: "Tel\xE9fono", children: patient == null ? void 0 : patient.phone }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Descriptions.Item, { label: "Correo Electr\xF3nico", children: patient == null ? void 0 : patient.email }),
                /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_antd64.Descriptions.Item, { span: 2, label: "Direcci\xF3n", children: patient == null ? void 0 : patient.address })
              ] })
            ] })
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(
          import_antd64.Tabs,
          {
            animated: !0,
            items: tabItems,
            activeKey: (searchParams == null ? void 0 : searchParams.get("tab")) || "info",
            onChange: (key) => {
              searchParams.set("tab", key), setSearchParams(searchParams);
            }
          }
        ) }),
        /* @__PURE__ */ (0, import_jsx_runtime56.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime56.jsx)(import_react31.Outlet, {}) }),
        createOrEditNote()
      ] })
    }
  );
}

// app/routes/_layout.patients_.$id.edit.tsx
var layout_patients_id_edit_exports = {};
__export(layout_patients_id_edit_exports, {
  default: () => EditPage2
});
var import_jsx_runtime57 = require("react/jsx-runtime");
function EditPage2() {
  return /* @__PURE__ */ (0, import_jsx_runtime57.jsx)(PatientEdit, { open: !0, redirect: "show" });
}

// app/routes/_layout.procedures.tsx
var layout_procedures_exports = {};
__export(layout_procedures_exports, {
  default: () => Page
});
var import_antd66 = require("antd");

// app/components/procedures/LoadButton.tsx
var Icons = __toESM(require("@ant-design/icons")), import_core17 = require("@refinedev/core"), import_antd65 = require("antd");
var import_jsx_runtime58 = require("react/jsx-runtime");
function LoadProcedures({
  onSuccess
}) {
  let { mutate, isLoading } = (0, import_core17.useCustomMutation)();
  return /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
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
      children: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(
        import_antd65.Button,
        {
          loading: isLoading,
          icon: /* @__PURE__ */ (0, import_jsx_runtime58.jsx)(Icons.UploadOutlined, {}),
          children: "Cargar"
        }
      )
    }
  );
}

// app/routes/_layout.procedures.tsx
var import_antd67 = require("@refinedev/antd");
var import_jsx_runtime59 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
    import_antd67.List,
    {
      headerButtons: [
        /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(LoadProcedures, { onSuccess: tableQueryResult == null ? void 0 : tableQueryResult.refetch }, "load")
      ],
      children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_antd66.Form, { ...formProps, disabled: saveButtonProps.disabled, children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
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
              render: (_, record) => isEditing(record.id) ? /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                import_antd66.Form.Item,
                {
                  name: "price",
                  noStyle: !0,
                  children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_antd66.InputNumber, { prefix: "$" })
                }
              ) : record.price
            },
            {
              dataIndex: "actions",
              render: (_, record) => isEditing(record.id) ? /* @__PURE__ */ (0, import_jsx_runtime59.jsxs)(import_antd66.Space.Compact, { children: [
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  SaveButton,
                  {
                    hideText: !0,
                    type: "link",
                    ...saveButtonProps
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                  import_antd66.Button,
                  {
                    danger: !0,
                    type: "link",
                    icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(CloseIcon, {}),
                    ...cancelButtonProps
                  }
                )
              ] }) : /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(import_antd66.Space.Compact, { children: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(
                import_antd66.Button,
                {
                  ...editButtonProps(record.id),
                  icon: /* @__PURE__ */ (0, import_jsx_runtime59.jsx)(EditIcon, {}),
                  type: "link"
                }
              ) })
            }
          ]
        }
      ) })
    }
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
var import_jsx_runtime60 = require("react/jsx-runtime");
function HeaderStatusField({
  value
}) {
  let status = TREATMENT_STATUS.find((status2) => status2.value === value);
  return /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(import_antd68.Tooltip, { title: status == null ? void 0 : status.headerHelp, children: /* @__PURE__ */ (0, import_jsx_runtime60.jsx)(
    import_antd68.Tag,
    {
      color: status == null ? void 0 : status.color,
      children: status == null ? void 0 : status.label
    }
  ) });
}

// app/components/treatments/Edit.tsx
var import_antd75 = require("@refinedev/antd");

// app/components/treatments/form.tsx
var import_antd73 = require("antd");

// app/components/treatments/controls/HeaderStatusControl.tsx
var import_react32 = require("react");
var import_jsx_runtime61 = require("react/jsx-runtime");
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
  }, [items]), /* @__PURE__ */ (0, import_jsx_runtime61.jsx)(HeaderStatusField, { value });
}

// app/components/treatments/ProceduresList.tsx
var import_antd69 = require("@refinedev/antd"), Icons2 = __toESM(require("@ant-design/icons")), import_antd70 = require("antd"), import_react33 = require("@remix-run/react"), import_react34 = require("react"), import_usehooks_ts = require("usehooks-ts"), import_jsx_runtime62 = require("react/jsx-runtime"), RESOURCE = "dc-procedures";
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
  }, [debouncedQuery]), /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
    import_antd70.Drawer,
    {
      open,
      size: "large",
      title: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        import_antd70.Input,
        {
          size: "large",
          value: query,
          suffix: (tableQueryResult == null ? void 0 : tableQueryResult.isLoading) || (tableQueryResult == null ? void 0 : tableQueryResult.isRefetching) ? /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(import_antd70.Spin, { indicator: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Icons2.LoadingOutlined, {}) }) : /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Icons2.SearchOutlined, {}),
          onChange: (e) => {
            setQuery(e.target.value);
          },
          placeholder: "Buscar procedimiento..."
        }
      ),
      mask: !1,
      onClose: () => {
        onClose();
      },
      children: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
        import_antd70.Table,
        {
          ...tableProps,
          rowKey: "id",
          columns: [
            {
              render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(
                import_antd70.Button,
                {
                  icon: /* @__PURE__ */ (0, import_jsx_runtime62.jsx)(Icons2.PlusOutlined, {}),
                  type: "text",
                  onClick: () => {
                    onAdd(record);
                  },
                  children: "Agregar"
                }
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
        }
      )
    }
  );
}

// app/components/treatments/form.tsx
var import_antd74 = require("@refinedev/antd");

// app/components/treatments/ItemsTable.tsx
var import_antd71 = require("antd"), import_jsx_runtime63 = require("react/jsx-runtime");
function ItemsTable({
  dataSource,
  columns,
  footer,
  size = "small"
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(
    import_antd71.Table,
    {
      size,
      dataSource: dataSource == null ? void 0 : dataSource.map((item, index) => ({ key: index, ...item })),
      pagination: !1,
      summary: (currentData) => {
        let total = Math.round((currentData == null ? void 0 : currentData.reduce((acc, item) => acc + item.total, 0)) * 100) / 100;
        return /* @__PURE__ */ (0, import_jsx_runtime63.jsxs)(import_antd71.Table.Summary.Row, { children: [
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_antd71.Table.Summary.Cell, { index: 0, colSpan: 3 }),
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_antd71.Table.Summary.Cell, { index: 1, children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_antd71.Typography.Title, { level: 5, style: { textAlign: "right" }, children: "Total" }) }),
          /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_antd71.Table.Summary.Cell, { index: 2, children: /* @__PURE__ */ (0, import_jsx_runtime63.jsx)(import_antd71.Typography.Title, { level: 5, children: total | 0 }) })
        ] });
      },
      columns,
      footer
    }
  );
}

// app/components/treatments/form.tsx
var import_react35 = require("react"), import_dayjs11 = __toESM(require("dayjs"));

// app/components/treatments/controls/StatusSelectControl.tsx
var import_antd72 = require("antd"), import_jsx_runtime64 = require("react/jsx-runtime"), TagSelect = ({
  value
}) => {
  let status = TREATMENT_STATUS.find((status2) => status2.value === value);
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    import_antd72.Tag,
    {
      style: {
        marginRight: 3,
        lineHeight: "2em"
      },
      color: status == null ? void 0 : status.color,
      children: status == null ? void 0 : status.label
    }
  );
};
function StatusSelectControl({
  value,
  onChange
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(
    import_antd72.Select,
    {
      value,
      onChange: (value2) => onChange == null ? void 0 : onChange(value2),
      defaultValue: "planned",
      placeholder: "Selecciona un estado",
      bordered: !1,
      options: [
        { label: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(TagSelect, { value: TREATMENT_TYPES_ENUM.planned }), value: TREATMENT_TYPES_ENUM.planned },
        { label: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(TagSelect, { value: TREATMENT_TYPES_ENUM.accepted }), value: TREATMENT_TYPES_ENUM.accepted },
        { label: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(TagSelect, { value: TREATMENT_TYPES_ENUM.in_progress }), value: TREATMENT_TYPES_ENUM.in_progress },
        { label: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(TagSelect, { value: TREATMENT_TYPES_ENUM.finished }), value: TREATMENT_TYPES_ENUM.finished },
        { label: /* @__PURE__ */ (0, import_jsx_runtime64.jsx)(TagSelect, { value: TREATMENT_TYPES_ENUM.canceled }), value: TREATMENT_TYPES_ENUM.canceled }
      ]
    }
  );
}

// app/components/treatments/form.tsx
var import_jsx_runtime65 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
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
        /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_antd73.Row, { gutter: 16, children: [
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Col, { span: 16, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
            import_antd73.Card,
            {
              bordered: !1,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                  import_antd73.Form.Item,
                  {
                    label: "Nombre",
                    rules: [{ required: !0, message: "Por favor ingrese el nombre del tratamiento" }],
                    name: ["name"],
                    children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Input, {})
                  }
                ),
                /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_antd73.Space.Compact, { block: !0, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                    import_antd73.Form.Item,
                    {
                      style: { flex: "-0 1 50%" },
                      label: "Doctor",
                      rules: [{ required: !0, message: "Por favor seleccione un doctor" }],
                      name: ["doctor", "id"],
                      children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                        import_antd73.Select,
                        {
                          placeholder: "Selecione um doctor",
                          ...doctorsSelectProps,
                          options: (_b = (_a = doctorsQueryResult == null ? void 0 : doctorsQueryResult.data) == null ? void 0 : _a.data) == null ? void 0 : _b.map((doctor) => ({
                            label: doctor.firstName + " " + doctor.lastName,
                            value: doctor.id
                          }))
                        }
                      )
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                    import_antd73.Form.Item,
                    {
                      style: { flex: "-0 1 50%" },
                      label: "Paciente",
                      rules: [{ required: !0, message: "Por favor seleccione un paciente" }],
                      name: ["patient", "id"],
                      children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                        import_antd73.Select,
                        {
                          placeholder: "Selecione um paciente",
                          ...patientsSelectProps,
                          options: (_d = (_c = patientsQueryResult == null ? void 0 : patientsQueryResult.data) == null ? void 0 : _c.data) == null ? void 0 : _d.map((patient) => ({
                            label: patient.firstName + " " + patient.lastName,
                            value: patient.id
                          }))
                        }
                      )
                    }
                  )
                ] })
              ]
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Col, { span: 8, children: /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(
            import_antd73.Card,
            {
              bordered: !1,
              children: [
                /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Form.Item, { label: "Estado", name: ["status"], children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(HeaderStatusControl, { items }) }),
                /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_antd73.Space.Compact, { block: !0, children: [
                  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                    import_antd73.Form.Item,
                    {
                      label: "Fecha de inicio",
                      name: ["startDate"],
                      style: { flex: "-0 1 50%" },
                      getValueProps: (value) => ({
                        value: value ? (0, import_dayjs11.default)(value) : void 0
                      }),
                      children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.DatePicker, {})
                    }
                  ),
                  /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                    import_antd73.Form.Item,
                    {
                      label: "Fecha de finalizaci\xF3n",
                      name: ["endDate"],
                      style: { flex: "-0 1 50%" },
                      getValueProps: (value) => ({
                        value: value ? (0, import_dayjs11.default)(value) : void 0
                      }),
                      children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.DatePicker, {})
                    }
                  )
                ] })
              ]
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
          import_antd73.Form.List,
          {
            name: "items",
            children: (fields, { add, remove }) => /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_jsx_runtime65.Fragment, { children: [
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
                }
              ),
              /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "name"],
                          children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Input.TextArea, { autoSize: !0 })
                        }
                      )
                    },
                    {
                      title: "Estado",
                      dataIndex: "status",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "status"],
                          children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(StatusSelectControl, {})
                        }
                      )
                    },
                    {
                      title: "Cantidad",
                      dataIndex: "quantity",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "quantity"],
                          children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                            import_antd73.InputNumber,
                            {
                              placeholder: "0",
                              onChange: (value) => {
                                var _a2;
                                (_a2 = formProps.form) == null || _a2.setFieldValue(["items", index, "total"], value * record.price);
                              }
                            }
                          )
                        }
                      )
                    },
                    {
                      title: "Precio / Descuento / Precio final",
                      dataIndex: "price",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_runtime65.jsxs)(import_antd73.Space.Compact, { children: [
                        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Form.Item, { noStyle: !0, name: [index, "priceBase"], children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Form.Item, { noStyle: !0, name: [index, "discount"], children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
                          }
                        ) }),
                        /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(import_antd73.Form.Item, { noStyle: !0, name: [index, "price"], children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
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
                          }
                        ) })
                      ] })
                    },
                    {
                      title: "Total",
                      dataIndex: "total",
                      render: (_, record, index) => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                        import_antd73.Form.Item,
                        {
                          noStyle: !0,
                          name: [index, "total"],
                          children: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                            import_antd73.InputNumber,
                            {
                              disabled: !0,
                              prefix: "$",
                              placeholder: "0.00"
                            }
                          )
                        }
                      ),
                      fixed: "right"
                    }
                  ],
                  footer: () => /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(
                    import_antd73.Button,
                    {
                      type: "dashed",
                      block: !0,
                      icon: /* @__PURE__ */ (0, import_jsx_runtime65.jsx)(CreateIcon, {}),
                      onClick: () => setAddProcedureOpen(!0),
                      children: "Agregar procedimiento"
                    },
                    "1"
                  )
                }
              )
            ] })
          }
        )
      ]
    }
  );
}

// app/components/treatments/Edit.tsx
var import_jsx_runtime66 = require("react/jsx-runtime"), RESOURCE2 = "dc-treatments";
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
  return /* @__PURE__ */ (0, import_jsx_runtime66.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(
    CreateDrawer,
    {
      open,
      size: "extraLarge",
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime66.jsx)(TreatmentForm, { formProps })
    }
  ) });
}

// app/routes/_layout.treatments.tsx
var import_react36 = require("@remix-run/react"), import_antd76 = require("@refinedev/antd"), import_antd77 = require("antd"), import_jsx_runtime67 = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime67.jsxs)(import_antd76.List, { children: [
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
      import_antd77.Table,
      {
        ...tableProps,
        rowKey: "id",
        columns: [
          {
            title: "Nombre",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(ShowLink, { recordItemId: record == null ? void 0 : record.id, children: record.name })
          },
          {
            title: "Estado",
            dataIndex: "status",
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(HeaderStatusField, { value: record == null ? void 0 : record.status })
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
            render: (_, record) => /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(DropdownActions, { recordItemId: record == null ? void 0 : record.id })
          }
        ]
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(
      TreatmentEdit,
      {
        resourceItemId: searchParams.get("edit"),
        open: !!searchParams.get("edit"),
        redirect: "list"
      }
    ),
    /* @__PURE__ */ (0, import_jsx_runtime67.jsx)(import_react36.Outlet, {})
  ] });
}

// app/routes/_layout.treatments.create.tsx
var layout_treatments_create_exports = {};
__export(layout_treatments_create_exports, {
  default: () => Treatments
});
var import_antd78 = require("@refinedev/antd");
var import_jsx_runtime68 = require("react/jsx-runtime");
function Treatments() {
  let { formProps, saveButtonProps } = (0, import_antd78.useForm)({
    action: "create"
  });
  return /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(
    CreateDrawer,
    {
      open: !0,
      saveButtonProps,
      children: /* @__PURE__ */ (0, import_jsx_runtime68.jsx)(TreatmentForm, { formProps })
    }
  );
}

// app/routes/_layout.treatments_.$id.tsx
var layout_treatments_id_exports = {};
__export(layout_treatments_id_exports, {
  default: () => EditPage3
});
var import_antd80 = require("antd"), import_react37 = require("@remix-run/react"), import_core18 = require("@refinedev/core");

// app/components/fields/DateField.tsx
var import_antd79 = require("antd"), import_dayjs12 = __toESM(require("dayjs")), import_localizedFormat2 = __toESM(require("dayjs/plugin/localizedFormat")), import_jsx_runtime69 = require("react/jsx-runtime");
import_dayjs12.default.extend(import_localizedFormat2.default);
var defaultLocale = import_dayjs12.default.locale();
function DateField({
  value,
  locales,
  format: dateFormat = "L",
  ...rest
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_antd79.Tooltip, { title: (0, import_dayjs12.default)(value).locale(locales || defaultLocale).format("LLLL"), children: /* @__PURE__ */ (0, import_jsx_runtime69.jsx)(import_antd79.Typography.Text, { ...rest, children: (0, import_dayjs12.default)(value).locale(locales || defaultLocale).format(dateFormat) }) });
}

// app/routes/_layout.treatments_.$id.tsx
var import_jsx_runtime70 = require("react/jsx-runtime");
function EditPage3() {
  var _a, _b, _c, _d, _e;
  let { queryResult } = (0, import_core18.useShow)({
    meta: {
      populate: ["doctor", "patient", "items"]
    }
  }), treatment = (_a = queryResult == null ? void 0 : queryResult.data) == null ? void 0 : _a.data;
  return /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
    Show,
    {
      isLoading: queryResult == null ? void 0 : queryResult.isLoading,
      children: [
        /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(import_antd80.Row, { gutter: 16, children: [
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_antd80.Col, { span: 16, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
            import_antd80.Card,
            {
              bordered: !1,
              children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
                import_antd80.Descriptions,
                {
                  layout: "vertical",
                  column: 2,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_antd80.Descriptions.Item, { label: "Nombre", span: 2, children: treatment == null ? void 0 : treatment.name }),
                    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(import_antd80.Descriptions.Item, { label: "Doctor", children: [
                      (_b = treatment == null ? void 0 : treatment.doctor) == null ? void 0 : _b.firstName,
                      " ",
                      (_c = treatment == null ? void 0 : treatment.doctor) == null ? void 0 : _c.lastName
                    ] }),
                    /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(import_antd80.Descriptions.Item, { label: "Paciente", children: [
                      (_d = treatment == null ? void 0 : treatment.patient) == null ? void 0 : _d.firstName,
                      " ",
                      (_e = treatment == null ? void 0 : treatment.patient) == null ? void 0 : _e.lastName
                    ] })
                  ]
                }
              )
            }
          ) }),
          /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_antd80.Col, { span: 8, children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
            import_antd80.Card,
            {
              bordered: !1,
              children: /* @__PURE__ */ (0, import_jsx_runtime70.jsxs)(
                import_antd80.Descriptions,
                {
                  layout: "vertical",
                  column: 2,
                  children: [
                    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
                      import_antd80.Descriptions.Item,
                      {
                        label: "Estado",
                        span: 2,
                        children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(HeaderStatusControl, { value: treatment == null ? void 0 : treatment.status })
                      }
                    ),
                    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_antd80.Descriptions.Item, { label: "Fecha de creaci\xF3n", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(DateField, { value: treatment == null ? void 0 : treatment.createdAt }) }),
                    /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_antd80.Descriptions.Item, { label: "Fecha de actualizaci\xF3n", children: /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(DateField, { value: treatment == null ? void 0 : treatment.createdAt }) })
                  ]
                }
              )
            }
          ) })
        ] }),
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(
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
                  return /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_antd80.Tag, { color: status == null ? void 0 : status.color, children: status == null ? void 0 : status.label });
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
          }
        ),
        /* @__PURE__ */ (0, import_jsx_runtime70.jsx)(import_react37.Outlet, {})
      ]
    }
  );
}

// app/routes/_layout.treatments_.$id.edit.tsx
var layout_treatments_id_edit_exports = {};
__export(layout_treatments_id_edit_exports, {
  default: () => Patients5
});
var import_jsx_runtime71 = require("react/jsx-runtime");
function Patients5() {
  return /* @__PURE__ */ (0, import_jsx_runtime71.jsx)(
    TreatmentEdit,
    {
      open: !0,
      redirect: "show"
    }
  );
}

// app/routes/_layout._index.tsx
var layout_index_exports = {};
__export(layout_index_exports, {
  default: () => Index2,
  loader: () => loader5
});
var import_remix_router2 = require("@refinedev/remix-router"), import_node6 = require("@remix-run/node");
var import_jsx_runtime72 = require("react/jsx-runtime");
function Index2() {
  return /* @__PURE__ */ (0, import_jsx_runtime72.jsx)(import_remix_router2.NavigateToResource, { resource: "products" });
}
async function loader5({ request }) {
  let { authenticated, redirectTo } = await authProvider.check(request);
  if (!authenticated)
    throw (0, import_node6.redirect)(redirectTo ?? "/login");
  return {};
}

// server-assets-manifest:@remix-run/dev/assets-manifest
var assets_manifest_default = { version: "aa228882", entry: { module: "/build/entry.client-4XLYY3FI.js", imports: ["/build/_shared/chunk-3RVAZZXG.js", "/build/_shared/chunk-EBYDR36Z.js", "/build/_shared/chunk-ONS4GRAD.js"] }, routes: { root: { id: "root", parentId: void 0, path: "", index: void 0, caseSensitive: void 0, module: "/build/root-X2WC2OTC.js", imports: ["/build/_shared/chunk-RHXUZUIO.js", "/build/_shared/chunk-XM4PNSH5.js", "/build/_shared/chunk-G5V4SXWW.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_apps": { id: "routes/_apps", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_apps-XUPDIFDR.js", imports: ["/build/_shared/chunk-BEEEOFIK.js", "/build/_shared/chunk-5DPFNVA3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_apps.apps": { id: "routes/_apps.apps", parentId: "routes/_apps", path: "apps", index: void 0, caseSensitive: void 0, module: "/build/routes/_apps.apps-K4NJPSTA.js", imports: ["/build/_shared/chunk-TLWXMRVZ.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_apps.apps.create": { id: "routes/_apps.apps.create", parentId: "routes/_apps.apps", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_apps.apps.create-IVT3VAE2.js", imports: ["/build/_shared/chunk-RH5UFL4Y.js", "/build/_shared/chunk-S5GIYZ6S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth": { id: "routes/_auth", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_auth-4IMFEKUL.js", imports: void 0, hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.login": { id: "routes/_auth.login", parentId: "routes/_auth", path: "login", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.login-47QVXBAN.js", imports: ["/build/_shared/chunk-5DPFNVA3.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_auth.register": { id: "routes/_auth.register", parentId: "routes/_auth", path: "register", index: void 0, caseSensitive: void 0, module: "/build/routes/_auth.register-OCGHW34C.js", imports: ["/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout": { id: "routes/_layout", parentId: "root", path: void 0, index: void 0, caseSensitive: void 0, module: "/build/routes/_layout-O2OONOAK.js", imports: ["/build/_shared/chunk-BEEEOFIK.js", "/build/_shared/chunk-5DPFNVA3.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.$": { id: "routes/_layout.$", parentId: "routes/_layout", path: "*", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.$-CYVIWRM6.js", imports: ["/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout._index": { id: "routes/_layout._index", parentId: "routes/_layout", path: void 0, index: !0, caseSensitive: void 0, module: "/build/routes/_layout._index-UO5ZUJAG.js", imports: ["/build/_shared/chunk-RHXUZUIO.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !0, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.calendar": { id: "routes/_layout.calendar", parentId: "routes/_layout", path: "calendar", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.calendar-P2CKPWHG.js", imports: ["/build/_shared/chunk-3TSTGF3H.js", "/build/_shared/chunk-DXDSHQGM.js", "/build/_shared/chunk-RH5UFL4Y.js", "/build/_shared/chunk-S5GIYZ6S.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.doctors": { id: "routes/_layout.doctors", parentId: "routes/_layout", path: "doctors", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.doctors-ZVMIF75X.js", imports: ["/build/_shared/chunk-2FSURYEG.js", "/build/_shared/chunk-TLWXMRVZ.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.doctors.create": { id: "routes/_layout.doctors.create", parentId: "routes/_layout.doctors", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.doctors.create-Y2QEDJXN.js", imports: ["/build/_shared/chunk-RH5UFL4Y.js", "/build/_shared/chunk-S5GIYZ6S.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients": { id: "routes/_layout.patients", parentId: "routes/_layout", path: "patients", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients-3S7LK5FK.js", imports: ["/build/_shared/chunk-AJ6X5BM5.js", "/build/_shared/chunk-46W4PVIU.js", "/build/_shared/chunk-3TSTGF3H.js", "/build/_shared/chunk-QOKRRCKK.js", "/build/_shared/chunk-XM4PNSH5.js", "/build/_shared/chunk-G5V4SXWW.js", "/build/_shared/chunk-TLWXMRVZ.js", "/build/_shared/chunk-S5GIYZ6S.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients.create": { id: "routes/_layout.patients.create", parentId: "routes/_layout.patients", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients.create-XUZVZKRQ.js", imports: ["/build/_shared/chunk-RH5UFL4Y.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients_.$id": { id: "routes/_layout.patients_.$id", parentId: "routes/_layout", path: "patients/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients_.$id-T2Z65K5B.js", imports: ["/build/_shared/chunk-ZM3SQBLF.js", "/build/_shared/chunk-DXDSHQGM.js", "/build/_shared/chunk-QOKRRCKK.js", "/build/_shared/chunk-TLWXMRVZ.js", "/build/_shared/chunk-RH5UFL4Y.js", "/build/_shared/chunk-S5GIYZ6S.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.patients_.$id.edit": { id: "routes/_layout.patients_.$id.edit", parentId: "routes/_layout.patients_.$id", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.patients_.$id.edit-H7KFODYK.js", imports: ["/build/_shared/chunk-AJ6X5BM5.js", "/build/_shared/chunk-46W4PVIU.js", "/build/_shared/chunk-3TSTGF3H.js", "/build/_shared/chunk-XM4PNSH5.js", "/build/_shared/chunk-G5V4SXWW.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.procedures": { id: "routes/_layout.procedures", parentId: "routes/_layout", path: "procedures", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.procedures-YHJ3M5NJ.js", imports: ["/build/_shared/chunk-G5V4SXWW.js", "/build/_shared/chunk-S5GIYZ6S.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments": { id: "routes/_layout.treatments", parentId: "routes/_layout", path: "treatments", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments-HX6UNA3Z.js", imports: ["/build/_shared/chunk-HXZCOJJM.js", "/build/_shared/chunk-KRRWEMX6.js", "/build/_shared/chunk-GUEWR2BP.js", "/build/_shared/chunk-2FSURYEG.js", "/build/_shared/chunk-TLWXMRVZ.js", "/build/_shared/chunk-RH5UFL4Y.js", "/build/_shared/chunk-S5GIYZ6S.js", "/build/_shared/chunk-4JYG3CA2.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments.create": { id: "routes/_layout.treatments.create", parentId: "routes/_layout.treatments", path: "create", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments.create-N7NYG6D4.js", imports: void 0, hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments_.$id": { id: "routes/_layout.treatments_.$id", parentId: "routes/_layout", path: "treatments/:id", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments_.$id-SSVMJXUX.js", imports: ["/build/_shared/chunk-GUEWR2BP.js", "/build/_shared/chunk-ZM3SQBLF.js", "/build/_shared/chunk-TBCKCYSA.js", "/build/_shared/chunk-VMKWJI4R.js", "/build/_shared/chunk-Y23TMFMO.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 }, "routes/_layout.treatments_.$id.edit": { id: "routes/_layout.treatments_.$id.edit", parentId: "routes/_layout.treatments_.$id", path: "edit", index: void 0, caseSensitive: void 0, module: "/build/routes/_layout.treatments_.$id.edit-O4XVO3DJ.js", imports: ["/build/_shared/chunk-HXZCOJJM.js", "/build/_shared/chunk-KRRWEMX6.js", "/build/_shared/chunk-RH5UFL4Y.js", "/build/_shared/chunk-S5GIYZ6S.js", "/build/_shared/chunk-4JYG3CA2.js"], hasAction: !1, hasLoader: !1, hasCatchBoundary: !1, hasErrorBoundary: !1 } }, cssBundleHref: void 0, hmr: void 0, url: "/build/manifest-AA228882.js" };

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
