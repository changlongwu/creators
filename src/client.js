import { createClient } from "@supabase/supabase-js";

const URL =  'https://vqwaglyledkszvvglpfy.supabase.co';
const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZxd2FnbHlsZWRrc3p2dmdscGZ5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQyMjY3MTMsImV4cCI6MjAzOTgwMjcxM30.ckjplQMGzC487qf0P9t2uZHLjRe3Cc3orbOzLTeaTVA';

export const supabase = createClient(URL,API_KEY);

 