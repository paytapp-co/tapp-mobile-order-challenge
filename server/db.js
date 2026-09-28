// In-memory store. Fine for this exercise - data is lost when the server restarts.

const orders = new Map();
let nextId = 1;

export function createOrder(data) {
  const now = new Date().toISOString();
  const order = { id: String(nextId++), ...data, createdAt: now, updatedAt: now };
  orders.set(order.id, order);
  return order;
}

export function getOrder(id) {
  return orders.get(id) ?? null;
}

export function updateOrder(id, changes) {
  const order = orders.get(id);
  if (!order) return null;
  Object.assign(order, changes, { updatedAt: new Date().toISOString() });
  return order;
}

export function listOrders() {
  return [...orders.values()];
}
