# lyna-e-portfolio

Norazlyna's e-portfolio for EDU456 (Innovative Technologies for Teaching and Learning), class ED247, UiTM Puncak Alam. Five digital platforms for teaching Biology: ClassDojo, Quizlet, Educaplay, ZEP Quiz and Gather Town.

Built with Next.js. Deploys on Vercel with the default settings.

## Editing the content

Every word on the site is in one file: `content/portfolio.ts`.

- **Add a video:** paste the YouTube link into `videoUrl` for that entry. The video then appears in the "Video guide" section of the entry.
- **Add a photo:** put the image in `public/` (for example `public/lyna.jpg`) and set `photo: "/lyna.jpg"` near the top of the file. It appears on the About page.
- **Change the writing:** edit the text between the quotation marks. Each entry has the same five parts, in the order of the assignment rubric.

## Running it locally

```bash
npm install
npm run dev
```

Then open http://localhost:3000.
