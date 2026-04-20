import Link from "next/link";

const NotFound = () => {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-(--background) px-6 py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_20%_15%,rgba(77,142,255,0.14),transparent_45%),radial-gradient(circle_at_85%_75%,rgba(173,198,255,0.1),transparent_40%)]
          "
        />
        <div
          className="
            absolute inset-0
            bg-[linear-gradient(180deg,rgba(7,10,20,0.28)_0%,rgba(19,19,19,0.75)_65%,rgba(10,12,18,0.95)_100%)]
            dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.06)_0%,rgba(0,0,0,0.6)_70%,rgba(0,0,0,0.9)_100%)]
          "
        />
      </div>
      <section className="relative z-10 w-full max-w-4xl text-center text-(--on-surface)">
        <div className="relative mx-auto max-w-3xl">
          <p className="pointer-events-none select-none text-[7rem] leading-none font-semibold tracking-[-0.03em] text-(--on-surface)/10 sm:text-[10rem] md:text-[12rem]">
            404
          </p>
          <h1 className="absolute inset-0 flex items-center justify-center px-2 text-4xl font-semibold tracking-tight text-(--on-surface) sm:text-5xl md:text-6xl">
            Page Not Found
          </h1>
        </div>
        <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-(--on-surface-variant) sm:text-lg">
          Looks like you&apos;ve wandered into the digital void. The page
          you&apos;re looking for doesn&apos;t exist or may have moved.
        </p>
        <div className="mt-10 flex justify-center">
          <Link
            href="/"
            aria-label="Go back to home page"
            className="
              inline-flex items-center justify-center rounded-full
              bg-(--primary)
              px-8 py-3.5 text-sm font-semibold
              text-(--background)
              shadow-[0_12px_30px_var(--primary)/30%]
              transition-all duration-300
              hover:scale-[1.02]
              hover:shadow-[0_16px_36px_var(--primary)/45%]
              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-(--primary)
              focus-visible:ring-offset-2
              focus-visible:ring-offset-(--background)
            "
          >
            Go Home
          </Link>
        </div>
      </section>
    </main>
  );
};

export default NotFound;
