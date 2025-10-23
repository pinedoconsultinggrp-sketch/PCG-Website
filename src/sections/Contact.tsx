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
        <form
  name="contact"
  method="POST"
  data-netlify="true"
  className="flex flex-col gap-4 max-w-md mx-auto"
>
  <input type="hidden" name="form-name" value="contact" />
  <label className="flex flex-col">
    <span className="text-sm font-semibold mb-1">Name</span>
    <input
      type="text"
      name="name"
      required
      className="border rounded-lg px-3 py-2"
    />
  </label>

  <label className="flex flex-col">
    <span className="text-sm font-semibold mb-1">Email</span>
    <input
      type="email"
      name="email"
      required
      className="border rounded-lg px-3 py-2"
    />
  </label>

  <label className="flex flex-col">
    <span className="text-sm font-semibold mb-1">Message</span>
    <textarea
      name="message"
      rows={5}
      required
      className="border rounded-lg px-3 py-2"
    ></textarea>
  </label>

  <button
    type="submit"
    className="bg-teal-600 text-white font-semibold rounded-lg px-4 py-2 hover:bg-teal-700"
  >
    Send Message
  </button>
</form>

  )
}
