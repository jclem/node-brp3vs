import { useEffect, useRef } from 'react';
import { Terminal as XTerm } from 'xterm';

export function Terminal() {
  const termRootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const termRoot = termRootRef.current;

    if (!termRoot) {
      throw new Error(`No terminal root found`);
    }

    const terminal = new XTerm();
    terminal.open(termRoot);
    terminal.write('Hello from \x1B[1;3;31mxterm.js\x1B[0m $ ');
  }, []);

  return <div ref={termRootRef} />;
}
