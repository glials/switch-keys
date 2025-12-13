import { getCurrentWindow } from '@tauri-apps/api/window';

/**
 * Initializes custom window titlebar controls.
 * Handles minimize, maximize, and close window actions.
 */
export function initializeTitlebar(): void {
  const minimizeBtn = document.getElementById('titlebar-minimize');
  const maximizeBtn = document.getElementById('titlebar-maximize');
  const closeBtn = document.getElementById('titlebar-close');

  const appWindow = getCurrentWindow();

  minimizeBtn?.addEventListener('click', () => appWindow.minimize());
  maximizeBtn?.addEventListener('click', () => appWindow.toggleMaximize());
  closeBtn?.addEventListener('click', () => appWindow.close());
}
