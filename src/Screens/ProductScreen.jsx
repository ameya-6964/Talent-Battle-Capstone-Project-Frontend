import { useParams } from "react-router-dom";

const ProductScreen = () => {
  const params = useParams();
  const { slug } = params;
  return (
    <div className="product-screen">
      <h1>{slug}</h1>
    </div>
  );
};

export default ProductScreen;
