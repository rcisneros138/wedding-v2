-- Migration: Add booked_room column to RSVPs table
-- Date: 2025-07-12

-- Add the booked_room column with default value of 0 (false)
ALTER TABLE rsvps ADD COLUMN booked_room BOOLEAN DEFAULT 0;

-- Update the trigger to handle the new column
DROP TRIGGER IF EXISTS update_rsvps_updated_at;

CREATE TRIGGER update_rsvps_updated_at 
  AFTER UPDATE ON rsvps
  FOR EACH ROW
  BEGIN
    UPDATE rsvps SET updated_at = CURRENT_TIMESTAMP WHERE id = NEW.id;
  END;