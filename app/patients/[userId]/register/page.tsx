import { getPatient } from "@/lib/actions/patient.action";

import { redirect } from "next/navigation";
import Image from "next/image";
import RegisterForm from "@/components/forms/RegisterForm";
import { createAccount } from "@/types/appwrite.type";

type RegisterProps = {
  params: {
    userId: string;
  };
};

const Register = async ({ params }: RegisterProps) => {
  const { userId } = params;

  const patient = await getPatient(userId);
  if (patient) redirect(`/patients/${userId}/new-appointment`);
//@ts-ignore
  const user = await createAccount(); // Fetch logged-in user with required fields

  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="sub-container max-w-[860px] flex-1 flex-col py-10">
          <Image
            src="/assets/icons/logo-full.svg"
            height={1000}
            width={1000}
            alt="patient"
            className="mb-12 h-10 w-fit"
          />

          <RegisterForm user={user} />

          <p className="copyright py-12">© 2024 CarePluse</p>
        </div>
      </section>

      <Image
        src="/assets/images/register-img.png"
        height={1000}
        width={1000}
        alt="patient"
        className="side-img max-w-[390px]"
      />
    </div>
  );
};

export default Register;
