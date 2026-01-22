# Hotel Daleese Website Updates - Implementation Plan

**Status Check Date:** Current Review  
**Total Tasks:** 22  
**Completed:** 8 ✅  
**Pending:** 14 ⏳  
**Blocked (Waiting for Assets):** 2 📦

---

## ✅ COMPLETED TASKS

### A) Main Page (Home)
- ✅ **Task 1:** Add "Adults Only" wording to hotel description
  - **Location:** `src/components/landing_page/hero-with-navbar.tsx` (line 58)
  - **Status:** Already implemented

- ✅ **Task 4:** Under Accommodations, add Casa Daleese mention
  - **Location:** `src/components/landing_page/feature-cards.tsx` (line 81)
  - **Status:** Already implemented

- ✅ **Task 5:** Under Amenities, change to "Hotel Daleese spa room"
  - **Location:** `src/components/landing_page/feature-cards.tsx` (line 87)
  - **Status:** Already implemented

### D) Our Suites Page
- ✅ **Task 1:** Under towels, add "green striped beach towels"
  - **Location:** Suite 1 (line 47), Suite 2 (line 46)
  - **Status:** Already implemented

- ✅ **Task 2:** Under linens, update to "cotton linens"
  - **Location:** All suites
  - **Status:** Already implemented

- ✅ **Task 3:** Before suites list, add Casa Daleese mention
  - **Location:** `src/components/suites/our-suites.tsx` (line 45)
  - **Status:** Already implemented

### E) Contact Us Page
- ✅ **Task 1:** Remove kids option from contact form
  - **Status:** No kids field found - already done

- ✅ **Task 2:** Add "Adults Only" blurb
  - **Location:** `src/components/contact/contact-section.tsx` (line 147)
  - **Status:** Already implemented

---

## ⏳ PENDING TASKS

### A) Main Page (Home)
- ⏳ **Task 2:** Make the logo larger
  - **Current:** Desktop: `width={250} height={150} className="h-[180px]"`, Mobile: `width={150} height={100} className="h-28"`
  - **Location:** `src/components/Navbar.tsx` (lines 71-77 mobile, 226-233 desktop)
  - **Action:** Increase logo size on both mobile and desktop

- ⏳ **Task 3:** Replace "eccentric" → "Tranquil"
  - **Location:** `src/components/landing_page/hero-with-navbar-component.tsx` (line 27)
  - **Current:** "Eccentric • Privacy • Comfort"
  - **Note:** `hero-with-navbar.tsx` already has "Tranquil" (line 47), but `hero-with-navbar-component.tsx` still has "Eccentric"

### B) Amenities Page
- ⏳ **Task 1:** Fix spacing - reduce gap between first paragraph and next two paragraphs
  - **Location:** `src/app/amenities/page.tsx` and `src/components/amenities/amenities-section-top.tsx`
  - **Action:** Adjust margin/padding between sections

- ⏳ **Task 2:** Remove "Buco Nel Muro"
  - **Status:** Not found in current code - may need to search more thoroughly or may already be removed
  - **Action:** Search entire codebase for this reference

- ⏳ **Task 3:** Re-add Breakfast Spots section/list content
  - **Location:** `src/app/amenities/page.tsx` (lines 94-99)
  - **Status:** Section exists but empty - needs content
  - **Blocked:** Waiting for client to provide breakfast spots list

### C) Our Story Page
- ⏳ **Task 1:** Replace existing story content with new "Our Story" script
  - **Location:** `src/components/our-story/our-story-section.tsx`
  - **Current:** Has old version (lines 33-90)
  - **Action:** Replace entire content with new provided script
  - **New Content:** Full script provided in task list

- ⏳ **Task 2:** Create new "Upcoming Updates / Changes" page
  - **Location:** New page needed: `src/app/upcoming-updates/page.tsx`
  - **Purpose:** Renovations, upcoming construction, curated upgrades, behind-the-scenes
  - **Blocked:** Waiting for client to provide initial content/text

### D) Our Suites Page

#### Global Suite Content Updates
- ✅ All global updates are complete (see above)

#### Suite-Specific Edits

**Suite 1 & Suite 2:**
- ⏳ **Task:** Replace "garden view" with "private garden" in header descriptions
  - **S1 Location:** `src/app/suites/suite-1/page.tsx` (line 36)
  - **Current:** "Wheelchair Accessible Studio Suite with Garden View"
  - **S2 Location:** `src/app/suites/suite-2/page.tsx` (line 35)
  - **Current:** "Studio Suite with Garden View"

**Suite 3:**
- ⏳ **Task 1:** Remove microwaves
  - **Status:** Not found in current code - may already be removed or need to verify

- ⏳ **Task 2:** Remove the word "pool" from S3 description
  - **Location:** `src/app/suites/suite-3/page.tsx`
  - **Action:** Check views section (line 62) - currently: "Private outdoor patio/terrace with garden and mountain views"
  - **Note:** No "pool" found in current description - may already be done

**Suite 4:**
- ⏳ **Task 1:** Remove microwaves
  - **Status:** Not found - verify

- ⏳ **Task 2:** Make S4 initial description match S3
  - **S3 Current:** "Studio Suite with Garden & Mountain Views" (line 33)
  - **S4 Current:** "Studio Suite with Garden & Mountain Views" (line 37)
  - **Status:** Already matches! ✅ But need to verify full description matches

- ⏳ **Task 3:** Adjust S4 photos
  - **Action:** Add more outside photos, leave only 2 bed photos
  - **Location:** `src/app/suites/suite-4/page.tsx` (lines 13-24)
  - **Blocked:** Waiting for client to provide photos

**Suite Photos (General):**
- ⏳ **Task:** Make initial suite photos less close-up (wider framing)
  - **Location:** All suite pages - `imageSrc` variable and gallery items
  - **Action:** Replace hero images with wider shots, adjust gallery images

**Casa Daleese (New Suite-Style Page):**
- ⏳ **Task:** Create Casa Daleese page formatted like the suites
  - **Location:** New page needed: `src/app/suites/casa-daleese/page.tsx`
  - **Content:** Provided in task list (amenities, bathrooms, view sections)
  - **Blocked:** Waiting for client to provide Casa Daleese photos

### Gallery
- ⏳ **Task:** Add more photos to gallery
  - **Location:** `src/app/gallery/page.tsx` (need to check)
  - **Blocked:** Waiting for client to share photo file

---

## 📦 BLOCKED TASKS (Waiting for Client Assets)

1. **Breakfast Spots List** - Needed for Amenities page
2. **Casa Daleese Photos** - Needed for new Casa Daleese page
3. **Extra Gallery Photos** - Client will share a file
4. **Upcoming Updates Page Content** - Need initial text/content from client
5. **S4 Photo Adjustments** - Need more outside photos, reduce bed photos

---

## 🔍 NOTES & OBSERVATIONS

1. **Logo Size:** Currently desktop logo is `h-[180px]` and mobile is `h-28`. Need to increase both.

2. **Two Hero Components:** There are two hero components:
   - `hero-with-navbar.tsx` - Has "Tranquil" ✅
   - `hero-with-navbar-component.tsx` - Has "Eccentric" ❌ (needs update)
   - Need to verify which one is actually being used

3. **Our Story:** Current version is different from new provided script. Complete replacement needed.

4. **Suite Descriptions:** S3 and S4 already have matching descriptions, but need to verify all details match exactly.

5. **Microwaves:** Not found in current suite code - may have already been removed or never existed.

6. **Buco Nel Muro:** Not found in current code - may already be removed.

7. **Contact Form:** Already has "Adults Only" and no kids option - both tasks complete.

---

## 📋 ESTIMATED EFFORT

- **Quick Wins (1-2 hours):**
  - Logo size increase
  - Replace "eccentric" → "Tranquil"
  - S1/S2 "garden view" → "private garden"
  - Fix amenities spacing
  - Replace Our Story content

- **Medium Effort (2-4 hours):**
  - Create Upcoming Updates page (structure)
  - Create Casa Daleese page (structure)
  - Adjust suite photo framing

- **Blocked (Waiting for Assets):**
  - Breakfast spots content
  - Casa Daleese photos
  - Gallery photos
  - Upcoming Updates content
  - S4 photo adjustments

---

## 🎯 RECOMMENDED PRIORITY ORDER

1. **High Priority (Can do now):**
   - Logo size increase
   - Fix "eccentric" → "Tranquil"
   - S1/S2 description updates
   - Replace Our Story content
   - Fix amenities spacing

2. **Medium Priority (Structure ready, content pending):**
   - Create Upcoming Updates page structure
   - Create Casa Daleese page structure
   - Adjust suite photo framing

3. **Low Priority (Blocked by assets):**
   - All tasks waiting for client photos/content

---

## ✅ VERIFICATION CHECKLIST

Before marking complete, verify:
- [ ] Logo is noticeably larger on both mobile and desktop
- [ ] "Tranquil" appears in all hero components
- [ ] S1 and S2 have "private garden" not "garden view"
- [ ] Our Story has complete new content
- [ ] Amenities spacing is improved
- [ ] Breakfast Spots section has content (when provided)
- [ ] Casa Daleese page exists and matches suite format
- [ ] Upcoming Updates page exists
- [ ] All suite photos are wider/less close-up
- [ ] S4 photos adjusted (when provided)
- [ ] Gallery has additional photos (when provided)
