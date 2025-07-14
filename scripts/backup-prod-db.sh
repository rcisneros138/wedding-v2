#!/bin/bash

# Backup script for production database
# Usage: ./scripts/backup-prod-db.sh

echo "🔄 Starting production database backup..."

# Create backups directory if it doesn't exist
mkdir -p ./backups

# Generate timestamp for backup filename
TIMESTAMP=$(date +"%Y%m%d_%H%M%S")
BACKUP_DIR="./backups/prod_backup_${TIMESTAMP}"

# Create backup directory
mkdir -p "$BACKUP_DIR"

echo "📁 Backup directory: $BACKUP_DIR"

# Export RSVP data
echo "📊 Exporting RSVP data..."
npx wrangler d1 execute wedding-rsvp --remote --command="SELECT * FROM rsvps" --json > "$BACKUP_DIR/rsvps.json"

# Export email logs if table exists
echo "📧 Checking for email_logs table..."
TABLE_EXISTS=$(npx wrangler d1 execute wedding-rsvp --remote --command="SELECT name FROM sqlite_master WHERE type='table' AND name='email_logs'" --json | grep -c "email_logs")

if [ "$TABLE_EXISTS" -gt 0 ]; then
    echo "📧 Exporting email_logs data..."
    npx wrangler d1 execute wedding-rsvp --remote --command="SELECT * FROM email_logs" --json > "$BACKUP_DIR/email_logs.json"
else
    echo "⚠️  email_logs table does not exist yet"
fi

# Export schema information
echo "🏗️  Exporting schema information..."
npx wrangler d1 execute wedding-rsvp --remote --command="SELECT sql FROM sqlite_master WHERE type='table'" --json > "$BACKUP_DIR/schema.json"

# Create a restore script
cat > "$BACKUP_DIR/restore_instructions.md" << EOF
# Database Restore Instructions

Backup created on: $(date)

## Files in this backup:
- rsvps.json: All RSVP records
- email_logs.json: All email log records (if table existed)
- schema.json: Database schema information

## To restore this data:
1. First ensure the tables exist by running migrations
2. Then import the data using custom SQL INSERT statements based on the JSON files

⚠️  Note: D1 doesn't have a direct import feature, so restoration requires parsing the JSON and creating INSERT statements.
EOF

echo "✅ Backup completed successfully!"
echo "📁 Backup location: $BACKUP_DIR"
echo ""
echo "📝 Contents:"
ls -la "$BACKUP_DIR"