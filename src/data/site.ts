export const site = {
  name: "Raquel Queiroz",
  initials: "R.Q.",
  title: "Psicóloga Clínica",
  crp: "CRP 08/47222",
  phone: "+55 18 99801-1018",
  whatsappNumber: "5518998011018",
  email: "contato@raquelqueiroz.psi.br",
  year: new Date().getFullYear(),
};

export const whatsappLink = (text?: string) => {
  const base = `https://wa.me/${site.whatsappNumber}`;
  return text ? `${base}?text=${encodeURIComponent(text)}` : base;
};
