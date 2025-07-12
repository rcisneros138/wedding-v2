/**
 * Development logging utilities
 * Only logs in development environment
 */

const isDev = process.env.NODE_ENV === 'development'

/**
 * Log data in development only
 * @param label - Label for the log entry
 * @param data - Data to log
 */
export const devLog = (label: string, data: any) => {
  if (isDev) {
    const timestamp = new Date().toISOString()
    console.log(`\n[DEV ${timestamp}] ${label}:`, JSON.stringify(data, null, 2))
  }
}

/**
 * Log error in development only
 * @param label - Label for the error
 * @param error - Error to log
 */
export const devError = (label: string, error: any) => {
  if (isDev) {
    const timestamp = new Date().toISOString()
    console.error(`\n[DEV ERROR ${timestamp}] ${label}:`, error)
  }
}

/**
 * Log SQL query in development only
 * @param query - SQL query string
 * @param params - Query parameters
 */
export const devLogSQL = (query: string, params: any[]) => {
  if (isDev) {
    const timestamp = new Date().toISOString()
    console.log(`\n[DEV SQL ${timestamp}]:`)
    console.log('Query:', query.replace(/\s+/g, ' ').trim())
    console.log('Params:', params)
  }
}