/**
 * Fetches the latest releases from the GitHub repository
 */
interface Release {
  name: string;
  published_at: string;
  body: string;
  html_url: string;
  tag_name: string;
}

const fetchReleases = async (): Promise<Release[]> => {
  try {
    const response = await fetch(
      "https://api.github.com/repos/cvburgess/dexter-app/releases",
    );

    if (!response.ok) {
      throw new Error(
        `Failed to fetch releases: ${response.status} ${response.statusText}`,
      );
    }

    const releases = await response.json();
    return releases;
  } catch (error) {
    console.error("Error fetching GitHub releases:", error);
    return [];
  }
};

const releases = await fetchReleases();

export default releases;
