# Conway's Game of Life - Angular Implementation


[![Build Status](https://img.shields.io/badge/build-passing-brightgreen)](https://github.com/vitorsfranca/ai-game-of-life/actions)
[![Live Demo](https://img.shields.io/badge/online-yes-brightgreen)](https://vitorsfranca.github.io/ai-game-of-life/)

## 🌟 Overview

This project is an interactive implementation of Conway's Game of Life using Angular and TypeScript. It showcases modern web development techniques, reactive programming, and cellular automaton simulation.

## 🚀 Features

- Real-time simulation of Conway's Game of Life
- Interactive grid with adjustable cell size
- Play, pause, and clear controls
- Randomize grid functionality
- Statistics tracking (generations, living cells, max/min population)
- Pattern detection and highlighting
- Informative modal with game rules and explanation

## 🛠️ Technologies Used

- Angular 17.3.0
- TypeScript 5.4.2
- RxJS 7.8.0
- Angular Material 17.3.10
- HTML5 Canvas for rendering

## 🤖 AI-Powered Development

This project, including this README, was entirely developed using AI-assisted tools and techniques:

- **Cursor IDE**: An AI-powered code editor that provided intelligent code suggestions and completions throughout the development process.
- **Claude-3.5-sonnet**: An advanced AI model by Anthropic, used for generating code, solving problems, and providing guidance on best practices in Angular development.

The combination of Cursor IDE and Claude-3.5-sonnet enabled rapid prototyping, efficient problem-solving, and the implementation of complex features like pattern detection and dynamic grid rendering.

## 🧠 How It Works

The core of the simulation is powered by the `GameOfLifeService`, which manages the grid state and applies the Game of Life rules. The main `AppComponent` handles the UI and game loop, while the `GameInfoModalComponent` provides additional information about the game.

### Key Components:

1. **Grid Initialization and Rendering**
```typescript:src/app/app.component.ts
startLine: 35
endLine: 84
```

2. **Game Loop and Animation**
```typescript:src/app/app.component.ts
startLine: 86
endLine: 100
```

3. **Pattern Detection**
```typescript:src/app/services/game-of-life.service.ts
startLine: 1
endLine: 92
```

## 🎨 Cool Stuff

- **Dynamic Cell Sizing**: The grid automatically adjusts to fit the screen while maintaining playability.
- **Pattern Highlighting**: The game attempts to detect and highlight interesting patterns that emerge during play. However, the current implementation is not perfect and may be refined in future updates, leveraging AI assistance for improvements.
- **Responsive Controls**: The UI adapts to the game state, enabling/disabling buttons as appropriate.
- **Performance Optimization**: Using Canvas for rendering ensures smooth performance even with large grids.

## 🚦 Getting Started

- Clone the repository
- Run `npm install` to install dependencies
- Use `ng serve` to start the development server
- Navigate to `http://localhost:4200/` in your browser

## 🚀 Future Enhancements

While this AI-generated Game of Life implementation is fully functional, there are numerous exciting possibilities for future enhancements. The following features are being considered for future iterations, all of which would be implemented using the same AI-assisted development process:

- [ ] User-defined patterns: Allow users to draw or select known patterns
- [ ] Color themes: Implement various color schemes, possibly with day/night cycles.
- [ ] Speed control: Add a slider to adjust simulation speed.
- [ ] Zoom and pan: Enable users to explore larger grids more easily.
- [ ] Statistics graphs: Visualize population trends over time.
- [ ] Automatic pattern recognition: Identify and label common Game of Life patterns.
- [ ] Multi-state cells: Explore variations with more than two cell states.
- [ ] Performance benchmarks: Analyze and optimize for maximum grid sizes and update speeds.
- [ ] Accessibility improvements: Ensure the game is usable for all players.

These enhancements are part of our ongoing commitment to improve and expand the project using AI-assisted development techniques.

## 🤖 AI-Generated Codebase

It's important to note that the entire codebase for this project, including components, services, and even this README, was generated through AI interactions using Cursor IDE and Claude-3.5-sonnet. The human developer's role was primarily to provide high-level directives and occasional minor adjustments. No significant rewrites or manual coding were performed on the AI-generated code.

This approach demonstrates the potential of AI-assisted development in creating functional, complex applications with minimal human intervention. The project serves as a testament to the capabilities of current AI technologies in software development.

## 🔍 Known Limitations

While the current implementation is functional, there are some known limitations:

1. Pattern detection algorithm: The current method for identifying patterns is not perfect and may miss some complex formations. Future iterations may improve upon this using more advanced AI-generated algorithms.

2. Performance on very large grids: While the use of Canvas provides good performance, extremely large grids may still experience slowdowns on some devices.

3. Browser compatibility: The application has been primarily tested on modern browsers. Compatibility with older browsers may be limited.

These limitations are areas for potential improvement in future updates, which would also be approached using AI-assisted development methods.

## 🤝 Contributing

Contributions are welcome! Feel free to submit pull requests or open issues to improve the game or add new features.

## 📜 License

This project is open-source and available under the MIT License.