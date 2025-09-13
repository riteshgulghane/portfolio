# Portfolio - React + Tailwind CSS

A modern, responsive portfolio website built with React and styled with Tailwind CSS. This project was created using Vite for a faster and leaner development experience.

![Project Preview](https://via.placeholder.com/800x400?text=Portfolio+Preview)

## ✨ Features

- 🚀 Fast loading with Vite
- 📱 Fully responsive design using Tailwind CSS
- 🎨 Modern UI with smooth transitions
- 🧩 Component-based architecture
- 🔍 SEO-friendly setup
- 🌙 Dark/light mode support through Tailwind

## 🛠️ Technologies Used

- React 18
- Tailwind CSS
- Vite
- ESLint for code quality
- @tailwindcss/typography plugin

## 📋 Prerequisites

- Node.js (version 16.x or higher)
- npm or yarn

## 🚀 Getting Started

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/portfolio.git
   cd portfolio
   ```

2. Install the dependencies:
   ```bash
   npm install
   # or
   yarn
   ```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

The site will be available at [http://localhost:5173](http://localhost:5173).

### Building for Production

Generate a production build:

```bash
npm run build
# or
yarn build
```

Preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## 🚢 Deployment

### Deploying to Vercel

This project is optimized for deployment on [Vercel](https://vercel.com/).

1. Create an account on Vercel if you don't have one.

2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

3. Deploy using the CLI:
   ```bash
   vercel
   ```

4. For production deployment:
   ```bash
   vercel --prod
   ```

Alternatively, you can connect your GitHub repository to Vercel for automatic deployments:

1. Push your code to GitHub
2. Import the project in the Vercel dashboard
3. Configure your project settings (the defaults should work fine)
4. Deploy!

## 📁 Project Structure

```
/
├── public/           # Static files
├── src/
│   ├── assets/       # Images, fonts, etc.
│   ├── components/   # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   ├── pages/        # Page components
│   │   └── Home.jsx
│   ├── App.jsx       # Main app component
│   └── index.css     # Global styles with Tailwind
├── index.html        # HTML template
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js # PostCSS configuration
└── eslint.config.js  # ESLint configuration
```

## 📝 Customization

### Tailwind Configuration

You can customize the Tailwind configuration in `tailwind.config.js`:

- Add custom colors
- Modify breakpoints
- Configure plugins
- Extend the default theme

### Adding New Pages

Create new page components in the `/src/pages` directory and add routes in `App.jsx`.

## 📚 Resources

- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Vite Documentation](https://vitejs.dev/guide/)
- [Vercel Deployment Documentation](https://vercel.com/docs)

## 📄 License

This project is licensed under the MIT License.
