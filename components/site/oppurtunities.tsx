"use client";

import { useState, useTransition } from "react";
import { ArrowRight, CheckCircle2, ShieldAlert, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

import { Reveal } from "@/components/site/reveal";
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
import { submitOpportunity } from "@/lib/actions/submit-opportunity";

type DrawerType = "sponsor" | "media" | null;

export function Opportunities() {
  const [activeDrawer, setActiveDrawer] = useState<DrawerType>(null);

  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);

    formData.append("type", activeDrawer as string);

    setError(null);

    startTransition(async () => {
      const result = await submitOpportunity(formData);
      if (result.success) {
        setSuccess(true);
        setMessage(result.message ?? null);
      } else {
        setError(result.error ?? "Something went wrong. Please try again.");
      }
    });
  }

  function closeDrawer() {
    setActiveDrawer(null);
    setTimeout(() => {
      setSuccess(false);
      setMessage(null);
      setError(null);
    }, 300);
  }

  const redStripes = {
    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.05) 10px, rgba(255,255,255,0.05) 11px)`,
  };

  const whiteStripes = {
    backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.03) 10px, rgba(0,0,0,0.03) 11px)`,
  };

  return (
    <section
      id="opportunities"
      className="relative overflow-hidden bg-[#f3f2ef] py-24 sm:py-32 font-sans"
    >
      <div className="relative mx-auto max-w-[1400px]">
        <Reveal y={20}>
          <div className="px-6 md:px-12 lg:px-16 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-12 sm:mb-16 gap-6 sm:gap-8">
            <div className="text-[11px] font-bold tracking-[0.2em] whitespace-nowrap pt-2">
              <span className="text-gray-500 uppercase">Partners & Press</span>
            </div>

            <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-[7rem] font-black uppercase tracking-tighter leading-[0.85] text-left lg:text-right">
              <span className="text-black block">Get Closer</span>
              <span
                className="block mt-1"
                style={{
                  color: "#f3f2ef",
                  textShadow:
                    "-1.5px -1.5px 0 #111, 1.5px -1.5px 0 #111, -1.5px 1.5px 0 #111, 1.5px 1.5px 0 #111",
                }}
              >
                To The Action.
              </span>
            </h2>
          </div>
        </Reveal>

        <Reveal y={30} delay={0.1}>
          <div className="px-0 sm:px-6 md:px-12 lg:px-16">
            <div className="grid grid-cols-1 lg:grid-cols-2 w-full shadow-none sm:shadow-2xl">
              <div
                className="relative bg-[#bd1026] text-white p-8 sm:p-14 lg:p-20 overflow-hidden flex flex-col justify-between min-h-[400px] sm:min-h-[450px]"
                style={redStripes}
              >
                <div className="absolute top-4 right-6 text-[8rem] sm:text-[12rem] font-black opacity-10 leading-none select-none">
                  01
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6">
                    For Brands
                  </p>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
                    Sponsorship <br /> Opportunities
                  </h3>
                  <p className="text-sm opacity-90 max-w-sm leading-relaxed">
                    Build a partnership around live event visibility, fighter
                    content and meaningful access to the SFL audience.
                  </p>
                </div>

                <div className="mt-12 sm:mt-16 relative z-10">
                  <button
                    onClick={() => setActiveDrawer("sponsor")}
                    className="group flex items-center text-xs font-bold uppercase tracking-[0.15em] hover:opacity-80 transition-opacity"
                  >
                    Request Sponsorship Deck
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>

              <div
                className="relative bg-white text-black p-8 sm:p-14 lg:p-20 overflow-hidden flex flex-col justify-between min-h-[400px] sm:min-h-[450px]"
                style={whiteStripes}
              >
                <div className="absolute top-4 right-6 text-[8rem] sm:text-[12rem] font-black opacity-[0.03] leading-none select-none">
                  02
                </div>

                <div className="relative z-10">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-6 text-gray-500">
                    For Media
                  </p>
                  <h3 className="text-4xl sm:text-5xl md:text-6xl font-black uppercase leading-[0.9] tracking-tighter mb-6">
                    Press & <br /> Media
                  </h3>
                  <p className="text-sm text-gray-600 max-w-sm leading-relaxed">
                    Journalists, photographers, broadcasters and media outlets
                    can request SFL information, assets and event access.
                  </p>
                </div>

                <div className="mt-12 sm:mt-16 relative z-10">
                  <button
                    onClick={() => setActiveDrawer("media")}
                    className="group flex items-center text-xs font-bold uppercase tracking-[0.15em] hover:opacity-70 transition-opacity"
                  >
                    Media Inquiry
                    <ArrowRight className="ml-3 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal y={40} delay={0.2}>
          <div className="px-0 sm:px-6 md:px-12 lg:px-16 mt-12 sm:mt-16">
            <div className="flex flex-col lg:flex-row w-full bg-black shadow-none sm:shadow-2xl overflow-hidden min-h-[400px]">
              <div className="w-full lg:w-[55%] relative min-h-[250px] sm:min-h-[300px] lg:min-h-full bg-zinc-900">
                <img
                  src="https://images.unsplash.com/photo-1549719386-74dfcbf7dbed?auto=format&fit=crop&q=80"
                  alt="Broadcast Rig"
                  className="absolute inset-0 w-full h-full object-cover opacity-50 grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-black/80 lg:to-black" />
              </div>

              <div className="h-1.5 w-full lg:h-auto lg:w-1.5 bg-[#bd1026] shrink-0" />

              <div className="w-full lg:w-[45%] p-8 sm:p-14 lg:p-16 flex flex-col justify-center bg-black text-white relative z-10">
                <div className="flex flex-wrap gap-4 text-[10px] font-bold uppercase tracking-[0.2em] mb-8 sm:mb-10">
                  <span className="text-[#bd1026]">Broadcast Partner</span>
                  <span className="text-gray-500">Beyond Fight Night</span>
                </div>

                <div className="mb-8 h-8 sm:h-10 flex items-center">
                 <a 
                    href="https://fightnetwork.com"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src="/demo-room-logo.png"
                      alt="Fight Network"
                      className="h-auto w-24 object-contain brightness-0 invert"
                      onError={(e) => {
                        e.currentTarget.style.display = "none";
                        e.currentTarget.nextElementSibling?.classList.remove(
                          "hidden",
                        );
                      }}
                    />
                  </a>
                  <div className="hidden flex items-center text-2xl sm:text-3xl font-black tracking-tighter">
                    <div className="bg-white text-black px-2 py-0.5 mr-2">
                      F
                    </div>
                    FIGHT{" "}
                    <span className="font-normal text-xs sm:text-sm ml-2 mt-1 tracking-widest text-gray-300">
                      NETWORK
                    </span>
                  </div>
                </div>
                <h3 className="text-4xl sm:text-5xl font-black uppercase tracking-tighter leading-[0.9] mb-6">
                  Built to be
                  <br className="hidden sm:block" /> watched.
                </h3>

                <p className="text-sm text-gray-400 max-w-md leading-relaxed">
                  Professional live fight broadcast production. SFL pairs an
                  intimate Toronto event with a broadcast platform built for
                  combat-sports audiences.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>

      <Drawer
        open={activeDrawer !== null}
        onOpenChange={(open) => !open && closeDrawer()}
      >
        <DrawerContent className="bg-white border-t-0 rounded-t-none">
          <div className="mx-auto w-full max-w-lg overflow-y-auto h-[85vh] sm:h-[80vh] flex flex-col px-4 py-8 sm:px-6">
            <DrawerHeader className="text-left sm:text-center px-0">
              <div className="mb-6 flex justify-start sm:justify-center">
                <motion.div
                  className={`h-1.5 w-16 ${activeDrawer === "sponsor" ? "bg-[#bd1026]" : "bg-black"}`}
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6 }}
                />
              </div>

              <DrawerTitle className="text-4xl sm:text-5xl font-black uppercase tracking-tighter text-black">
                {activeDrawer === "sponsor" ? (
                  <>
                    REQUEST <span className="text-[#bd1026]">DECK</span>
                  </>
                ) : (
                  <>
                    MEDIA <span className="text-[#bd1026]">INQUIRY</span>
                  </>
                )}
              </DrawerTitle>
              <DrawerDescription className="text-xs font-bold uppercase tracking-[0.15em] text-gray-500 mt-4">
                {activeDrawer === "sponsor"
                  ? "Enter your details to receive our official sponsorship deck."
                  : "Submit your credentials for media access and press assets."}
              </DrawerDescription>
            </DrawerHeader>

            <div className="mt-8 flex-1">
              {success ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center border-2 border-black/5 bg-gray-50 h-full"
                >
                  <CheckCircle2 className="h-14 w-14 text-green-600 mb-6" />
                  <h3 className="text-3xl font-black uppercase tracking-tighter text-black">
                    Request Sent
                  </h3>
                  <p className="text-xs text-gray-500 mt-4 tracking-[0.15em] uppercase px-6 font-bold">
                    {message ?? "Our team will review your inquiry and be in touch shortly."}
                  </p>
                  <DrawerClose
                    render={
                      <Button className="mt-10 rounded-none px-10 h-14 bg-black text-white hover:bg-black/80 font-bold tracking-widest uppercase" />
                    }
                  >
                    Close
                  </DrawerClose>
                </motion.div>
              ) : (
                <form onSubmit={onSubmit} className="flex flex-col gap-5 pb-10">
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500"
                    >
                      Full Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      required
                      className="h-14 rounded-none border-gray-300 bg-white text-black focus-visible:ring-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="entity"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500"
                    >
                      {activeDrawer === "sponsor"
                        ? "Brand / Company Name"
                        : "Media Outlet / Publication"}
                    </label>
                    <Input
                      id="entity"
                      name="entity"
                      required
                      className="h-14 rounded-none border-gray-300 bg-white text-black focus-visible:ring-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500"
                    >
                      Professional Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="h-14 rounded-none border-gray-300 bg-white text-black focus-visible:ring-black"
                    />
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="message"
                      className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500"
                    >
                      Additional Details (Optional)
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      className="flex w-full rounded-none border border-gray-300 bg-white px-3 py-3 text-sm text-black placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black focus-visible:ring-offset-0 disabled:cursor-not-allowed disabled:opacity-50"
                    />
                  </div>

                  {error && (
                    <p className="text-xs font-bold uppercase tracking-wide text-[#bd1026]">
                      {error}
                    </p>
                  )}

                  <Button
                    type="submit"
                    disabled={isPending}
                    className="h-14 w-full rounded-none text-xs font-black uppercase tracking-[0.2em] mt-6 bg-[#bd1026] text-white hover:bg-red-800 transition-colors"
                  >
                    {isPending ? (
                      <>
                        <Loader2 className="mr-3 h-5 w-5 animate-spin" />{" "}
                        Processing...
                      </>
                    ) : (
                      <>
                        Submit Request <ArrowRight className="ml-3 h-5 w-5" />
                      </>
                    )}
                  </Button>

                  <p className="text-center text-[10px] text-gray-400 mt-4 uppercase tracking-[0.2em] font-bold flex items-center justify-center gap-2">
                    <ShieldAlert className="h-3.5 w-3.5" /> Secure Submission
                  </p>
                </form>
              )}
            </div>
          </div>
        </DrawerContent>
      </Drawer>
    </section>
  );
}