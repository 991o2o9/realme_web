export const scrollToTop = (behavior = "smooth") => {
  window.scrollTo({
    top: 0,
    behavior,
  });
};

export const getTrimmedEmail = (email) => {
  const atIndex = email.indexOf("@");
  return atIndex !== -1 ? email.slice(0, atIndex) : email;
};

export const API_URL = import.meta.env.VITE_API_URL;
