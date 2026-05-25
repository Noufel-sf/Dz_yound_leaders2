---
name: gsap-first
description: 'Use when porting or rebuilding a GSAP/ScrollTrigger animation system for a Next.js site, including scroll-driven sections, page transitions, responsive desktop/mobile splits, and ref-based animation orchestration.'
argument-hint: 'Port the full GSAP animation system'
user-invocable: true
---

# GSAP Animation System Porting

## What This Skill Does

Use this skill when you need to recreate a motion-heavy marketing site or move the whole animation architecture into another Next.js project.

It covers:

- App shell transitions and route navigation
- Scroll-driven section timelines with GSAP and ScrollTrigger
- Responsive animation branches for desktop and mobile
- Ref-based orchestration with `forwardRef` and `useImperativeHandle`
- Separation of content components from animation setup
- Preloader, menu, navbar, footer, and section animation patterns

## When to Use

Use this skill when the request includes:

- Porting animations into a new project
- Rebuilding a homepage with pinned sections and staged reveals
- Creating reusable GSAP helpers for multiple sections
- Splitting motion logic into reusable component contracts
- Reproducing page transitions, preloader flow, or scroll locking

Do not use this skill for simple static page builds or unrelated UI work.

## Porting Procedure

1. Identify the reusable motion layers first.

- Layout shell and shared navigation
- Page transition wrapper
- Section components that expose refs
- Animation helpers in a separate motion module
- Shared visual tokens such as fonts, colors, and spacing

2. Rebuild the app shell before the section details.

- Add the root layout wrapper for fonts and transitions.
- Keep navigation outside section animations.
- Preserve page-level scroll behavior and body overflow control.

3. Separate content from animation control.

- Build each section as a mostly presentational component.
- Expose the needed DOM nodes with `forwardRef` and `useImperativeHandle`.
- Keep the GSAP timeline in a parent page or dedicated helper.

4. Split responsive motion when breakpoints differ significantly.

- Use one desktop component and one mobile component when the layout or timeline changes a lot.
- Avoid large conditional branches inside a single animation component.

5. Scope GSAP carefully.

- Register plugins once.
- Use `useGSAP` or `gsap.context` for cleanup.
- Use `matchMedia` for breakpoint-specific timelines.
- Reset transforms before replaying pinned sections.

6. Port the transitions last.

- Recreate route transitions only after the content and timelines are working.
- Keep the CSS transition rules in the global stylesheet.
- Validate the incoming and outgoing page states on real navigation.

## Recommended File Shape

- `app/layout.tsx` for fonts and transition wrapper
- `app/page.tsx` for the homepage orchestrator
- `components/layout/*` for navbar and menu
- `components/sections/*` for page sections
- `components/ui/*` for motion-specific subcomponents
- `lib/animations/*` for ScrollTrigger setup functions
- `app/globals.css` for view-transition pseudo-elements and base tokens
- `tailwind.config.js` for shared theme values

## Reuse Rules

- Keep animation logic out of generic content components unless the component itself owns the motion.
- Keep each animation helper tied to one section or one clear behavior.
- Prefer explicit refs over querying random DOM nodes across the whole page.
- Use page-specific wrappers for page transitions instead of scattering router logic.
- Copy the pattern, not the copy text or project-specific data.

## Checklist

- [ ] Fonts and global theme tokens recreated
- [ ] View transition wrapper added in the root layout
- [ ] Navigation uses a transition-aware router
- [ ] Sections expose the required refs
- [ ] Desktop and mobile animation branches verified
- [ ] ScrollTrigger cleanup works on route change
- [ ] Preloader and menu scroll locking handled
- [ ] Global transition CSS copied and tested

## Notes

This skill is meant to help recreate the motion system as a reusable architecture, not to clone the EDG content.
Focus on structure, timing, cleanup, and responsive behavior first. Replace all agency-specific text, images, and project data in the target app.
