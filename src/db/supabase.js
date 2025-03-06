import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://zfoejmssunccugrqjtuq.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpmb2VqbXNzdW5jY3VncnFqdHVxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEyMzU0MjcsImV4cCI6MjA1NjgxMTQyN30.OtFlXDFVA_VKAmpjFZr4YC4s6v0l62pxWd-QFCI2yKI';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
