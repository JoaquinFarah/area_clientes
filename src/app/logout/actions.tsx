"use server"
import { createClient } from "../../../supabase/server" 
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"

  
  export async function logout() {
    const supabase = await createClient()  
  
    const { error } = await supabase.auth.signOut()
  
    if (error) {
      redirect('/pages/error')
    }
  
    revalidatePath('/', 'layout')
    redirect('/')
  }