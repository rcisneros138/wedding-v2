# RSVP Form Documentation

## Overview

The wedding RSVP form is a sophisticated, secure web application built to handle guest responses for Amanda & Ray's wedding on January 24, 2026. The form collects guest information, attendance confirmation, dietary restrictions, and special requests while preventing spam and duplicate submissions.

### Key Features
- **Real-time validation** with helpful error messages
- **Duplicate prevention** using email as unique identifier
- **Spam protection** via Cloudflare Turnstile
- **Responsive design** with vintage aesthetic
- **Conditional fields** based on attendance status
- **Secure data storage** in Cloudflare D1 (SQLite)

## Technology Stack

### Frontend
- **Next.js 15.3.4** - React framework with App Router
- **React 19** - UI library
- **React Hook Form** - Form state management and validation
- **Zod** - Schema validation and TypeScript integration
- **@marsidev/react-turnstile** - Cloudflare Turnstile React component
- **Tailwind CSS 4** - Styling with custom design system

### Backend
- **Cloudflare Workers** - Edge runtime for API routes
- **Cloudflare D1** - Serverless SQL database
- **Edge Runtime** - Next.js edge API routes

### Security
- **Cloudflare Turnstile** - Bot protection and CAPTCHA alternative
- **Zod validation** - Input sanitization and type safety
- **Prepared statements** - SQL injection prevention

## Form Flow

### 1. Initial Load
```
User visits RSVP section → Form renders with default values → Turnstile widget loads
```

### 2. User Interaction
```typescript
// Default form state
{
  attending: true,      // Pre-selected "Yes"
  guestCount: 1,       // Default single guest
  // Other fields empty
}
```

### 3. Validation Flow
```
User input → Client-side validation (Zod) → Show inline errors → Enable/disable submit
```

### 4. Submission Process
```
1. Validate form data (client-side)
2. Get Turnstile token
3. POST to /api/rsvp
4. Verify Turnstile (server-side)
5. Validate data (server-side)
6. UPSERT to database
7. Return success/error response
8. Show confirmation message
```

## Implementation Details

### Component Structure

```
app/
├── components/
│   ├── RSVPSection.tsx      # Container component
│   ├── RSVPForm.tsx         # Form logic and UI
│   └── ShadowButton.tsx     # Reusable button component
├── api/
│   └── rsvp/
│       └── route.ts         # API endpoints (POST, GET)
├── types/
│   └── rsvp.ts             # TypeScript types and Zod schemas
└── schemas/
    └── rsvp-schema.sql      # Database schema
```

### Data Validation Schema (Zod)

```typescript
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
```

### API Endpoints

#### POST /api/rsvp
- **Purpose**: Submit or update RSVP
- **Request body**: Form data + Turnstile token
- **Response**: Success message with guest data or error

#### GET /api/rsvp?email={email}
- **Purpose**: Check if email has existing RSVP
- **Response**: Existing RSVP data or not found

### Database Schema

```sql
CREATE TABLE IF NOT EXISTS rsvps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  guest_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  phone TEXT,
  attending BOOLEAN NOT NULL DEFAULT 1,
  guest_count INTEGER NOT NULL DEFAULT 1,
  plus_one_name TEXT,
  dietary_restrictions TEXT,
  special_requests TEXT,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT
);
```

## Security Considerations

### 1. Turnstile Integration
- Prevents automated submissions
- Validates on server-side
- Required for all submissions

### 2. Input Validation
- **Client-side**: Immediate feedback, better UX
- **Server-side**: Security enforcement, data integrity
- **Zod schemas**: Type-safe validation

### 3. SQL Injection Prevention
```typescript
// Using prepared statements with parameter binding
await env.DB.prepare(
  "INSERT INTO rsvps (...) VALUES (?, ?, ?, ...)"
).bind(param1, param2, param3).run()
```

### 4. Duplicate Prevention
- Email field has UNIQUE constraint
- UPSERT operation updates existing records
- Clear messaging for duplicate attempts

## Error Handling

### Client-Side Errors
- **Validation errors**: Inline field messages
- **Network errors**: Toast notifications
- **Turnstile errors**: Retry mechanism

### Server-Side Errors
- **400 Bad Request**: Invalid data, failed validation
- **500 Server Error**: Database or unexpected errors
- **Structured responses**: Consistent error format

### Error Response Format
```typescript
{
  success: false,
  message: "Human-readable error message",
  error: "Technical error code",
  details?: any // Additional error context
}
```

## Environment Variables

### Required Variables
```env
# Cloudflare Turnstile
TURNSTILE_SECRET_KEY=your-secret-key
NEXT_PUBLIC_TURNSTILE_SITE_KEY=your-site-key

# Database (automatically bound by Cloudflare)
DB=wedding-rsvp
```

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Run D1 migrations locally
npm run db:migrate:local

# Start development server
npm run dev
```

### Database Commands
```bash
# Apply migrations to local D1
npm run db:migrate:local

# Apply migrations to production D1
npm run db:migrate:remote

# Query local database
wrangler d1 execute wedding-rsvp --local --command="SELECT * FROM rsvps"
```

### Testing the Form
1. Fill out all required fields
2. Complete Turnstile challenge
3. Submit form
4. Verify success message
5. Check database for record

## Deployment

### Cloudflare Pages Deployment
```bash
# Build for Cloudflare Pages
npm run pages:build

# Deploy to Cloudflare Pages
npm run pages:deploy
```

### Production Checklist
- [ ] Environment variables configured
- [ ] D1 database created and migrated
- [ ] Turnstile keys set up
- [ ] Form tested end-to-end
- [ ] Error handling verified
- [ ] Performance optimized

## Troubleshooting

### Common Issues

1. **"D1Database is not defined"**
   - Ensure @cloudflare/workers-types is installed
   - Check tsconfig.json configuration

2. **Turnstile not loading**
   - Verify site key is correct
   - Check domain is allowlisted in Turnstile dashboard

3. **Database errors**
   - Ensure migrations have been run
   - Check D1 binding in wrangler.toml

4. **Type errors**
   - Run `npm run typecheck`
   - Ensure all imports are correct

## Future Enhancements

- [ ] Email confirmation system
- [ ] Admin dashboard for viewing RSVPs
- [ ] Export functionality (CSV/Excel)
- [ ] Multi-language support
- [ ] Guest list pre-population
- [ ] QR code integration for easier access