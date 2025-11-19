export type CustomerPriority = "REGULAR" | "REORDER" | "CELEBRITY";

export type CustomerState =
  | "WAITING"
  | "ORDERING"
  | "ORDER_FAILED"
  | "ORDER_SUCCEEDED"
  | "LEFT"
  | "REORDERING"
  | "CANCELING";

export interface Customer {
  id: string;
  name: string;
  arrivalTime: number;
  priority: CustomerPriority;
  money: number;
  orderAttempts: number;
  queueId: string;
  currentOrderId: string | null;
  state: CustomerState;
}
