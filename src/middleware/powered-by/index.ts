/**
 * @module
 * Powered By Middleware for Hono.
 */
import type { InternalMiddlewareHandler } from '../../types'

type PoweredByOptions = {
  /**
   * The value for X-Powered-By header.
   * @default Hono
   */
  serverName?: string
}

/**
 * Powered By Middleware for Hono.
 *
 * @param options - The options for the Powered By Middleware.
 * @returns {InternalMiddlewareHandler} The middleware handler function.
 *
 * @example
 * ```ts
 * import { poweredBy } from 'hono/powered-by'
 *
 * const app = new Hono()
 *
 * app.use(poweredBy()) // With options: poweredBy({ serverName: "My Server" })
 * ```
 */
export const poweredBy = (options?: PoweredByOptions): InternalMiddlewareHandler => {
  return async function poweredBy(c, next) {
    await next()
    c.res.headers.set('X-Powered-By', options?.serverName ?? 'Hono')
  }
}
