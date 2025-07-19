// Ensure this exports a configured Appwrite `account` instance
import { createAccount } from "@/types/appwrite.type";
import { Models } from "appwrite";

export const getLoggedInUser = async (): Promise<{
  $id: string;
  name: string;
  email: string;
  phone: string;
} | null> => {
  try {
    //@ts-ignore
    const user: Models.User<Models.Preferences> = await createAccount();

    return {
      $id: user.$id,
      name: user.name,
      email: user.email,
      phone: user.phone,
    };
  } catch (error) {
    console.error("Error fetching logged-in user:", error);
    return null;
  }
};
