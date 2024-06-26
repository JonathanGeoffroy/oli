import { Show, createSignal } from 'solid-js';
import supabaseClient from './supabaseClient';
import { useUser } from './UserProvider';
import { Input } from 'ui';

export default function () {
  const [user] = useUser();

  const [loading, setLoading] = createSignal(false);
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal<string | null>(null);

  const handleLogin = async (e: SubmitEvent) => {
    e.preventDefault();

    try {
      setLoading(true);
      const { error } = await supabaseClient.auth.signInWithPassword({
        email: email(),
        password: password(),
      });

      setError(error?.message ?? null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Show when={!user()} fallback={<p>Already logged in</p>}>
      <div>
        <form class="form-widget" onSubmit={handleLogin}>
          <div>
            <label for="email">Email</label>
            <input
              id="email"
              class="inputField"
              type="email"
              placeholder="Your email"
              value={email()}
              onChange={(e) => setEmail(e.currentTarget.value)}
            />
          </div>
          <div>
            <label for="password">Password</label>
            <input
              id="password"
              class="inputField"
              type="password"
              placeholder="Your password"
              value={password()}
              onChange={(e) => setPassword(e.currentTarget.value)}
            />
          </div>
          <div>
            <button type="submit" class="button block" aria-live="polite">
              {loading() ? <span>Loading</span> : <span>Sign in</span>}
            </button>
          </div>
          <Show when={error()}>
            <p class="errored">{error()}</p>
          </Show>
        </form>
      </div>
    </Show>
  );
}
