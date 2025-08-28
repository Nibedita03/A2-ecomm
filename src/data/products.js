const products = [
  {
    id: "p1",
    title: "Noise-Cancelling Headphones",
    category: "electronics",
    price: 5999,
    rating: 4.6,
    description: "Over-ear headphone with active noise cancellation and 30h battery.",
    image: "data:image/jpeg;base64,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"
  },
  {
    id: "p2",
    title: "Classic White T-Shirt",
    category: "clothing",
    price: 499,
    rating: 4.1,
    description: "Soft cotton t-shirt with relaxed fit.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOHuLkNem9zSoL3GAw2FsRQQAIBz3tc4edmg&s"
  },
  {
    id: "p3",
    title: "Smartwatch Series 5",
    category: "electronics",
    price: 8999,
    rating: 4.3,
    description: "Fitness tracking, notifications and customizable watch faces.",
    image: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTws5GlxlrOrBtptPkEPGGGLxy-2I3Ov9IiadQm4fVty0dPLiomgrgTSnYiznliVwt1Dunt7SUDSHYiIWNe2PwFWOPnryGlGGL4ID5w_L10qVoc6WmnGpWt"
  },
  {
    id: "p4",
    title: "Canvas Sneakers",
    category: "clothing",
    price: 1299,
    rating: 4.4,
    description: "Everyday sneakers for comfort and style.",
    image: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQuH5zBleA7mb2wr_YASR8fTpCZw-EobYGtvkvhYS8eel0si4SOR0nVTZpRUQg0cQWViqIiMCXGYEzEjVINSIo7VeVX7zDTrTg7Toij7cwkE3h-xy5UGHSB"
  },
  {
    id: "p5",
    title: "Bluetooth Speaker",
    category: "electronics",
    price: 2499,
    rating: 4.2,
    description: "Portable speaker with rich bass and 10h playtime.",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTTDxnDpFnIVJm7vArUkX8-sHbn59IBrc98XDFx9wLhiHT2iSlTiRmNP5m8jg6VghISeh-I6uE1a8ZdDdlsXiDpNAvRz5fffJ4QA4S_GOzgu_bZdqSxBxm5nA"
  },
  {
    id: "p6",
    title: "Denim Jacket",
    category: "clothing",
    price: 2599,
    rating: 4.5,
    description: "Classic denim jacket with durable stitching.",
    image: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcT9SCTbZ3EA5KVCe5eq41LwLvHSJjRmDlFGV5IWJ5W_ZtcHQNNWQwoukp3_09IPBpnE2rU26n3Jzpc1wWc0yXO2RwKll_3Ze5dyLa0aZgoJpgxh0X82uPIQ"
  },
  // add more products as needed for demo
];

export default products;
