import { User } from '@supabase/supabase-js';
import {
  Accessor,
  ParentProps,
  Setter,
  createContext,
  createEffect,
  createSignal,
  useContext,
} from 'solid-js';
import supabase from './supabaseClient';

type UserContextType = [Accessor<User | null>, Setter<User | null>];
const UserContext = createContext<UserContextType>([() => null, () => null]);

export function useUser(): UserContextType {
  return useContext(UserContext);
}

export default function (props: ParentProps) {
  const userSignal: UserContextType = createSignal<User | null>(null);
  const [, setUser] = userSignal;

  createEffect(() => {
    supabase.auth.getSession().then((data) => {
      setUser(data.data.session?.user ?? null);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
  });

  return (
    <UserContext.Provider value={userSignal}>
      {props.children}
    </UserContext.Provider>
  );
}
