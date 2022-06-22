import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const googleAuthProvider = new GoogleAuthProvider();

export default function Login() {
    const login = () => signInWithPopup(getAuth(), googleAuthProvider);

    return (
        <div className="px-5">
            <h1 className="text-3xl text-slate-300 mb-1">Login</h1>
            <p className="text-slate-400 mb-5">We use Google for authentication!</p>

            <button
                className="bg-slate-700 border-2 border-slate-700 hover:bg-transparent focus:bg-transparent px-3 py-2 rounded-lg outline-none"
                onClick={login}
            >
                Sign in with Google
            </button>
        </div>
    );
}
