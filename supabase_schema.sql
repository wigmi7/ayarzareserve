-- Supabase Schema for Ayarza Reserve

-- 1. Crear Tabla para Lotes de Café
CREATE TABLE public.coffee_lots (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  lote_code TEXT UNIQUE NOT NULL,
  variedad TEXT NOT NULL,
  altitud TEXT NOT NULL,
  proceso TEXT NOT NULL,
  notas TEXT NOT NULL,
  puntos DECIMAL(4,2) NOT NULL,
  cosecha TEXT NOT NULL,
  finca TEXT NOT NULL,
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 2. Crear Tabla para Suscriptores Privados (Ligada al Auth de Supabase)
CREATE TABLE public.subscribers (
  id UUID REFERENCES auth.users NOT NULL PRIMARY KEY,
  full_name TEXT,
  subscription_tier TEXT, -- 'Raíz', 'Ritual', 'Impacto'
  active BOOLEAN DEFAULT false,
  joined_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- 3. Habilitar Seguridad (RLS - Row Level Security)
ALTER TABLE public.coffee_lots ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.subscribers ENABLE ROW LEVEL SECURITY;

-- 4. Crear Política: Cualquier visitante de la web puede BUSCAR y LEER lotes
CREATE POLICY "Public can view valid coffee lots" ON public.coffee_lots
  FOR SELECT USING (true);

-- 5. Crear Política: Los suscriptores solo pueden LEER su propia información
CREATE POLICY "Users can view their own subscription" ON public.subscribers
  FOR SELECT USING (auth.uid() = id);

-- 6. Insertar los lotes de prueba iniciales
INSERT INTO public.coffee_lots (lote_code, variedad, altitud, proceso, notas, puntos, cosecha, finca)
VALUES 
('AVR-001', 'Bourbon Rojo', '1,950m', 'Lavado Clásico', 'Cacao oscuro, Almendra tostada, Acidez málica sutil', 86.5, 'Enero 2026', 'Finca El Volcán Norte'),
('AVR-002', 'Caturra', '1,800m', 'Honey Amarillo', 'Miel de abeja, Frutos rojos, Cuerpo sedoso', 87.0, 'Febrero 2026', 'Finca Las Nubes'),
('AVR-003', 'Pacamara / Edición Limitada', '2,050m', 'Natural', 'Fresa madura, Vino tinto, Chocolate amargo', 89.0, 'Diciembre 2025', 'Ladera Alta Ayarza');
