import { PageProps } from "@/types"; // Make sure this path matches your project structure
import { AppointmentForm } from "@/components/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";
import { redirect } from "next/navigation";

const Appointment = async ({ params, searchParams }: PageProps) => {
  const userId = params.userId;
  const appointmentId = searchParams?.appointmentId || "";

  const patient = await getPatient(userId);

  if (!patient) {
    // Optionally redirect or show error
    redirect("/not-found"); // Customize as needed
  }

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container my-auto">
        <div className="sub-container max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patient.$id}
            userId={userId}
            type="create"
            //@ts-ignore
            appointment={appointmentId}
          />

          <p className="copyright mt-10 py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="side-img max-w-[390px] bg-bottom"
      />
    </div>
  );
};

export default Appointment;
