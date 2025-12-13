/**
 * Manages keyboard command mode selection (Linux/Windows vs macOS).
 */

type CommandMode = 'linux' | 'macos';

/**
 * Current active command mode.
 */
let currentMode: CommandMode = 'linux';

/**
 * Explanation text for each mode showing example keyboard shortcuts.
 */
const explanations: Record<CommandMode, string> = {
  linux: 'Commands will use <span class="text-blue-400 font-medium">Ctrl+C</span>, <span class="text-blue-400 font-medium">Ctrl+V</span>, <span class="text-blue-400 font-medium">Alt+Tab</span>, etc.',
  macos: 'Commands will use <span class="text-blue-400 font-medium">Cmd+C</span>, <span class="text-blue-400 font-medium">Cmd+V</span>, <span class="text-blue-400 font-medium">Cmd+Tab</span>, etc.'
};

/**
 * Updates the visual state of mode toggle buttons.
 * 
 * @param mode - The mode to activate
 * @param linuxBtn - Linux/Windows mode button element
 * @param macosBtn - macOS mode button element
 */
function updateButtonStates(
  mode: CommandMode,
  linuxBtn: HTMLButtonElement,
  macosBtn: HTMLButtonElement
): void {
  if (mode === 'linux') {
    linuxBtn.classList.add('bg-neutral-600', 'text-white');
    linuxBtn.classList.remove('text-gray-300', 'hover:bg-neutral-600');
    
    macosBtn.classList.remove('bg-neutral-600', 'text-white');
    macosBtn.classList.add('text-gray-300', 'hover:bg-neutral-600');
  } else {
    macosBtn.classList.add('bg-neutral-600', 'text-white');
    macosBtn.classList.remove('text-gray-300', 'hover:bg-neutral-600');
    
    linuxBtn.classList.remove('bg-neutral-600', 'text-white');
    linuxBtn.classList.add('text-gray-300', 'hover:bg-neutral-600');
  }
}

/**
 * Updates the meta key labels on the keyboard (Win/Cmd).
 * 
 * @param mode - The command mode determining which labels to show
 */
function updateMetaKeyLabels(mode: CommandMode): void {
  const metaLeft = document.querySelector('[data-key="MetaLeft"]');
  const metaRight = document.querySelector('[data-key="MetaRight"]');
  
  if (metaLeft && metaRight) {
    const label = mode === 'linux' ? 'win' : 'cmd';
    const sublabel = mode === 'linux' ? 'alt' : 'opt';
    
    metaLeft.innerHTML = `<span class="text-center leading-tight text-[10px]">${label}<br/>${sublabel}</span>`;
    metaRight.innerHTML = `<span class="text-center leading-tight text-[10px]">${label}<br/>${sublabel}</span>`;
  }
}

/**
 * Sets the active command mode and updates the UI accordingly.
 * 
 * @param mode - The mode to activate ('linux' or 'macos')
 * @param linuxBtn - Linux/Windows mode button element
 * @param macosBtn - macOS mode button element
 * @param explanationText - Element displaying the mode explanation
 */
export function setMode(
  mode: CommandMode,
  linuxBtn: HTMLButtonElement,
  macosBtn: HTMLButtonElement,
  explanationText: HTMLParagraphElement
): void {
  currentMode = mode;
  
  updateButtonStates(mode, linuxBtn, macosBtn);
  explanationText.innerHTML = explanations[mode];
  updateMetaKeyLabels(mode);
  
  console.log('Mode switched to:', mode);
}

/**
 * Gets the current active command mode.
 * 
 * @returns The current mode ('linux' or 'macos')
 */
export function getCurrentMode(): CommandMode {
  return currentMode;
}

/**
 * Initializes the mode selector UI and event listeners.
 */
export function initializeModeSelector(): void {
  const linuxBtn = document.getElementById('mode-linux') as HTMLButtonElement;
  const macosBtn = document.getElementById('mode-macos') as HTMLButtonElement;
  const explanationText = document.getElementById('mode-explanation') as HTMLParagraphElement;

  if (!linuxBtn || !macosBtn || !explanationText) {
    console.error('Mode selector elements not found');
    return;
  }

  linuxBtn.addEventListener('click', () => setMode('linux', linuxBtn, macosBtn, explanationText));
  macosBtn.addEventListener('click', () => setMode('macos', linuxBtn, macosBtn, explanationText));
}
