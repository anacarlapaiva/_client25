export const site = {
  name: "Raquel Queiroz",
  initials: "R.Q.",
  title: "Psicóloga Clínica",
  crp: "CRP 08/47222",
  phone: "+55 (43) 99122-5366",
  whatsappNumber: "5543991225366",
  email: "psi.raquelqueiroz@outlook.com",
  year: new Date().getFullYear(),
};

export const whatsappLink = (text?: string) => {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};
