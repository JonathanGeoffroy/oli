import { Show, lazy } from 'solid-js';
import { useUser } from './UserProvider';
import { Router, Route } from '@solidjs/router';
const Auth = lazy(() => import('./Auth'));
const Home = lazy(() => import('./Home'));
const NotFound = lazy(() => import('./NotFound'));

export default function () {
  const [user] = useUser();

  return (
    <Show when={user()} fallback={<Auth />}>
      <Router>
        <Route path="/" component={Home} />
        <Route path="*404" component={NotFound} />
      </Router>
    </Show>
  );
}
