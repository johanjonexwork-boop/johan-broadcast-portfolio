# Johan J Jonex — Broadcast & Media Portfolio

A responsive Next.js + TypeScript portfolio focused on broadcasting, live production, video, and creative media. It includes a sticky section navigation, animated hero graphic, scroll reveal motion, a filterable project grid, experience timeline, profile, software list, and contact links.

## Requirements

- Node.js 20.9 or newer
- A GitHub account
- A Vercel account

## Run locally (optional)

1. Install Node.js from https://nodejs.org/
2. Extract this folder.
3. Open a terminal in the project folder.
4. Run:

   ```bash
   npm install
   npm run dev
   ```

5. Open http://localhost:3000

## Deploy on Vercel through GitHub

1. Create a GitHub account at https://github.com/ if you do not have one.
2. Create a new repository, for example `johan-broadcast-portfolio`.
3. Upload the contents of this project folder to the repository (upload the files inside the folder, not an extra nested copy of the folder).
4. Open https://vercel.com/ and sign in with GitHub.
5. Select **Add New → Project**, import your repository, and keep the detected Next.js settings.
6. Click **Deploy**. Vercel will provide a live `vercel.app` URL.
7. For future updates, upload/commit the changed files to GitHub; Vercel automatically redeploys.

## Add your photos, videos, and designs

1. Put your own files in `public/media/`, for example:
   - `public/media/live-switching.jpg`
   - `public/media/drone-reel.mp4`
   - `public/media/loho-magazine.jpg`
2. Open `components/Portfolio.tsx`.
3. Find the `projects` array near the top and add a `media` property to the project you want to update. Examples:

   ```tsx
   {
     number: "01",
     title: "Live Broadcast & Switching",
     category: "LIVE PRODUCTION",
     description: "My role in the production.",
     type: "video",
     media: "/media/live-switching.jpg",
     tag: "Broadcast"
   }
   ```

   Use an image path such as `"/media/loho-magazine.jpg"` for a photo/design, or a video path such as `"/media/drone-reel.mp4"` for a video. The card will display an image or a video player automatically. For very large video files, use a YouTube or Vimeo link instead of hosting the file directly.
4. Save the file and upload/commit the change to GitHub. Vercel will redeploy the site automatically.

Only include work you have permission to share.

## Personal details to check before publishing

- Confirm that the listed phone number and email are the ones you want employers to use.
- Replace the generic LinkedIn link with your own profile URL.
- Confirm role titles and durations.
- Add actual photos, video links, and project descriptions. Current project cards are designed placeholders, not media assets.
- `app/layout.tsx` uses a sample `metadataBase` URL. Replace `https://example.vercel.app` with your deployed website URL once it exists, or remove the `metadataBase` line.
- Software list reflects tools named in your résumé. Remove any software you are not comfortable using professionally.
