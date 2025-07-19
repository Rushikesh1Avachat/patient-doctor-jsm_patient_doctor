import { Models } from "node-appwrite";
import { number } from "zod";

export interface Patient extends Models.Document {
  userId: string;
  name: string;
  email: string;
  phone: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies: string | undefined;
  currentMedication: string | undefined;
  familyMedicalHistory: string | undefined;
  pastMedicalHistory: string | undefined;
  identificationType: string | undefined;
  identificationNumber: string | undefined;
  identificationDocument: FormData | undefined;
  privacyConsent: boolean;
}

export interface Appointment extends Models.Document {
  patient: Patient;
  schedule: Date;
  status: Status;
  primaryPhysician: string;
  reason: string;
  note: string;
  userId: string;
  cancellationReason: string | null;
}
export async function createAccount({
  email,
  password,
  name,
  phone
}: {
  email: string;
  password: string;
  name: string;
  phone:number
}) {
  try {
    //@ts-ignore
    const response = await account.create(ID.unique(), email, password, name,phone);
    return response;
  } catch (error: any) {
    console.error("Account creation failed:", error.message);
    throw error;
  }
}