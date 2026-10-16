# NourBook – Your Booking Buddy

A SaaS booking-management app for service businesses. Owners sign up, choose a subscription plan and manage customer bookings from a dashboard.

Originally created with [Lovable](https://lovable.dev/projects/e3ef0770-c0e3-45e0-bcdf-852d75504dac); changes pushed here sync back to Lovable.

## Pages

| Route | Description |
|---|---|
| `/` | Landing page |
| `/auth` | Sign up / sign in (Supabase auth) |
| `/pricing` | Plans loaded from the database |
| `/dashboard` | Revenue, customers and growth cards, recent and all bookings, customer management, subscription and business settings |

## Plans (seeded by the migration)

| Plan | Monthly | Yearly |
|---|---|---|
| Starter | $29 | $290 |
| Professional | $79 | $790 |
| Enterprise | $149 | $1,490 |

## Tech stack

Vite 5, React 18, TypeScript, Tailwind CSS 3, shadcn/ui (Radix), React Router 6, TanStack Query, Recharts, Zod, Supabase.

## Database (Supabase / Postgres, row-level security on)

- `profiles`: one row per user, created automatically on sign-up
- `subscription_plans`: public, read-only plan catalogue
- `user_subscriptions`: each user's plan
- `bookings`: `customer_name`, `customer_email`, `customer_phone`, `service_type`, `booking_date`, `status` (default `pending`), `notes`, `total_amount`. Users can only see and change their own bookings.

Migrations are in `supabase/migrations/`.

## Getting started

```bash
npm install
npm run dev
npm run build
npm run lint
```

Environment (`.env`, committed with the Lovable project; public/publishable values):

| Variable | Purpose |
|---|---|
| `VITE_SUPABASE_URL` | Supabase project URL |
| `VITE_SUPABASE_PUBLISHABLE_KEY` | Supabase anon/publishable key |
| `VITE_SUPABASE_PROJECT_ID` | Supabase project id |

Plans are shown as prices only; payment processing is not implemented yet.
