import React from 'react';
import './App.css';
import './Header.css'; // Assuming your CSS file is named Header.css
import './Image.css'; // Assuming your CSS file is named Header.css

function App() {
  // Define handleClick function
  const handleClick = (event) => {
    const element = event.currentTarget;
  
    // Check if the pseudo-element is present
    const snake = element.querySelector('::after');
    if (!snake) {
      console.error('Snake pseudo-element not found.');
      return;
    }
  
    // Add clicked class to trigger header shake animation
    element.classList.add('clicked');
    
    // Increase animation speed of the snake
    snake.style.animationDuration = '0.1s';
    
    // Increase snake thickness
    snake.style.borderLeftWidth = '4px';
    
    // Remove the clicked class and reset animation speed and snake thickness after a short delay
    setTimeout(() => {
      element.classList.remove('clicked');
      snake.style.animationDuration = '4s';
      snake.style.borderLeftWidth = '2px';
    }, 300);
  };

  // Create a 5x5 matrix
  const matrix = Array.from({ length: 5 }, () => Array.from({ length: 5 }, () => null));

  // Add gold background to images
  const imageStyle = {
    backgroundColor: 'gold',
    width: 'calc(12.5% - 10px)',
    height: 'auto',
    borderRadius: '10px',
    margin: '5px',
  };

  return (
    <div className="App">
      <div className="header">
        <div className="header-items">
        <div className="header-item" onClick={(event) => handleClick(event)}>About Section</div>
        <div className="header-item" onClick={(event) => handleClick(event)}>Buying Procedure</div>
        </div>
      </div>  
      <header className="App-header" style={{ fontFamily: 'Anton' }}>
        <h1>BillBoard</h1>
        {/* Display the matrix */}
        {matrix.map((row, rowIndex) => (
          <div key={rowIndex} className="matrix-row">
            {row.map((_, colIndex) => (
              <img key={`${rowIndex}-${colIndex}`} src={"https://fplogoimages.withfloats.com/actual/12830f9cd84b4eb78adcde736fae42d9png"} className="matrix-cell" style={imageStyle} alt="logo" />
            ))}
          </div>
        ))}
        <p>LMAO CHECK FOR GIT Integration.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </header>
    </div>
  );
}

export default App;
