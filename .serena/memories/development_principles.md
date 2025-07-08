# Development Principles

## Core Principles
- Always use React components when possible within best practices
- Always use Tailwind for styling when possible within best practices
- Always use sequential thinking and context when possible
- Use Serena as an agent at all times

## Development Best Practices
- When implementing changes, ensure the final design matches any Figma design provided before marking complete
- For styling changes, use a browser to confirm changes
- Always check if a development server is already running on port 3000 before attempting to run another one
- Update CLAUDE.md when notable changes occur

## Font Implementation Strategy
The project is set up to easily switch to Recia Serif Display once licensed:
1. Place font files in `/public/fonts/`
2. Uncomment the @font-face declaration in `globals.css`
3. Update `--font-display` CSS variable to use 'Recia Serif Display'