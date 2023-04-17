db.produtos.find({
  $and: [
    { vendidos: { $ne: 85 } },
    { tags: { $exists: false } },
  ],
}, {
  nome: 1,
  vendidos: 1,
  _id: 0,
});