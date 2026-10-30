# trettecandkpe
# Clean Uganda Initiative

A simple, fast website for the **Clean Uganda Initiative**, a community effort to keep Uganda clean, healthy and green through monthly clean-up drives on the last Saturday of every month.

The site explains why cleanliness matters, tells the story of national cleaning in Uganda, shows people how to take part, and lets volunteers sign up.

## Pages

| Page | File | What it does |
|------|------|--------------|
| Home | `index.html` | Welcome banner, a "Join now" button and why cleanliness matters |
| About | `about.html` | History of national cleaning in Uganda and its health, environmental and economic benefits |
| How to participate | `participate.html` | Ways to help and what to bring to a clean-up |
| Contact | `contact.html` | Volunteer sign-up form and the initiative's contact details |

## Features

- Plain HTML, CSS and JavaScript. No frameworks, no build step, no installs.
- Responsive layout that works on phones, tablets and desktops.
- Highlighted current page in the navigation menu.
- Volunteer sign-up form with built-in checks for the required fields (email, district and activity).
- Accessibility basics: "Skip to content" link, labelled form fields, visible keyboard focus and reduced-motion support.
- Footer year updates itself.

## Project structure

```
.
├── index.html
├── about.html
├── participate.html
├── contact.html
├── styles.css        # all styling, shared by every page
├── scripts.js        # footer year and contact form behaviour
└── en/
    └── images/
        ├── hii.jpg   # home page banner background
        └── clean.jpg # image on the About page
```

## Run it locally

No setup needed. Download or clone the repository, then open `index.html` in any web browser.

```
git clone https://github.com/YOUR-USERNAME/YOUR-REPO.git
cd YOUR-REPO
```

## Customising

- **Colours:** change the three values at the top of `styles.css` (`--accent`, `--accent-dark`, `--muted`) and the whole site follows.
- **Images:** replace `en/images/hii.jpg` and `en/images/clean.jpg`, keeping the same file names, or update the paths in `styles.css` and `about.html`.
- **Navigation:** the menu is repeated at the top of each page, so add or rename a link in all four HTML files.

## Known limitations

- **The sign-up form does not send data yet.** It checks the fields and shows a thank-you message, but the details are not delivered anywhere. To collect sign-ups, connect the form to an email service or form backend at the marked spot in `scripts.js`.

## Contact

- **Email:** clean_initiative_uganda@gmail.com
- **Location:** Kampala, Uganda

## Join in

Everyone can take part. Visit the [How to participate](participate.html) page, or [sign up to help](contact.html).