# Quick Start Guide for React Portfolio

## 🎯 What's New

Your portfolio is now powered by **React**! It includes:
- ✨ Interactive navigation between Home and Blog pages
- 🌓 Dark/Light mode toggle
- 🔍 Blog search functionality  
- 📱 Fully responsive design with smooth animations
- ⚡ Fast development and build experience

## 🚀 Getting Started (Choose One)

### Option 1: One-Click Install (Windows)
1. Double-click `install.bat`
2. This will install all dependencies
3. Then run: `npm run dev`

### Option 2: Manual Install
1. Open terminal/PowerShell in this folder
2. Run: `npm install`
3. Run: `npm run dev`
4. View at: `http://localhost:3000`

## 📋 Initial Setup Checklist

- [x] React project structure created
- [x] All components built (Navigation, Profile, Blog, Footer)
- [x] Styling with dark/light mode
- [x] Blog search functionality
- [x] Responsive design
- [ ] (Optional) Customize components in `src/components/`
- [ ] (Optional) Update `blog/posts/posts.json` with your posts
- [ ] (Optional) Add your blog markdown files to `blog/posts/`

## 📝 Next Steps

### 1. First Run
```bash
npm run dev
```
- Opens browser at localhost:3000
- Hot reload enabled (changes appear instantly)

### 2. Customize Your Site
- **Profile info**: Edit `src/components/Profile.jsx`
- **Social links**: Modify the `socialLinks` array in Profile.jsx
- **Colors**: Update CSS variables in `src/index.css`
- **Blog posts**: Add to `blog/posts/posts.json`

### 3. Add Blog Posts
1. Create markdown files in `blog/posts/`
2. Update `blog/posts/posts.json` with metadata
3. Posts appear automatically in Blog section

### 4. Build for Production
```bash
npm run build
```
Creates optimized files in `dist/` folder

## 🎨 Interactive Features

### Navigation Bar
- Click "Home" or "Blog" to navigate
- Toggle dark/light mode with sun/moon icon
- Smooth underline animation

### Profile Page
- Click project cards to expand/collapse
- Hover effects on social links
- Animated profile photo

### Blog Page
- Search posts in real-time
- Click posts to view details
- Back button to return to list

## 🔍 File Locations

| Purpose | File |
|---------|------|
| Main React component | `src/App.jsx` |
| Navigation bar | `src/components/Navigation.jsx` |
| Home/Profile page | `src/components/Profile.jsx` |
| Blog page | `src/components/Blog.jsx` |
| Global styles | `src/index.css` |
| Project configuration | `vite.config.js` |
| Dependencies | `package.json` |

## 💻 Available Commands

```bash
# Development server (localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## 🆘 Need Help?

1. **Install fails?** Make sure Node.js is installed: `node --version`
2. **Port in use?** Run: `npm run dev -- --port 3001`
3. **Changes not showing?** Save files and refresh browser
4. **Build fails?** Run: `npm install` again

## 📚 Learn More

- Vite: https://vitejs.dev/guide/
- React: https://react.dev/learn
- Full setup guide: See `REACT_SETUP.md`

---

**Done! Start with `npm run dev` and enjoy your interactive portfolio!** 🚀
