import { AppointmentForm } from "@/components/AppointmentForm";
import { getPatient } from "@/lib/actions/patient.action";
import Image from "next/image";



const Appointment = async ({ params, searchParams }: PageProps) => {
  const userId = params.userId;
  const appointmentId = searchParams?.appointmentId ?? "";

  const patient = await getPatient(userId);

  return (
    <div className="flex h-screen max-h-screen">
      <section className="container my-auto">
        <div className="max-w-[860px] flex-1 justify-between">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="logo"
            className="mb-12 h-10 w-fit"
          />

          <AppointmentForm
            patientId={patient?.$id}
            userId={userId}
            type="create"
          />

          <p className="mt-10 py-12 text-sm text-gray-400">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/appointment-img.png"
        height={1500}
        width={1500}
        alt="appointment"
        className="max-w-[390px] bg-bottom object-cover"
      />
    </div>
  );
};

export default Appointment;

