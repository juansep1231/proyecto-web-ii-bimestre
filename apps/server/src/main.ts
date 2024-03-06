import express from 'express';
import productRoutes from './Routes/productRoutes';
const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3000;

const app = express();


app.use("/products", productRoutes);

app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});
