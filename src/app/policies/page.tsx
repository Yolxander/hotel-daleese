import { FooterComponent } from "@/components/footer";
import { Navbar } from "@/components/Navbar";

export default function PoliciesPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto max-w-3xl px-4 py-24 md:py-32">
        <h1 className="mb-6 text-4xl font-semibold text-gray-900">Policies</h1>
        <div className="space-y-6 text-gray-700">
          <p>
            Thank you for choosing Hotel Daleese. The following policies help us keep a calm,
            respectful stay for every guest. If you have questions, contact us before you book.
          </p>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Reservations</h2>
            <p>
              Rates and availability are confirmed at booking. Please use the contact details on
              our site for special requests or group stays.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Check-in and check-out</h2>
            <p>
              Standard times will be confirmed with your reservation. Early or late arrangements
              may be possible when requested in advance.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Cancellations</h2>
            <p>
              Cancellation and deposit terms depend on your booking channel and dates. We will
              provide the exact policy when you reserve.
            </p>
          </section>
          <section>
            <h2 className="text-xl font-semibold text-gray-900">Conduct</h2>
            <p>
              We ask guests to respect quiet hours, other visitors, and our neighbors. Smoking and
              pets follow local rules and what we confirm at booking.
            </p>
          </section>
        </div>
      </div>
      <FooterComponent />
    </main>
  );
}
