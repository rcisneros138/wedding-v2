-- Add email tracking columns to the rsvps table
ALTER TABLE rsvps ADD COLUMN confirmation_email_sent BOOLEAN DEFAULT FALSE;
ALTER TABLE rsvps ADD COLUMN confirmation_email_sent_at DATETIME;
ALTER TABLE rsvps ADD COLUMN confirmation_email_id TEXT;

-- Create a separate email log table for tracking all emails
CREATE TABLE IF NOT EXISTS email_logs (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  rsvp_id INTEGER,
  email_type TEXT NOT NULL, -- 'confirmation', 'update', etc.
  recipient_email TEXT NOT NULL,
  subject TEXT NOT NULL,
  sent_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  status TEXT NOT NULL, -- 'sent', 'failed', 'pending'
  message_id TEXT,
  error_message TEXT,
  FOREIGN KEY (rsvp_id) REFERENCES rsvps(id)
);

CREATE INDEX idx_email_logs_rsvp_id ON email_logs(rsvp_id);
CREATE INDEX idx_email_logs_status ON email_logs(status);
CREATE INDEX idx_email_logs_email_type ON email_logs(email_type);