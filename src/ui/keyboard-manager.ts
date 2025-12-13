import { KeyboardRenderer } from '../keyboards/renderer';
import { KeyboardLoader } from '../keyboards/loader';

/**
 * Manages keyboard layout loading and switching.
 */

/** The active keyboard renderer instance */
let keyboardRenderer: KeyboardRenderer;

/** ID of the currently loaded keyboard */
let currentKeyboardId: string;

/**
 * Initializes and renders the keyboard layout.
 * 
 * Attempts to auto-detect the connected keyboard, falls back
 * to the default keyboard if detection is not available.
 */
export async function initializeKeyboard(): Promise<void> {
  try {
    console.log('Loading keyboard...');
    
    let keyboard = await KeyboardLoader.detectKeyboard();
    
    if (!keyboard) {
      keyboard = await KeyboardLoader.loadDefaultKeyboard();
    }

    currentKeyboardId = keyboard.id;
    console.log('Loaded:', currentKeyboardId);
    
    keyboardRenderer = new KeyboardRenderer('keyboard');
    keyboardRenderer.render(keyboard.html);
    
    console.log('Keyboard rendered');
  } catch (error) {
    console.error('Failed to load keyboard:', error);
  }
}

/**
 * Switches to a different keyboard layout.
 * 
 * @param keyboardId - The ID of the keyboard layout to switch to
 * 
 * @example
 * await switchKeyboard('logitech-k380');
 */
export async function switchKeyboard(keyboardId: string): Promise<void> {
  try {
    const html = await KeyboardLoader.loadTemplate(keyboardId);
    keyboardRenderer.render(html);
    currentKeyboardId = keyboardId;
    console.log('Switched to:', keyboardId);
  } catch (error) {
    console.error('Failed to switch keyboard:', error);
  }
}

/**
 * Gets the ID of the currently loaded keyboard.
 * 
 * @returns The current keyboard ID
 */
export function getCurrentKeyboardId(): string {
  return currentKeyboardId;
}
