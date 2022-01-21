import { ClientOnly } from 'remix-utils';
import { Terminal } from '~/components/Terminal.client';

export default function Index() {
  return (
    <div style={{ fontFamily: 'system-ui, sans-serif', lineHeight: '1.4' }}>
      <ClientOnly>
        <Terminal />
      </ClientOnly>
    </div>
  );
}
