export default async function handler(req, res) {
  // res.status(200).json({ message: "its ok" });
  const apiUrl = `${process.env.NEXT_PUBLIC_STRAPI_API_URL}/api/team-members?populate=*`;
  try {
    const strapiRes = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_API_TOKEN}`,
      },
    });
    // Check if the request was successful
    // if (!strapiResponse.ok) {
    //   throw new Error(
    //     `Error fetching data from Strapi: ${strapiResponse.statusText}`
    //   );
    // }
    console.log("route res", strapiRes);
    // Parse the response data
    const data = await strapiRes.json();

    // Send the data back to the client
    res.status(200).json(data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
