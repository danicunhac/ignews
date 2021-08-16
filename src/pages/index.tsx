import { Home, HomeProps } from "@/layout/home";
import { stripe } from "@/services/stripe";
import { GetStaticProps } from "next";

export default function HomePage({ name, product }: HomeProps) {
  return <Home name={name} product={product} />;
}

export const getStaticProps: GetStaticProps = async () => {
  const price = await stripe.prices.retrieve("price_1JOirqEByQu4eqvnmcItOVKU");

  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(price.unit_amount / 100),
  };

  return {
    props: {
      name: "Daniel",
      product,
    },
    revalidate: 3600 * 24, // 24 hours
  };
};
