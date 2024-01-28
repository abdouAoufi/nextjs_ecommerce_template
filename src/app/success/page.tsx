import OrderSummaries from "@/modules/Shop/components/OrderSummaries";
import CheckoutService from "@/modules/Shop/services/checkoutService";
import { db } from "@/server/db";

export default async function SuccessPage({
  searchParams,
}: {
  searchParams: Record<string, string>;
}) {
  const order = await CheckoutService.getOrder({
    sessionId: searchParams.sessionId,
    paymentIntentId: undefined,
  });

  if (!order) {
    return <div>Order not found</div>;
  }

  return <OrderSummaries order={order} />;
}
