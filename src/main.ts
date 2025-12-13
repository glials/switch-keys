import { getCurrentWindow } from '@tauri-apps/api/window';

const appWindow = getCurrentWindow();

document
  .getElementById('titlebar-minimize')
  ?.addEventListener('click', () => appWindow.minimize());
document
  .getElementById('titlebar-maximize')
  ?.addEventListener('click', () => appWindow.toggleMaximize());
document
  .getElementById('titlebar-close')
  ?.addEventListener('click', () => appWindow.close());

const linuxBtn = document.getElementById('mode-linux') as HTMLButtonElement;
const macosBtn = document.getElementById('mode-macos') as HTMLButtonElement;
const explanationText = document.getElementById('mode-explanation') as HTMLParagraphElement;

let currentMode: 'linux' | 'macos' = 'linux';

const explanations = {
  linux: 'Commands will use <span class="text-blue-400 font-medium">Ctrl+C</span>, <span class="text-blue-400 font-medium">Ctrl+V</span>, <span class="text-blue-400 font-medium">Alt+Tab</span>, etc.',
  macos: 'Commands will use <span class="text-blue-400 font-medium">Cmd+C</span>, <span class="text-blue-400 font-medium">Cmd+V</span>, <span class="text-blue-400 font-medium">Cmd+Tab</span>, etc.'
};

function setMode(mode: 'linux' | 'macos') {
  currentMode = mode;

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

  explanationText.innerHTML = explanations[mode];

  console.log('Mode switched to:', mode);
}

linuxBtn?.addEventListener('click', () => setMode('linux'));
macosBtn?.addEventListener('click', () => setMode('macos'));

console.log('App initialized');
