export const submitContactForm = async (data) => {
  try {
    const response = await fetch("https://vernanbackend.ezlab.in/api/contact-us/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response; 
  } catch (error) {
    console.error("Error submitting contact form:", error);
    throw error;
  }
};
