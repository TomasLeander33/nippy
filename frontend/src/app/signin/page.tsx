import { Logo } from "../components/ui/Logo";

export default function SigninPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="p-8 bg-white rounded-xl shadow-md w-full max-w-md">
        <h1 className="text-2xl font-bold mb-4"><Logo className="inline-block mr-2" />Sign In</h1>
        <div>
          <p className="mb-6 text-gray-600">Welcome back! Please sign in to your account. </p>
        </div>
        <form className="flex flex-col gap-4">
          <input type="email" placeholder="Email" className="border p-2 rounded-md" />
          <input type="password" placeholder="Password" className="border p-2 rounded-md" />
          <button type="submit" className="bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700">
            Sign In
          </button>
        </form>
      </div>
    </main>
  )
}