"use client";
import { useFormState } from "react-dom";
import { registerAction } from "@/app/actions/auth/register-action";
import { Button } from "@/components/ui/button"
import Link from "next/link";

export default function RegisterForm() {
  const initialState = {};
  const [state, dispatch] = useFormState(registerAction, initialState);
  return (
    <form className="space-y-3" action={dispatch}>
      <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
        <h1 className="mb-3 text-2xl">
          Please register to continue.
        </h1>
        <div className="w-full">
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="username"
            >
              Username
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="username"
                type="text"
                name="username"
                placeholder="Enter your email or username"
              />
              
            </div>
            {state?.errors?.username ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.username.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div>
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="email"
            >
              Email
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="email"
                type="email"
                name="email"
                placeholder="Enter your email or username"
              />
              
            </div>
            {state?.errors?.email ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.email.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
          <div className="mt-4">
            <label
              className="mb-3 mt-5 block text-xs font-medium text-gray-900"
              htmlFor="password"
            >
              Password
            </label>
            <div className="relative">
              <input
                className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
                id="password"
                type="password"
                name="password"
                placeholder="Enter password"
                minLength={6}
              />
              
            </div>
            {state?.errors?.password ? (
              <div
                id="customer-error"
                aria-live="polite"
                className="mt-2 text-sm text-red-500"
              >
                {state.errors.password.map((error: string) => (
                  <p key={error}>{error}</p>
                ))}
              </div>
            ) : null}
          </div>
        </div>
        <LoginButton />
        <div className="flex h-8 items-end space-x-1">
          {state?.message ? (
            <div
              id="customer-error"
              aria-live="polite"
              className="mt-2 text-sm text-red-500"
            >
              <p>{state.message}</p>
            </div>
          ) : null}
        </div>
        <Link className="text-muted text-gray-400" href="/">
          back
        </Link>
      </div>
    </form>
  );
}

function LoginButton() {
  return (
    <Button className="mt-4 w-full">
      Register 
    </Button>
  );
}
