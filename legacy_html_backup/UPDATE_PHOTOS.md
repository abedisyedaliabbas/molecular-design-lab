# How to Add Your Photos

## Current Status
All placeholder images have been removed. You need to add your actual photo URLs from your website.

## Steps to Add Photos

### 1. Extract Photos from Your Website

Visit your travel blog: https://www.syedaliabbasabedi.com/?page_id=114

For each photo:
1. Right-click on the image
2. Select "Copy image address" or "Copy image URL"
3. The URL will look like: `https://www.syedaliabbasabedi.com/wp-content/uploads/2024/03/photo-name.jpg`

### 2. Update Travel Blog Photos

Edit `assets/js/travel.js`:

#### For Travel Posts (cover images):
Find each travel post and replace the empty `cover: ""` with your photo URL:

```javascript
{
  title: "Phuket",
  date: "March 2025",
  location: "Phuket, Thailand",
  cover: "https://www.syedaliabbasabedi.com/wp-content/uploads/2025/03/phuket-photo.jpg", // Your actual URL
  // ...
}
```

#### For Travel Gallery:
Find the `travelGallery` array and add your photos:

```javascript
const travelGallery = [
  {
    caption: "Marina Bay, Singapore",
    image: "https://www.syedaliabbasabedi.com/wp-content/uploads/2024/03/marina-bay.jpg",
  },
  // Add more photos...
];
```

**Important:** Make sure the caption matches the actual location/country in the photo!

### 3. Update News Photos (if any)

If your news articles have photos, edit `assets/js/news.js` and add a `photo` field to each article:

```javascript
{
  title: "Celebrating My PhD Graduation",
  date: "June 5, 2024",
  photo: "https://www.syedaliabbasabedi.com/wp-content/uploads/2024/06/phd-graduation.jpg",
  // ...
}
```

## Tips

- **Check image URLs**: Make sure the URLs are accessible and not broken
- **Match captions**: Ensure gallery captions match the actual location in photos
- **Optimize images**: Large images may load slowly - consider resizing if needed
- **Test locally**: After adding URLs, test the page to ensure images load correctly

## Quick Reference

- Travel blog photos: `assets/js/travel.js` → `travelPosts` array (cover images) and `travelGallery` array
- News photos: `assets/js/news.js` → `newsArticles` array (add `photo` field if needed)

