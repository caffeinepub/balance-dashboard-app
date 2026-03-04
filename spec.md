# BALANCE Dashboard App

## Current State
Two-screen app: intro screen ("BALANCE" / "Tip the Art") and a dashboard with two tables — BALANCE (Position, Artwork, Balance) and TIPS (Latest TX, Artwork, Comment). The TIPS table has right-to-left scrolling for comments longer than 25 characters.

## Requested Changes (Diff)

### Add
- Nothing new.

### Modify
- Ensure the app is fully rebuilt and deployed from the current source.
- Ensure column widths are precisely set so Artwork column lines up vertically in both tables.
- Balance column (BALANCE table) must be directly above Comment column (TIPS table) — same horizontal offset.
- Latest TX column is the first column in the TIPS table (leftmost), same width as Position column in BALANCE table.
- Scrolling comments: trigger at 25 characters, text enters from the right and scrolls left.
- Open Secret #3 message: "great example of hybrid digital physical art. Keep up good work!"

### Remove
- Nothing.

## Implementation Plan
1. Align column widths precisely using fixed pixel or percentage widths:
   - BALANCE table: Position (15%), Artwork (45%), Balance (25%), filler (15%)
   - TIPS table: Latest TX (15%), Artwork (45%), Comment (40%)
   - This ensures Artwork aligns, and Balance sits above Comment.
2. Verify MarqueeText threshold is 25 characters, scroll animates from right-to-left.
3. Keep all other styles and layout unchanged.
4. Deploy.
