Book.test.tsx (38 tests)

  Client List View (10 tests):

  1. Verifies the "Client Book" heading is displayed
  2. Verifies the search input field is present
  3. Verifies all mock clients appear in the list
  4. Verifies renewal countdown badges are shown for each client
  5. Verifies client addresses are displayed
  6. Verifies opportunity counts are shown on client cards
  7. Verifies search filters clients by name correctly
  8. Verifies search filters clients by address correctly
  9. Verifies "no results" message appears when search has no matches
  10. Verifies clicking a client card navigates to the details view

  Client Details View (11 tests):

  11. Verifies client name is displayed in the details view
  12. Verifies "Call Now" button is present
  13. Verifies "Send Message" button is present
  14. Verifies "Original Deal Analysis" section appears
  15. Verifies "Life Changes" section appears
  16. Verifies "Current Financial Snapshot" section appears
  17. Verifies "Primary Opportunity" section with opportunity title appears
  18. Verifies "Cross-sell Opportunities" section appears
  19. Verifies "Competitive Alert" section appears
  20. Verifies "Quick Actions" section with all action buttons appears
  21. Verifies clicking back button returns to client list

  Additional Details Tests (17 tests):

  22. Verifies property value with percentage change is displayed
  23. Verifies available equity amount is shown
  24. Verifies original deal analysis section is open by default
  25. Verifies life changes section is open by default
  26. Verifies conversation strategy section is closed by default

  ---
  CallIntelligenceDashboard.test.tsx (20 tests)

  Page Header (4 tests):

  1. Verifies "Call Intelligence Dashboard" title is displayed
  2. Verifies "AI-powered analysis" subtitle is displayed
  3. Verifies "Start Calling" button is present
  4. Verifies the date dropdown component is rendered

  Statistics Section (6 tests):

  5. Verifies "3 Total Calls" metric is displayed
  6. Verifies "2 Connected" metric is displayed
  7. Verifies "1 Applications" metric appears in the document
  8. Verifies "85% Objections Handled" metric is displayed
  9. Verifies "4 Cross-sells Found" metric is displayed
  10. Verifies "1 High Urgency" metric appears in the document

  Call Cards Section (1 test):

  11. Verifies the ClientCard component is rendered

  Page Structure (3 tests):

  12. Verifies page has proper border sections
  13. Verifies statistics are displayed in a 6-column grid layout
  14. Verifies correct styling classes are applied to metrics

  Metric Colors (5 tests):

  15. Verifies "Connected" metric has green color
  16. Verifies "Applications" metric has blue color
  17. Verifies "Objections Handled" metric has purple color
  18. Verifies "Cross-sells" metric has orange color
  19. Verifies "High Urgency" metric has red color

  Accessibility (1 test):

  20. Verifies semantic HTML structure with proper headings and button roles

  ---
  Pipeline.test.tsx (10 tests)

  Page Structure (4 tests):

  1. Verifies the page renders without crashing
  2. Verifies PipelineTopBar component is rendered
  3. Verifies PipelineCards component is rendered
  4. Verifies ActiveDeals component is rendered

  Layout (4 tests):

  5. Verifies section wrapper has proper padding classes
  6. Verifies content has max-width container for responsive layout
  7. Verifies proper vertical spacing between components
  8. Verifies content is centered with mx-auto class

  Component Order (1 test):

  9. Verifies components render in correct order (TopBar → Cards → Deals)

  Responsive Design (1 test):

  10. Verifies responsive padding classes are applied correctly

  ---
  Prospecting.test.tsx (23 tests)

  Page Header (6 tests):

  1. Verifies "Prospecting Center" title is displayed
  2. Verifies "Converts leads into applications" subtitle is displayed
  3. Verifies "Auto-Dialer" button is present
  4. Verifies "Start Session" button is present
  5. Verifies Auto-Dialer button has purple background
  6. Verifies Start Session button has green background

  Statistics Cards (5 tests):

  7. Verifies "New Leads" card is rendered
  8. Verifies "Follow ups" card is rendered
  9. Verifies "Conversion Rates" card is rendered
  10. Verifies "Calls Today" card is rendered
  11. Verifies placeholder "A Number" text appears in statistics

  Call Scripts Section (4 tests):

  12. Verifies "Call Scripts" section heading is displayed
  13. Verifies "First Contact" script option with description appears
  14. Verifies "Follow-up" script option with description appears
  15. Verifies "Objection Handling" script option with description appears

  Today's Challenge Section (3 tests):

  16. Verifies "Today's Challenge" section heading is displayed
  17. Verifies progress bar component is rendered
  18. Verifies progress bar shows 33% value

  Prospects List (1 test):

  19. Verifies ProspectsList component is rendered

  Icons (2 tests):

  20. Verifies all icons in statistics cards are rendered
  21. Verifies icons in action buttons are rendered

  Styling (2 tests):

  22. Verifies each statistics card has correct icon background colors (blue, yellow, red, purple)

  ---
  Total: 91 Tests