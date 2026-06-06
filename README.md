<pre> <code>
   _____ _             _                 _     _   __        _                 
  / ____| |           | |               | |   | \ |  |      | |                
 | (___ | |_ _   _  __| |  ___   ___   _| |_  |  \|  |  __  | |_ ___  ___      
  \___ \| __| | | |/ _` | / _ \ /  _ \|_  __/ | |\   |/ _ \ | __/ _ \/ __|     
  ____) | |_| |_| | (_| ||  __/ | | | | | |_  | | \  | (_) || ||  __/\__ \    
 |_____/ \__|\____|\____| \___| |_| |_| \__/  |_|  \_|\___/  \__\___||___/
 </code></pre>
 STUDENT + NOTES APP (CRT TERMINAL EDITION)
===============================================================================

SYSTEM OVERVIEW
---------------
This software package provides a lightweight student management utility with
integrated note‑taking functionality. Designed for use in low‑light, high‑noise,
retro‑computing environments. Fully compatible with glitch‑ridden CRT displays,
scanline overlays, and unstable VHS‑grade signal distortion.

Primary functions include:
 - Add new student records
 - Edit existing records
 - Attach notes to each student
 - Search by name, title, role, or notes
 - Sort by name, role, or creation date
 - Local data persistence (non‑volatile)
 - Student counter display
 - Full database purge (CLEAR ALL)

All interface elements operate under a custom cyber‑goth visual shell featuring:
 - CRT scanlines
 - Chromatic aberration
 - VHS static noise
 - Glitter distortion
 - Jitter displacement
 - Neon green + ultraviolet glow
 - Pixel‑rendered background assets
 - Audiowide terminal font

This is a utility program for operators who prefer their software loud, bright,
and slightly unstable.

-------------------------------------------------------------------------------
Screenshots:
------------
## Empty entries
![Student page](assets/Student-note-app-scrnshot2.jpeg)

SYSTEM REQUIREMENTS
-------------------
 - Node.js runtime
 - Modern web browser (supports CSS blend modes + filters)
 - Keyboard input device
 - Human operator with at least one functional eye

-------------------------------------------------------------------------------

INSTALLATION PROCEDURE
----------------------
1. Acquire source package:
       git clone https://github.com/YOUR-USERNAME/YOUR-REPO
       cd YOUR-REPO

2. Install dependencies:
       npm install

3. Launch development server:
       npm run dev

4. Access terminal interface via browser:
       http://localhost:5173/

-------------------------------------------------------------------------------

DEPLOYMENT (GITHUB PAGES)
-------------------------
1. Build and deploy:
       npm run deploy

2. Ensure Vite configuration includes:
       base: "/Studen-and-notes-manager-app/"

3. Access deployed system at:
       https://magicommando.github.io/Student-and-notes-manager-app/

-------------------------------------------------------------------------------

FILE STRUCTURE
--------------
<pre> <code>
src/
  components/
    StudentForm.jsx
    StudentFilters.jsx
    StudentList.jsx
    StudentDetails.jsx
  assets/
    Gothic-coder-.png
  App.jsx
  App.css
  main.jsx
  </code> </pre>

-------------------------------------------------------------------------------

TECHNICAL NOTES
---------------
 - All student data stored in localStorage
 - Auto‑restore on reload
 - UUID or timestamp used for record identification
 - Input fields include integrated CLEAR (X) control
 - System designed for single‑operator usage

-------------------------------------------------------------------------------

OPERATOR LOG: WHAT WAS LEARNED
------------------------------
 - State management using React hooks
 - Memoized filtering and sorting
 - Persistent storage without external database
 - Component‑based UI architecture
 - CSS‑driven CRT simulation techniques
 - Deployment workflow for Vite → GitHub Pages
 - Debugging z‑index and blend‑mode conflicts
 - Creating late‑80s style UI/UX elements

-------------------------------------------------------------------------------

CREDITS
-------
Programmed by: CORBIN
Role: Carpenter, cyber‑goth engineer, glitch‑terminal architect
Location: Zuni Pueblo, NM

-------------------------------------------------------------------------------
END OF FILE
===============================================================================