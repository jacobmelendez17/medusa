import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

	async function handleLogin(e: React.FormEvent) {
		e.preventDefault();

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password
		});

		if (error) {
			alert(error.message);
		} else {
			alert('Logged in!');
		}
	}

	return (
		<form onSubmit={handleLogin} className="mx-auto mt-20 max-w-md space-y-4">
			<h1 className="text-2x1 font-bold">Login</h1>
			<input
				className="w-full rounded border p-2"
				type="email"
				placeholder="Email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className="w-full rounded border p-2"
				type="password"
				placeholder="Password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button type="submit" className="w-full rounded bg-blue-600 p-2 text-white">
				Log In
			</button>
		</form>
	);
}
