FateFi - Gasless Social Predictions

A market prediction platform that uses Next.js 15 with React 19, Account Abstraction for a gasless experience, and Farcaster integration.

## 🚀 Features

- **Next.js 15** with App Router
- **React 19** with the latest features
- **TypeScript** for type safety
- **Tailwind CSS** with shadcn/ui components
- **Privy** for authentication and embedded wallets
- **Farcaster** integration for social features
- **Account Abstraction** for gasless transactions
- **Responsive Design** for all devices

## 🛠 Tech Stack

- **Framework**: Next.js 15.3.4
- **React**: 19.1.0
- **TypeScript**: 5.8.3
- **Styling**: Tailwind CSS 3.4.1
- **UI Components**: Radix UI + shadcn/ui
- **Auth**: Privy
- **Icons**: Lucide React
- **State Management**: React hooks
- **Database**: Prisma (optional)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+
- npm or yarn
- Git

### Installation

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd FateFi
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Setup environment variables:

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with the appropriate values:

   ```bash
   NEXT_PUBLIC_PRIVY_APP_ID=your_privy_app_id
   # ... other variables
   ```

4. Run the development server:

   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
src/
├── app/                  # Next.js App Router
│   ├── dashboard/       # Dashboard pages
│   ├── settings/        # Settings pages
│   ├── layout.tsx       # Root layout
│   ├── page.tsx         # Homepage
│   └── globals.css      # Global styles
├── components/          # React components
│   ├── ui/             # shadcn/ui components
│   ├── dashboard/      # Dashboard-specific components
│   ├── settings/       # Settings-specific components
│   └── ...             # Other components
├── hooks/              # Custom React hooks
├── lib/                # Utilities and configs
│   ├── privy/         # Privy configuration
│   └── utils.ts       # Utility functions
└── types/              # TypeScript type definitions
```

## 🔧 Development

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint
```

### Adding New Components

1. Create a component in `src/components/`
2. Export it from the appropriate file
3. Import and use it in other pages/components

### Styling

- Use Tailwind CSS classes
- Custom components use shadcn/ui
- Dark mode is supported by default

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to your Git repository
2. Connect the repository on [Vercel](https://vercel.com)
3. Set environment variables
4. Deploy!

### Other Platforms

This app can be deployed to any platform that supports Node.js:

- Netlify
- Railway
- AWS
- Google Cloud
- etc.

## 🔐 Environment Variables

```bash
# Authentication
NEXT_PUBLIC_PRIVY_APP_ID=
NEXT_PUBLIC_FARCASTER_APP_ID=

# Analytics
NEXT_PUBLIC_POSTHOG_KEY=
NEXT_PUBLIC_POSTHOG_HOST=

# Database (optional)
DATABASE_URL=

# API
NEXT_PUBLIC_API_URL=
```

## 📝 Contributing

1. Fork the project
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have questions or issues, please open an issue in the GitHub repository or contact the development team.

---

Built with ❤️ using Next.js 15 & React 19 FateFi - Gasless Social Predictions

