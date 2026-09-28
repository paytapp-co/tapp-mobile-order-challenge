# Tapp Mobile Order: Technical Task

Thanks for taking the time to do this task. We've tried to make it close to the work you'd do here.

## Scenario

Tapp builds payment products for hospitality venues such as hotels and stadiums. One of these products is **mobile order**: a fan at a stadium scans a QR code at their seat, orders food and drinks on their phone, and pays through **Tapp Checkout**, our hosted payment page.

A previous developer started building a mobile order app for the Block C kiosk at Riverside Stadium. They didn't finish it. Your job is to take it to a point where it could safely take real money.

## Getting started

You need **Node.js 20 or later**.

```bash
npm install
npm run dev
```

This starts three things:

| Service | URL | What it is |
|---|---|---|
| Client | http://localhost:5180 | React + Vite mobile order app (yours to change) |
| Server | http://localhost:4000 | Node.js + Express API (yours to change) |
| Mock Tapp Checkout | http://localhost:4100 | Test version of our hosted payment page. **Don't change this.** It has a dashboard showing payment sessions and webhook deliveries. |

Run the tests with `npm test`.

The Tapp Checkout API is documented in [docs/tapp-checkout-api.md](docs/tapp-checkout-api.md). The test API key and webhook secret are already set in `server/config.js`. They only work against the mock.

## Your task

The code in `client/` and `server/` is yours. Change, restructure or replace anything you like. The existing code contains **bugs and some questionable decisions**. Finding and fixing them is part of the task.

### Must have

1. The customer can build a basket from the menu, including modifiers (e.g. "Add cheese") and changing quantities.
2. The customer can check out and pay through Tapp Checkout, then land back in the app.
3. The app shows the customer the real outcome of their order: paid, failed or cancelled, and anything in between.
4. The server records each order's payment status correctly.

### Should have

5. The app behaves sensibly when things go wrong: declined cards, payment problems, a slow or missing webhook, the customer tapping buttons more than once, the API being unavailable.
6. Tests for the parts you think matter most.

### Nice to have

7. The app feels good to use on a phone.
8. Anything else you think a venue or customer would want. Tell us why.

## Time

Please **don't spend more than 4 hours**. Most people finish the must-haves in about 3 hours. We'd much rather see the must-haves done well than everything done badly. If you run out of time, write down what you'd do next. That counts.

## Using AI tools

You can use AI assistants, Copilot, Stack Overflow, docs, whatever you normally use. In your notes, tell us roughly where you used AI and anything you changed or rejected. In the follow-up call, you'll need to explain every part of your code as if you wrote it yourself.

## What to send us

- Your code, as a link to a **private** Git repository (please give us access) or a zip. Please don't publish it publicly.
- A `NOTES.md` covering:
  - what you changed and why, including the bugs you found
  - decisions and trade-offs you made
  - what you'd do next with more time, or before going live
  - anything you're unsure about
  - where you used AI


Good luck, and have fun with it.
