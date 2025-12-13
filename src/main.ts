import { initializeTitlebar } from './ui/titlebar';
import { initializeModeSelector } from './ui/mode-selector';
import { initializeKeyboard, switchKeyboard } from './ui/keyboard-manager';

/**
 * Main application entry point.
 * Initializes all UI components and loads the keyboard layout.
 */
async function main(): Promise<void> {
  // Initialize window controls
  initializeTitlebar();
  
  // Initialize command mode selector
  initializeModeSelector();
  
  // Load and render keyboard
  await initializeKeyboard();
  
  console.log('Application initialized');
}

// Start the application
main();

// Expose switchKeyboard for console debugging
(window as any).switchKeyboard = switchKeyboard;
