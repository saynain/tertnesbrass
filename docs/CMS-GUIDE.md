# Tertnes Brass CMS Guide

## Accessing the CMS

1. Go to https://tertnesbrass.no/admin (or http://localhost:3000/admin for local testing)
2. Click "Login with GitHub"
3. Authorize with your GitHub account (you need to be added as a collaborator to the repository)

## Adding a New Event

1. Click "Arrangementer" in the left sidebar
2. Click "New Arrangement"
3. Fill in:
   - **Tittel**: Event name (e.g., "Sommerkonsert")
   - **Dato**: Date and time of the event
   - **Sted**: Venue name
   - **Emoji**: Choose an emoji (🎵 🎺 🎉 🎄 etc.)
   - **Link**: Leave as "/program"
   - **Publisert**: Check to make it live on the website
   - **Beskrivelse**: Optional description (supports Markdown)
4. Click "Save"
5. Wait 2-3 minutes for the site to rebuild and deploy

## Adding News

1. Click "Nyheter" in the left sidebar
2. Click "New Nyhet"
3. Fill in:
   - **Tittel**: Headline
   - **Kort beskrivelse**: Summary (2-3 sentences that will appear on the homepage)
   - **Tag**: Choose category (KONSERT, REPERTOAR, STEVNE, SOSIALT, NYTT)
   - **Emoji**: Choose an emoji relevant to the news
   - **Bilde**: Optional - upload an image
   - **Fremhevet på forsiden**: Check this to feature this news item in the large card on the homepage (only one should be featured at a time)
   - **Publiseringsdato**: When the news should appear
   - **Fullt innhold**: Optional - full article content in Markdown format
4. Click "Save"

## Updating the Homepage

### Hero Section
1. Click "Nettstedsinnstillinger" → "Hero-seksjon (Forside)"
2. Edit:
   - **Badge-tekst**: Small badge at the top (e.g., "✨ Velkommen til oss")
   - **Hovedoverskrift**: Main heading. Use `<burgundy>word</burgundy>` for burgundy color, `<gold>word</gold>` for gold color
   - **Beskrivelse**: Paragraph describing the band
   - **Statistikk**: Three stats with emoji and text
3. Click "Save"

### Sponsor Section
1. Click "Nettstedsinnstillinger" → "Sponsor-seksjon"
2. Edit the badge, heading, and description
3. Click "Save"

## Managing Social Media Links

1. Click "Nettstedsinnstillinger" → "Sosiale medier"
2. Find the platform you want to update
3. Change the URL (or add a new platform)
4. Click "Save"

## Updating Contact Information

1. Click "Nettstedsinnstillinger" → "Kontaktinformasjon"
2. Update email, address, or phone number
3. Click "Save"

## Managing Gallery Images

1. Click "Galleri" → "Galleribilder"
2. Add/remove/reorder images
3. For each image:
   - **Bilde**: Upload or select an image
   - **Alt-tekst**: Describe the image for accessibility
   - **Størrelse**: "1" for small, "2" for double-width
4. Click "Save"

**Image Tips:**
- Resize images to max 1920px width before uploading to keep the site fast
- Use descriptive alt text for accessibility
- Mix sizes (1 and 2) for visual interest

## Publishing Changes

All changes require a few minutes to go live:

1. You save changes in the CMS
2. CMS commits changes to GitHub
3. GitHub notifies Vercel
4. Vercel runs the build script to generate new JSON files
5. Vercel rebuilds and deploys the site
6. Changes appear live (~2-3 minutes total)

**Be patient!** Refresh the live site after 2-3 minutes to see your changes.

## Tips & Best Practices

### Events
- Keep events up to date - remove old events by unchecking "Publisert"
- Events are automatically sorted by date (earliest first)
- Use clear, descriptive titles

### News
- Only one news item should be "Fremhevet" at a time
- Use the short description wisely - it appears on the homepage
- Regular news items appear in the small cards below the featured news

### Images
- Always provide alt text for accessibility
- Compress images before uploading
- Use high-quality images that represent the band well

### Emojis
- Use relevant emojis that match the content
- Be consistent with emoji choices (e.g., always use 🎵 for concert news)

## Troubleshooting

**Issue: Changes not appearing on the site**
- Wait the full 2-3 minutes for the rebuild
- Check the GitHub repository to verify your changes were committed
- Check Vercel dashboard for build errors
- Clear your browser cache and refresh

**Issue: CMS won't load**
- Check your GitHub account has access to the repository
- Try logging out and back in
- Clear browser cache or try incognito/private mode

**Issue: Images not uploading**
- Check image file size (should be < 10MB)
- Try resizing the image first
- Ensure the image is in a supported format (JPG, PNG, GIF, WebP)

**Issue: Can't save changes**
- Check that all required fields are filled in
- Verify you're logged in to GitHub
- Check your internet connection

## Getting Help

For technical issues or questions:
- Contact the website administrator
- Check the Sveltia CMS documentation: https://github.com/sveltia/sveltia-cms
- Review the Git commit history to see what changed

## Markdown Guide

You can use Markdown formatting in the "Fullt innhold" fields:

```markdown
# Heading 1
## Heading 2
### Heading 3

**Bold text**
*Italic text*

- Bullet point 1
- Bullet point 2

1. Numbered item 1
2. Numbered item 2

[Link text](https://example.com)

![Image alt text](/path/to/image.jpg)
```

## Content Strategy

### Homepage Content
- **Hero**: Update once per season or when band info changes
- **Events**: Keep the next 3 upcoming events visible
- **News**: Post 1-2 news items per month
- **Gallery**: Update after major concerts or events
- **Sponsor CTA**: Update when sponsorship info changes

### Content Calendar Ideas
- Pre-concert announcements (2 weeks before)
- Post-concert recaps (within 1 week after)
- New member welcomes
- Seasonal greetings
- Rehearsal highlights
- Achievement announcements

## Security Notes

- Never share your GitHub credentials
- Only authorized collaborators can access the CMS
- All changes are tracked in Git history
- You can revert changes through GitHub if needed

## Workflow for Major Updates

1. **Plan**: Decide what content needs updating
2. **Prepare**: Gather images, write copy, resize photos
3. **Edit**: Make changes in the CMS
4. **Review**: Double-check all fields before saving
5. **Save**: Click save and wait for deployment
6. **Verify**: Check the live site after 2-3 minutes
7. **Share**: Share the updated site with members

---

**Questions?** Contact the web team for assistance!
