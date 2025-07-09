import { z } from 'zod'

// Extend the global CloudflareEnv interface from @cloudflare/next-on-pages
declare global {
  interface CloudflareEnv {
    DB: D1Database
    TURNSTILE_SECRET_KEY: string
    NEXT_PUBLIC_TURNSTILE_SITE_KEY: string
  }
  
  // D1Database type for Cloudflare Workers
  interface D1Database {
    prepare(query: string): any
    dump(): Promise<ArrayBuffer>
    batch(statements: any[]): Promise<any[]>
    exec(query: string): Promise<any>
  }
}

// Zod schema for form validation
export const rsvpFormSchema = z.object({
  guestName: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email'),
  phone: z.string().optional(),
  attending: z.boolean(),
  guestCount: z.number().min(1).max(10, 'Please enter between 1-10 guests'),
  plusOneName: z.string().optional(),
  dietaryRestrictions: z.string().optional(),
  specialRequests: z.string().optional(),
})

// Type for form data
export type RSVPFormData = z.infer<typeof rsvpFormSchema>

// Type for database record
export interface RSVPRecord {
  id: number
  guest_name: string
  email: string
  phone?: string | null
  attending: boolean
  guest_count: number
  plus_one_name?: string | null
  dietary_restrictions?: string | null
  special_requests?: string | null
  created_at: string
  updated_at: string
  ip_address?: string | null
}

// API Response types
export interface RSVPResponse {
  success: boolean
  message: string
  data?: RSVPRecord
  error?: string
}

// Turnstile verification response
export interface TurnstileVerifyResponse {
  success: boolean
  challenge_ts?: string
  hostname?: string
  'error-codes'?: string[]
  action?: string
  cdata?: string
}

