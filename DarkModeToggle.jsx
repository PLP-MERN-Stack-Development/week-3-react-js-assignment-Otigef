import { useState, useEffect } from 'react';

function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [dark]);

  return (
    <button
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
      onClick={() => setDark(!dark)}
    >
      Toggle Dark Mode
    </button>
  );
}

export default DarkModeToggle;