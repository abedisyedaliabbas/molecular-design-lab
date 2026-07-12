# How to Update Publications

## Current Status
The publications page is **static** and requires manual updates. Google Scholar doesn't provide a public API, so automatic updates aren't possible without violating their terms of service.

## How to Update

### 1. Update Citation Metrics
Edit `assets/js/publications.js` and update these values:
```javascript
const publicationMetrics = {
  citations: 379,  // Update with current total citations
  hIndex: 9,        // Update with current h-index
};
```

### 2. Add New Publications
Add new publication objects to the `publications` array in `assets/js/publications.js`:

```javascript
{
  type: "Journal", // or "Conference", "Preprint"
  year: 2025,
  title: "Your Paper Title",
  venue: "Journal Name",
  authors: "SAA Abedi, Co-author, et al.",
  doi: "https://doi.org/10.xxxx/xxxxx", // or Google Scholar link
  summary: "Brief description of the work",
  citations: 0, // Update with citation count
},
```

### 3. Update Existing Citations
Find the publication in the array and update the `citations` field:
```javascript
citations: 15, // Update with new citation count
```

## Tips
- Publications are automatically sorted by year (newest first) by default
- You can sort by citations using the dropdown on the publications page
- Filter by type (Journal, Conference, Preprint) using the filter buttons

## Future Options
If you want more automation, consider:
1. **Manual periodic updates** (recommended) - Update quarterly or when you have new papers
2. **Third-party services** - Some services offer Google Scholar data APIs (may require payment)
3. **Manual export** - Export from Google Scholar and use a script to format the data

