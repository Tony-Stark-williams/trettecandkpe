# Clean Uganda Initiative

This repository contains the website for the Clean Uganda Initiative.

## Site structure
- `index.html` is the root landing page.
- `about.html` contains the initiative history and benefits.
- `participate.html` explains how the community can take part.
- `contact.html` contains the contact form and information.
- `en/` contains the English-language site files and images.

## Run locally
Open the site in a browser or run a small local web server:

```bash
python -m http.server 8000
```

Then visit:

```text
http://localhost:8000/
```

## Notes
The repo uses relative links so the pages can work together without breaking when opened or served from the project root.
