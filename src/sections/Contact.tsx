import React, { useState } from "react";
export default function Contact() {
  const [status, setStatus] = useState<"idle"|"sent">("idle");
  function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sent");
  }
  return (
    <section id="contact" className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="text-2xl md:text-3xl font-semibold">Contact</h2>
        <form onSubmit={onSubmit} className="mt-6 grid gap-4 md:grid-cols-2">
          <input required placeholder="Name" className="border p-3 rounded-2xl" />
          <input required type="email" placeholder="Email" className="border p-3 rounded-2xl" />
          <input placeholder="Phone" className="border p-3 rounded-2xl md:col-span-2" />
          <input placeholder="Business name" className="border p-3 rounded-2xl md:col-span-2" />
          <textarea placeholder="How can we help?" className="border p-3 rounded-2xl md:col-span-2" rows={5} />
          <button className="rounded-2xl px-5 py-3 text-white md:col-span-2" style={{backgroundColor:"#0ea5a7"}}>
            Send
          </button>
        </form>
        {status==="sent" && <p className="mt-4 text-green-700">Thanks! We'll get back to you shortly.</p>}
      </div>
    </section>
  )
}
