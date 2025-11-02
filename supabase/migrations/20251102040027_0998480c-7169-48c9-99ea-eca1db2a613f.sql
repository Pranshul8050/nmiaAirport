-- Create newsletter subscriptions table
CREATE TABLE public.newsletter_subscriptions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  email TEXT NOT NULL UNIQUE,
  subscribed_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  active BOOLEAN NOT NULL DEFAULT true
);

ALTER TABLE public.newsletter_subscriptions ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can subscribe to newsletter"
  ON public.newsletter_subscriptions
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view subscriptions"
  ON public.newsletter_subscriptions
  FOR SELECT
  USING (true);

-- Create parking reservations table
CREATE TABLE public.parking_reservations (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  arrival_date DATE NOT NULL,
  arrival_time TIME NOT NULL,
  departure_date DATE NOT NULL,
  departure_time TIME NOT NULL,
  promo_code TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  status TEXT NOT NULL DEFAULT 'pending'
);

ALTER TABLE public.parking_reservations ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can create parking reservations"
  ON public.parking_reservations
  FOR INSERT
  WITH CHECK (true);

CREATE POLICY "Anyone can view their reservations"
  ON public.parking_reservations
  FOR SELECT
  USING (true);

-- Create contact messages table
CREATE TABLE public.contact_messages (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

ALTER TABLE public.contact_messages ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can send contact messages"
  ON public.contact_messages
  FOR INSERT
  WITH CHECK (true);