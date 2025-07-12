# RSVP Form Development Guide

## Important: Development Server Requirements

The RSVP form requires access to Cloudflare D1 database and Turnstile verification. This means you **cannot** use the standard Next.js development server.

### ❌ Wrong Way (Will NOT Work)
```bash
npm run dev
# This runs Next.js dev server without Cloudflare bindings
# RSVP form submissions will fail!
```

### ✅ Correct Way
```bash
npm run pages:preview
# This runs Wrangler Pages dev server with D1 database access
# Open: http://localhost:8788
```

## Development Setup

### 1. Database Setup
```bash
# First time setup - create local database
npm run db:migrate:local

# View existing RSVPs
npm run db:view:local

# Check RSVP statistics
npm run db:count:local
```

### 2. Environment Variables
Your `wrangler.toml` should have:
- `NEXT_PUBLIC_TURNSTILE_SITE_KEY` - Public key for Turnstile widget
- Database ID configured under `[[d1_databases]]`

### 3. Running the Development Server
```bash
# Build and start Wrangler Pages dev server
npm run pages:preview

# The server will be available at:
# http://localhost:8788 (NOT :3000)
```

## Testing the RSVP Form

### 1. Enable Development Logging
The form includes comprehensive logging in development mode:
- Form submission data
- Turnstile token generation
- API request/response
- Database operations

Open the browser console to see all logs.

### 2. Common Issues

#### Form Not Submitting
- **Check server**: Must be running on port 8788 (Wrangler), not 3000 (Next.js)
- **Check console**: Look for the warning message about using the wrong server
- **Check Turnstile**: Ensure the security widget loads and validates

#### Database Errors
- Run `npm run db:migrate:local` to ensure database exists
- Check wrangler.toml has correct database ID
- View logs for SQL errors

#### Turnstile Errors
- Verify `NEXT_PUBLIC_TURNSTILE_SITE_KEY` is set
- Check console for Turnstile error messages
- The widget should show a checkmark when validated

### 3. Viewing Submitted RSVPs
```bash
# View all RSVPs
npm run db:view:local

# Export to JSON
npm run db:export:local

# Check statistics
npm run db:count:local
```

## Production Deployment

For production, the site should be deployed to Cloudflare Pages where it will automatically have access to the D1 database and other Cloudflare services.

```bash
# Deploy to Cloudflare Pages
npm run pages:deploy
```

## Troubleshooting

### "Network error: Unable to reach the server"
You're using `npm run dev` instead of `npm run pages:preview`.

### "Failed to save RSVP"
Check database migrations and wrangler.toml configuration.

### Turnstile not loading
Ensure the site key is correctly set in wrangler.toml.

### Form appears to submit but no data in database
Check the console logs for the exact SQL query being executed and any database errors.