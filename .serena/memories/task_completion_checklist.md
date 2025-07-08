# Task Completion Checklist

When completing any development task, follow these steps:

## 1. Code Quality Checks
- [ ] Run `npm run lint` to check for linting errors
- [ ] Fix any linting errors before marking task complete
- [ ] Ensure TypeScript has no type errors

## 2. Visual Verification (for UI changes)
- [ ] Start dev server with `npm run dev` if not already running
- [ ] Open browser and verify changes match Figma design
- [ ] Test responsive behavior at different screen sizes
- [ ] Check mobile view specifically

## 3. Code Review
- [ ] Ensure code follows established patterns in codebase
- [ ] Use Tailwind classes consistently
- [ ] Maintain mobile-first responsive approach
- [ ] No unnecessary comments added

## 4. Documentation
- [ ] Update claude.md if notable changes were made
- [ ] Document any new components or significant modifications

## 5. Git (if requested)
- [ ] Stage changes with `git add`
- [ ] Create meaningful commit message
- [ ] Include Claude Code attribution in commit message