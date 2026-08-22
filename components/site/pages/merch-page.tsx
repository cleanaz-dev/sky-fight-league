"use client";

import { motion } from "motion/react";
import { ArrowRight, Shirt } from "lucide-react";

export function MerchPage() {
  const products = [
    {
      name: "Black T-Shirt",
      label: "01",
      description: "The essential SFL tee.",
    },
    {
      name: "Black Hoodie",
      label: "02",
      description: "Built for fight nights.",
    },
    {
      name: "Crewneck Sweater",
      label: "03",
      description: "SFL. No introduction needed.",
    },
  ];

  return (
    <section
      id="merch"
      className="relative overflow-hidden border-t border-border bg-background py-20 sm:py-28"
    >
      {/* =========================================================
          BACKGROUND WATERMARK
      ========================================================= */}

      <motion.span
        aria-hidden="true"
        className="pointer-events-none absolute -right-20 top-1/2 -translate-y-1/2 whitespace-nowrap display text-[30vw] leading-none text-foreground/[0.025]"
        initial={{
          opacity: 0,
          x: 80,
        }}
        whileInView={{
          opacity: 1,
          x: 0,
        }}
        viewport={{
          once: true,
          amount: 0.15,
        }}
        transition={{
          duration: 1.2,
          ease: [0.22, 1, 0.36, 1],
        }}
      >
        SFL
      </motion.span>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">

        {/* =======================================================
            HEADER
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-4">
            <span
              className="hazard-stripes h-2 w-16"
              aria-hidden="true"
            />

            <p className="text-xs font-bold uppercase tracking-[0.35em] text-primary">
              SFL Merch
            </p>
          </div>

          <h2 className="display mt-4 text-5xl leading-[0.95] sm:text-7xl">
            Wear the
            <br />
            <span className="text-primary">fight.</span>
          </h2>

          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            Official Sky Fight League merchandise is coming soon.
            Get ready for the first drop.
          </p>
        </motion.div>

        {/* =======================================================
            PRODUCTS
        ======================================================= */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.1,
          }}
          variants={{
            hidden: {},
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
          className="mt-14 grid gap-5 md:grid-cols-3"
        >
          {products.map((product) => (
            <motion.article
              key={product.name}
              variants={{
                hidden: {
                  opacity: 0,
                  y: 35,
                },
                visible: {
                  opacity: 1,
                  y: 0,
                },
              }}
              transition={{
                duration: 0.7,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative overflow-hidden border border-border bg-card"
            >
              {/* Red top stripe */}

              <motion.span
                className="hazard-stripes absolute inset-x-0 top-0 h-1.5"
                aria-hidden="true"
                initial={{
                  scaleX: 0,
                }}
                whileInView={{
                  scaleX: 1,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                style={{
                  transformOrigin: "left",
                }}
              />

              {/* =================================================
                  PRODUCT VISUAL
              ================================================= */}

              <div className="relative flex aspect-[4/5] items-center justify-center overflow-hidden bg-black">

                {/* Decorative circle */}

                <div
                  aria-hidden="true"
                  className="absolute h-56 w-56 rounded-full border border-white/[0.06] transition-transform duration-700 group-hover:scale-125"
                />

                <div
                  aria-hidden="true"
                  className="absolute h-40 w-40 rounded-full border border-primary/[0.08] transition-transform duration-700 group-hover:scale-125"
                />

                {/* Product icon */}

                <motion.div
                  className="relative z-10 flex h-24 w-24 items-center justify-center border border-white/10 bg-white/[0.03]"
                  initial={{
                    opacity: 0,
                    scale: 0.8,
                  }}
                  whileInView={{
                    opacity: 1,
                    scale: 1,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    duration: 0.6,
                    delay: 0.2,
                  }}
                >
                  <Shirt className="h-10 w-10 text-white/30" />
                </motion.div>

                {/* Product number */}

                <span className="absolute bottom-4 left-5 display text-6xl text-white/[0.04]">
                  {product.label}
                </span>

                {/* Coming soon badge */}

                <div className="absolute right-4 top-5 border border-primary/40 bg-primary/10 px-3 py-1.5">
                  <span className="text-[9px] font-bold uppercase tracking-[0.25em] text-primary">
                    Coming Soon
                  </span>
                </div>
              </div>

              {/* =================================================
                  PRODUCT INFO
              ================================================= */}

              <div className="p-6 sm:p-7">
                <p className="text-[10px] font-bold uppercase tracking-[0.3em] text-primary">
                  Official SFL
                </p>

                <h3 className="display mt-2 text-3xl sm:text-4xl">
                  {product.name}
                </h3>

                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {product.description}
                </p>

                <button
                  type="button"
                  disabled
                  className="mt-6 flex w-full cursor-not-allowed items-center justify-between border border-border px-4 py-3 text-xs font-bold uppercase tracking-widest text-muted-foreground"
                >
                  Coming Soon

                  <ArrowRight className="h-4 w-4 opacity-40" />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>

        {/* =======================================================
            BOTTOM MESSAGE
        ======================================================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.2,
          }}
          transition={{
            duration: 0.7,
            delay: 0.3,
          }}
          className="mt-8 flex flex-col gap-4 border-y border-border py-6 sm:flex-row sm:items-center sm:justify-between"
        >
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-muted-foreground">
            First drop coming soon
          </p>

          <div className="flex items-center gap-3">
            <span className="h-px w-10 bg-primary" />

            <span className="text-[10px] font-bold uppercase tracking-[0.25em] text-primary">
              Sky Fight League
            </span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}