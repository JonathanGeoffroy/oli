import { Show } from 'solid-js';
import { useUser } from './UserProvider';
import Login from './Login';

export default function Auth() {
  const [user] = useUser();

  return (
    <div class="row flex-center flex">
      <div class="col-6 form-widget" aria-live="polite">
        <h1 class="header">Supabase + SolidJS</h1>
        <Show when={user()} fallback={<Login />}>
          <h1>You're logged in as {user()?.email}</h1>
          <pre>
            <code>{JSON.stringify(user(), null, 2)}</code>
          </pre>
        </Show>
      </div>
    </div>
  );
}
