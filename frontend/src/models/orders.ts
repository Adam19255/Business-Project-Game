export type OrderStatus = "PENDING" | "IN_PROGRESS" | "SUCCESS" | "FAILED";

export interface Order {
  id: string;
  customerId: string;
  productIds: string[];
  status: OrderStatus;
  orderDuration: number;
  attempts: number;
  failureReason: string | null;
  createdAt: number;
}
