import { Show } from 'solid-js';
import { useUser } from './UserProvider';
import Login from './Login';

import './Auth.scss';

export default function Auth() {
  const [user] = useUser();

  return (
    <div class="page authentication-page" aria-live="polite">
      <h2>Login</h2>
      <Show when={user()} fallback={<Login />}>
        <h1>You're logged in as {user()?.email}</h1>
        <pre>
          <code>{JSON.stringify(user(), null, 2)}</code>
        </pre>
      </Show>
    </div>
  );
}
