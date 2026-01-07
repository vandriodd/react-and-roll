// Combine and shuffle two arrays
const shuffle = () => {
  const assets = [
    { image: "/assets/cat1.jpeg" },
    { image: "/assets/cat2.jpeg" },
    { image: "/assets/cat3.jpeg" },
    { image: "/assets/cat4.jpeg" },
    { image: "/assets/cat5.jpeg" },
    { image: "/assets/cat6.jpeg" },
    { image: "/assets/cat7.jpeg" },
    { image: "/assets/cat8.jpeg" },
    // { image: "/assets/cat9.jpeg" },
    // { image: "/assets/cat10.jpeg" },
    // { image: "/assets/cat11.jpeg" },
    // { image: "/assets/cat12.jpeg" },
    // { image: "/assets/cat13.jpeg" },
    // { image: "/assets/cat14.jpeg" },
    // { image: "/assets/cat15.jpeg" },
    // { image: "/assets/cat16.jpeg" },
    // { image: "/assets/cat17.jpeg" },
  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;
