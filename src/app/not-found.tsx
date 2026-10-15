import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[80vh] flex-col justify-center pt-32">
      <p className="eyebrow">Erreur 404</p>
      <h1 className="mt-6 text-display-lg font-bold">
        Cette page <span className="serif-accent text-signal">n&apos;existe pas.</span>
      </h1>
      <Link href="/" className="mt-10 inline-flex w-fit rounded-full bg-paper px-6 py-3 text-sm font-medium text-ink hover:bg-signal hover:text-on-signal">
        Retour à l&apos;accueil
      </Link>
    </section>
  );
}
