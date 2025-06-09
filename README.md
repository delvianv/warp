# Warp Development Assessment

This is a simple weather app that allows users to enter a city name and view basic weather information in real time.

## Design Decisions

- Temperature is displayed in **°C** only, as per regional conventions.
- The app uses **server-side rendering** (SSR) via [Next.js](https://nextjs.org/) to demonstrate performance benefits and SSR expertise.
- No third-party libraries were used to showcase clean, minimal Next.js and React usage.

## Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/delvianv/warp.git
   cd warp
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run development server**

   ```bash
   npm run dev
   ```

4. **Open in your browser**

   Visit http://localhost:3000

5. **Set up your own OpenWeatherMap API key**

   - Sign up for a free account at https://openweathermap.org
   - Create a `.env` file in the root of the project and add your API key

   ```bash
   API_KEY=your_api_key
   ```

## Licence

&copy; [Delvian Valentine](https://delvianv.github.io)
