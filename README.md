# sBTC Quick Send 

<div align="center">

**Bitcoin transactions, reimagined**

An embedded wallet application for frictionless sBTC transactions on Stacks

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Stacks](https://img.shields.io/badge/Built%20on-Stacks-5546FF)](https://stacks.co)
[![Turnkey](https://img.shields.io/badge/Powered%20by-Turnkey-00D4FF)](https://turnkey.com)

[Live Demo](https://sbtc-quick-send.vercel.app) • [Video Demo](https://youtu.be/demo) • [Documentation](#documentation) • [Report Bug](https://github.com/username/sbtc-quick-send/issues)

</div>

---

## 📋 Table of Contents

- [Overview](#overview)
- [The Problem](#the-problem)
- [Our Solution](#our-solution)
- [Features](#features)
- [Demo](#demo)
- [Tech Stack](#tech-stack)
- [Architecture](#architecture)
- [Getting Started](#getting-started)
- [Installation](#installation)
- [Configuration](#configuration)
- [Usage](#usage)
- [Development](#development)
- [Testing](#testing)
- [Deployment](#deployment)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgments](#acknowledgments)
- [Contact](#contact)

---

## 🌟 Overview

sBTC Quick Send is a minimal viable product (MVP) that demonstrates how embedded wallets can transform Bitcoin accessibility on Stacks. Built for the **Stacks Builders Challenge 2025**, this application integrates Turnkey's embedded wallet SDK to provide a seamless, frictionless experience for sBTC transactions.

### Key Highlights

- ⚡ **2-second onboarding** - No browser extension installation required
- 🔐 **No seed phrases** - Turnkey handles key management securely
- 💰 **Real-time balances** - Live sBTC balance from Stacks testnet
- 📤 **One-click transactions** - Simplified send flow with clear feedback
- 🌐 **Works everywhere** - Responsive design for any device
- 🔒 **Enterprise security** - Institutional-grade infrastructure

---

## 🔴 The Problem

Traditional cryptocurrency wallets create significant barriers to adoption:

### User Pain Points
- **Complex Setup**: 10-15 minutes to install extensions, create wallets, and backup seed phrases
- **Security Anxiety**: Users must securely store 12-24 word recovery phrases
- **Multiple Confirmations**: Popup windows interrupt user flow
- **Device Switching**: Manual wallet imports when changing devices
- **Technical Barrier**: Steep learning curve for newcomers

### Impact
- **47%** of users abandon crypto apps during wallet setup
- **Average onboarding time**: 8-12 minutes
- **User frustration** with managing multiple wallet extensions
- **Adoption barrier** for mainstream Bitcoin usage

---

## ✨ Our Solution

### Embedded Wallet Architecture

sBTC Quick Send eliminates wallet friction by embedding the wallet directly into the application:

```
Traditional Flow:
Download Extension → Install → Create Wallet → Backup Seed → Import → Connect
⏱️ 10-15 minutes

Embedded Flow:
Click "Connect" → Start Transacting
⏱️ 2 seconds
```

### How It Works

1. **Seamless Authentication**: Users connect instantly without external wallet installations
2. **Invisible Security**: Turnkey's infrastructure handles key management securely
3. **Native Experience**: Wallet lives inside the app - no popup windows
4. **Bitcoin on Stacks**: sBTC enables fast, low-cost Bitcoin transactions with smart contract capabilities

---

## 🎯 Features

### Current Features (MVP)

- ✅ **Embedded Wallet Connection**
  - Turnkey SDK integration
  - Instant wallet creation
  - No browser extension required

- ✅ **Balance Display**
  - Real-time sBTC balance
  - Fetched from Stacks testnet API
  - Automatic updates

- ✅ **Send Transactions**
  - Intuitive send form
  - Address validation
  - Amount validation with balance check
  - Transaction signing via Turnkey
  - Broadcasting to Stacks network

- ✅ **Transaction Status**
  - Loading states during processing
  - Success confirmation with transaction hash
  - Error handling with clear messages
  - Explorer link for verification

- ✅ **User Experience**
  - Clean, modern interface
  - Responsive design (mobile, tablet, desktop)
  - Smooth animations and transitions
  - Clear visual feedback

### Planned Features

- 🔜 Transaction history with filters
- 🔜 QR code scanner for addresses
- 🔜 Contact book management
- 🔜 Multiple account support
- 🔜 Push notifications
- 🔜 Dark mode toggle

---

## 🎬 Demo

### Live Application
🔗 **[Try it now](https://sbtc-quick-send.vercel.app)**

### Video Walkthrough
🎥 **[Watch the demo](https://youtu.be/demo)** (5 minutes)


---

## 🛠️ Tech Stack

### Frontend
- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Lucide React** - Icon library

### Blockchain Integration
- **@stacks/transactions** - Transaction construction and signing
- **@stacks/network** - Network configuration for Stacks
- **Stacks API** - Balance queries and transaction broadcasting

### Wallet Infrastructure
- **Turnkey SDK** - Embedded wallet functionality
- **@turnkey/sdk-react** - React hooks for Turnkey
- **@turnkey/http** - HTTP client for Turnkey API

### Development Tools
- **ESLint** - Code linting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

---

## 🏗️ Architecture

### System Overview

```
┌─────────────────────────────────────────────────────┐
│                   User Interface                     │
│              (React + TailwindCSS)                   │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────┐
│              Application Logic Layer                 │
│  ┌──────────────┐  ┌──────────────┐  ┌───────────┐ │
│  │ Wallet Mgmt  │  │ Transaction  │  │  Balance  │ │
│  │   Hooks      │  │   Handler    │  │  Fetcher  │ │
│  └──────────────┘  └──────────────┘  └───────────┘ │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────┐
│              Integration Layer                       │
│  ┌──────────────────┐         ┌──────────────────┐ │
│  │   Turnkey SDK    │         │   Stacks.js      │ │
│  │  (Wallet Mgmt)   │         │  (Transactions)  │ │
│  └──────────────────┘         └──────────────────┘ │
└────────────────────┬────────────────────────────────┘
                     │
┌────────────────────┴────────────────────────────────┐
│              External Services                       │
│  ┌──────────────────┐         ┌──────────────────┐ │
│  │  Turnkey API     │         │  Stacks Testnet  │ │
│  │ (Key Management) │         │   (Blockchain)   │ │
│  └──────────────────┘         └──────────────────┘ │
└─────────────────────────────────────────────────────┘
```

### Component Structure

```
src/
├── App.jsx                      # Main application component
├── hooks/
│   └── useTurnkeyWallet.js     # Wallet management hook
├── components/                  # Future UI components
├── utils/
│   ├── stacks.js               # Stacks blockchain utilities
│   └── validation.js           # Input validation helpers
├── config/
│   └── turnkey.js              # Turnkey configuration
└── styles/
    └── index.css               # Global styles
```

### Data Flow

```
User Action → UI Component → Custom Hook → SDK/API → Blockchain
     ↓            ↓              ↓            ↓          ↓
  Click Send → App.jsx → useTurnkeyWallet → Turnkey → Stacks
     ↓            ↓              ↓            ↓          ↓
  Feedback  ← UI Update ← State Update ← Response ← Confirmation
```

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**
- **Git**

### Quick Start

```bash
# Clone the repository
git clone https://github.com/username/sbtc-quick-send.git

# Navigate to project directory
cd sbtc-quick-send

# Install dependencies
npm install

# Set up environment variables
cp .env.example .env

# Start development server
npm run dev
```

Visit `http://localhost:5173` to see the application running.

---

## 📦 Installation

### Detailed Setup

1. **Clone the Repository**
   ```bash
   git clone https://github.com/username/sbtc-quick-send.git
   cd sbtc-quick-send
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

   This will install:
   - React and React DOM
   - Turnkey SDK packages
   - Stacks.js libraries
   - TailwindCSS and PostCSS
   - Vite and build tools

3. **Configure Environment**
   ```bash
   cp .env.example .env
   ```

   Edit `.env` with your credentials:
   ```bash
   VITE_TURNKEY_API_BASE_URL=https://api.turnkey.com
   VITE_TURNKEY_ORGANIZATION_ID=your-turnkey-org-id
   VITE_STACKS_NETWORK=testnet
   VITE_STACKS_API_URL=https://api.testnet.hiro.so
   VITE_SBTC_CONTRACT_ADDRESS=ST000000000000000000002AMW42H
   VITE_SBTC_CONTRACT_NAME=sbtc
   ```

4. **Get Turnkey Credentials** (Optional for Demo)
   - Visit [Turnkey Dashboard](https://app.turnkey.com)
   - Create an account
   - Create a new organization
   - Copy your Organization ID
   - Paste into `.env` file

   **Note**: The app works in demo mode without Turnkey credentials for testing purposes.

---

## ⚙️ Configuration

### Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `VITE_TURNKEY_API_BASE_URL` | Turnkey API endpoint | No | `https://api.turnkey.com` |
| `VITE_TURNKEY_ORGANIZATION_ID` | Your Turnkey org ID | No | Demo mode |
| `VITE_STACKS_NETWORK` | Stacks network (testnet/mainnet) | Yes | `testnet` |
| `VITE_STACKS_API_URL` | Stacks API endpoint | Yes | `https://api.testnet.hiro.so` |
| `VITE_SBTC_CONTRACT_ADDRESS` | sBTC contract address | Yes | Testnet address |
| `VITE_SBTC_CONTRACT_NAME` | sBTC contract name | Yes | `sbtc` |

### Turnkey Configuration

The application uses Turnkey's embedded wallet SDK. Configuration is in `src/config/turnkey.js`:

```javascript
export const turnkeyConfig = {
  apiBaseUrl: import.meta.env.VITE_TURNKEY_API_BASE_URL,
  organizationId: import.meta.env.VITE_TURNKEY_ORGANIZATION_ID,
};
```

### Stacks Network Configuration

Network settings are configured in `src/utils/stacks.js`:

```javascript
import { StacksTestnet, StacksMainnet } from '@stacks/network';

const network = import.meta.env.VITE_STACKS_NETWORK === 'mainnet'
  ? new StacksMainnet()
  : new StacksTestnet();
```

---

## 💻 Usage

### Basic Workflow

1. **Connect Wallet**
   - Open the application
   - Click "Connect Turnkey Wallet"
   - Wait for wallet creation (2 seconds)
   - View your wallet address and balance

2. **Check Balance**
   - Balance updates automatically on connection
   - Fetched from Stacks testnet API
   - Displayed in sBTC units

3. **Send sBTC**
   - Enter recipient Stacks address
   - Enter amount to send
   - Click "Send sBTC"
   - Wait for transaction confirmation
   - View transaction hash and explorer link

### Address Format

Stacks addresses start with `ST` (testnet) or `SP` (mainnet):
```
Testnet: ST2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC
Mainnet: SP2JHG361ZXG51QTKY2NQCVBPPRRE2KZB1HR05NNC
```

### Getting Test sBTC

To get testnet sBTC for testing:
1. Visit [Stacks Testnet Faucet](https://explorer.hiro.so/sandbox/faucet?chain=testnet)
2. Enter your wallet address
3. Request STX tokens
4. Use STX to mint test sBTC (implementation coming soon)

---

## 🔧 Development

### Project Structure

```
sbtc-quick-send/
├── public/              # Static assets
├── src/
│   ├── App.jsx         # Main application component
│   ├── main.jsx        # Application entry point
│   ├── index.css       # Global styles with Tailwind
│   ├── hooks/
│   │   └── useTurnkeyWallet.js  # Wallet management hook
│   ├── config/
│   │   └── turnkey.js           # Turnkey configuration
│   └── utils/
│       └── stacks.js            # Stacks utilities
├── .env.example        # Environment variables template
├── .gitignore         # Git ignore rules
├── index.html         # HTML entry point
├── package.json       # Dependencies and scripts
├── vite.config.js     # Vite configuration
├── tailwind.config.js # Tailwind configuration
├── postcss.config.js  # PostCSS configuration
└── README.md          # This file
```

### Available Scripts

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

### Development Server

The dev server runs on `http://localhost:5173` with:
- Hot module replacement (HMR)
- Fast refresh for React
- Instant updates on file changes

### Code Style

This project uses:
- **ESLint** for code quality
- **Prettier** (optional) for formatting
- **TailwindCSS** for styling

Follow these conventions:
- Use functional components with hooks
- Keep components small and focused
- Use descriptive variable names
- Add comments for complex logic
- Handle errors gracefully

---

## 🧪 Testing

### Manual Testing Checklist

- [ ] Wallet connection works
- [ ] Balance displays correctly
- [ ] Address validation works
- [ ] Amount validation works
- [ ] Send button disabled when appropriate
- [ ] Transaction processes successfully
- [ ] Success message displays
- [ ] Error handling works
- [ ] Responsive on mobile
- [ ] Works in different browsers

### Browser Compatibility

Tested and working on:
- ✅ Chrome/Chromium (latest)
- ✅ Firefox (latest)
- ✅ Safari (latest)
- ✅ Edge (latest)

### Testing in Demo Mode

The application works in demo mode without Turnkey credentials:
- Simulates wallet creation
- Shows realistic transaction flow
- Uses mock transaction IDs
- Perfect for testing and demonstrations

---

## 🚢 Deployment

### Build for Production

```bash
# Create optimized production build
npm run build

# Output will be in 'dist/' directory
```

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel --prod
```

Or use the Vercel Dashboard:
1. Import your GitHub repository
2. Configure environment variables
3. Deploy automatically on push

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Build and deploy
npm run build
netlify deploy --prod --dir=dist
```

### Environment Variables in Production

Remember to set these in your hosting platform:
- `VITE_TURNKEY_API_BASE_URL`
- `VITE_TURNKEY_ORGANIZATION_ID`
- `VITE_STACKS_NETWORK`
- `VITE_STACKS_API_URL`
- `VITE_SBTC_CONTRACT_ADDRESS`
- `VITE_SBTC_CONTRACT_NAME`

### Post-Deployment Checklist

- [ ] Environment variables configured
- [ ] Application loads correctly
- [ ] Wallet connection works
- [ ] Transactions process successfully
- [ ] No console errors
- [ ] HTTPS enabled
- [ ] Mobile responsive

---

## 🗺️ Roadmap

### Phase 1: MVP ✅ (Current)
- [x] Embedded wallet integration
- [x] Basic send functionality
- [x] Balance display
- [x] Transaction status
- [x] Responsive design

### Phase 2: Enhanced UX (Q4 2025)
- [ ] Transaction history
- [ ] QR code scanner
- [ ] Contact book
- [ ] Multiple accounts
- [ ] Push notifications
- [ ] Dark mode

### Phase 3: DeFi Integration (Q1 2026)
- [ ] Token swaps (DEX integration)
- [ ] Lending protocols
- [ ] NFT transfers
- [ ] Staking operations
- [ ] Portfolio analytics

### Phase 4: Advanced Features (Q2 2026)
- [ ] Social recovery
- [ ] Biometric authentication
- [ ] Transaction limits
- [ ] Spending policies
- [ ] Team accounts

### Phase 5: Enterprise (Q3 2026)
- [ ] White-label SDK
- [ ] Business accounts
- [ ] Invoice generation
- [ ] Advanced analytics
- [ ] Multi-sig support

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Ways to Contribute

- 🐛 Report bugs
- 💡 Suggest new features
- 📖 Improve documentation
- 🔧 Submit pull requests
- ⭐ Star the repository

### Development Workflow

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Make your changes**
4. **Commit with descriptive messages**
   ```bash
   git commit -m "Add: Amazing new feature"
   ```
5. **Push to your fork**
   ```bash
   git push origin feature/amazing-feature
   ```
6. **Open a Pull Request**

### Pull Request Guidelines

- Describe what your PR does
- Reference any related issues
- Include screenshots for UI changes
- Ensure code passes linting
- Test thoroughly before submitting

### Code of Conduct

Be respectful, inclusive, and constructive. We're all here to build something great together.

---

## 📄 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License

Copyright (c) 2025 [Qasim Rokeeb]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

---

## 🙏 Acknowledgments

### Built For
- **Stacks Builders Challenge 2025** - Innovation sprint for Bitcoin utility

### Powered By
- **[Turnkey](https://turnkey.com)** - Embedded wallet infrastructure and SDK
- **[Stacks](https://stacks.co)** - Bitcoin smart contracts and sBTC protocol
- **[Hiro](https://hiro.so)** - Stacks API and development tools

### Special Thanks
- Turnkey team for elevated transaction limits and Pro subscription prize
- Stacks Foundation for organizing the hackathon
- sBTC working group for protocol development
- Open-source community for inspiration and tools

### Resources
- [Turnkey Documentation](https://docs.turnkey.com)
- [Stacks Documentation](https://docs.stacks.co)
- [sBTC Guide](https://stacks.org/sbtc)
- [Clarity Smart Contracts](https://docs.stacks.co/clarity)

---

## 📞 Contact

### Project Links
- **Live Demo**: [https://sbtc-quick-send.vercel.app](https://sbtc-quick-send.vercel.app)
- **GitHub**: [https://github.com/qasimrokeeb/sbtc-quick-send](https://github.com/qasim-rokeeb/sbtc-quick-send)


### Maintainer
- **Name**: Qasim Rokeeb
- **Email**: qasimrokeeb@email.com
- **Twitter**: [@qasimrokeeb](https://x.com/qasimrokeeb)



---

## 🎯 Project Status

**Status**: ✅ **MVP Complete - Hackathon Submission**

**Current Version**: 1.0.0  
**Last Updated**: October 13, 2025  
**Next Milestone**: Enhanced features (Q4 2025)

---

## ⭐ Support the Project

If you find this project useful:

- ⭐ **Star the repository**
- 🐦 **Share on social media**
- 🔄 **Fork and contribute**
- 💬 **Spread the word**

---



<div align="center">

**Made with ❤️ for the Bitcoin community**

**Built on 🔶 Stacks | Powered by ⚡ Turnkey | Secured by ₿ Bitcoin**

[⬆ Back to Top](#sbtc-quick-send-)

---

*"The future of Bitcoin is programmable. The future of wallets is embedded."*

</div>