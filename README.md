# GhanaBank Dashboard

A modern, responsive banking dashboard built with React and Tailwind CSS.
This project simulates a real-world retail banking interface that features
account summaries, transaction history, spending analytics and more.

---

## Live Demo

[View Live →](https://lud-banking-dashboard.vercel.app/)

---

## Screenshots

<img width="1876" height="532" alt="banking-dashboard1" src="https://github.com/user-attachments/assets/4e820bfe-31ff-4ac4-b4ba-caf8cba1b281" />
<img width="1803" height="805" alt="banking-dashboard2" src="https://github.com/user-attachments/assets/0fcd3454-f818-46bb-a5b2-85357ac0e8ff" />
<img width="1825" height="718" alt="banking-dashboard3" src="https://github.com/user-attachments/assets/226ad83f-195c-4b26-93ca-9c1d8aec4dcc" />




---

## Features

- Account summary with balance and account details
- Income vs Expenses bar chart (Recharts)
- Search and filter transactions in real time
- Recent transactions list with color-coded credits and debits
- Fully responsive layout for mobile and desktop
- Navbar with notifications and profile section

---

## Built With

- [React](https://react.dev/) — UI component library
- [Vite](https://vitejs.dev/) — Fast development build tool
- [Tailwind CSS](https://tailwindcss.com/) — Utility-first CSS framework
- [Recharts](https://recharts.org/) — Charting library for React

---

## Getting Started

### Prerequisites
- Node.js v22+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/TheNarh/Banking-Dashboard.git

# Navigate into the project
cd banking-dashboard

# Install dependencies
npm install

# Start the development server
npm run dev
```

Then open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure
src/
├── components/
│   ├── Navbar.jsx          # Top navigation bar
│   ├── AccountCard.jsx     # Account holder info and balance
│   ├── SummaryCard.jsx     # Monthly income vs expenses summary
│   ├── SpendingChart.jsx   # Bar chart visualization
│   └── TransactionList.jsx # Searchable, filterable transaction list
├── App.jsx                 # Root component
├── main.jsx                # App entry point
└── index.css               # Global styles + Tailwind

---

---

## Planned Features

- [ ] Dark mode toggle
- [ ] Authentication screen (login page)
- [ ] More chart types (line chart, pie chart)
- [ ] Transaction categories with icons
- [ ] Export transactions as CSV

---

## Author

**Ludwig Narh**
- GitHub: [@TheNarh](https://github.com/TheNarh)
- Website: [ludwignarh.vercel.app](https://ludwignarh.vercel.app)

---



