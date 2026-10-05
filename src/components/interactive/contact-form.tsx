// src/components/interactive/contact-form.tsx
"use client";

import { useActionState, useEffect, useRef } from "react";
import { useFormStatus } from "react-dom";
import { Send, CheckCircle2, AlertCircle } from "lucide-react";
import { submitContactForm } from "@/app/actions/contact";

// Sub-component to handle the loading state of the button
function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-all disabled:opacity-70 disabled:cursor-not-allowed active:scale-95"
    >
      {pending ? (
        <span className="inline-flex items-center gap-2">
          <span className="w-4 h-4 border-2 border-zinc-950/30 border-t-zinc-950 rounded-full animate-spin" />
          Sending...
        </span>
      ) : (
        <>
          Send Message <Send className="w-4 h-4" />
        </>
      )}
    </button>
  );
}

export function ContactForm() {
  const [state, formAction] = useActionState(submitContactForm, {
    success: false,
    message: "",
  });
  const formRef = useRef<HTMLFormElement>(null);

  // Clear form on success
  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {/* Name Input */}
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-sm font-medium text-zinc-400">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="John Doe"
            required
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
          />
          {state.errors?.name && <p className="text-xs text-red-400">{state.errors.name[0]}</p>}
        </div>

        {/* Email Input */}
        <div className="flex flex-col gap-3">
          <label htmlFor="email" className="text-sm font-medium text-zinc-400">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="john@example.com"
            required
            className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all"
          />
          {state.errors?.email && <p className="text-xs text-red-400">{state.errors.email[0]}</p>}
        </div>
      </div>

      {/* Message Textarea */}
      <div className="flex flex-col gap-3">
        <label htmlFor="message" className="text-sm font-medium text-zinc-400">Message</label>
        <textarea
          id="message"
          name="message"
          rows={5}
          placeholder="How can I help you?"
          required
          className="w-full bg-zinc-900/50 border border-zinc-800 rounded-xl px-4 py-3 text-zinc-100 placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 focus:border-emerald-500 transition-all resize-y min-h-30"
        />
        {state.errors?.message && <p className="text-xs text-red-400">{state.errors.message[0]}</p>}
      </div>

      {/* Status Messages */}
      {state.message && (
        <div className={`p-4 rounded-xl flex items-start gap-2 border ${state.success ? 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400' : 'bg-red-500/10 border-red-500/20 text-red-400'}`}>
          {state.success ? <CheckCircle2 className="w-5 h-5 shrink-0" /> : <AlertCircle className="w-5 h-5 shrink-0" />}
          <p className="text-sm font-medium">{state.message}</p>
        </div>
      )}

      {/* Submit Button */}
      <div className="pt-2 flex justify-end">
        <SubmitButton />
      </div>
    </form>
  );
}