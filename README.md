Website Theming Rule Book
Objective: Apply a consistent color theme and background image across the entire website.
Theme Palette:

#0B0C10 — Primary background

#1F2833 — Secondary background / containers

#C5C6C7 — Text color

#66FCF1 — Primary accent (links, highlights, CTA buttons)

#45A29E — Secondary accent (hover states, secondary buttons)

1. 🗂 Global Application
Apply this theme consistently on:

All pages (Home, Login, Signup, Dashboard, etc.)

All screen sizes (mobile, tablet, desktop)

Every section, block, and component on the site

2. 📦 Containers, Divs, and Sections
Default background: #0B0C10

Inner containers/cards: #1F2833

Use spacing and padding to create visual separation instead of different colors

3. 🌄 Page Background
Set the background image (refer to Screenshot 2025-07-03 193552.png) on all pages:

background-image: url('/path/to/image.png');

background-size: cover;

background-position: center;

Add overlay:
::before { background: rgba(11,12,16,0.8); position: absolute; inset: 0; z-index: -1; }

4. 🧾 Headings & Text
All text: #C5C6C7

Headings (h1–h6): #66FCF1 or #C5C6C7 depending on visibility

Text links: #66FCF1, with hover color #45A29E

Font suggestions: 'Poppins' or 'Montserrat' for modern look

5. 🎛 Buttons
Primary buttons:

Background: #66FCF1

Text: #0B0C10

Hover: #45A29E

Secondary buttons:

Border: 1px solid #66FCF1

Background: transparent

Text: #66FCF1

Hover: background #45A29E, text #0B0C10

Include smooth transitions (transition-all duration-300)

6. 🧩 Cards / Panels
Background: #1F2833

Border radius: 1rem (rounded-2xl)

Shadow: soft shadow with teal tint

Text: #C5C6C7

Headings within cards: #66FCF1

7. 💬 Forms / Inputs / Labels
Input background: #1F2833

Text color: #C5C6C7

Border: 1px solid #66FCF1

Focus state: glowing border with #66FCF1

Labels: float up animation on focus/filled

Placeholder: lighter shade of #C5C6C7

8. 🔔 Icons & Interactive Elements
Default color: #C5C6C7

Hover/active state: #66FCF1

Use outline style for minimalist feel

9. 🧭 Navbar and Footer
Navbar background: semi-transparent #0B0C10 or full #1F2833

Active links: #66FCF1

Non-active links: #C5C6C7

Footer background: #0B0C10, with all links/text in #C5C6C7

10. 🧪 Transitions & Effects
Use smooth transitions (transition-all duration-300 ease-in-out)

On hover: scale slight, or underline accent

Add subtle glowing box shadows for buttons/cards (e.g., shadow-[0_0_10px_#66FCF1])