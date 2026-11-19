# Will Gilmore portfolio

A static Astro portfolio with Home, About, Selected Work, Writing, Contact, six project pages, and a custom 404 page. Fonts and images are served locally. The launch experience uses native HTML and CSS. React can be introduced as an isolated interactive component when a future project requires it.

## Run locally

Use Node.js 24 or newer.

```sh
npm ci
npm run dev
```

Open the local URL printed by Astro, normally http://127.0.0.1:4321/.

```sh
npm run check
npm run build
npm run preview
```

The generated website is in `dist/`. The included build is ready for root-path hosting. Rebuild after editing source content.

## Edit content

| Content | File or directory |
| --- | --- |
| Name, public email, GitHub, career timeline | `src/data/profile.ts` |
| Home introduction and layout | `src/pages/index.astro` |
| About narrative and education | `src/pages/about.astro` |
| Project case studies | `src/content/work/*.md` |
| Published writing | `src/content/writing/*.md` |
| Shared project layout | `src/pages/work/[id].astro` |
| Type, colors, spacing, responsive layouts | `src/styles/global.css` |
| Supplied visual assets | `public/images/` |
| Downloadable résumé | `public/downloads/will-gilmore-resume.docx` |

Project Markdown files begin with JSON-formatted YAML frontmatter. Copy an existing project to add another. Use a unique filename, which becomes its public URL. The required fields are title, summary, discipline, context, period, order, image and its description and dimensions, caption, problem, role, methods, outcomes, limitations, and sources.

Set `featured` to true for a homepage selection and use `order` to control sorting. Keep three featured projects for the current homepage composition. Write additional evidence, tables, or discussion after the closing frontmatter delimiter. The shared layout places that Markdown inside the outcomes section.

Images use paths such as `images/cmj-report.webp`, without a leading slash. Add meaningful alt text and a caption describing what the artifact establishes. Add additional images in the optional gallery array with image, alt, caption, width, and height fields.

Writing entries contain the original title, description, publication date, article URL, publication, and image metadata. The current page links to the published Substack article. Add only published or supplied material.

A content schema checks required case-study fields during the build.

## Deploy to GitHub Pages

The workflow in `.github/workflows/deploy.yml` builds the site and deploys it when changes reach main.

1. Create a GitHub repository under your account. Use `wgilmore25.github.io` for a root site, or a name such as `portfolio` for a project site.
2. Upload the contents of this project directory to that repository. Include the hidden `.github/` directory, `.gitignore`, and the package lockfile. The GitHub workflow must sit at the repository root.
3. In repository Settings, open Pages and choose GitHub Actions as the build and deployment source.
4. Push to main, or select Run workflow in the Actions tab.
5. Wait for both workflow jobs to succeed. The deployment job reports the published URL.

For a new empty repository, these commands run from this project directory after replacing the repository URL with the one GitHub provides.

```sh
git init -b main
git add .
git commit -m "Build Will Gilmore portfolio"
git remote add origin https://github.com/wgilmore25/REPOSITORY_NAME.git
git push -u origin main
```

The workflow derives the owner and repository from GitHub. Root sites use `/`. Project sites use `/REPOSITORY_NAME/`, including for images, fonts, navigation, résumé downloads, and canonical URLs. The source config defaults to `https://wgilmore25.github.io` and a root base for local work.

To test a project path locally on macOS or Linux, run the following, then check the generated site at that path with npm run preview.

```sh
SITE_URL=https://wgilmore25.github.io BASE_PATH=/portfolio/ npm run build
```

For a custom domain, set the workflow SITE_URL to your HTTPS domain, set BASE_PATH to `/`, add the domain in GitHub Pages settings, and configure its DNS. Commit the matching `public/CNAME` if using a CNAME file.

This repository targets https://wgilmore25.github.io/. Check the Actions tab for the latest deployment status.

## Content provenance

See `CONTENT_SOURCES.md` for the supplied documents and image crops used. The Red Bull date was corrected to June 2022–August 2026 in the source résumé, downloadable résumé, and website timeline.

The résumé retains the other details and formatting from the supplied document, including its Los Angeles location and original contact information. The website does not display a city.

The website includes the supplied email and verified GitHub profile. A LinkedIn URL can be added when its exact public address is supplied.

## Accessibility and behavior

The site uses semantic headings, a skip link, visible keyboard focus, descriptive image alternatives, reduced-motion support, and responsive layouts. Figures link to their full-size artifacts. Important case findings and limitations are also available as HTML text. Email links open the visitor’s email application.

Browser checks cover mobile and desktop layouts and normal navigation. No formal WCAG conformance certification is claimed.

