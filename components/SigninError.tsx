"use client";

import { useSearchParams } from "next/navigation";

import { classNames } from "@/src/utils";

export function SigninError() {
  const params = useSearchParams();

  const error = params.get("signin_error");

  return error ? (
    <div
      className={classNames(
        "fixed bottom-0 mb-8 bg-primary px-6 py-2 text-white text-center"
      )}
    >
      An error occurred while signing in: {error}
    </div>
  ) : null;
}
