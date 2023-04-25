import { PassThrough } from "stream"
import type { EntryContext } from "@remix-run/node"
import { Response } from "@remix-run/node"
import { RemixServer } from "@remix-run/react"
import { renderToPipeableStream } from "react-dom/server"
import { createCache, extractStyle, StyleProvider } from '@ant-design/cssinjs'
import { extractStaticStyle, StyleProvider as StyleProviderStyle } from 'antd-style'


const ABORT_DELAY = 5000;

export default function handleRequest(
  request: Request,
  responseStatusCode: number,
  responseHeaders: Headers,
  remixContext: EntryContext
) {
  return new Promise((resolve, reject) => {
    let didError = false;
    const cache = createCache()

    let { pipe, abort } = renderToPipeableStream(
      <StyleProviderStyle cache={extractStaticStyle.cache}>
        <StyleProvider cache={cache}>
          <RemixServer context={remixContext} url={request.url} />
        </StyleProvider>
      </StyleProviderStyle>,
      {
        onShellReady: () => {
          const styleText = extractStyle(cache)
          let body = new PassThrough({
            transform: (chunk, _, callback) => {
              // add styles to response
              const styles = extractStaticStyle(chunk.toString()).map((item) => item.style)

              if (chunk.toString().match(/__STYLES__/) && styleText) {
                chunk = chunk.toString().replace(/__STYLES__/, styleText + styles.join(''))
              }
              return callback(null, chunk)
            }
          })
          responseHeaders.set("Content-Type", "text/html");
          resolve(
            new Response(body, {
              headers: responseHeaders,
              status: didError ? 500 : responseStatusCode,
            })
          );

          pipe(body);
        },
        onShellError: (err) => {
          reject(err);
        },
        onError: (error) => {
          didError = true;

          console.error(error);
        },
      }
    );

    setTimeout(abort, ABORT_DELAY);
  });
}
