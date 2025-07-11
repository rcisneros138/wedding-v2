-- RSVP Database Schema for Wedding Website
-- Using Cloudflare D1 (SQLite)

-- Drop existing table if needed (for migrations)
DROP TABLE IF EXISTS rsvps;

-- Create RSVP table
CREATE TABLE IF NOT EXISTS rsvps (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  
  -- Guest Information
  guest_name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  
  -- RSVP Details
  attending BOOLEAN NOT NULL,
  plus_one_name TEXT,
  
  -- Preferences
  song_requests TEXT,
  
  -- Metadata
  created_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  ip_address TEXT,
  
  -- Ensure unique email submissions
  UNIQUE(email)
);

-- Create indexes for better query performance
CREATE INDEX IF NOT EXISTS idx_rsvps_email ON rsvps(email);
CREATE INDEX IF NOT EXISTS idx_rsvps_created_at ON rsvps(created_at);
CREATE INDEX IF NOT EXISTS idx_rsvps_attending ON rsvps(attending);

-- Create a trigger to update the updated_at timestamp
CREATE TRIGGER IF NOT EXISTS update_rsvps_updated_at 
  AFTER UPDATE ON rsvps
  FOR EACH ROW
  BEGIN
    UPDATE rsvps SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;