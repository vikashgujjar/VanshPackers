import Swal from "sweetalert2";
import { siteConfig } from "./site-data";

type LeadPayload = {
  name: string;
  phone: string;
  email?: string;
  serviceType: string;
  message: string;
};

// Shared submission path for every quote/contact form on the site — posts to
// the same inbox-relay API with Vansh's own company details. On success the
// caller redirects to /thank-you; no modal is shown there. A SweetAlert2
// error is still shown inline on failure, since the user stays on the form.
export async function submitLead(payload: LeadPayload): Promise<boolean> {
  try {
    const response = await fetch("https://mail.futuretouch.org/api/send-message", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        company: siteConfig.name,
        company_name: siteConfig.name,
        name: payload.name,
        phone: payload.phone,
        email: payload.email || "N/A",
        serviceType: payload.serviceType,
        message: payload.message,
        mail_to: "vanshpackermover@gmail.com",
      }),
    });

    if (response.ok) return true;

    await Swal.fire("Error", "Failed to send message. Please try again.", "error");
    return false;
  } catch (error) {
    console.error(error);
    await Swal.fire("Error", "Something went wrong!", "error");
    return false;
  }
}
