"use client";

import { useState, useTransition } from "react";
import { ShieldAlert, CheckCircle2, ArrowRight } from "lucide-react";
import { motion } from "motion/react";

import { submitEarlyAccess } from "@/lib/actions/submit-early-access";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";

export function EarlyAccessDrawer({
  open,
  onOpenChange,
}: {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [message, setMessage] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    setError(null);

    startTransition(async () => {
      const result = await submitEarlyAccess(formData);
      if (result.success) {
        setSuccess(true);
        setMessage(result.message ?? null);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  }

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="bg-background border-t border-primary/20">
        <div className="mx-auto w-full max-w-lg overflow-hidden h-[80vh] flex flex-col justify-center px-4 sm:px-6">
          
          <DrawerHeader className="text-left sm:text-center px-0">
            {/* Hype visual element */}
            <div className="mb-4 flex justify-start sm:justify-center">
              <motion.span 
                className="hazard-stripes h-2 w-16" 
                initial={{ scaleX: 0 }} 
                animate={{ scaleX: 1 }} 
                transition={{ duration: 0.6 }} 
              />
            </div>
            
            <DrawerTitle className="display text-4xl sm:text-6xl uppercase tracking-tighter">
              READY TO <span className="text-primary">JOIN?</span>
            </DrawerTitle>
            <DrawerDescription className="text-sm uppercase tracking-widest text-muted-foreground mt-2">
              The inner circle gets first access to ticket drops, classified card reveals, and VIP experiences.
            </DrawerDescription>
          </DrawerHeader>

          <div className="mt-8">
            {success ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center py-10 text-center border border-primary/20 bg-primary/5"
              >
                <CheckCircle2 className="h-12 w-12 text-primary mb-4" />
                <h3 className="display text-2xl uppercase">You're Locked In</h3>
                <p className="text-xs text-muted-foreground mt-2 tracking-widest uppercase">
                  {message ?? "Keep a close eye on your inbox."}
                </p>
                <DrawerClose
                  render={
                    <Button className="mt-8 rounded-none px-8" variant="outline" />
                  }
                >
                  Close
                </DrawerClose>
              </motion.div>
            ) : (
              <form onSubmit={onSubmit} className="flex flex-col gap-5">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Fighter / Fan Name
                  </label>
                  <Input 
                    id="name" 
                    name="name" 
                    required 
                    placeholder="Enter your name" 
                    className="h-14 rounded-none border-border/50 bg-accent/30 text-base"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground">
                    Comms Uplink (Email)
                  </label>
                  <Input 
                    id="email" 
                    name="email" 
                    type="email" 
                    required 
                    placeholder="Enter your email address" 
                    className="h-14 rounded-none border-border/50 bg-accent/30 text-base"
                  />
                </div>

                {error && (
                  <p className="text-center text-xs font-semibold uppercase tracking-widest text-destructive">
                    {error}
                  </p>
                )}

                <Button 
                  type="submit" 
                  disabled={isPending}
                  className="h-16 w-full rounded-none text-sm font-black uppercase tracking-widest mt-4"
                >
                  {isPending ? (
                    "Processing..."
                  ) : (
                    <>
                      Lock It In <ArrowRight className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>
                
                <p className="text-center text-[10px] text-muted-foreground mt-2 uppercase tracking-widest flex items-center justify-center gap-2">
                  <ShieldAlert className="h-3 w-3" /> No spam. Only the heavy hits.
                </p>
              </form>
            )}
          </div>

        </div>
      </DrawerContent>
    </Drawer>
  );
}