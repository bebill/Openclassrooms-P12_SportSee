import {
  USER_MAIN_DATA,
  USER_ACTIVITY,
  USER_AVERAGE_SESSIONS,
  USER_PERFORMANCE,
} from "../data/mockData";

const api = "http://localhost:3000/user";
export const REACT_APP_SHOULD_USE_MOCK = false;

/**
 * Récupère les données USER_MAIN_DATA à partir de l'API ou des données de mock.
 * @param {number} userId L'identifiant de l'utilisateur.
 * @returns {Promise<any>} Une promesse résolue avec les données USER_MAIN_DATA.
 */
export const fetchUserData = async (userId: number): Promise<any> => {
  try {
    // Si nous utilisons des données de mock, retourner directement USER_ACTIVITY
    if (REACT_APP_SHOULD_USE_MOCK) {
      return USER_MAIN_DATA.filter(
        (user: any) => user.id === Number(userId)
      ).pop();
    }
    // Sinon, faire une requête à l'API réelle en utilisant fetch
    const response = await fetch(`${api}/${userId}`);
    if (!response.ok) {
      throw new Error("Erreur lors de la récupération des données.");
    }

    const apiResponse = await response.json();
    return apiResponse.data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données.", error);
    throw error;
  }
};

/**
 * Récupère les données USER_ACTIVITY à partir de l'API ou des données de mock.
 */
export const fetchUserActivity = async (userId: number): Promise<any> => {
  try {
    if (REACT_APP_SHOULD_USE_MOCK) {
      return USER_ACTIVITY.filter(
        (user: any) => user.userId === Number(userId)
      ).pop();
    }

    const response = await fetch(`${api}/${userId}/activity`);
    if (!response.ok) {
      throw new Error(
        "Une erreur s'est produite lors de la récupération des données d'activité."
      );
    }

    const apiResponse = await response.json();
    return apiResponse.data;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données d'activité:",
      error
    );
    throw error;
  }
};

/**
 * Récupère les données USER_AVERAGE_SESSIONS à partir de l'API ou des données de mock.
 */
export const fetchUserAverageSessions = async (
  userId: number
): Promise<any> => {
  try {
    if (REACT_APP_SHOULD_USE_MOCK) {
      return USER_AVERAGE_SESSIONS.filter(
        (user: any) => user.userId === Number(userId)
      ).pop();
    }

    const response = await fetch(`${api}/${userId}/average-sessions`);
    if (!response.ok) {
      throw new Error(
        "Une erreur s'est produite lors de la récupération des données de sessions moyennes."
      );
    }

    const apiResponse = await response.json();
    return apiResponse.data;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données de sessions moyennes:",
      error
    );
    throw error;
  }
};

/**
 * Récupère les données USER_PERFORMANCE à partir de l'API ou des données de mock.
 */
export const fetchUserPerformance = async (userId: number): Promise<any> => {
  try {
    if (REACT_APP_SHOULD_USE_MOCK) {
      return USER_PERFORMANCE.filter(
        (user: any) => user.userId === Number(userId)
      ).pop();
    }

    const response = await fetch(`${api}/${userId}/performance`);
    if (!response.ok) {
      throw new Error(
        "Une erreur s'est produite lors de la récupération des données de performance."
      );
    }

    const apiResponse = await response.json();
    return apiResponse;
  } catch (error) {
    console.error(
      "Une erreur s'est produite lors de la récupération des données de performance:",
      error
    );
    throw error;
  }
};
