/**
 * Fetches the latest Electron app update information and returns the download URL
 */
const getDownloadUrl = async (platform: string): Promise<string | null> => {
  try {
    const response = await fetch(
      `https://update.electronjs.org/cvburgess/dexter-app/${platform}/0.1.0`,
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch: ${response.status} ${response.statusText}`,
      );
    }

    const data = await response.json();

    if (!data.url) {
      throw new Error("URL not found in response");
    }

    return data.url;
  } catch (error) {
    console.error("Error fetching Electron update URL:", error);
    return null;
  }
};

export default {
  mac: getDownloadUrl("darwin-universal"),
};
