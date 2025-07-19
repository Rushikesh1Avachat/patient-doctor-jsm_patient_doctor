// types.d.ts

/* eslint-disable no-unused-vars */

// Use this in server components like page.tsx
type PageProps= {
  params: {
    userId: string;
  };
  searchParams?: {
    [key: string]: string | string[] | undefined;
  };
   searchParamsappointment?: {
    [key: string]: string | string[] | undefined;
  };
}

// Use this if you need generic key-value access for searchParams
export type SearchParamProps = {
  params: { [key: string]: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export type Gender = "male" | "female" | "other";
export type Status = "pending" | "scheduled" | "cancelled";

// User Creation
export interface CreateUserParams {
  user?:string | undefined,
  name: string;
  email: string;
  phone: string;
}

// Logged-in User
export interface User extends CreateUserParams {
  $id: string;
}

// Registration Form
export interface RegisterUserParams extends CreateUserParams {
  userId: string;
  birthDate: Date;
  gender: Gender;
  address: string;
  occupation: string;
  emergencyContactName: string;
  emergencyContactNumber: string;
  primaryPhysician: string;
  insuranceProvider: string;
  insurancePolicyNumber: string;
  allergies?: string;
  currentMedication?: string;
  familyMedicalHistory?: string;
  pastMedicalHistory?: string;
  identificationType?: string;
  identificationNumber?: string;
  identificationDocument?: FormData;
  privacyConsent: boolean;
}

// Create Appointment
export type CreateAppointmentParams = {
  userId: string;
  patient: string;
  primaryPhysician: string;
  reason: string;
  schedule: Date;
  status: Status;
  note?: string;
};

// Update Appointment
export type UpdateAppointmentParams = {
  appointmentId: string;
  userId: string;
  timeZone: string;
  appointment: Appointment;
  type: "update" | "reschedule" | "cancel";
};
